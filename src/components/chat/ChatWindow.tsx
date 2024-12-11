import React from 'react';
import ChatMessage from './ChatMessage';
import { Message } from '../../hooks/useChat';

interface ChatWindowProps {
  messages: Message[];
}

export default function ChatWindow({ messages }: ChatWindowProps) {
  const chatEndRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="bg-emerald-900/30 rounded-xl backdrop-blur-sm border border-emerald-800/20 h-[400px] overflow-y-auto">
      <div className="p-6 space-y-6">
        {messages.map((message) => (
          <ChatMessage key={message.id} message={message} />
        ))}
        <div ref={chatEndRef} />
      </div>
    </div>
  );
}