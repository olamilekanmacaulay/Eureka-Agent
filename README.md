# Eureka: Household Science AI Agent

Eureka is an AI agent built with **Mastra** and **Google Gemini** that explains the simple chemistry behind everyday household products and processes.

## Installation & Setup

### 1. Install Dependencies
This will install Mastra, the Google AI SDK, and all other necessary packages.
```bash
npm install
```

### 2. Set Up Environment Variables
Create a file named `.env` in the root of the project and add your Google Gemini API key.
```bash
# Get your key from Google AI Studio
GOOGLE_GENERATIVE_AI_API_KEY="your-api-key-goes-here"
```

### 3. Run the Project
This command starts the Mastra development server, which includes the A2A API endpoint and the testing playground.
```bash
npm run dev
```

Your agent is now running!  
**Playground:** [http://localhost:4111/](http://localhost:4111/)  
**A2A API Endpoint:** [http://localhost:4111/a2a/agent/eureka](http://localhost:4111/a2a/agent/eureka)

---

## ⚡ Connecting to Telex.im
To use this agent in Telex, you must first deploy it to a public URL (e.g., using Railway, Netlify, or Cyclic). Once deployed, follow these steps:

1. Log in to [Telex.im](https://telex.im) and go to your organization.  
2. Click the "+" icon in the sidebar to create a new AI Colleague.  
3. Fill in the name ("Eureka") and description.  
4. In the Workflow JSON section, paste the following code.  
5. Replace `YOUR_DEPLOYED_URL_HERE` with your actual public URL.  

### Workflow JSON
```json
{
  "active": true,
  "category": "utilities",
  "name": "Eureka",
  "description": "An AI agent that explains household science in simple terms.",
  "short_description": "Your friendly household science expert.",
  "long_description": "You are a friendly and helpful science assistant called Eureka. \n    When the user asks a question, your job is to explain the concept in simple, layman-friendly terms suitable for a chat message. \n    Keep the explanation concise (2-3 sentences maximum).\n    Do not ask follow-up questions. Just provide the explanation.",
  "nodes": [
    {
      "id": "eureka_agent_node",
      "name": "Eureka Agent",
      "parameters": {},
      "position": [800, -100],
      "type": "a2a/mastra-a2a-node",
      "typeVersion": 1,
      "url": "YOUR_DEPLOYED_URL_HERE/a2a/agent/eureka"
    }
  ],
  "pinData": {},
  "settings": {
    "executionOrder": "v1"
  }
}
```

Save the colleague, and you can now chat with **Eureka** in your Telex channels!
