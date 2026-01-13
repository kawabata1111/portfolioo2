import React from 'react';
import { createRoot } from 'react-dom/client';
import ContactPage from './components/pages/ContactPage';

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(
    <React.StrictMode>
      <ContactPage />
    </React.StrictMode>
  );
}
