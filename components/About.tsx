import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 bg-surface text-white relative border-t border-white/5">
      
      {/* Background Typography */}
      <div className="absolute top-0 left-0 w-full overflow-hidden pointer-events-none opacity-5">
        <span className="text-[20vw] font-display font-black leading-none text-white whitespace-nowrap">
          NOVA SPHERE
        </span>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Left Column: Vision */}
          <div className="lg:col-span-7 pt-12">
            <div className="flex items-start gap-4 mb-12">
               <span className="w-px h-20 bg-acid block"></span>
               <div>
                  <span className="text-acid font-mono text-xs tracking-widest uppercase mb-4 block">Our Philosophy</span>
                  <h2 className="text-4xl md:text-6xl font-bold leading-tight font-sans">
                    常識を疑い、<br/>
                    <span className="text-white">最適解</span>を再定義する。
                  </h2>
               </div>
            </div>
            
            <div className="space-y-8 text-white/70 leading-loose text-base md:text-lg font-light pl-5 md:pl-0">
              <p>
                NovaSphere（ノヴァスフィア）は、2018年に東京・六本木で設立されたテック・ブティックです。
                大手SIer出身のエンジニアと、芸術領域のデザイナーが融合することで生まれました。
              </p>
              <p>
                私たちは「動けばいい」システムを作りません。
                使う人の心が躍り、ビジネスの成長速度を劇的に変える「体験」を創り出します。
                AIによる自動化、堅牢なクラウドインフラ、そして心を揺さぶるUI/UX。
                これらを高い次元で融合させることが、私たちの使命です。
              </p>
            </div>

            <div className="mt-16 grayscale hover:grayscale-0 transition-all duration-1000">
               <img 
                   src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop" 
                   alt="Office Environment" 
                   className="w-full h-64 md:h-96 object-cover rounded-sm opacity-80"
                />
            </div>
          </div>

          {/* Right Column: Data & Vertical Text */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            
            {/* Vertical Text Accent */}
            <div className="hidden lg:flex justify-end mb-24">
               <div className="writing-vertical-rl text-white/20 text-sm tracking-[0.5em] font-mono uppercase h-48 border-r border-white/10 pr-6">
                 Engineering for the Future
               </div>
            </div>

            <div className="grid grid-cols-1 gap-12 border-t border-white/10 pt-12">
              {[
                { label: 'ESTABLISHED', value: '2018' },
                { label: 'PROJECTS', value: '150+' },
                { label: 'MEMBERS', value: '45' },
              ].map((stat) => (
                 <div key={stat.label} className="group flex items-end justify-between border-b border-white/10 pb-4">
                    <span className="font-mono text-xs text-acid mb-1 group-hover:translate-x-2 transition-transform">{stat.label}</span>
                    <span className="text-5xl font-display font-black text-white">{stat.value}</span>
                 </div>
              ))}
            </div>
             
             <div className="mt-12">
               <span className="block text-xs font-mono text-white/40 mb-2">LOCATION</span>
               <p className="text-lg font-bold">Roppongi Grand Tower 45F,<br/>Tokyo, Japan</p>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;