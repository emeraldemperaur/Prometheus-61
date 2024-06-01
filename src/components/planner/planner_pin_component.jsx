import { MDBCol, MDBRow, MDBContainer } from 'mdb-react-ui-kit';
import MSLogo from '../planner/assets/msaw-master-logo-white.png';
import $ from 'jquery';
import '../planner/pin_component_styles.css';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate, useParams } from "react-router-dom";
import { toast } from 'react-toastify';
import PlannerClientInterface from './planner_client_interface';
import PlannerClientInterfaceSBX from './planner_client_interface_sbx';

const PlannerPinConsole = (props) => {
    document.body.style.backgroundColor = "#002c51"
    document.body.style.fontFamily = "Montserrat"
    const [inputPIN, setInputPIN] = useState("");
    const [authenticated, setAuthenticated] = useState(false);
    const planner = useSelector((state) => state.planner.list);
    let plannerId  = useParams(); let planRecord;
    useEffect(() => {
        planRecord = fetchPlanner(planner, plannerId);
      });
    const navigate = useNavigate()
    const addNumber = (id) => {setInputPIN(inputPIN + id); console.log(`PIN Input: ${inputPIN + id}`);}
    const clearPIN = () => {setInputPIN(""); console.log(`PIN Reset`);}
    const submitPIN = (inputPIN) => {
        if (planRecord == null || inputPIN != planRecord.accessPIN || inputPIN == "" || inputPIN.length < 1)  {
            toast.error('Please enter a valid PIN',{ position: "top-right", closeOnClick: true, autoClose: 1000,});
            clearPIN(); console.log(`Invalid PIN Input`)}
        if (planRecord != null && inputPIN == planRecord.accessPIN) {toast.success('Authentication Successful',{ position: "top-right", closeOnClick: true, autoClose: 333,})
        console.log(`Valid PIN Input: ${inputPIN}`);     
        setTimeout(() => {
                setAuthenticated(true);
        }, 693);       
    }
    }
    const fetchPlanner = (plannerList, selectedId) =>{
        let plannerObject
        for(const plan of plannerList){
            console.log(`Selected ID: ${selectedId.id}`)
            if(plan.id == selectedId.id){plannerObject = plan;}
        }
        console.log(plannerList);
        return plannerObject;
    }

    return(
    <>
    
    {!authenticated ?
    <>
    <MDBContainer  fluid style={{height:'100vh', width: '100%', backgroundColor: '#002C51'}}>
    <div >
    <MDBRow>
        <MDBCol>
            <h2 style={{fontFamily:'Montserrat'}} className="pin-ui-logo">Prometheus</h2>
        </MDBCol>
    </MDBRow>
    <MDBRow style={{marginTop: '3px'}}>
        <MDBCol>
        <form action='' method='' name='PINform' id='PINform' autoComplete='off'>
		<input id='PINbox' type='password' value={inputPIN} maxLength="6" name='PINbox' disabled />
		<br/>
		<input type='button' className='PINbutton' name='1' value='1' id='1' onClick={()=>addNumber(1)}/>
		<input type='button' className='PINbutton' name='2' value='2' id='2' onClick={()=>addNumber(2)}/>
		<input type='button' className='PINbutton' name='3' value='3' id='3' onClick={()=>addNumber(3)}/>
		<br/>
		<input type='button' className='PINbutton' name='4' value='4' id='4' onClick={()=>addNumber(4)}/>
		<input type='button' className='PINbutton' name='5' value='5' id='5' onClick={()=>addNumber(5)}/>
		<input type='button' className='PINbutton' name='6' value='6' id='6' onClick={()=>addNumber(6)}/>
		<br/>
		<input type='button' className='PINbutton' name='7' value='7' id='7' onClick={()=>addNumber(7)}/>
		<input type='button' className='PINbutton' name='8' value='8' id='8' onClick={()=>addNumber(8)}/>
		<input type='button' className='PINbutton' name='9' value='9' id='9' onClick={()=>addNumber(9)}/>
		<br/>
		<input type='button' className='PINbutton clear' name='-' value='clear' id='-' onClick={()=>clearPIN()}/>
		<input type='button' className='PINbutton' name='0' value='0' id='0' onClick={()=>addNumber(0)}/>
		<input type='button' className='PINbutton enter' name='+' value='enter' id='+' onClick={()=>submitPIN(inputPIN)}/>
	    </form>
        </MDBCol>    
    </MDBRow>
    <MDBRow>
        <MDBCol>
            <p className='PINprompttext'>Please enter PIN to proceed</p>
            <div className="pin-ui-firm-logo">
            <a href="https://www.morganstanley.com/" target="_blank" rel="noreferrer">
            <img className="pin-ui-firm-logo" width="250px" height="100px"  alt='MS Logo'
            src={MSLogo}/></a>
            </div>
        </MDBCol>
    </MDBRow>
    </div>
    </MDBContainer>
    </>
    :
    <>
    <MDBContainer fluid style={{height:'100vh', backgroundColor: '#ffffff'}}>
    <PlannerClientInterfaceSBX planRecord={fetchPlanner(planner, plannerId)}/>
    </MDBContainer>
    </>}
    
    </>
    )
}
export default PlannerPinConsole;