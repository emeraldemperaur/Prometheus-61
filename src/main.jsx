import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './styles/styles.css'
import { P61Provider } from './context/index.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <P61Provider>
    <App/>
    </P61Provider>
  </React.StrictMode>,
)
