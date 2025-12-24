import React, { useState } from 'react';
import { SERVICES } from '../constants';
import { ArrowUpRight } from 'lucide-react';

const Services: React.FC = () => {
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <section id="services" className="py-32 bg-bg relative z-20">
      <div className="container mx-auto px-6 md:px-12">
        
        <div className="mb-24 flex items-end justify-between border-b border-white/10 pb-4">
          <h2 className="text-5xl md:text-8xl font-display font-black text-white uppercase tracking-tighter">
            Capabilities
          </h2>
          <span className="font-mono text-acid text-sm hidden md:block">
            [ SERVICE_INDEX_01-06 ]
          </span>
        </div>

        <div className="flex flex-col">
          {SERVICES.map((service, index) => (
            <div 
              key={service.id}
              className="group relative border-b border-white/10 last:border-b-0 transition-all duration-500"
              onMouseEnter={() => setActiveId(service.id)}
              onMouseLeave={() => setActiveId(null)}
            >
              {/* Background Expansion on Hover */}
              <div className={`absolute inset-0 bg-surface origin-top transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] ${
                activeId === service.id ? 'scale-y-100' : 'scale-y-0'
              }`}></div>

              <div className="relative z-10 py-12 md:py-20 px-4 md:px-8 flex flex-col md:flex-row md:items-baseline gap-8 md:gap-24">
                
                {/* Number */}
                <span className={`font-display text-4xl md:text-6xl font-bold transition-colors duration-300 ${
                  activeId === service.id ? 'text-acid' : 'text-white/20'
                }`}>
                  0{index + 1}
                </span>

                {/* Content */}
                <div className="flex-1">
                  <h3 className={`text-3xl md:text-5xl font-bold mb-4 transition-transform duration-500 ${
                    activeId === service.id ? 'translate-x-4 text-white' : 'text-white'
                  }`}>
                    {service.title}
                  </h3>
                  
                  <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    activeId === service.id ? 'max-h-48 opacity-100 mt-4' : 'max-h-0 opacity-0'
                  }`}>
                    <p className="text-base md:text-lg text-white/70 leading-relaxed max-w-2xl font-light">
                      {service.description}
                    </p>
                    <a href="#" className="inline-flex items-center gap-2 mt-6 text-acid font-mono text-xs uppercase tracking-widest hover:underline">
                      View Case Study <ArrowUpRight size={14} />
                    </a>
                  </div>
                </div>

                {/* Icon / Action */}
                <div className="hidden md:block">
                   <div className={`w-12 h-12 rounded-full border border-white/20 flex items-center justify-center transition-all duration-500 ${
                     activeId === service.id ? 'bg-acid border-acid rotate-45' : 'rotate-0'
                   }`}>
                     <ArrowUpRight className={`w-5 h-5 transition-colors ${
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