import React from 'react';
import { ArrowRight } from 'lucide-react';
import { NEWS } from '../constants';

const News: React.FC = () => {
  return (
    <section id="news" className="py-16 sm:py-24 md:py-32 bg-bg relative z-10">
      <div className="container mx-auto px-4 sm:px-6 md:px-12">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 sm:mb-16 md:mb-20 border-b border-white/10 pb-4 sm:pb-6 gap-4">
          <div>
            <span className="text-acid font-mono text-xs tracking-widest uppercase mb-2 block">Updates</span>
            <h3 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-black text-white tracking-tighter">
              JOURNAL
            </h3>
          </div>
          <a href="#" className="hidden sm:flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 bg-white text-black hover:bg-acid transition-colors font-mono text-xs font-bold uppercase tracking-widest">
            View All Archive
            <ArrowRight size={14} />
          </a>
        </div>

        <div className="grid grid-cols-1">
          {NEWS.map((item) => (
            <a
              key={item.id}
              href="#"
              className="group flex flex-col md:flex-row md:items-baseline gap-4 sm:gap-6 md:gap-16 py-6 sm:py-8 md:py-12 border-b border-white/10 hover:border-acid/50 transition-colors duration-300"
            >
               <div className="flex flex-row md:flex-col gap-3 sm:gap-4 md:w-48 flex-shrink-0">
                  <span className="font-mono text-xs sm:text-sm text-white/50 group-hover:text-acid transition-colors">
                    {item.date}
                  </span>
                  <span className="inline-block px-2 py-1 border border-white/20 text-[10px] font-bold uppercase tracking-wider text-white w-fit group-hover:bg-white group-hover:text-black transition-all">
                    {item.category}
                  </span>
               </div>

               <div className="flex-1">
                 <h4 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white group-hover:text-acid transition-colors duration-300 leading-normal">
                   {item.title}
                 </h4>
               </div>

               <div className="hidden md:block opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                  <ArrowRight className="text-acid" size={24} />
               </div>
            </a>
          ))}
        </div>

        <div className="mt-8 sm:mt-12 sm:hidden">
           <a href="#" className="flex w-full items-center justify-center gap-2 px-6 py-4 border border-white/20 text-white hover:bg-white hover:text-black transition-colors font-mono text-xs font-bold uppercase tracking-widest">
             View All Archive
           </a>
        </div>
      </div>
    </section>
  );
};

export default News;
