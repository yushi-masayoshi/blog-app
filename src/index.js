import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AuthFlagProvider } from './components/providers/AuthFlagProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthFlagProvider>
    <App />
  </AuthFlagProvider>
);