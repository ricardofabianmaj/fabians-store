import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import reportWebVitals from './reportWebVitals.js';

// Para o tailwind funcionar use: npx tailwindcss -i ./src/input.css -o ./src/output.css --watch
//For the tailwind works use: npx tailwindcss -i ./src/input.css -o ./src/output.css --watch
import './output.css'

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
