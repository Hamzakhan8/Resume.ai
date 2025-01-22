import { GoogleGenerativeAI } from "@google/generative-ai";
import fs from 'fs';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

async function processCV(cvText, jobDescription) {
  const model = genAI.getGenerativeModel({ model: 'models/gemini-1.5-flash' });

  let attempts = 0;
  const maxAttempts = 5;
  const delay = (attempt) => new Promise(res => setTimeout(res, Math.pow(2, attempt) * 1000));

  while (attempts < maxAttempts) {
    try {
      const result = await model.generateContent([
        { text: cvText },
        { text: jobDescription }
      ]);

      return result.response.text();
    } catch (error) {
      attempts++;
      if (attempts >= maxAttempts) {
        throw new Error('Failed to process documents after multiple attempts.');
      }
      await delay(attempts);
    }
  }
}

// ... existing code ... 