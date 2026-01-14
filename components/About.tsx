import React, { useState, useEffect, useRef } from 'react';

// 個別要素用のアニメーションフック
const useElementAnimation = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0 }
    );

    // 少し遅延させてから監視開始
    const timer = setTimeout(() => {
      observer.observe(element);
    }, 100);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);

  return { ref, isVisible };
};

const About: React.FC = () => {
  // 各パーツごとにアニメーション状態を管理
  const titleAnim = useElementAnimation();
  const descAnim = useElementAnimation();
  const imageAnim = useElementAnimation();
  const rightColAnim = useElementAnimation();
  const statsAnim = useElementAnimation();
  const locationAnim = useElementAnimation();

  return (
    <section id="about" className="py-16 sm:py-24 md:py-32 bg-surface text-white relative border-t border-white/5">

      {/* Background Typography */}
      <div className="absolute top-0 left-0 w-full overflow-hidden pointer-events-none opacity-5">
        <span className="text-[15vw] sm:text-[20vw] font-display font-black leading-none text-white whitespace-nowrap">
          T.SCREEN
        </span>
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">

          {/* Left Column: Vision */}
          <div className="lg:col-span-7 pt-8 md:pt-12">
            <div
              ref={titleAnim.ref}
              className={`flex items-start gap-3 sm:gap-4 mb-8 sm:mb-12 transition-all duration-1000 ease-out ${
                titleAnim.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full'
              }`}
            >
               <span className="w-px h-16 sm:h-20 bg-acid block flex-shrink-0"></span>
               <div>
                  <span className="text-acid font-mono text-xs tracking-widest uppercase mb-3 sm:mb-4 block">About Us</span>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight font-sans">
                    多角的な事業で、<br/>
                    <span className="text-white">価値</span>を創造する。
                  </h2>
               </div>
            </div>

            <div
              ref={descAnim.ref}
              className={`space-y-6 sm:space-y-8 text-white/70 leading-relaxed sm:leading-loose text-sm sm:text-base md:text-lg font-light transition-all duration-1000 ease-out ${
                descAnim.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-1/2'
              }`}
            >
              <p>
                株式会社T.SCREENは、令和5年6月に大阪で設立されました。
                研修事業、スマホ関連グッズ卸売業、Amazon物販の3つの事業を柱に、幅広いビジネスを展開しています。
              </p>
              <p>
                お客様のニーズに寄り添い、質の高いサービスと商品を提供することで、
                信頼されるビジネスパートナーとして成長し続けることを目指しています。
              </p>
            </div>

            <div
              ref={imageAnim.ref}
              className={`mt-10 sm:mt-16 grayscale hover:grayscale-0 transition-all duration-1000 ease-out ${
                imageAnim.isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
              }`}
            >
               <img
                   src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
                   alt="Office Environment"
                   className="w-full h-48 sm:h-64 md:h-80 lg:h-96 object-cover rounded-sm opacity-80"
                />
            </div>
          </div>

          {/* Right Column: Data & Vertical Text */}
          <div className="lg:col-span-5 flex flex-col justify-between">

            {/* Vertical Text Accent - Desktop only */}
            <div
              ref={rightColAnim.ref}
              className={`hidden lg:flex justify-end mb-24 transition-all duration-1000 ease-out ${
                rightColAnim.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'
              }`}
            >
               <div className="writing-vertical-rl text-white/20 text-sm tracking-[0.5em] font-mono uppercase h-48 border-r border-white/10 pr-6">
                 Engineering for the Future
               </div>
            </div>

            <div
              ref={statsAnim.ref}
              className={`grid grid-cols-2 lg:grid-cols-1 gap-4 sm:gap-8 lg:gap-12 border-t border-white/10 pt-8 sm:pt-12 transition-all duration-1000 ease-out ${
                statsAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
            >
              {[
                { label: 'ESTABLISHED', value: '2023' },
                { label: 'BUSINESS', value: '3' },
              ].map((stat) => (
                 <div key={stat.label} className="group flex flex-col lg:flex-row lg:items-end lg:justify-between border-b border-white/10 pb-3 sm:pb-4">
                    <span className="font-mono text-[10px] sm:text-xs text-acid mb-1 group-hover:lg:translate-x-2 transition-transform">{stat.label}</span>
                    <span className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-white">{stat.value}</span>
                 </div>
              ))}
            </div>

            <div
              ref={locationAnim.ref}
              className={`mt-8 sm:mt-12 transition-all duration-1000 ease-out ${
                locationAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
               <span className="block text-xs font-mono text-white/40 mb-2">LOCATION</span>
               <p className="text-base sm:text-lg font-bold">大阪市東成区大今里,<br/>Osaka, Japan</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
