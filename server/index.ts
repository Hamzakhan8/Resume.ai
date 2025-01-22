import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { GoogleGenerativeAI } from '@google/generative-ai';

// Load environment variables from .env file
dotenv.config();

const app = express();
const port = process.env.PORT || 3002;

// Initialize Gemini with API key from environment variables
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// Add request logging
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);
  next();
});

app.use(cors({
  // Update CORS to allow all local development ports
  origin: [
    'http://localhost:5173',
    'http://127.0.0.1:5173',
    'http://localhost:3000',
    'http://localhost:3001',
    'http://localhost:3002'
  ],
  methods: ['GET', 'POST'],
  credentials: true
}));

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

// Helper function to clean text
function cleanText(text: string): string {
  return text
    .replace(/\s+/g, ' ')
    .replace(/[\r\n]+/g, ' ')
    .trim();
}

// Helper function to split text into smaller chunks
function splitIntoChunks(text: string, chunkSize: number): string[] {
  const chunks = [];
  for (let i = 0; i < text.length; i += chunkSize) {
    chunks.push(text.substring(i, i + chunkSize));
  }
  return chunks;
}

// Helper function to extract key information from text
async function extractKeyInfo(model: any, text: string, type: 'cv' | 'job'): Promise<string> {
  const prompt = type === 'cv' 
    ? `Extract key skills and experiences from this CV: ${text}.`
    : `Extract key requirements from this job description: ${text}.`;

  try {
    const result = await model.generateContent(prompt);
    return result.response.text();
  } catch (error) {
    console.error(`Error extracting key info for ${type}:`, error);
    throw new Error(`Failed to extract key information from ${type}`);
  }
}

// Add a simple health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.post('/api/analyze-resume', async (req, res) => {
  try {
    const { cv, jobDescription } = req.body;
    
    if (!cv || !jobDescription) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

    // More structured prompt to ensure JSON response
    const prompt = `You are a professional resume writer. Create a tailored resume based on the following CV and job description.
    
    CV: ${cleanText(cv)}
    
    Job Description: ${cleanText(jobDescription)}
    
    Format your response EXACTLY as a JSON object with the following structure:
    {
      "summary": "<A compelling 2-3 sentence professional summary>",
      "keySkills": ["<skill1>", "<skill2>", "<skill3>", "<skill4>", "<skill5>"],
      "experience": ["<achievement1>", "<achievement2>", "<achievement3>", "<achievement4>"]
    }
    
    Important: Respond ONLY with the JSON object, no additional text or explanations.`;

    const result = await model.generateContent({
      contents: [{ role: 'user', parts: [{ text: prompt }]}],
      generationConfig: {
        temperature: 0.7,
        topK: 40,
        topP: 0.8,
        maxOutputTokens: 1000,
      }
    });

    const text = result.response.text().trim();
    console.log('Raw Gemini response:', text); // Debug log

    try {
      // First attempt: direct JSON parse
      const jsonResponse = JSON.parse(text);
      return res.status(200).json(jsonResponse);
    } catch (parseError) {
      console.error('Initial JSON parse error:', parseError);
      
      // Second attempt: try to extract JSON from the response
      const jsonMatch = text.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        try {
          const extractedJson = JSON.parse(jsonMatch[0]);
          return res.status(200).json(extractedJson);
        } catch (e) {
          // If both parsing attempts fail, return a fallback response
          return res.status(200).json({
            summary: "Failed to parse AI response into proper format. Please try again.",
            keySkills: ["Error: Could not parse skills"],
            experience: ["Error: Could not parse experience"]
          });
        }
      }
      
      // If no JSON found, return fallback response
      return res.status(200).json({
        summary: "Failed to parse AI response into proper format. Please try again.",
        keySkills: ["Error: Could not parse skills"],
        experience: ["Error: Could not parse experience"]
      });
    }
    
  } catch (error: any) {
    console.error('Gemini API Error:', error);
    return res.status(500).json({ 
      error: 'Error processing with Gemini API',
      details: error.message
    });
  }
});

// Add a test endpoint to your server
app.get('/api/test', (req, res) => {
  res.json({ message: 'Server is running!' });
});

// Add a test endpoint for Gemini API
app.get('/api/test-gemini', async (req, res) => {
  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-pro' });
    const result = await model.generateContent('Say "Hello World"');
    const response = await result.response;
    res.json({ success: true, message: response.text() });
  } catch (error: any) {
    res.status(500).json({ 
      error: 'Gemini API test failed', 
      details: error.message 
    });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
  console.log(`CORS enabled for: ${['http://localhost:5173', 'http://127.0.0.1:5173']}`);
}).on('error', (err: any) => {
  if (err.code === 'EADDRINUSE') {
    console.error(`Port ${port} is already in use. Please try a different port or kill the existing process.`);
    process.exit(1);
  } else {
    console.error('Server error:', err);
  }
}); 