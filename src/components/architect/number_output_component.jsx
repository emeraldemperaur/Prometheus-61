import { MDBCol, MDBTooltip, MDBCard, MDBCardBody } from 'mdb-react-ui-kit';
import '../architect/architect_core_styles.css'
import { useEffect, useState } from 'react';


const NumberOutput = (props) => {

    const [inputNumber, setInputNumber] = useState(0)
    useEffect(() => {
        if(props.inputResponse.trim().length > 1){
            let numberInput = parseInt(props.inputResponse)
            setInputNumber(numberInput.toLocaleString())
        }
        
        }, [inputNumber]);

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
            <><a className='core-overview-output-number'>{inputNumber}</a></>
            :<><a className='core-overview-output-holder'>No Input Provided</a></>}
    </MDBCardBody>
     </MDBCard>
    </MDBCol>
    </>
    )


}
export default NumberOutput;