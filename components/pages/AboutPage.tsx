import React, { useState, useEffect, useRef } from 'react';
import PageHeader from '../PageHeader';
import PageFooter from '../PageFooter';
import { COMPANY_INFO } from '../../constants';

const useScrollAnimation = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // 既に画面内にある場合は即座に表示
    const rect = element.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '-50px 0px -50px 0px' }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return { ref, isVisible };
};

const AboutPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const visionSection = useScrollAnimation();
  const profileSection = useScrollAnimation();

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 100);
  }, []);

  return (
    <div className="bg-bg text-text min-h-screen">
      <div className="grain"></div>
      <PageHeader />

      <main className="pt-32 pb-16">
        <div className="container mx-auto px-4 sm:px-6 md:px-12">
          {/* Hero Section */}
          <div className="mb-16 sm:mb-24 overflow-hidden">
            <p className={`text-acid font-mono text-xs tracking-widest uppercase mb-4 transition-all duration-700 ${
              isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}>Who We Are</p>
            <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white uppercase tracking-tight mb-6 transition-all duration-1000 ${
              isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full'
            }`}>
              About Us
            </h1>
            <p className={`text-white/60 max-w-2xl text-lg leading-relaxed transition-all duration-700 delay-300 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              多角的な事業展開で、お客様のビジネスをサポートします。
            </p>
          </div>

          {/* Company Vision */}
          <div ref={visionSection.ref} className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
            <div className={`transition-all duration-1000 ease-out ${
              visionSection.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full'
            }`}>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-white mb-6 uppercase tracking-wide">
                Our Vision
              </h2>
              <div className="space-y-6 text-white/70 leading-relaxed">
                <p className={`transition-all duration-700 ${
                  visionSection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`} style={{ transitionDelay: '200ms' }}>
                  株式会社T.SCREENは、令和5年6月に大阪で設立されました。
                  研修事業、スマホ関連グッズ卸売業、Amazon物販の3つの事業を柱に、幅広いビジネスを展開しています。
                </p>
                <p className={`transition-all duration-700 ${
                  visionSection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`} style={{ transitionDelay: '400ms' }}>
                  お客様のニーズに寄り添い、質の高いサービスと商品を提供することで、
                  信頼されるビジネスパートナーとして成長し続けることを目指しています。
                </p>
              </div>
            </div>
            <div className={`bg-surface border border-white/10 p-8 rounded-sm transition-all duration-1000 delay-200 ease-out ${
              visionSection.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'
            }`}>
              <h3 className="text-lg font-display font-bold text-white mb-6 uppercase tracking-wide">Key Numbers</h3>
              <div className="space-y-6">
                {[
                  { label: 'Established', value: '2023' },
                  { label: 'Business Lines', value: '3' },
                  { label: 'Location', value: 'Osaka', isText: true },
                ].map((item, index) => (
                  <div key={index} className={`flex justify-between items-end border-b border-white/10 pb-4 transition-all duration-500 ${
                    visionSection.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
                  }`} style={{ transitionDelay: `${index * 150 + 400}ms` }}>
                    <span className="font-mono text-xs text-acid uppercase tracking-wider">{item.label}</span>
                    <span className={`${item.isText ? 'text-xl' : 'text-3xl'} font-display font-bold text-white`}>{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Company Info */}
          <div ref={profileSection.ref} className={`bg-surface border border-white/10 p-8 sm:p-12 rounded-sm transition-all duration-1000 ease-out ${
            profileSection.isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-white mb-8 uppercase tracking-wide">
              Company Profile
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                {[
                  { label: 'Company Name', value: COMPANY_INFO.name },
                  { label: 'Representative', value: COMPANY_INFO.ceo },
                  { label: 'Established', value: COMPANY_INFO.founded },
                ].map((item, index) => (
                  <div key={index} className={`transition-all duration-700 ${
                    profileSection.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                  }`} style={{ transitionDelay: `${index * 100 + 300}ms` }}>
                    <span className="block font-mono text-xs text-acid uppercase tracking-wider mb-2">{item.label}</span>
                    <span className="text-white text-lg">{item.value}</span>
                  </div>
                ))}
              </div>
              <div className="space-y-6">
                {[
                  { label: 'Address', value: COMPANY_INFO.address },
                  { label: 'Phone', value: COMPANY_INFO.phone },
                  { label: 'Email', value: COMPANY_INFO.email },
                ].map((item, index) => (
                  <div key={index} className={`transition-all duration-700 ${
                    profileSection.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
                  }`} style={{ transitionDelay: `${index * 100 + 300}ms` }}>
                    <span className="block font-mono text-xs text-acid uppercase tracking-wider mb-2">{item.label}</span>
                    <span className="text-white text-lg">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <PageFooter />
    </div>
  );
};

export default AboutPage;
