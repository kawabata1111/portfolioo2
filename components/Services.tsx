import React, { useState } from 'react';
import { SERVICES } from '../constants';
import { ArrowUpRight } from 'lucide-react';

const Services: React.FC = () => {
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <section id="services" className="py-16 sm:py-24 md:py-32 bg-bg relative z-20">
      <div className="container mx-auto px-4 sm:px-6 md:px-12">

        <div className="mb-12 sm:mb-16 md:mb-24 flex flex-col sm:flex-row sm:items-end justify-between border-b border-white/10 pb-4 gap-4">
          <h2 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-display font-black text-white uppercase tracking-tighter">
            Capabilities
          </h2>
          <span className="font-mono text-acid text-xs sm:text-sm">
            [ SERVICE_INDEX_01-06 ]
          </span>
        </div>

        <div className="flex flex-col">
          {SERVICES.map((service, index) => (
            <div
              key={service.id}
              className="group relative border-b border-white/10 last:border-b-0 transition-all duration-500 block cursor-pointer"
              onMouseEnter={() => setActiveId(service.id)}
              onMouseLeave={() => setActiveId(null)}
            >
              {/* Background Expansion on Hover */}
              <div className={`absolute inset-0 bg-surface origin-top transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] ${
                activeId === service.id ? 'scale-y-100' : 'scale-y-0'
              }`}></div>

              <div className="relative z-10 py-6 sm:py-8 md:py-12 lg:py-20 px-2 sm:px-4 md:px-8 flex flex-col sm:flex-row sm:items-baseline gap-4 sm:gap-6 md:gap-12 lg:gap-24">

                {/* Number */}
                <span className={`font-display text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold transition-colors duration-300 ${
                  activeId === service.id ? 'text-acid' : 'text-white/20'
                }`}>
                  0{index + 1}
                </span>

                {/* Content */}
                <div className="flex-1">
                  <h3 className={`text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold mb-2 md:mb-4 transition-transform duration-500 ${
                    activeId === service.id ? 'md:translate-x-4 text-white' : 'text-white'
                  }`}>
                    {service.title}
                  </h3>

                  {/* Always visible on mobile, hover on desktop */}
                  <div className={`overflow-hidden transition-all duration-500 ease-in-out sm:max-h-0 sm:opacity-0 max-h-48 opacity-100 mt-2 ${
                    activeId === service.id ? 'sm:max-h-48 sm:opacity-100 sm:mt-4' : ''
                  }`}>
                    <p className="text-sm sm:text-base md:text-lg text-white/70 leading-relaxed max-w-2xl font-light">
                      {service.description}
                    </p>
                    <span className="inline-flex items-center gap-2 mt-4 sm:mt-6 text-acid font-mono text-xs uppercase tracking-widest">
                      Learn More <ArrowUpRight size={14} />
                    </span>
                  </div>
                </div>

                {/* Icon / Action */}
                <div className="hidden md:block">
                   <div className={`w-10 h-10 lg:w-12 lg:h-12 rounded-full border border-white/20 flex items-center justify-center transition-all duration-500 ${
                     activeId === service.id ? 'bg-acid border-acid rotate-45' : 'rotate-0'
                   }`}>
                     <ArrowUpRight className={`w-4 h-4 lg:w-5 lg:h-5 transition-colors ${
                       activeId === service.id ? 'text-black' : 'text-white'
                     }`} />
                   </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;