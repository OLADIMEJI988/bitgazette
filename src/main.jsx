import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import "@fontsource/plus-jakarta-sans";
import "@fontsource/manrope";
import "@fontsource/newsreader";
import "./index.css";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
