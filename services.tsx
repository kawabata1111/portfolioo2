import React from 'react';
import { createRoot } from 'react-dom/client';
import ServicesPage from './components/pages/ServicesPage';

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(
    <React.StrictMode>
      <ServicesPage />
    </React.StrictMode>
  );
}
