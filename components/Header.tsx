import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [time, setTime] = useState(new Date());

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
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 md:px-8 py-4 sm:py-6">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <a href="#hero" className="font-display font-bold text-lg sm:text-xl text-white tracking-tight hover:text-acid transition-colors">
          NOVASPHERE
        </a>

        {/* Time Display */}
        <div className="font-mono text-xs sm:text-sm text-white/60">
          <span className="hidden sm:inline">Tokyo </span>
          {formatTime(time)}
        </div>
      </div>
    </header>
  );
};

export default Header;
