import React from 'react'
import { StrictMode } from 'react'
import ReactDOM, { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import ScrollToTop from './components/ScrollToTop'; // Adjust path if needed


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
     <ScrollToTop /> 
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
