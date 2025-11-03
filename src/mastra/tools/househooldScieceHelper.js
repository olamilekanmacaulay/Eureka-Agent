import { createTool } from '@mastra/core/tools';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { z } from 'zod';

// Initialize the AI client
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GENERATIVE_AI_API_KEY);
const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

export const householdScienceTool = createTool({
  id: 'HouseholdScienceExplainer',
  description: 'Explains the science behind common household items and processes in simple, layman-friendly terms.',
  
  // This is the "form" the agent will fill out
  inputSchema: z.object({
    question: z.string().describe("The user's science question, e.g., 'How does soap work?'")
  }),

  // This is the "form" your tool must return
  outputSchema: z.object({
    answer: z.string().describe("The simplified science explanation.")
  }),

  // This is the main function that runs when the tool is called
  execute: async ({ context }) => {
    const { question } = context;
    
    if (!question) {
      return { answer: "Please provide a question for me to answer." };
    }

    // Create a detailed prompt for the AI
    const prompt = `You are a friendly and helpful science assistant called Eureka. 
    Explain the following concept in simple, layman-friendly terms suitable for a chat message. 
    Keep the explanation concise (2-3 sentences maximum).
    
    Concept: "${question}"`;

    try {
      const result = await model.generateContent(prompt);
      const response = result.response;
      const text = response.text();

      return { answer: text };
    } catch (error) {
      console.error("Error calling AI API:", error);
      return { answer: "Sorry, I couldn't process that question right now." };
    }
  },
});