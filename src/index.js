import React from 'react';
import { createRoot } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App/App';

createRoot(document.getElementById('root')).render(
  <Router basename="/JessicaRogadoPortfolioWebsite">
    <App />
  </Router>
);
