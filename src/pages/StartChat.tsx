import React from 'react';
import ChatHeader from '../components/chat/ChatHeader';
import ChatWindow from '../components/chat/ChatWindow';
import ChatInput from '../components/chat/ChatInput';
import SuggestedFAQs from '../components/chat/SuggestedFAQs';
import { useChat } from '../hooks/useChat';

export default function StartChat() {
  const { messages, sendMessage } = useChat();

  return (
    <div className="pt-20 min-h-screen bg-[#003025]">
      <div className="container mx-auto px-6 py-8">
        <div className="max-w-4xl mx-auto">
          <ChatHeader />
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