import '../architect/architect_core_styles.css'
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { MDBCol, MDBInput, MDBTooltip } from 'mdb-react-ui-kit';




const TextInput = (props) => {

    return(
    <>
    {props.newRow ?
            <><div className='w-100'></div></>
            :null}
     <MDBCol size={props.width}>
        <MDBInput label={props.inputLabel} id={`${props.alias}FormInput`} type={props.type} aria-describedby={`${props.alias}InputLabel`} 
        placeholder={props.placeholder} defaultValue={props.defaultValue} readonly={props.readOnly}/>
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
export default TextInput;