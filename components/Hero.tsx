import React, { useEffect, useRef } from 'react';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth - 0.5) * 20;
      const y = (clientY / window.innerHeight - 0.5) * 20;
      
      containerRef.current.style.setProperty('--mouse-x', `${x}px`);
      containerRef.current.style.setProperty('--mouse-y', `${y}px`);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section 
      ref={containerRef}
      id="hero" 
      className="relative w-full h-screen overflow-hidden bg-bg flex items-center"
    >
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute top-1/2 left-1/2 w-[60vw] h-[60vw] bg-gradient-to-br from-acid/10 to-transparent rounded-full blur-[120px] mix-blend-screen transition-transform duration-100 ease-out"
          style={{ transform: 'translate(calc(-50% + var(--mouse-x) * -2), calc(-50% + var(--mouse-y) * -2))' }}
        ></div>
        <div 
          className="absolute top-1/4 right-1/4 w-[30vw] h-[30vw] bg-purple-900/20 rounded-full blur-[100px] mix-blend-screen transition-transform duration-300 ease-out"
          style={{ transform: 'translate(calc(var(--mouse-x)), calc(var(--mouse-y)))' }}
        ></div>
      </div>

      <div className="container mx-auto px-8 relative z-10 h-full">
        <div className="h-full grid grid-cols-12 grid-rows-6 md:grid-rows-1 relative">
          
          {/* Top Left: Japanese Vertical Copy - The "Zen" element */}
          <div className="col-span-2 row-span-3 md:row-span-1 hidden md:flex justify-center items-start pt-32 h-full">
             <div className="writing-vertical-rl text-lg md:text-xl font-serif font-medium tracking-[0.3em] text-white/80 h-auto border-r border-white/10 pr-6">
                <span className="animate-[fadeIn_1s_ease-out_1s_forwards] opacity-0">不確実な未来を、</span>
                <span className="mt-8 text-acid animate-[fadeIn_1s_ease-out_1.2s_forwards] opacity-0">確信に変える。</span>
             </div>
          </div>

          {/* Center: Main Visual / Impact Text */}
          <div className="col-span-12 md:col-span-8 flex flex-col justify-center items-center md:items-start relative">
             
             {/* Decorative Background Text */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none mix-blend-overlay opacity-30">
               <span className="text-[12vw] font-display font-bold leading-none text-transparent stroke-white" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.2)' }}>
                 FUTURE
               </span>
             </div>

             <div className="relative">
                <h1 className="text-6xl md:text-[9vw] leading-[0.85] font-display font-black tracking-tighter text-white uppercase mix-blend-difference z-20">
                  <span className="block hover:text-acid transition-colors duration-500 cursor-default">Digital</span>
                  <span className="block ml-12 md:ml-32 hover:text-acid transition-colors duration-500 cursor-default">Alchemy</span>
                </h1>
                
                {/* Mobile Japanese Text (Horizontal) */}
                <p className="md:hidden mt-8 text-lg font-serif text-white/90 text-center leading-loose">
                  不確実な未来を、<br/>
                  技術で<span className="text-acid">「確信」</span>に変える。
                </p>
             </div>

             <div className="mt-16 md:ml-32 max-w-md">
               <p className="text-sm md:text-base text-muted font-mono leading-relaxed border-l border-acid/50 pl-4">
                 // SYSTEM_READY<br/>
                 NovaSphere transforms business chaos into streamlined certainty through advanced AI and cloud engineering.
               </p>
             </div>
          </div>

          {/* Bottom Right: CTA */}
          <div className="col-span-12 md:col-span-2 flex items-end justify-end pb-24 md:pb-32">
             <a href="#services" className="relative group overflow-hidden bg-white text-black px-8 py-12 md:py-16 font-mono text-xs font-bold uppercase tracking-widest writing-vertical-rl hover:bg-acid transition-colors duration-300">
               <span className="relative z-10">Explore Services</span>
               <div className="absolute bottom-0 left-0 w-full h-1 bg-black group-hover:h-full transition-all duration-300 opacity-10"></div>
             </a>
          </div>

        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default Hero;