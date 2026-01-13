import React from 'react';

const PageFooter: React.FC = () => {
  return (
    <footer className="bg-surface border-t border-white/10 py-8">
      <div className="container mx-auto px-4 sm:px-6 md:px-12 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-white/60 text-sm font-mono uppercase tracking-wider">
          © 2024 T.SCREEN Inc.
        </p>
        <a href="/privacy.html" className="text-white/60 text-sm font-mono uppercase tracking-wider hover:text-acid transition-colors">
          Privacy Policy
        </a>
      </div>
    </footer>
  );
};

export default PageFooter;
