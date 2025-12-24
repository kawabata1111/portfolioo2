import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";
import { Send, Sparkles, Terminal, Cpu, ArrowRight } from 'lucide-react';
import { AI_CONTEXT } from '../constants';

interface Message {
  role: 'user' | 'model';
  text: string;
}

const ContactAI: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: 'CONNECTION_ESTABLISHED... 弊社のサービスや技術スタックについて、AIエージェントがお答えします。' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || !process.env.API_KEY) return;

    const userMessage = input;
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setInput('');
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userMessage,
        config: {
          systemInstruction: AI_CONTEXT,
        }
      });

      const reply = response.text || "SYSTEM_ERROR: Response unavailable.";

      setMessages(prev => [...prev, { role: 'model', text: reply }]);
    } catch (error) {
      console.error('Error:', error);
      setMessages(prev => [...prev, { role: 'model', text: "NETWORK_ERROR: Reconnection required." }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <section id="contact-ai" className="py-32 bg-surface text-white relative overflow-hidden border-t border-white/5">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none">
         <div className="absolute right-10 top-10 w-64 h-64 border border-acid/50 rounded-full animate-spin-slow"></div>
         <div className="absolute right-10 top-10 w-64 h-64 border border-dashed border-white/20 rounded-full animate-reverse-spin"></div>
      </div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Left Side: Info */}
          <div className="lg:w-1/3">
            <div className="flex items-center gap-2 text-acid font-mono text-xs tracking-widest uppercase mb-6">
              <span className="w-2 h-2 bg-acid animate-pulse"></span>
              <span>AI Console</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 leading-tight">
              INTERACTIVE<br/>
              INTELLIGENCE
            </h2>
            
            <p className="text-white/60 mb-12 leading-relaxed font-light">
              NovaSphereのナレッジベースに直結したAIエージェントです。
              開発フロー、技術選定、コスト感など、技術的な質問に対してリアルタイムに回答を生成します。
            </p>

            <div className="space-y-4">
              <p className="font-mono text-xs text-white/40 uppercase tracking-wider mb-4">// SUGGESTED_QUERIES</p>
              {[
                '開発費用の概算は？',
                '技術スタックは何を使ってる？',
                '採用プロセスについて',
              ].map((query) => (
                <button 
                  key={query}
                  onClick={() => setInput(query)}
                  className="w-full text-left px-4 py-3 border border-white/10 hover:border-acid hover:text-acid hover:bg-white/5 transition-all duration-300 text-sm font-mono flex items-center justify-between group"
                >
                  <span>{query}</span>
                  <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                </button>
              ))}
            </div>
          </div>

          {/* Right Side: Terminal Interface */}
          <div className="lg:w-2/3">
            <div className="bg-[#050505] border border-white/10 rounded-sm shadow-2xl flex flex-col h-[600px] relative overflow-hidden group">
              {/* Terminal Header */}
              <div className="p-3 border-b border-white/10 bg-white/5 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Terminal size={14} className="text-acid" />
                  <span className="text-xs font-mono text-white/60 uppercase">bash -- novagen-client</span>
                </div>
                <div className="flex gap-2">
                   <div className="w-2 h-2 rounded-full bg-white/20"></div>
                   <div className="w-2 h-2 rounded-full bg-white/20"></div>
                </div>
              </div>

              {/* Chat Area */}
              <div className="flex-1 overflow-y-auto p-6 space-y-6 font-mono text-sm">
                {messages.map((msg, index) => (
                  <div key={index} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[85%] ${msg.role === 'user' ? 'text-right' : 'text-left'}`}>
                      <div className={`inline-block p-4 border ${
                        msg.role === 'user' 
                          ? 'bg-acid text-black border-acid' 
                          : 'bg-transparent text-white/80 border-white/20'
                      }`}>
                        {msg.role === 'model' && (
                          <span className="block text-[10px] text-acid/70 mb-2 uppercase tracking-wider">
                             &lt;System_Response&gt;
                          </span>
                        )}
                        <p className="leading-relaxed whitespace-pre-wrap">{msg.text}</p>
                      </div>
                    </div>
                  </div>
                ))}
                
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="p-4 border border-acid/30 bg-acid/5 text-acid animate-pulse">
                      PROCESSING_REQUEST...
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Input Area */}
              <div className="p-4 border-t border-white/10 bg-white/5">
                <div className="flex items-center gap-3">
                  <span className="text-acid font-mono text-lg">{'>'}</span>
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Enter command or query..."
                    className="flex-1 bg-transparent border-none focus:ring-0 text-white font-mono placeholder-white/30 text-sm focus:outline-none"
                    disabled={isLoading}
                    autoComplete="off"
                  />
                  <button 
                    onClick={handleSend}
                    disabled={isLoading || !input.trim()}
                    className="text-white/40 hover:text-acid transition-colors disabled:opacity-20"
                  >
                    <Send size={18} />
                  </button>
                </div>
              </div>
              
              {/* Scanline Effect */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%] pointer-events-none z-20 opacity-20"></div>
            </div>
          </div>

        </div>
      </div>
      
      <style>{`
        @keyframes reverse-spin {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        .animate-reverse-spin {
          animation: reverse-spin 15s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default ContactAI;