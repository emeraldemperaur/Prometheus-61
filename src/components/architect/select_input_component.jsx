import '../architect/architect_core_styles.css'
import Form from 'react-bootstrap/Form';
import { MDBCol, MDBTooltip } from 'mdb-react-ui-kit';



const SelectInput = (props) => {

    return(
    <>
    {props.newRow ?
            <><div className='w-100'></div></>
            :null}
     <MDBCol size={props.width}>
     <Form.Select multiple={false} label={props.inputLabel} id={`${props.alias}FormInput`} aria-describedby={`${props.alias}InputLabel`} 
     placeholder={props.placeholder} defaultValue={props.defaultValue} readOnly={props.readOnly} disabled={props.disabled}>
      <option></option>
      {props.optionsList ?
            <>
            { props.optionsList.map( optionItem => (
                                        <option key={optionItem.id} value={optionItem.text}>{optionItem.text}</option>
                                        ))}
            </>
            :null}
    </Form.Select>
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
export default SelectInput;