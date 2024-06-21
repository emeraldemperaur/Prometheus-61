import { useEffect, useState } from 'react';
import '../architect/architect_core_styles.css'
import { MDBCard, MDBCardBody, MDBCol, MDBTooltip } from 'mdb-react-ui-kit';


const ToggleOutput = (props) => {
    const [inputOutput, setOutput] = useState(false)

    useEffect(() => {
        if(props.inputResponse == true){setOutput("Yes");}
        if(props.inputResponse == false){setOutput("No");}
        }, [props.inputResponse]);

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
        {props.inputResponse == true   ?
            <><a className='core-overview-output-number'>{inputOutput}</a></>
            :<><a className='core-overview-output-number'>{inputOutput}</a></>}
        </MDBCardBody>
     </MDBCard>  
    </MDBCol>
    </>
    )


}
export default ToggleOutput;