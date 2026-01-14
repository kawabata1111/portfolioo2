import React, { useState, useEffect, useRef } from 'react';

const PageFooter: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <footer ref={footerRef} className="bg-surface border-t border-white/10 py-8 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 md:px-12 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className={`text-white/60 text-sm font-mono uppercase tracking-wider transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
        }`}>
          © 2024 T.SCREEN Inc.
        </p>
        <a
          href="/privacy.html"
          className={`text-white/60 text-sm font-mono uppercase tracking-wider hover:text-acid transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`}
          style={{ transitionDelay: '150ms' }}
        >
          Privacy Policy
        </a>
      </div>
    </footer>
  );
};

export default PageFooter;
