import { useContext, useState } from 'react'
import './components/navigator/subnavigator_styles.css'
import './components/navigator/navigator_styles.css'
import './components/ostiary/ostiary_style.css'
import './App.css'
import AuthOstiary from './components/ostiary/auth_ostiary_interface.jsx'
import NavigatorMenu from './components/navigator/navigator_component.jsx'
import DashboardInterface from './components/dashboard/dashboard_interface.jsx'
import { P61Context } from './context/index.jsx'
import { ToastContainer } from 'react-toastify'



function App() {
  const [count, setCount] = useState(0);
  const context = useContext(P61Context);
  console.log(context);

  return (
    <>
    <NavigatorMenu/>
    <AuthOstiary/>
    <ToastContainer/>
    
    {/*
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      */}

    </>
  
  )
}

export default App
