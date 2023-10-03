import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BasketProvider } from './context/basketContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* sağlayıcı app.js'i kapsayacak şekilde konumlandırıyoruz. */}
    <BasketProvider>
    <App />
    </BasketProvider>
  </React.StrictMode>
)
