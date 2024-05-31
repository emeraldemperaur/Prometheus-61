import '../architect/architect_core_styles.css'
import { MDBCheckbox, MDBCol, MDBTooltip } from 'mdb-react-ui-kit';


const CheckboxInput = (props) => {

    return(
    <>
    {props.newRow ?
            <><div className='w-100'></div></>
            :null}
     <MDBCol key={props.alias} className='checkbox-input-border' size={props.width}>
     {props.optionsList ?
            <>
            { props.optionsList.map( optionItem => (
                                        <MDBCheckbox name={`${props.alias}`} key={optionItem.id} id={`${props.alias}${optionItem.id}FormInput`} label={optionItem.text}
                                        checked={props.value.includes(`${optionItem.text}`)} value={optionItem.text} onBlur={props.onBlur}
                                        onChange={props.onChange} aria-describedby={`${props.alias}InputLabel`} readOnly={props.readOnly} disabled={props.disabled} inline />
                                        
                                        
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
                    {props.errorText && props.touched ?
                        <>
                        <p className='core-input-label-error'>{props.errorText}</p>
                        </>
                        : null}        
                </div>
    </MDBCol>
    </>
    )


}
export default CheckboxInput;