import '../architect/architect_core_styles.css'
import { MDBCol, MDBInput, MDBTooltip, MDBRange  } from 'mdb-react-ui-kit';


const NumberRangeInput = (props) => {

    return(
    <>
     <div className='w-100'></div>
     <MDBCol size={4}>
     <MDBRange label='Example label' id='formTextExample1' aria-describedby='textExample1' min='0' max='100' step='0.00' placeholder="0-100" defaultValue='' readOnly={true}/>
                <div id='textExample1' className='form-text core-input-label'>
                    <p className='core-input-label-text'>Number Range Input Element  
                    <MDBTooltip tag='a' wrapperProps={{ href: 'https://mekaegwim.ca/MekaEgwim%20--%20Resume.pdf', target:'_blank' }} title="Hi! I'm a tooltip test for long form rendering prospects on the prometheus test inputs!" placement='bottom'>
                    &nbsp;<i className="fa-regular fa-circle-question core-input-icon"></i>
                    </MDBTooltip></p>    
                </div>
    </MDBCol> 
    </>
    )


}
export default NumberRangeInput;