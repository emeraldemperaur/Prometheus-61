import '../ostiary/ostiary_styles.css'
import $ from 'jquery';

const Ostiary = () => {

  const onInputChangeHandler = (event) => {
    console.log('Input Detected: '+ event.target.value)
  }

  const onLoginClickHandler = () => {
    console.log('Log In Clicked')
  }

  const onRequestClickHandler = () => {
    console.log('Request Clicked')
  }

    return(
        <div>
             <div  className="container">
              
              <div margin-top="133px" className="box"></div>
              <div className="container-forms ostiary-font">
                <div className="container-info">
                  <div className="info-item">
                    <div className="table">
                      <div className="table-cell">
                        <p>
                          Have an account?
                        </p>
                        <div className="btn" onClick={() => {
                        $(".container").toggleClass("log-in"); 
                    }}>
                          Log in
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="info-item">
                    <div className="table">
                      <div className="table-cell">
                        <p>
                          Need an account? 
                        </p>
                        <div className="btn" onClick={() => {
                      
                        $(".container").toggleClass("log-in");
                      
                    }}>
                          Request
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="container-form">
            
                  <div className="form-item log-in">
                    <div className="table">
                      <div className="table-cell">
            
                        <input className="ostiary-font" name="Username" placeholder="Username" type="text" maxLength="40" autoComplete="email"/>
                        <input className="ostiary-font" name="Password" placeholder="Password" type="Password" maxLength="33" autoComplete="current-password"/>
                        <div className="btn ostiary-font" onClick={onLoginClickHandler}>
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
                        <div className="btn" onClick={onRequestClickHandler}>
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