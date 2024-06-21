import { MDBCol, MDBCard, MDBCardBody, MDBTooltip } from 'mdb-react-ui-kit';
import '../architect/architect_core_styles.css'
import { useEffect, useState } from 'react';

const CheckboxOutput = (props) => {
    const [inputList, setInputList] = useState([])
    useEffect(() => {
        if(props.inputResponse.length > 1){
            let listInput = props.inputResponse;
            let outputList = [];
            listInput.forEach(response => outputList.push(response));
            setInputList(outputList)
        }
        
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
        {props.inputResponse.length > 1  ?
            <>
            <ol className='core-overview-output-list'>
            { inputList ?
                        inputList.map( outputItem => (
                           
                              <li className='core-overview-output-listitem' key={inputList.indexOf(outputItem)}><i className="fa-solid fa-check"></i> {outputItem}</li>
                           
                          
                        )):null
            }
             </ol>
            </>
            :<><a className='core-overview-output-holder'>No Input Provided</a></>}   
            </MDBCardBody>
     </MDBCard> 
    </MDBCol>
    </>
    )


}
export default CheckboxOutput;