import { MDBRow, MDBCol, MDBInput, MDBInputGroup, MDBFile } from 'mdb-react-ui-kit';
import Form from 'react-bootstrap/Form';
import '../enquirer/enquirer_styles.css'


const PlannerInputForm = () => {

    return(
        <>
        <MDBRow style={{paddingTop:'23px'}}>
            <MDBCol size={5}>
            <div>
                <Form.Select id='formPlannerCorpName' aria-describedby='plannerCorpName' aria-label="plannerCorpName">
                                <option>&nbsp;</option>
                                <option value="1"></option>
                                <option value="2"></option>
                                <option value="3"></option>
                                <option value="4"></option>
                                <option value="5"></option>
                                </Form.Select>
                    <div id='plannerCorpName' className='form-text form-hint'>Company Name</div>
                </div>
            </MDBCol>
            <MDBCol size={3}>
            <div>
                <Form.Select id='formPlannerProductName' aria-describedby='plannerProductName' aria-label="plannerProductName">
                                <option>&nbsp;</option>
                                <option value="1">Stock Options and Awards</option>
                                <option value="2">Share Purchase and Holdings</option>
                                <option value="3">Online Payments</option>
                                <option value="4">File Feed Integration</option>
                                <option value="5">Single Sign-On Integration</option>
                                </Form.Select>
                    <div id='plannerProductName' className='form-text form-hint'>Product Name</div>
                </div>  
            </MDBCol>
            <MDBCol size={4}>
            <div>
                <Form.Select id='formPlannerPlanName' aria-describedby='plannerPlanName' aria-label="plannerPlanName">
                                <option>&nbsp;</option>
                                <option value="1">Employee Share Purchase Plan</option>
                                <option value="2">Stock Options and Awards</option>
                                <option value="3">Share Purchase and Holdings</option>
                                </Form.Select>
                    <div id='plannerPlanName' className='form-text form-hint'>Plan Name</div>
                </div>  
            </MDBCol>
        </MDBRow>
        <MDBRow style={{paddingTop:'23px'}}>
            <MDBCol size={5}>
                <div>
                    <Form.Select id='formPlannerEnquiryName' aria-describedby='plannerEnquiryName' aria-label="plannerEnquiryName">
                                    <option>&nbsp;</option>
                                    <option value="1">Stock Options and Awards USA</option>
                                    <option value="2">Share Purchase and Holdings USA</option>
                                    <option value="3">Share Purchase and Holdings Global</option>
                                    <option value="4">Online Payments Global</option>
                                    <option value="5">Single Sign-On Integration Global</option>
                                    </Form.Select>
                        <div id='plannerEnquiryName' className='form-text form-hint'>Enquiry</div>
                    </div>  
            </MDBCol>
            <MDBCol size={3}>
                <div id='plannerEnquiryShareInput'>
                    <div id='plannerEnquiryShare' className='form-text form-hint'>Auto share with authorized contact</div>
                    <label style={{float: 'left'}} className="switch"><input id='formPlannerEnquiryShare' type="checkbox"/><span className="slider round"></span></label>
                </div>
            </MDBCol>
        </MDBRow>
        </>
    )
    }
export default PlannerInputForm;