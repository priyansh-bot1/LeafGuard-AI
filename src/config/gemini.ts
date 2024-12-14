import { GoogleGenerativeAI } from '@google/generative-ai';

// This will be initialized when setApiKey is called
let genAI: GoogleGenerativeAI | null = null;
let model: any = null;
let chat: any = null;

export const initializeGemini = (apiKey: string) => {
  genAI = new GoogleGenerativeAI(apiKey);
  model = genAI.getGenerativeModel({ model: "gemini-pro" });
  chat = model.startChat({
    history: [
      {
        role: "user",
        parts: "You are LeafGuard AI's customer support assistant. You help users with questions about our orchard management and disease detection platform. Be friendly, helpful, and concise.",
      },
      {
        role: "model",
        parts: "I understand that I am LeafGuard AI's customer support assistant. I'll help users with their questions about the orchard management and disease detection platform in a friendly and concise manner. How can I assist you today?",
      },
    ],
  });
  
  return chat;
};

export const generateResponse = async (message: string) => {
  if (!chat) {
    throw new Error('Gemini not initialized. Please set API key first.');
  }

  try {
    const result = await chat.sendMessage(message);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error('Error generating response:', error);
    return 'Sorry, I encountered an error. Please try again.';
  }
};