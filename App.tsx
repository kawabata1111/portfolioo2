import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import News from './components/News';
import Contact from './components/Contact';

function App() {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    // Loading animation
    const interval = setInterval(() => {
      setLoadingProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoading(false), 500);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      requestAnimationFrame(() => {
        setCursorPos({ x: e.clientX, y: e.clientY });
      });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('a') || target.closest('button')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  // Loading Screen
  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-bg flex flex-col items-center justify-center z-[200]">
        <div className="grain"></div>

        {/* Logo */}
        <div className="mb-12">
          <span className="font-display text-4xl sm:text-5xl font-bold text-white tracking-tight">
            T.SCREEN
          </span>
        </div>

        {/* Progress Bar */}
        <div className="w-48 sm:w-64 h-[2px] bg-white/10 relative overflow-hidden">
          <div
            className="absolute top-0 left-0 h-full bg-acid transition-all duration-100 ease-out"
            style={{ width: `${Math.min(loadingProgress, 100)}%` }}
          />
        </div>

        {/* Progress Number */}
        <div className="mt-4 font-mono text-xs text-white/50">
          {Math.min(Math.floor(loadingProgress), 100)}%
        </div>

        <style>{`
          @keyframes pulse {
            0%, 100% { opacity: 0.5; }
            50% { opacity: 1; }
          }
        `}</style>
      </div>
    );
  }

  return (
    <div className="bg-bg text-text min-h-screen relative selection:bg-acid selection:text-black animate-[fadeIn_0.5s_ease-out]">
      <div className="grain"></div>

      <div
        className="fixed top-0 left-0 w-3 h-3 bg-acid rounded-full pointer-events-none z-[100] mix-blend-exclusion transition-transform duration-150 ease-out will-change-transform"
        style={{
          transform: `translate(${cursorPos.x - 6}px, ${cursorPos.y - 6}px) scale(${isHovering ? 5 : 1})`,
        }}
      />
      <div
         className="fixed top-0 left-0 w-10 h-10 border border-white/30 rounded-full pointer-events-none z-[99] transition-transform duration-300 ease-out will-change-transform"
         style={{
          transform: `translate(${cursorPos.x - 20}px, ${cursorPos.y - 20}px) scale(${isHovering ? 1.5 : 1})`,
        }}
      />

      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <News />
        <Contact />
      </main>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </div>
  );
}

export default App;
