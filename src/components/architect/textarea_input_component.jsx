import '../architect/architect_core_styles.css'
import { MDBCol, MDBTooltip, MDBTextArea } from 'mdb-react-ui-kit';



const TextAreaInput = (props) => {

    return(
    <>
    {props.newRow ?
            <><div className='w-100'></div></>
            :null}
    <MDBCol size={props.width}>
    <MDBTextArea label={props.inputLabel} id={`${props.alias}FormInput`} aria-describedby={`${props.alias}InputLabel`}  
    placeholder={props.placeholder} defaultValue={props.defaultValue} rows={props.rows} readonly={props.readOnly}/>
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
export default TextAreaInput;