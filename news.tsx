import React from 'react';
import { createRoot } from 'react-dom/client';
import NewsPage from './components/pages/NewsPage';

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(
    <React.StrictMode>
      <NewsPage />
    </React.StrictMode>
  );
}
