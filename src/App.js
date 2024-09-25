import './App.css';
import AppComponent from './AppComponent';
import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './components/dashboard/home';
import { HashRouter as Router } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
      <Home />
  </>
  
);

export default App;
