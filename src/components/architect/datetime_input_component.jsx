import '../architect/architect_core_styles.css'
import { MDBCol, MDBInput, MDBTooltip } from 'mdb-react-ui-kit';



const DateTimeInput = (props) => {

    return(
    <>
    {props.newRow ?
            <><div className='w-100'></div></>
            :null}
    <MDBCol size={props.width}>
    <MDBInput label={false} id={`${props.alias}FormInput`} name={`${props.alias}`} type='datetime-local' aria-describedby={`${props.alias}InputLabel`} 
    placeholder={props.placeholder} defaultValue={props.defaultValue} value={props.value} onChange={props.onChange} readonly={props.readOnly}/>
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
export default DateTimeInput;