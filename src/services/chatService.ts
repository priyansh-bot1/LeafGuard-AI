import { GoogleGenerativeAI } from '@google/generative-ai';
import { GEMINI_API_KEY, CHAT_SYSTEM_PROMPT } from '../config/constants';

class ChatService {
  private genAI: GoogleGenerativeAI;
  private model: any;
  private chat: any;

  constructor() {
    this.genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
    this.model = this.genAI.getGenerativeModel({ model: "gemini-pro" });
    this.initializeChat();
  }

  private initializeChat() {
    this.chat = this.model.startChat({
      history: [
        {
          role: "user",
          parts: CHAT_SYSTEM_PROMPT,
        },
        {
          role: "model",
          parts: "I understand that I am LeafGuard AI's customer support assistant. I'll help users with their questions about the orchard management and disease detection platform in a friendly and concise manner. How can I assist you today?",
        },
      ],
    });
  }

  async generateResponse(message: string): Promise<string> {
    try {
      const result = await this.chat.sendMessage(message);
      const response = await result.response;
      return response.text();
    } catch (error) {
      console.error('Error generating response:', error);
      return 'Sorry, I encountered an error. Please try again.';
    }
  }
}

export const chatService = new ChatService();