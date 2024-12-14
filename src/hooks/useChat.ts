import { useState } from 'react';
import { initializeGemini, generateResponse } from '../config/gemini';

export interface Message {
  id: string;
  type: 'user' | 'bot';
  content: string;
}

export function useChat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'bot',
      content: 'Hello! How can I assist you today with LeafGuard AI?'
    }
  ]);
  const [isInitialized, setIsInitialized] = useState(false);

  const initializeChat = (apiKey: string) => {
    try {
      initializeGemini(apiKey);
      setIsInitialized(true);
      return true;
    } catch (error) {
      console.error('Error initializing Gemini:', error);
      return false;
    }
  };

  const sendMessage = async (content: string) => {
    if (!isInitialized) {
      setMessages(prev => [...prev, {
        id: Date.now().toString(),
        type: 'bot',
        content: 'Please initialize the chat with your API key first.'
      }]);
      return;
    }

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content
    };
    
    setMessages(prev => [...prev, userMessage]);

    try {
      // Get response from Gemini
      const response = await generateResponse(content);
      
      // Add bot response
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        content: response
      };
      
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Error getting response:', error);
      
      // Add error message
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        content: 'Sorry, I encountered an error. Please try again.'
      };
      
      setMessages(prev => [...prev, errorMessage]);
    }
  };

  return {
    messages,
    sendMessage,
    initializeChat,
    isInitialized
  };
}