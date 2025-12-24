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

  return (
    <div className="bg-bg text-text min-h-screen relative selection:bg-acid selection:text-black">
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
    </div>
  );
}

export default App;
