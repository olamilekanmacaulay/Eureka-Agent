import { Agent } from "@mastra/core/agent";
import { householdScienceTool } from "../tools/househooldScieceHelper.js";
import { Memory } from "@mastra/memory";
import { LibSQLStore } from "@mastra/libsql";

// Create the main agent
export const agent = new Agent({
  name: "Eureka",

  instructions: `You are a friendly and helpful science assistant called Eureka. 
    When the user asks a question, your job is to explain the concept in simple, layman-friendly terms suitable for a chat message. 
    Keep the explanation concise (2-3 sentences maximum).
    Do not ask follow-up questions. Just provide the explanation.`,


  model: "google/gemini-2.0-flash",

  tools: { householdScienceTool },

  memory: new Memory({
    storage: new LibSQLStore({
      url: "file:../mastra.db", 
    }),
  }),
});