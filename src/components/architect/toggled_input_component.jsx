import '../architect/architect_core_styles.css'
import {MDBCol, MDBCollapse, MDBTooltip } from 'mdb-react-ui-kit';
import { useState } from 'react';


const ToggledInput = (props) => {
    const [toggleCollapse, setToggleCollapse] = useState(props.value.includes(`${props.alias}`));
    const inputCollapse = () => {
        if(document.getElementById(`${props.alias}FormInput`).checked){setToggleCollapse(true);}
        if(!document.getElementById(`${props.alias}FormInput`).checked){setToggleCollapse(false);}
    }
    return(
    <>
    {props.newRow ?
                <><div className='w-100'></div></>
                :null}
         <MDBCol key={props.alias} size={props.width}>
         <>
         <div id={`${props.alias}Label`} className='form-text form-hint'>{props.placeholder}</div>
                    <label className="switch switch-input-label"><input id={`${props.alias}FormInput`} name={`${props.alias}`} aria-describedby={`${props.alias}InputLabel`} 
                    type="checkbox" onClick={()=>{inputCollapse()}} onChange={props.onChange}
                    readOnly={props.readOnly} disabled={props.disabled} checked={props.value.includes(`${props.alias}`)} value={props.alias} onBlur={props.onBlur}/>
                    <span className="slider round"></span>
                    </label>
         </>
                    <div id={`${props.alias}InputLabel`} className='form-text core-input-label'>
                        <p className='core-input-label-text'>{props.inputLabel}  
                        {props.isHinted ?
                        <>
                        <MDBTooltip tag='a' wrapperProps={{ href: props.hintLink, target:'_blank' }} 
                        title={props.hintText} placement='bottom'>
                        &nbsp;<i className="fa-regular fa-circle-question core-input-icon"></i>
                        </MDBTooltip>
                        </>
                        :null}  
                        </p>
                        {props.errorText && props.touched ?
                        <>
                        <p className='core-input-label-error'>{props.errorText}</p>
                        </>
                        : null}      
                    </div>
        </MDBCol>
        <MDBCol size={props.toggledInputWidth}>
            <>
            <MDBCollapse open={toggleCollapse}>
            {props.toggledInputElement}
            </MDBCollapse>
            </>
        </MDBCol>
    
    </>
    )
}
export default ToggledInput;