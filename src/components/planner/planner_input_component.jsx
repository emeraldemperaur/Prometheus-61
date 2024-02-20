import { MDBRow, MDBCol, MDBInput, MDBInputGroup, MDBFile } from 'mdb-react-ui-kit';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import '../enquirer/enquirer_styles.css'
import { productPlanItems } from '../../utils/options_data';
import { useSelector, useDispatch } from 'react-redux'
import enquirer from '../../forge/enquirer';
import { addPlanQuestionnaire } from '../../forge/planner';



const PlannerInputForm = () => {
    const [productPlans, setProductPlans] = useState([{id:"0", title:" "}]);
    const rolodexList = useSelector((state)=> state.rolodex.list);
    const enquirerList = useSelector((state)=> state.enquirer.list);
    const rolodexDispatch = useDispatch();
    const [filteredEnquirer, setFilteredEnquirer] = useState([]);

    const setPlannerProductPlan = () => {
        let productRef = document.getElementById("formPlannerProductName");
        console.log(productRef.options[productRef.selectedIndex].value)
        for (const product of productPlanItems){if (product.title == productRef.options[productRef.selectedIndex].value){setProductPlans(product.plans)}}     
    }

    const setPlannerEnquiry = () => {
        let planRef = document.getElementById("formPlannerPlanName");
        let enquiryLog = []
        setFilteredEnquirer([])
        for(const enquiry of enquirerList){if(enquiry.productPlanName == planRef.options[planRef.selectedIndex].value){
            enquiryLog.push(enquiry)
            setFilteredEnquirer(enquiryLog)
            }if(planRef.options[planRef.selectedIndex].value == "All Products Plan"){setFilteredEnquirer(enquirerList)}}
            console.log(planRef.options[planRef.selectedIndex].value)
    }


    return(
        <>
        <MDBRow style={{paddingTop:'23px'}}>
            <MDBCol size={5}>
            <div>
                <Form.Select id='formPlannerCorpName' aria-describedby='plannerCorpName' aria-label="plannerCorpName" defaultValue=" ">
                                <option>&nbsp;</option>
                                { rolodexList.map( rolodexItem => (
                                                            <option key={rolodexItem.id} value={rolodexItem.companyName}>{rolodexItem.companyName}</option>
                                                            ))}
                                </Form.Select>
                    <div id='plannerCorpNameLabel' className='form-text form-hint'>Company Name</div>
                </div>
            </MDBCol>
            <MDBCol size={3}>
            <div>
                <Form.Select id='formPlannerProductName' aria-describedby='plannerProductName' aria-label="plannerProductName" defaultValue=" " onChange={setPlannerProductPlan}>
                        { productPlanItems.map( productItem => (
                                                            <option key={productItem.id} value={productItem.title}>{productItem.title}</option>
                                                            ))}
                                </Form.Select>
                    <div id='plannerProductNameLabel' className='form-text form-hint'>Product Name</div>
                </div>  
            </MDBCol>
            <MDBCol size={4}>
            <div>
                <Form.Select id='formPlannerPlanName' aria-describedby='plannerPlanName' aria-label="plannerPlanName" defaultValue=" " onChange={setPlannerEnquiry}>
                                { productPlans.map( productPlan => (
                                                                    <option key={productPlan.id} value={productPlan.title}>{productPlan.title}</option>
                                                                    ))}
                                </Form.Select>
                    <div id='plannerPlanNameLabel' className='form-text form-hint'>Plan Name</div>
                </div>  
            </MDBCol>
        </MDBRow>
        <MDBRow style={{paddingTop:'23px'}}>
            <MDBCol size={5}>
                <div>
                    <Form.Select id='formPlannerEnquiryName' aria-describedby='plannerEnquiryName' aria-label="plannerEnquiryName" defaultValue=" ">
                                    <option>&nbsp;</option>
                                    { filteredEnquirer.map( enquirerItem => (
                                                            <option key={enquirerItem.id} value={enquirerItem.modelName}>{enquirerItem.modelName}</option>
                                                            ))}
                                    </Form.Select>
                        <div id='plannerEnquiryNameLabel' className='form-text form-hint'>Enquiry</div>
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