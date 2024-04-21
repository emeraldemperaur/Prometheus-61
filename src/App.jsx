import { useContext, useState } from 'react'
import './components/navigator/subnavigator_styles.css'
import './components/navigator/navigator_styles.css'
import './components/ostiary/ostiary_style.css'
import 'react-toastify/dist/ReactToastify.css';
import './App.css'
import AuthOstiary from './components/ostiary/auth_ostiary_interface.jsx'
import NavigatorMenu from './components/navigator/navigator_component.jsx'
import DashboardInterface from './components/dashboard/dashboard_interface.jsx'
import RolodexInterface from './components/rolodex/rolodex_interface.jsx';
import EnquirerInterface from './components/enquirer/enquirer_interface.jsx';
import PlannerInterface from './components/planner/planner_interface.jsx';
import OracleInterface from './components/oracle/oracle_interface.jsx';
import TerminalInterface from './components/terminal/terminal_interface.jsx';
import ProfilerInterface from './components/profiler/profiler_interface.jsx';
import CounselInterface from './components/counsel/counsel_interface.jsx';
import { P61Context } from './context/index.jsx'
import { ToastContainer } from 'react-toastify'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PlannerPinConsole from './components/planner/planner_pin_component.jsx';
import PlannerClientInterface from './components/planner/planner_client_interface.jsx';





function App() {
  const [count, setCount] = useState(0);
  const context = useContext(P61Context);
  console.log(context);

  return (
    <>
    <div className="App">
    <ToastContainer stacked/>
   
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<AuthOstiary/>}/>
      <Route path='dashboard' element={<DashboardInterface/>}/>
      <Route path='company-profiles' element={<RolodexInterface/>}/>
      <Route path='query-models' element={<EnquirerInterface/>}/>
      <Route path='plan-forms' element={<PlannerInterface/>}/>
      <Route path="questionnaire/:id" element={<PlannerPinConsole accessPIN={'693324'}/>}/>      
      <Route path='insights' element={<OracleInterface/>}/>
      <Route path='terminal' element={<TerminalInterface/>}/>
      <Route path='user-profile' element={<ProfilerInterface/>}/>
      <Route path='documentation' element={<CounselInterface/>}/>
      <Route path='logout' element={<AuthOstiary/>}/>
    </Routes>
    </BrowserRouter>
    </div>
    </>
  
  )
}

export default App
