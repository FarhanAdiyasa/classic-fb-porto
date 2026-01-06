import React, { useState, useRef, useEffect } from 'react';
import { sendMessageToGemini } from '../services/geminiService';
import { ChatMessage } from '../types';
import { X, Send, Cpu } from 'lucide-react';

interface ChatInterfaceProps {
  onClose: () => void;
  isThinking: boolean;
  setIsThinking: (thinking: boolean) => void;
}

const ChatInterface: React.FC<ChatInterfaceProps> = ({ onClose, isThinking, setIsThinking }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Hey there. I am currently deep in a coding session, but I can take a break. What do you want to know about my work?' }
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isThinking) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsThinking(true);

    // Prepare history for API
    const history = messages.map(m => ({
      role: m.role,
      parts: [{ text: m.text }]
    }));

    // Add current user message to history context
    history.push({ role: 'user', parts: [{ text: userMsg }] });

    const response = await sendMessageToGemini(history, userMsg);
    
    setMessages(prev => [...prev, { role: 'model', text: response || '...' }]);
    setIsThinking(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  // Helper to render text with Bold and Code Blocks
  const renderMessageContent = (text: string) => {
    // Split by code blocks first: ```code```
    const parts = text.split(/```([\s\S]*?)```/g);

    return parts.map((part, index) => {
      // Even indices are normal text (or bold text), Odd indices are code blocks
      if (index % 2 === 1) {
        return (
          <div key={index} className="my-2 bg-[#1e1e2e] border border-slate-600 rounded p-2 overflow-x-auto text-sm text-yellow-300 font-mono shadow-inner">
            <pre className="whitespace-pre">{part.trim()}</pre>
          </div>
        );
      } else {
        // Process bold text: **bold**
        const subParts = part.split(/(\*\*.*?\*\*)/g);
        return (
          <span key={index} className="whitespace-pre-wrap">
            {subParts.map((subPart, subIndex) => {
              if (subPart.startsWith('**') && subPart.endsWith('**')) {
                return <strong key={subIndex} className="text-green-300 font-bold">{subPart.slice(2, -2)}</strong>;
              }
              return subPart;
            })}
          </span>
        );
      }
    });
  };

  return (
    <div className="absolute inset-0 flex items-center justify-center bg-black/50 z-50 p-4 font-mono">
      <div className="w-full max-w-2xl bg-[#1e1e2e] border-2 border-slate-600 rounded-lg shadow-2xl overflow-hidden flex flex-col h-[600px] animate-pop-in">
        {/* Header */}
        <div className="bg-slate-800 p-3 flex justify-between items-center border-b border-slate-600">
          <div className="flex items-center space-x-2 text-green-400">
            <Cpu size={18} />
            <span className="text-lg">dev_terminal.exe</span>
          </div>
          <button onClick={onClose} className="text-slate-400 hover:text-white transition-colors">
            <X size={20} />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#1e1e2e] text-lg">
          {messages.map((msg, idx) => (
            <div 
              key={idx} 
              className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div 
                className={`max-w-[90%] p-4 rounded ${
                  msg.role === 'user' 
                    ? 'bg-slate-700 text-green-200 shadow-md' 
                    : 'bg-transparent text-indigo-100 border-l-4 border-green-500 pl-4'
                }`}
              >
                <span className="opacity-50 text-sm block mb-1 uppercase tracking-wider font-bold">
                  {msg.role === 'user' ? '> USER' : '> DEV_BOT'}
                </span>
                <div className="leading-relaxed text-base">
                  {renderMessageContent(msg.text)}
                </div>
              </div>
            </div>
          ))}
          {isThinking && (
            <div className="flex justify-start">
              <div className="text-green-400 p-2 text-lg animate-pulse">
                &gt; thinking_process.init()...
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-4 bg-slate-800 border-t border-slate-600 flex items-center space-x-3">
          <span className="text-green-500 font-bold text-xl">{'>'}</span>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type command..."
            className="flex-1 bg-transparent border-none text-white text-xl focus:outline-none placeholder-slate-500 font-mono"
            autoFocus
          />
          <button 
            onClick={handleSend}
            disabled={isThinking || !input.trim()}
            className="p-2 text-green-500 hover:text-green-400 disabled:opacity-30 transition-colors"
          >
            <Send size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;