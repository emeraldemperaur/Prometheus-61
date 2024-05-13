import '../architect/architect_core_styles.css'
import {MDBCol, MDBTooltip } from 'mdb-react-ui-kit';



const ToggleInput = (props) => {

    return(
        <>
        {props.newRow ?
                <><div className='w-100'></div></>
                :null}
         <MDBCol size={props.width}>
         <>
         <div id={`${props.alias}Label`} className='form-text form-hint'>{props.placeholder}</div>
                    <label className="switch switch-input-label"><input id={`${props.alias}FormInput`} name={`${props.alias}`} type="checkbox" aria-describedby={`${props.alias}InputLabel`}
                    readOnly={props.readOnly} disabled={props.disabled} defaultChecked={props.defaultValue} value={props.value} onChange={props.onChange}/><span className="slider round"></span></label>
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
                        {props.errorText ?
                        <>
                        <p className='core-input-label-error'>{props.errorText}</p>
                        </>
                        : null} 
                    </div>
        </MDBCol>
        </>
    )
}
export default ToggleInput;