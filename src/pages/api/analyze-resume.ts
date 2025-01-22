import { NextApiRequest, NextApiResponse } from 'next';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || '',
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  if (!process.env.OPENAI_API_KEY) {
    return res.status(500).json({ error: 'OpenAI API key is not configured' });
  }

  try {
    const { cv, jobDescription } = req.body;
    
    if (!cv || !jobDescription) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const completion = await openai.chat.completions.create({
      messages: [
        { 
          role: "user", 
          content: `Create an ATS-friendly resume based on this CV: ${cv} and job description: ${jobDescription}. 
                   Return only a JSON with format: {
                     "summary": "brief professional summary",
                     "keySkills": ["skill1", "skill2"],
                     "experience": ["exp1", "exp2"]
                   }`
        }
      ],
      model: "gpt-3.5-turbo-1106",
      response_format: { type: "json_object" }
    });

    const content = completion.choices[0].message.content;
    if (!content) {
      return res.status(500).json({ error: 'No content received from OpenAI' });
    }

    return res.status(200).json(JSON.parse(content));
    
  } catch (error: any) {
    console.error('API Error:', error);
    return res.status(500).json({ error: error.message || 'Failed to process resume' });
  }
} 