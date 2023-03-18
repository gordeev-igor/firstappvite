import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from "react-router-dom";
import { PersistentStoreProvider } from './store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PersistentStoreProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PersistentStoreProvider>
  </React.StrictMode>,
)
