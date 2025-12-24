import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { COMPANY_INFO } from '../constants';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="bg-acid text-black pt-32 pb-12 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        
        <div className="mb-24">
          <p className="font-mono text-sm tracking-widest uppercase mb-4 opacity-60">Have an idea?</p>
          <a href="mailto:contact@novasphere.co.jp" className="block text-[10vw] leading-[0.8] font-display font-black tracking-tighter hover:opacity-50 transition-opacity">
            LET'S TALK
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24 border-t border-black/10 pt-12">
           <div>
             <h4 className="font-display font-bold text-2xl mb-8">CONTACT</h4>
             <p className="text-xl font-medium border-b border-black/20 pb-1 inline-block mb-4">contact@novasphere.co.jp</p>
             <p className="opacity-70 leading-relaxed">
               {COMPANY_INFO.address}
             </p>
           </div>
           
           <div>
              <h4 className="font-display font-bold text-2xl mb-8">SOCIAL</h4>
              <div className="flex flex-col gap-4 items-start">
                 {['Twitter', 'LinkedIn', 'Instagram'].map(social => (
                   <a key={social} href="#" className="text-xl font-medium hover:pl-4 transition-all duration-300 flex items-center gap-2 group">
                     {social}
                     <ArrowUpRight size={18} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                   </a>
                 ))}
              </div>
           </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-end pt-12 border-t border-black/10">
          <div className="text-[12vw] font-display font-black leading-none opacity-10 select-none pointer-events-none">
            NOVA
          </div>
          <div className="flex gap-8 text-sm font-medium uppercase tracking-widest pb-4">
             <a href="#">Privacy</a>
             <a href="#">Terms</a>
             <span>© 2024</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;