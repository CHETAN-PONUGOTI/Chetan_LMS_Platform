import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// 1. Find the root div from the HTML
const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

// 2. Tell React to render your main App component inside the root div
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);