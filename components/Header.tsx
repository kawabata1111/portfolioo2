import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* 4-Corner Navigation Layout */}
      
      {/* Top Left: Logo */}
      <div className="fixed top-8 left-8 z-50 mix-blend-difference">
        <a href="#" className="group flex flex-col leading-none">
          <span className="text-xl font-display font-black tracking-tighter text-white group-hover:text-acid transition-colors">NOVA</span>
          <span className="text-xl font-display font-black tracking-tighter text-white group-hover:text-acid transition-colors ml-4">SPHERE</span>
        </a>
      </div>

      {/* Top Right: Time & Location */}
      <div className="fixed top-8 right-8 z-50 mix-blend-difference hidden md:flex flex-col items-end font-mono text-xs text-white uppercase tracking-widest gap-1">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-acid rounded-full animate-pulse"></div>
          <span>Tokyo, JP</span>
        </div>
        <span>{time}</span>
      </div>

      {/* Bottom Left: Status */}
      <div className="fixed bottom-8 left-8 z-50 mix-blend-difference hidden md:block">
        <div className="flex items-center gap-2 font-mono text-xs text-white uppercase tracking-widest opacity-60">
           <Globe size={12} />
           <span>System: Online</span>
        </div>
      </div>

      {/* Bottom Right: Menu Trigger */}
      <div className="fixed bottom-8 right-8 z-50 mix-blend-difference">
        <button 
          onClick={() => setIsMenuOpen(true)}
          className="group flex items-center gap-3 text-white"
        >
          <span className="font-mono text-xs uppercase tracking-widest group-hover:text-acid transition-colors">Menu</span>
          <div className="w-12 h-12 border border-white/20 rounded-full flex items-center justify-center bg-black/50 backdrop-blur-sm group-hover:scale-110 transition-transform duration-300 group-hover:border-acid">
            <Menu size={20} className="group-hover:text-acid" />
          </div>
        </button>
      </div>

      {/* Fullscreen Menu Overlay */}
      <div 
        className={`fixed inset-0 z-[60] bg-[#080808] text-white transition-all duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] ${
          isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0 pointer-events-none'
        }`}
      >
        {/* Abstract Background in Menu */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-acid/5 rounded-full blur-[100px]"></div>
        </div>

        <div className="absolute top-8 right-8">
           <button 
            onClick={() => setIsMenuOpen(false)}
            className="group flex items-center gap-3"
          >
            <span className="font-mono text-xs uppercase tracking-widest group-hover:text-acid transition-colors">Close</span>
            <div className="w-12 h-12 border border-white/20 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors">
              <X size={20} />
            </div>
          </button>
        </div>

        <div className="container mx-auto px-6 h-full flex items-center justify-center relative z-10">
          <nav className="flex flex-col items-center md:items-start gap-2">
            {NAV_ITEMS.map((item, index) => (
              <a 
                key={item.label}
                href={item.href}
                className="group relative text-5xl md:text-8xl font-display font-black tracking-tighter text-transparent stroke-white hover:text-white transition-all duration-500 uppercase italic"
                style={{ WebkitTextStroke: '1px rgba(255,255,255,0.5)' }}
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="absolute -left-12 top-1/2 -translate-y-1/2 text-sm font-mono text-acid opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:block">
                  0{index + 1}
                </span>
                <span className="relative z-10 group-hover:tracking-normal transition-all duration-500">
                  {item.label}
                </span>
                <div className="absolute inset-0 bg-acid/0 group-hover:bg-acid/10 blur-lg transition-colors duration-300 -z-10"></div>
              </a>
            ))}
          </nav>
        </div>
        
        <div className="absolute bottom-12 w-full text-center font-mono text-xs text-white/30 uppercase tracking-[0.5em]">
          NovaSphere Solutions
        </div>
      </div>
    </>
  );
};

export default Header;