import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, X, Send, Bot, User } from 'lucide-react';
import { useChat } from '../../hooks/useChat';

export default function FloatingChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [apiKey, setApiKey] = useState('');
  const { messages, sendMessage, initializeChat, isInitialized } = useChat();
  const [newMessage, setNewMessage] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const messagesContainerRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleInitialize = () => {
    if (apiKey.trim()) {
      const success = initializeChat(apiKey);
      if (success) {
        setApiKey('');
      }
    }
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (newMessage.trim()) {
      sendMessage(newMessage);
      setNewMessage('');
    }
  };

  return (
    <>
      {/* Floating Button with Pulse Effect */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 p-3 sm:p-4 bg-gradient-to-r from-emerald-500 to-emerald-400 text-white rounded-full shadow-lg transition-all z-50 hover:scale-110 group"
      >
        <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6 group-hover:rotate-12 transition-transform" />
        <span className="absolute top-0 right-0 w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full animate-pulse"></span>
      </button>

      {/* Chat Window with Animation */}
      {isOpen && (
        <div className="fixed inset-0 sm:inset-auto sm:bottom-24 sm:right-6 sm:w-96 bg-gradient-to-b from-emerald-900/95 to-emerald-800/95 backdrop-blur-md rounded-none sm:rounded-xl shadow-2xl border border-emerald-700/30 z-50 animate-slideUp flex flex-col max-h-[100vh] sm:max-h-[600px]">
          {/* Header */}
          <div className="bg-gradient-to-r from-emerald-800/50 to-emerald-700/50 p-4 rounded-t-xl border-b border-emerald-700/30 flex items-center justify-between flex-shrink-0">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-emerald-500/20 rounded-lg">
                <Bot className="w-5 h-5 text-emerald-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">LeafGuard Assistant</h3>
                <p className="text-xs text-emerald-100/60">AI-powered support</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 hover:bg-emerald-800/50 rounded-lg transition-colors"
            >
              <X className="w-5 h-5 text-emerald-100/60 hover:text-white" />
            </button>
          </div>

          {/* Messages Area */}
          <div 
            ref={messagesContainerRef}
            className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-emerald-700/30 scrollbar-track-transparent"
          >
            {!isInitialized ? (
              <div className="space-y-4 animate-fadeIn">
                <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-lg p-4">
                  <p className="text-emerald-100/80 mb-4">Welcome! Please enter your Gemini API key to start chatting:</p>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <input
                      type="password"
                      value={apiKey}
                      onChange={(e) => setApiKey(e.target.value)}
                      placeholder="Enter Gemini API key"
                      className="flex-1 bg-emerald-900/40 border border-emerald-700/30 rounded-lg px-3 py-2 text-white placeholder-emerald-100/40 focus:outline-none focus:border-emerald-500/50 transition-colors"
                    />
                    <button
                      onClick={handleInitialize}
                      disabled={!apiKey.trim()}
                      className="px-4 py-2 bg-emerald-500 hover:bg-emerald-400 text-white rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Start
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex items-start gap-3 ${
                    msg.type === 'user' ? 'justify-end' : 'justify-start'
                  } animate-fadeIn`}
                >
                  {msg.type === 'bot' && (
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                      <Bot className="w-5 h-5 text-emerald-400" />
                    </div>
                  )}
                  <div
                    className={`max-w-[80%] sm:max-w-[70%] rounded-lg px-4 py-2 ${
                      msg.type === 'user'
                        ? 'bg-gradient-to-r from-emerald-500 to-emerald-400 text-white'
                        : 'bg-emerald-900/40 text-emerald-100/80 border border-emerald-700/30'
                    }`}
                  >
                    {msg.content}
                  </div>
                  {msg.type === 'user' && (
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                      <User className="w-5 h-5 text-emerald-400" />
                    </div>
                  )}
                </div>
              ))
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          {isInitialized && (
            <form onSubmit={handleSendMessage} className="p-4 border-t border-emerald-700/30 bg-emerald-900/50 flex-shrink-0">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 bg-emerald-900/40 border border-emerald-700/30 rounded-lg px-4 py-2 text-white placeholder-emerald-100/40 focus:outline-none focus:border-emerald-500/50 transition-colors"
                />
                <button
                  type="submit"
                  disabled={!newMessage.trim()}
                  className="p-3 bg-gradient-to-r from-emerald-500 to-emerald-400 hover:from-emerald-400 hover:to-emerald-300 text-white rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed group"
                >
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </form>
          )}
        </div>
      )}
    </>
  );
}