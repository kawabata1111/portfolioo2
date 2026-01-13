import React from 'react';
import { createRoot } from 'react-dom/client';
import AboutPage from './components/pages/AboutPage';

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(
    <React.StrictMode>
      <AboutPage />
    </React.StrictMode>
  );
}
