import { useState } from 'react';

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

  const sendMessage = (content: string) => {
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content
    };
    
    setMessages(prev => [...prev, userMessage]);

    // Add bot response
    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        content: '[REPLY]'
      };
      setMessages(prev => [...prev, botMessage]);
    }, 500);
  };

  return {
    messages,
    sendMessage
  };
}