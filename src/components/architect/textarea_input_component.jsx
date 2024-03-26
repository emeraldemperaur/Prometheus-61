import '../architect/architect_core_styles.css'
import { MDBCol, MDBTooltip, MDBTextArea } from 'mdb-react-ui-kit';



const TextAreaInput = (props) => {

    return(
    <>
    <MDBCol size={4}>
    <MDBTextArea label='Example label' id='formTextExample1' aria-describedby='textExample1'  placeholder="0-100" defaultValue='' rows={3} readonly={true}/>
                <div id='textExample1' className='form-text core-input-label'>
                    <p className='core-input-label-text'>TextArea Input Element  
                    <MDBTooltip tag='a' wrapperProps={{ href: 'https://mekaegwim.ca/MekaEgwim%20--%20Resume.pdf', target:'_blank' }} title="Hi! I'm a tooltip test for long form rendering prospects on the prometheus test inputs!" placement='bottom'>
                    &nbsp;<i className="fa-regular fa-circle-question core-input-icon"></i>
                    </MDBTooltip></p>    
                </div>
    </MDBCol> 
    </>
    )


}
export default TextAreaInput;