import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

const rootElement = document.getElementById('root');
if (!rootElement) {
  console.error('Failed to find the root element');
  throw new Error('Failed to find the root element');
}

console.log('Root element found:', rootElement);

const root = createRoot(rootElement);

console.log('React root created:', root);

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
  () => {
    console.log('React app rendered successfully');
  }
);
