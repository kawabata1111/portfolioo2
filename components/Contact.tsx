import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { COMPANY_INFO } from '../constants';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="bg-acid text-black pt-16 sm:pt-24 md:pt-32 pb-8 sm:pb-12 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 md:px-12">

        <div className="mb-12 sm:mb-16 md:mb-24">
          <p className="font-mono text-xs sm:text-sm tracking-widest uppercase mb-3 sm:mb-4 opacity-60">Have an idea?</p>
          <a href="mailto:contact@novasphere.co.jp" className="block text-[12vw] sm:text-[10vw] leading-[0.8] font-display font-black tracking-tighter hover:opacity-50 transition-opacity">
            LET'S TALK
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-12 md:gap-16 mb-12 sm:mb-16 md:mb-24 border-t border-black/10 pt-8 sm:pt-12">
           <div>
             <h4 className="font-display font-bold text-xl sm:text-2xl mb-4 sm:mb-8">CONTACT</h4>
             <p className="text-base sm:text-lg md:text-xl font-medium border-b border-black/20 pb-1 inline-block mb-3 sm:mb-4">contact@novasphere.co.jp</p>
             <p className="opacity-70 leading-relaxed text-sm sm:text-base">
               {COMPANY_INFO.address}
             </p>
           </div>

           <div>
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

        <div className="flex flex-col-reverse sm:flex-row justify-between items-start sm:items-end pt-8 sm:pt-12 border-t border-black/10 gap-4">
          <div className="text-[15vw] sm:text-[12vw] font-display font-black leading-none opacity-10 select-none pointer-events-none">
            NOVA
          </div>
          <div className="flex gap-4 sm:gap-6 md:gap-8 text-xs sm:text-sm font-medium uppercase tracking-widest pb-2 sm:pb-4">
             <span>© 2024 NovaSphere Solutions</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
