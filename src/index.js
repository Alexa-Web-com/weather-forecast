import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ContextLanguageProvider } from './context/ContextLanguage';
import { ContextWeatherDataProvider } from './context/ContextWeatherData';
import { ContextLocationProvider } from './context/ContextLocation';
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'

const options = {
  position: positions.TOP_CENTER,
  timeout: 5000,
  offset: '30px',
  transition: transitions.SCALE
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AlertProvider template={AlertTemplate} {...options}>
      <ContextLanguageProvider>
        <ContextWeatherDataProvider>
          <ContextLocationProvider>
            <App />
          </ContextLocationProvider>
        </ContextWeatherDataProvider>
      </ContextLanguageProvider>
    </AlertProvider>
  </React.StrictMode>
);

