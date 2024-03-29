import { useContext, useRef, useState } from 'react';
import '../ostiary/ostiary_styles.css'
import $ from 'jquery';
import { P61Context } from '../../context';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Ostiary = () => {
  const loginUserInput = useRef();
  const loginKeyInput = useRef();
  const context61 = useContext(P61Context);
  const [error, setError] = useState([false,''])
  let navigate = useNavigate();


  const onInputChangeHandler = (event) => {
    console.log('Input Detected: '+ event.target.value)
  }

  const onLoginClickHandler = () => {
    const validated = validateInput(loginUserInput.current.value)
    console.log('Log In Clicked');
    console.log(`UserID: ${loginUserInput.current.value}`);
    console.log(`UserKey: ${loginKeyInput.current.value}`);
    if(validated){
      setError([false, ''])
      context61.userLog(loginUserInput.current.value, loginKeyInput.current.value);
      navigate('/dashboard')

    }
  }

  const onRequestClickHandler = () => {
    console.log('Request Clicked')
  }

  const validateInput = (value) =>{
    if(value === ''){
      setError([true,'Input Required'])
      toast.error('Login Credentials Required',{
        position: "top-right",
        closeOnClick: true
      })
      return false;
    }
    return true;
  }

    return(
        <div>
          
             <div  className="ost-container">
              <div margin-top="133px" className="box"></div>
              <div className="ost-container-forms ostiary-font">
                <div className="ost-container-info">
                  <div className="info-item">
                    <div className="table">
                      <div className="table-cell">
                        <p className='ost-highlight'>
                          Have an account?
                        </p>
                        <div className="ost-btn" onClick={() => {
                        $(".ost-container").toggleClass("log-in"); 
                    }}>
                          Log in
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="info-item">
                    <div className="table">
                      <div className="table-cell">
                        <p className="ost-highlight">
                          Need an account? 
                        </p>
                        <div className="ost-btn" onClick={() => {
                      
                        $(".ost-container").toggleClass("log-in");
                      
                    }}>
                          Request
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ost-container-form">
            
                  <div className="form-item log-in">
                    <div className="table">
                      <div className="table-cell">
            
                        <input ref={loginUserInput} className="ostiary-font" name="Username" placeholder="Username" type="text" maxLength="40" autoComplete="email"/>
                        <input ref={loginKeyInput} className="ostiary-font" name="Password" placeholder="Password" type="Password" maxLength="33" autoComplete="current-password"/>
                        <div className="ost-btn ostiary-font" onClick={onLoginClickHandler}>
                          Log in
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="form-item sign-up">
                    <div className="table">
                      <div className="table-cell">
                        <input onChange={onInputChangeHandler} 
                        className="ostiary-font" name="corpEmail" placeholder="Morgan Stanley Email" type="text" maxLength="69" autoComplete="email"/>
                        <input onChange={onInputChangeHandler} 
                        className="ostiary-font" name="lastName" placeholder="Last Name" type="text" maxLength="33" autoComplete="family-name"/>
                        <input onChange={onInputChangeHandler}
                        className="ostiary-font" name="UUID" placeholder="MSID" type="text" maxLength="6" autoComplete="username"/>
                        <div className="ost-btn" onClick={onRequestClickHandler}>
                          Request
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
    )
}
export default Ostiary;