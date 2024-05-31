import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import App from './App.jsx'
import './index.css'
import './styles/styles.css'
import { P61Provider } from './context/index.jsx'
import { Provider } from 'react-redux';
import { forgeStore } from './forge/index.js';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={forgeStore}>
      <P61Provider>
        <App/>
      </P61Provider>
    </Provider>
  </React.StrictMode>,
)
