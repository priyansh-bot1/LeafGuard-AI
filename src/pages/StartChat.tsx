import React, { useState } from 'react';
import ChatHeader from '../components/chat/ChatHeader';
import ChatWindow from '../components/chat/ChatWindow';
import ChatInput from '../components/chat/ChatInput';
import SuggestedFAQs from '../components/chat/SuggestedFAQs';
import { useChat } from '../hooks/useChat';

export default function StartChat() {
  const { messages, sendMessage, initializeChat, isInitialized } = useChat();
  const [apiKey, setApiKey] = useState('');

  const handleInitialize = () => {
    if (apiKey.trim()) {
      const success = initializeChat(apiKey);
      if (success) {
        setApiKey(''); // Clear API key after successful initialization
      }
    }
  };

  return (
    <div className="pt-20 min-h-screen bg-[#003025]">
      <div className="container mx-auto px-6 py-8">
        <div className="max-w-4xl mx-auto">
          <ChatHeader />
          
          {!isInitialized && (
            <div className="mb-6 flex gap-4">
              <input
                type="password"
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                placeholder="Enter your Gemini API key"
                className="flex-1 bg-emerald-900/40 border border-emerald-800/20 rounded-lg px-4 py-2 text-white placeholder-emerald-100/60"
              />
              <button
                onClick={handleInitialize}
                className="px-4 py-2 bg-emerald-500 hover:bg-emerald-400 text-white rounded-md transition-all disabled:opacity-50"
                disabled={!apiKey.trim()}
              >
                Initialize Chat
              </button>
            </div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              <ChatWindow messages={messages} />
              <ChatInput onSendMessage={sendMessage} />
            </div>
            <div className="lg:col-span-1">
              <SuggestedFAQs />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}