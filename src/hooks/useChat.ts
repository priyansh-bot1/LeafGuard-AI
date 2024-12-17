import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Message } from '../types/chat';
import { chatService } from '../services/chatService';
import { navigationIntents } from '../config/navigationIntents';
import { CHAT_INITIAL_MESSAGE } from '../config/constants';

export function useChat() {
  const navigate = useNavigate();
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'bot',
      content: CHAT_INITIAL_MESSAGE
    }
  ]);

  const handleNavigation = (content: string) => {
    const lowerContent = content.toLowerCase();
    
    for (const intent of navigationIntents) {
      if (intent.patterns.some(pattern => pattern.test(lowerContent))) {
        return {
          path: intent.path,
          response: intent.response
        };
      }
    }
    
    return null;
  };

  const sendMessage = async (content: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content
    };
    
    setMessages(prev => [...prev, userMessage]);

    try {
      const navigation = handleNavigation(content);
      
      if (navigation) {
        const botMessage: Message = {
          id: (Date.now() + 1).toString(),
          type: 'bot',
          content: navigation.response
        };
        
        setMessages(prev => [...prev, botMessage]);
        
        setTimeout(() => {
          navigate(navigation.path);
        }, 1000);
        
        return;
      }

      const response = await chatService.generateResponse(content);
      
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        content: response
      };
      
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Error getting response:', error);
      
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
    isInitialized: true
  };
}