import React, { useEffect, useRef, useState } from 'react';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger animations after component mounts
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

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
      className="relative w-full min-h-screen overflow-hidden bg-bg flex items-center py-20 md:py-0"
    >
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className={`absolute top-1/2 left-1/2 w-[80vw] md:w-[60vw] h-[80vw] md:h-[60vw] bg-gradient-to-br from-acid/10 to-transparent rounded-full blur-[80px] md:blur-[120px] mix-blend-screen transition-all duration-1000 ease-out ${
            isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
          }`}
          style={{ transform: 'translate(calc(-50% + var(--mouse-x, 0px) * -2), calc(-50% + var(--mouse-y, 0px) * -2))' }}
        ></div>
        <div
          className={`absolute top-1/4 right-1/4 w-[40vw] md:w-[30vw] h-[40vw] md:h-[30vw] bg-purple-900/20 rounded-full blur-[60px] md:blur-[100px] mix-blend-screen transition-all duration-1000 delay-300 ease-out ${
            isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
          }`}
          style={{ transform: 'translate(calc(var(--mouse-x, 0px)), calc(var(--mouse-y, 0px)))' }}
        ></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        <div className="flex flex-col md:grid md:grid-cols-12 gap-8 md:gap-0">

          {/* Top Left: Japanese Vertical Copy - Desktop only */}
          <div className="hidden lg:flex col-span-2 justify-center items-start pt-32">
             <div className={`writing-vertical-rl text-lg xl:text-xl font-serif font-medium tracking-[0.3em] text-white/80 h-auto border-r border-white/10 pr-6 transition-all duration-1000 ${
               isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
             }`} style={{ transitionDelay: '1200ms' }}>
                <span className={`transition-all duration-700 ${
                  isLoaded ? 'opacity-100' : 'opacity-0'
                }`} style={{ transitionDelay: '1400ms' }}>多角的な事業で、</span>
                <span className={`mt-8 text-acid transition-all duration-700 ${
                  isLoaded ? 'opacity-100' : 'opacity-0'
                }`} style={{ transitionDelay: '1600ms' }}>価値を創造する。</span>
             </div>
          </div>

          {/* Center: Main Visual / Impact Text */}
          <div className="col-span-12 lg:col-span-8 flex flex-col justify-center items-center md:items-start relative pt-16 md:pt-0">

             {/* Decorative Background Text */}
             <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none mix-blend-overlay transition-all duration-1500 ${
               isLoaded ? 'opacity-20 md:opacity-30 scale-100' : 'opacity-0 scale-150'
             }`} style={{ transitionDelay: '500ms' }}>
               <span className="text-[20vw] md:text-[12vw] font-display font-bold leading-none text-transparent" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.2)' }}>
                 FUTURE
               </span>
             </div>

             <div className="relative text-center md:text-left">
                <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-[9vw] leading-[0.85] font-display font-black tracking-tighter text-white uppercase mix-blend-difference z-20">
                  <span className={`block hover:text-acid transition-all duration-1000 cursor-default overflow-hidden ${
                    isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full'
                  }`}>
                    T.SCREEN
                  </span>
                  <span className={`block ml-4 sm:ml-8 md:ml-20 lg:ml-32 hover:text-acid transition-all duration-1000 cursor-default overflow-hidden ${
                    isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'
                  }`} style={{ transitionDelay: '300ms' }}>
                    Solutions
                  </span>
                </h1>

                {/* Mobile Japanese Text */}
                <p className={`lg:hidden mt-6 md:mt-8 text-base sm:text-lg font-serif text-white/90 leading-loose transition-all duration-700 ${
                  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`} style={{ transitionDelay: '800ms' }}>
                  多角的な事業で、<br/>
                  <span className="text-acid">「価値」</span>を創造する。
                </p>
             </div>

             <div className={`mt-8 md:mt-16 md:ml-20 lg:ml-32 max-w-md px-4 md:px-0 transition-all duration-700 ${
               isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
             }`} style={{ transitionDelay: '1000ms' }}>
               <p className="text-xs sm:text-sm md:text-base text-muted font-mono leading-relaxed border-l border-acid/50 pl-4">
                 // T.SCREEN<br/>
                 研修事業・スマホ関連グッズ卸売・Amazon物販で、お客様のビジネスをサポートします。
               </p>
             </div>
          </div>

          {/* Bottom Right: CTA */}
          <div className={`col-span-12 lg:col-span-2 flex items-center lg:items-end justify-center lg:justify-end mt-8 lg:mt-0 pb-8 lg:pb-16 transition-all duration-700 ${
            isLoaded ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-90'
          }`} style={{ transitionDelay: '1200ms' }}>
             <a
               href="#services"
               className="relative group overflow-hidden bg-white text-black px-6 py-4 lg:px-4 lg:py-16 font-mono text-xs font-bold uppercase tracking-widest hover:bg-acid transition-colors duration-300 flex items-center justify-center"
             >
               <span className="relative z-10 btn-vertical">Explore Services</span>
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
