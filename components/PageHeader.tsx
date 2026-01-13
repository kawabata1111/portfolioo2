import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

const PageHeader: React.FC = () => {
  const [time, setTime] = useState(new Date());
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('ja-JP', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false
    });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 md:px-8 py-4 sm:py-6 bg-bg/80 backdrop-blur-md">
      <div className="flex justify-between items-center">
        <a href="/" className="font-display font-bold text-lg sm:text-xl text-white tracking-tight hover:text-acid transition-colors">
          T.SCREEN
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="font-mono text-sm text-white/70 hover:text-acid transition-colors uppercase tracking-wider"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block font-mono text-xs sm:text-sm text-white/60">
          <span>Osaka </span>
          {formatTime(time)}
        </div>

        <button
          className="md:hidden text-white hover:text-acid transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMenuOpen && (
        <nav className="md:hidden mt-4 py-4 border-t border-white/10">
          <div className="flex flex-col gap-4">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="font-mono text-sm text-white/70 hover:text-acid transition-colors uppercase tracking-wider"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
          <div className="mt-4 pt-4 border-t border-white/10 font-mono text-xs text-white/60">
            Osaka {formatTime(time)}
          </div>
        </nav>
      )}
    </header>
  );
};

export default PageHeader;
