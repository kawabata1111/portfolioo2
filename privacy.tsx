import React from 'react';
import { createRoot } from 'react-dom/client';
import PrivacyPolicy from './components/PrivacyPolicy';

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(
    <React.StrictMode>
      <PrivacyPolicy />
    </React.StrictMode>
  );
}
