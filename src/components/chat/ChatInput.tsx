import React from 'react';
import { Send } from 'lucide-react';

export default function ChatInput() {
  return (
    <div className="bg-emerald-900/30 p-4 rounded-xl backdrop-blur-sm border border-emerald-800/20">
      <div className="relative">
        <textarea
          placeholder="Type your message..."
          className="w-full bg-emerald-900/40 border border-emerald-800/20 rounded-lg px-4 py-3 text-white pr-12 resize-none"
          rows={3}
        />
        <button className="absolute right-3 bottom-3 p-2 bg-emerald-500 hover:bg-emerald-400 text-white rounded-md transition-all">
          <Send className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}