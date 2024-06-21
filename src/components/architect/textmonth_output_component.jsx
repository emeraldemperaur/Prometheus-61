import { MDBCol, MDBCard, MDBCardBody, MDBTooltip } from 'mdb-react-ui-kit';
import '../architect/architect_core_styles.css'
import { useEffect, useState } from 'react'
import { fetchMonth } from '../../utils/chronos'

const TextMonthOutput = (props) => {
    const [inputYear, setInputYear] = useState("")
    const [inputMonth, setInputMonth] = useState("")
    useEffect(() => {
        if(props.inputResponse.trim().length > 1){
            let monthInput = props.inputResponse.split("-");
            let year = monthInput[0];
            setInputYear(year);
            let rawMonth = monthInput[1];
            setInputMonth(fetchMonth(parseInt(rawMonth)));
        } 
        }, [inputYear, inputMonth, props.inputResponse]);

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
            <a className='core-overview-output-text'>{inputMonth}</a>
            &nbsp; &nbsp;  
            <a className='core-overview-output-year core-overview-output-superscript'>{inputYear}</a>
            </>
            :<><a className='core-overview-output-holder'>No Input Provided</a></>}
            </MDBCardBody>
     </MDBCard>
    </MDBCol>
    
    </>
    )


}
export default TextMonthOutput;