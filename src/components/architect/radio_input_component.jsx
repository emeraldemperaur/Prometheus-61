import '../architect/architect_core_styles.css'
import { MDBRadio, MDBCol, MDBTooltip } from 'mdb-react-ui-kit';



const RadioInput = (props) => {

    return(
        <>
        {props.newRow ?
                <><div className='w-100'></div></>
                :null}
         <MDBCol className='checkbox-input-border' size={props.width}>
         {props.optionsList ?
                <>
                { props.optionsList.map( optionItem => (
                                            <MDBRadio name={props.alias} key={optionItem.id} id={`${props.alias}${optionItem.id}FormInput`} value={optionItem.text} label={optionItem.text} 
                                            aria-describedby={`${props.alias}InputLabel`} readOnly={props.readOnly} disabled={props.disabled} inline />
                                            ))}
                </>
                :null}
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
export default RadioInput;