import { MDBCard, MDBCardBody, MDBCol, MDBTooltip } from 'mdb-react-ui-kit';
import '../architect/architect_core_styles.css'


const TextOutput = (props) => {

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
            <><a className='core-overview-output-text'>{props.inputResponse}</a></>
            :<><a className='core-overview-output-holder'>No Input Provided</a></>}
      </MDBCardBody>
     </MDBCard>
    </MDBCol>
    </>
    )


}
export default TextOutput;