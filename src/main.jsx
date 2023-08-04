/* This code is importing necessary modules and components for a React application and rendering them
to the DOM. */
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import MainContent from './components/MainContent.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <MainContent />
  </React.StrictMode>,
)
