import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
//@ts-ignore
import AlertTemplate from 'react-alert-template-basic'
import { store } from './store/store'
import { Provider } from 'react-redux'

const options = {
  position: positions.TOP_CENTER,
  timeout: 5000,
  offset: '30px',
  transition: transitions.SCALE
}

const root: ReactDOM.Root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <AlertProvider template={AlertTemplate} {...options}>
        <App />
      </AlertProvider>
    </Provider>
  </React.StrictMode>
);

