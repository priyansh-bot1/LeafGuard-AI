import React from 'react';
import { Bot, User } from 'lucide-react';
import { Message } from '../../hooks/useChat';

interface ChatMessageProps {
  message: Message;
}

export default function ChatMessage({ message }: ChatMessageProps) {
  return (
    <div
      className={`flex items-start gap-4 ${
        message.type === 'bot' ? '' : 'flex-row-reverse'
      }`}
    >
      {message.type === 'bot' && (
        <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center">
          <Bot className="w-5 h-5 text-emerald-400" />
        </div>
      )}
      {message.type === 'user' && (
        <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center">
          <User className="w-5 h-5 text-blue-400" />
        </div>
      )}
      <div className={`flex-1 p-4 rounded-lg ${
        message.type === 'bot' 
          ? 'bg-emerald-900/40 text-emerald-100/80' 
          : 'bg-blue-500/20 text-white'
      }`}>
        {message.content}
      </div>
    </div>
  );
}