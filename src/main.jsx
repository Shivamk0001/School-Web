
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'; 
import './index.css'; 

// Yeh line browser mein #root element ko dhundhti hai
const root = ReactDOM.createRoot(document.getElementById('root'));

// Yeh hamare App component ko #root ke andar render karta hai
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);