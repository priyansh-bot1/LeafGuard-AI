import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { initializeGemini, generateResponse } from '../config/gemini';

export interface Message {
  id: string;
  type: 'user' | 'bot';
  content: string;
}

export function useChat() {
  const navigate = useNavigate();
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

  const handleNavigation = (content: string) => {
    const navigationPatterns = [
      { pattern: /open\s*demo/i, path: '/open-demo' },
      { pattern: /features/i, path: '/features' },
      { pattern: /monitor/i, path: '/monitor' },
      { pattern: /results/i, path: '/results' },
      { pattern: /get\s*started/i, path: '/get-started' },
      { pattern: /contact\s*support/i, path: '/contact-support' },
      { pattern: /explore\s*resources/i, path: '/explore-resources' },
      { pattern: /start\s*chat/i, path: '/start-chat' },
      { pattern: /choose\s*plan/i, path: '/choose-plan' },
      { pattern: /protect\s*orchard/i, path: '/protect-orchard' },
      { pattern: /alerts/i, path: '/alerts-notifications' },
      { pattern: /growth\s*monitoring/i, path: '/growth-monitoring' },
      { pattern: /disease\s*analysis/i, path: '/disease-analysis' },
      { pattern: /health\s*analysis/i, path: '/health-analysis' }
    ];

    for (const { pattern, path } of navigationPatterns) {
      if (pattern.test(content.toLowerCase())) {
        return path;
      }
    }
    return null;
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
      // Check for navigation intent
      const navigationPath = handleNavigation(content);
      
      if (navigationPath) {
        // Add navigation response
        const botMessage: Message = {
          id: (Date.now() + 1).toString(),
          type: 'bot',
          content: `I'll take you to ${navigationPath} right away!`
        };
        
        setMessages(prev => [...prev, botMessage]);
        
        // Navigate after a short delay to allow the message to be seen
        setTimeout(() => {
          navigate(navigationPath);
        }, 1000);
        
        return;
      }

      // Get response from Gemini for non-navigation queries
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