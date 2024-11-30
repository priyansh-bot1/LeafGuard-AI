import React from 'react';
import { Bot } from 'lucide-react';

const messages = [
  {
    type: 'bot',
    content: 'Hello! How can I assist you today with LeafGuard AI?'
  }
];

export default function ChatWindow() {
  return (
    <div className="bg-emerald-900/30 rounded-xl backdrop-blur-sm border border-emerald-800/20 h-[400px] overflow-y-auto">
      <div className="p-6 space-y-6">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex items-start gap-4 ${
              message.type === 'bot' ? '' : 'flex-row-reverse'
            }`}
          >
            {message.type === 'bot' && (
              <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center">
                <Bot className="w-5 h-5 text-emerald-400" />
              </div>
            )}
            <div className={`flex-1 p-4 rounded-lg ${
              message.type === 'bot' 
                ? 'bg-emerald-900/40 text-emerald-100/80' 
                : 'bg-emerald-500/20 text-white'
            }`}>
              {message.content}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}