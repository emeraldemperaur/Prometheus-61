import { MDBRow, MDBCol, MDBInput, MDBInputGroup, MDBFile } from 'mdb-react-ui-kit';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import '../enquirer/enquirer_styles.css'
import { productPlanItems } from '../../utils/options_data';



const PlannerInputForm = () => {
    const [productPlans, setProductPlans] = useState([{id:"0", title:" "}]);

    const setPlannerProductPlan = () => {
        let productRef = document.getElementById("formPlannerProductName");
        console.log(productRef.options[productRef.selectedIndex].value)
        for (const product of productPlanItems){
            if (product.title == productRef.options[productRef.selectedIndex].value){
                setProductPlans(product.plans)
            }
        }
        
    }

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
                <Form.Select id='formPlannerProductName' aria-describedby='plannerProductName' aria-label="plannerProductName" defaultValue=" " onChange={setPlannerProductPlan}>
                        { productPlanItems.map( productItem => (
                                                            <option key={productItem.id} value={productItem.title}>{productItem.title}</option>
                                                            ))}
                                </Form.Select>
                    <div id='plannerProductName' className='form-text form-hint'>Product Name</div>
                </div>  
            </MDBCol>
            <MDBCol size={4}>
            <div>
                <Form.Select id='formPlannerPlanName' aria-describedby='plannerPlanName' aria-label="plannerPlanName">
                        { productPlans.map( productPlan => (
                                                            <option key={productPlan.id} value={productPlan.title}>{productPlan.title}</option>
                                                            ))}
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
                                    <option value="1"></option>
                                    <option value="2"></option>
                                    <option value="3"></option>
                                    <option value="4"></option>
                                    <option value="5"></option>
                                    </Form.Select>
                        <div id='plannerEnquiryName' className='form-text form-hint'>Enquiry</div>
                    </div>  
            </MDBCol>
            <MDBCol size={3}>
                <div id='plannerEnquiryShareInput'>
                    <div id='plannerEnquiryShare' className='form-text form-hint'>Auto share with primary contact</div>
                    <label style={{float: 'left'}} className="switch"><input id='formPlannerEnquiryShare' type="checkbox"/><span className="slider round"></span></label>
                </div>
            </MDBCol>
        </MDBRow>
        </>
    )
    }
export default PlannerInputForm;