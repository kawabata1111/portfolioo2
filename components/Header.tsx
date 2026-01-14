import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

const Header: React.FC = () => {
  const [time, setTime] = useState(new Date());
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    setTimeout(() => setIsLoaded(true), 100);
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
        {/* Logo */}
        <a
          href="#hero"
          className={`font-display font-bold text-lg sm:text-xl text-white tracking-tight hover:text-acid transition-all duration-700 ${
            isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
          }`}
        >
          T.SCREEN
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item, index) => (
            <a
              key={item.label}
              href={item.href}
              className={`font-mono text-sm text-white/70 hover:text-acid transition-all duration-500 uppercase tracking-wider ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
              }`}
              style={{ transitionDelay: `${index * 100 + 200}ms` }}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Time Display - Desktop */}
        <div className={`hidden md:block font-mono text-xs sm:text-sm text-white/60 transition-all duration-700 ${
          isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
        }`} style={{ transitionDelay: '600ms' }}>
          <span>Osaka </span>
          {formatTime(time)}
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden text-white hover:text-acid transition-all duration-500 ${
            isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
          }`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <nav className={`md:hidden overflow-hidden transition-all duration-500 ease-out ${
        isMenuOpen ? 'max-h-96 opacity-100 mt-4 py-4' : 'max-h-0 opacity-0'
      }`}>
        <div className="flex flex-col gap-4 border-t border-white/10 pt-4">
          {NAV_ITEMS.map((item, index) => (
            <a
              key={item.label}
              href={item.href}
              className={`font-mono text-sm text-white/70 hover:text-acid transition-all duration-300 uppercase tracking-wider ${
                isMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
              }`}
              style={{ transitionDelay: isMenuOpen ? `${index * 50}ms` : '0ms' }}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
        <div className={`mt-4 pt-4 border-t border-white/10 font-mono text-xs text-white/60 transition-all duration-300 ${
          isMenuOpen ? 'opacity-100' : 'opacity-0'
        }`} style={{ transitionDelay: isMenuOpen ? '250ms' : '0ms' }}>
          Osaka {formatTime(time)}
        </div>
      </nav>
    </header>
  );
};

export default Header;
