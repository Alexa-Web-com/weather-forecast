import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ContextDataProvider } from './context/ContextData';
import { ContextLocationProvider } from './context/ContextLocation';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ContextDataProvider>
      <ContextLocationProvider>
        <App />
      </ContextLocationProvider>
    </ContextDataProvider>
  </React.StrictMode>
);

