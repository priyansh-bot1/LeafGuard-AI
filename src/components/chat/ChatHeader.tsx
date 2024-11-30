import React from 'react';
import { MessageSquare, User } from 'lucide-react';

export default function ChatHeader() {
  return (
    <div className="bg-emerald-900/30 p-6 rounded-xl backdrop-blur-sm border border-emerald-800/20 mb-6">
      <h1 className="text-2xl font-bold text-white mb-4">Start a Chat</h1>
      <p className="text-emerald-100/80 mb-6">
        Get immediate assistance from our AI or connect with a live representative.
      </p>
      
      <div className="flex gap-4">
        <button className="flex-1 px-4 py-3 bg-emerald-500 hover:bg-emerald-400 text-white rounded-md transition-all flex items-center justify-center gap-2">
          <MessageSquare className="w-5 h-5" />
          Chat with AI Assistant
        </button>
        <button className="flex-1 px-4 py-3 bg-blue-500 hover:bg-blue-400 text-white rounded-md transition-all flex items-center justify-center gap-2">
          <User className="w-5 h-5" />
          Chat with Human
        </button>
      </div>
    </div>
  );
}