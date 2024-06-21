import { useEffect, useState } from 'react';
import '../architect/architect_core_styles.css'
import { MDBCol, MDBCard, MDBCardBody, MDBTooltip } from 'mdb-react-ui-kit';


const DateOutput = (props) => {
    const [inputDate, setInputDate] = useState("")
    const [inputDay, setInputDay] = useState("")
    useEffect(() => {
        if(props.inputResponse.trim().length > 1){
            let dateInput = new Date(`${props.inputResponse}T00:00:00`);
            setInputDay(dateInput.toLocaleDateString("en-US", {weekday: 'long'}))
            setInputDate(dateInput.toLocaleDateString("en-US", {year: 'numeric', month: 'long', day: 'numeric' }))
        } 
        }, [inputDate, inputDay]);

    return(
    <>
    {props.newRow ?
            <><div className='w-100'></div></>
            :null}
     <MDBCol className='core-overview-output-box' size={props.width}>
     <MDBCard className='core-overview-card-box core-overview-card'>
      <MDBCardBody>
      {props.isHinted ?
            <>
            <MDBTooltip tag='p' wrapperClass="core-overview-heading" placement='bottom'
            wrapperProps={{href: props.hintLink}} title={props.hintText}>
            {props.inputLabel}</MDBTooltip>
            </>
            :<>
            <p className='core-overview-heading'>{props.inputLabel}</p>
            </>}
        {props.inputResponse.trim().length > 1  ?
            <>
            <a className='core-overview-output-superscript'>{inputDay}</a>
            <br/>
            <a className='core-overview-output-text'>{inputDate}</a>
            </>
            :<><a className='core-overview-output-holder'>No Input Provided</a></>}
    </MDBCardBody>
     </MDBCard>
    </MDBCol>
    
    </>
    )


}
export default DateOutput;