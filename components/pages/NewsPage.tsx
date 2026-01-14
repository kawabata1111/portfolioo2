import React, { useState, useEffect } from 'react';
import PageHeader from '../PageHeader';
import PageFooter from '../PageFooter';
import { NEWS } from '../../constants';

const NewsPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

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
            }`}>Updates</p>
            <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white uppercase tracking-tight mb-6 transition-all duration-1000 ${
              isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full'
            }`}>
              News
            </h1>
            <p className={`text-white/60 max-w-2xl text-lg leading-relaxed transition-all duration-700 delay-300 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              株式会社T.SCREENからの最新のお知らせをご覧いただけます。
            </p>
          </div>

          {/* News List */}
          <div className="space-y-6">
            {NEWS.map((item, index) => (
              <article
                key={item.id}
                className={`group bg-surface border border-white/10 p-6 sm:p-8 rounded-sm hover:border-acid/50 transition-all duration-700 ease-out ${
                  isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'
                }`}
                style={{ transitionDelay: `${index * 150 + 400}ms` }}
              >
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-xs text-white/30">0{index + 1}</span>
                    <span className="font-mono text-sm text-white/60">{item.date}</span>
                    <span className="px-3 py-1 bg-acid/10 text-acid font-mono text-xs uppercase tracking-wider">
                      {item.category}
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-acid transition-colors flex-1">
                    {item.title}
                  </h3>
                </div>
              </article>
            ))}
          </div>

          {/* Empty State (if no news) */}
          {NEWS.length === 0 && (
            <div className="text-center py-16">
              <p className="text-white/60">現在お知らせはありません。</p>
            </div>
          )}
        </div>
      </main>

      <PageFooter />
    </div>
  );
};

export default NewsPage;
