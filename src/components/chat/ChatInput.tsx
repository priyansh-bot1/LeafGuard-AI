import React, { useState } from 'react';
import { Send } from 'lucide-react';

interface ChatInputProps {
  onSendMessage: (message: string) => void;
}

export default function ChatInput({ onSendMessage }: ChatInputProps) {
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      onSendMessage(message);
      setMessage('');
    }
  };

  return (
    <div className="bg-emerald-900/30 p-4 rounded-xl backdrop-blur-sm border border-emerald-800/20">
      <form onSubmit={handleSubmit} className="relative">
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault();
              handleSubmit(e);
            }
          }}
          placeholder="Type your message..."
          className="w-full bg-emerald-900/40 border border-emerald-800/20 rounded-lg px-4 py-3 pr-12 resize-none text-white placeholder-emerald-100/60"
          rows={3}
        />
        <button 
          type="submit"
          className="absolute right-3 bottom-3 p-2 bg-emerald-500 hover:bg-emerald-400 text-white rounded-md transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={!message.trim()}
        >
          <Send className="w-4 h-4" />
        </button>
      </form>
    </div>
  );
}