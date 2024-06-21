import { MDBCard, MDBCardBody, MDBCol, MDBTooltip } from 'mdb-react-ui-kit';
import '../architect/architect_core_styles.css'
import { useEffect, useState } from 'react';
import _ from 'lodash'

const MultiFileOutput = (props) => {
    const [inputList, setInputList] = useState(props.inputResponse)
    const [fileList, setFileList] = useState([])
    let indexInt = 0;



    useEffect(() => {
        let outputList = []
        let fileTitle = ""
            for(const key in inputList) {
                fileTitle = inputList[key]
                outputList.push(fileTitle.toString())
              }
            setFileList(outputList)
        
        
        }, [inputList, props.inputResponse]);
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
        {_.isEmpty(props.inputResponse) == false  ?
            <>
            <ol className='core-overview-output-list'>
            { fileList ?
                        fileList.map( outputFileItem => (
                            
                              <li className='core-overview-output-listitem' key={indexInt++}>
                                <i className="fa-regular fa-floppy-disk"></i> <a className='core-overview-output-listitem' href="#" target='_blank'>{outputFileItem}</a>
                              </li>
                           
                          
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
export default MultiFileOutput;