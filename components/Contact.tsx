import React, { useState, useEffect, useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { COMPANY_INFO } from '../constants';

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

const Contact: React.FC = () => {
  // 各パーツごとにアニメーション状態を管理
  const titleAnim = useElementAnimation();
  const buttonAnim = useElementAnimation();
  const contactInfoAnim = useElementAnimation();
  const socialAnim = useElementAnimation();
  const footerAnim = useElementAnimation();

  return (
    <section id="contact" className="bg-acid text-black pt-16 sm:pt-24 md:pt-32 pb-8 sm:pb-12 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 md:px-12">

        <div className="mb-12 sm:mb-16 md:mb-24 text-center">
          <div ref={titleAnim.ref}>
            <h2 className={`text-[12vw] sm:text-[10vw] leading-[0.8] font-display font-black tracking-tighter mb-8 transition-all duration-1000 ease-out ${
              titleAnim.isVisible ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-50 translate-y-12'
            }`}>
              CONTACT
            </h2>
          </div>
          <div ref={buttonAnim.ref}>
            <a
              href="/contact.html"
              className={`inline-flex items-center gap-3 bg-black text-acid px-8 py-4 font-mono text-sm font-bold uppercase tracking-widest hover:bg-black/80 transition-all group duration-700 ${
                buttonAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              Send a Message
              <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-12 md:gap-16 mb-12 sm:mb-16 md:mb-24 border-t border-black/10 pt-8 sm:pt-12">
           <div
             ref={contactInfoAnim.ref}
             className={`transition-all duration-1000 ease-out ${
               contactInfoAnim.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full'
             }`}
           >
             <h4 className="font-display font-bold text-xl sm:text-2xl mb-4 sm:mb-8">CONTACT</h4>
             <p className="text-base sm:text-lg md:text-xl font-medium border-b border-black/20 pb-1 inline-block mb-3 sm:mb-4">{COMPANY_INFO.email}</p>
             <p className="text-base sm:text-lg font-medium mb-2">TEL: {COMPANY_INFO.phone}</p>
             <p className="opacity-70 leading-relaxed text-sm sm:text-base">
               {COMPANY_INFO.address}
             </p>
           </div>

           <div
             ref={socialAnim.ref}
             className={`transition-all duration-1000 ease-out ${
               socialAnim.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'
             }`}
           >
              <h4 className="font-display font-bold text-xl sm:text-2xl mb-4 sm:mb-8">SOCIAL</h4>
              <div className="flex flex-row md:flex-col gap-4 sm:gap-6 md:gap-4 items-start flex-wrap">
                 {['Twitter', 'LinkedIn', 'Instagram'].map(social => (
                   <a key={social} href="#" className="text-base sm:text-lg md:text-xl font-medium hover:md:pl-4 transition-all duration-300 flex items-center gap-2 group">
                     {social}
                     <ArrowUpRight size={16} className="opacity-50 md:opacity-0 group-hover:opacity-100 transition-opacity" />
                   </a>
                 ))}
              </div>
           </div>
        </div>

        <div
          ref={footerAnim.ref}
          className={`relative pt-8 sm:pt-12 border-t border-black/10 transition-all duration-1000 ease-out ${
            footerAnim.isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
          }`}
        >
          <div className={`text-[15vw] sm:text-[12vw] font-display font-black leading-none opacity-10 select-none pointer-events-none overflow-hidden transition-all duration-1000 ${
            footerAnim.isVisible ? 'translate-x-0' : '-translate-x-full'
          }`}>
            T.SCREEN
          </div>
          <div className="mt-4 sm:mt-0 sm:absolute sm:bottom-4 sm:right-0 flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-6 text-xs sm:text-sm font-medium uppercase tracking-widest">
             <a href="/privacy.html" className="hover:opacity-60 transition-opacity">Privacy Policy</a>
             <span>© 2024 株式会社T.SCREEN</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
