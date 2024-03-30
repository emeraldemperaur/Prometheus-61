import '../architect/architect_core_styles.css'
import { MDBCol, MDBTooltip, MDBRange  } from 'mdb-react-ui-kit';


const NumberRangeInput = (props) => {

    return(
    <>
     {props.newRow ?
            <><div className='w-100'></div></>
            :null}
     <MDBCol size={props.width}>
     <MDBRange label={props.inputLabel} id={`${props.alias}FormInput`} aria-describedby={`${props.alias}InputLabel`} min={props.min} max={props.max} step={props.step} 
     placeholder={props.placeholder} defaultValue={props.defaultValue} readOnly={props.readOnly} disabled={props.disabled}/>
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
                </div>
    </MDBCol> 
    </>
    )


}
export default NumberRangeInput;