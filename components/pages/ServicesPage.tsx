import React from 'react';
import PageHeader from '../PageHeader';
import PageFooter from '../PageFooter';
import { SERVICES } from '../../constants';

const ServicesPage: React.FC = () => {
  return (
    <div className="bg-bg text-text min-h-screen">
      <div className="grain"></div>
      <PageHeader />

      <main className="pt-32 pb-16">
        <div className="container mx-auto px-4 sm:px-6 md:px-12">
          {/* Hero Section */}
          <div className="mb-16 sm:mb-24">
            <p className="text-acid font-mono text-xs tracking-widest uppercase mb-4">What We Do</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white uppercase tracking-tight mb-6">
              Services
            </h1>
            <p className="text-white/60 max-w-2xl text-lg leading-relaxed">
              株式会社T.SCREENは、研修事業、スマホ関連グッズ卸売業、Amazon物販の3つの事業を展開しています。
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.id}
                  className="group bg-surface border border-white/10 p-8 rounded-sm hover:border-acid/50 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-12 h-12 flex items-center justify-center bg-acid/10 text-acid rounded-sm group-hover:bg-acid group-hover:text-black transition-all duration-300">
                      <Icon size={24} />
                    </div>
                    <span className="font-mono text-xs text-white/30">0{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-display font-bold text-white mb-4 uppercase tracking-wide">
                    {service.title}
                  </h3>
                  <p className="text-white/60 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* CTA Section */}
          <div className="mt-24 text-center">
            <p className="text-white/60 mb-6">サービスに関するお問い合わせはこちら</p>
            <a
              href="/contact.html"
              className="inline-block bg-acid text-black px-8 py-4 font-mono text-sm font-bold uppercase tracking-widest hover:bg-white transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </main>

      <PageFooter />
    </div>
  );
};

export default ServicesPage;
