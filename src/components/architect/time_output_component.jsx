import '../architect/architect_core_styles.css'
import { useEffect, useState } from 'react'
import { MDBCol, MDBCard, MDBCardBody, MDBTooltip } from 'mdb-react-ui-kit';
import { DateTime } from 'luxon'

const TimeOutput = (props) => {
    const [inputTime, setInputTime] = useState("")

    useEffect(() => {
        if(props.inputResponse.trim().length > 1){
            let timeInput = DateTime.fromFormat(props.inputResponse, 'hh:mm', { setZone: false });
            setInputTime(timeInput.toFormat('hh:mm a'))
        } 
        }, [inputTime]);

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
            <a className='core-overview-output-time core-overview-output-text'>{inputTime}</a>
            </>
            :<><a className='core-overview-output-holder'>No Input Provided</a></>}
    </MDBCardBody>
     </MDBCard>
    </MDBCol>
    
    </>
    )


}
export default TimeOutput;