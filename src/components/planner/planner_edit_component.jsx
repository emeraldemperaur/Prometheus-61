import { MDBRow, MDBCol, MDBInput, MDBInputGroup, MDBFile } from 'mdb-react-ui-kit';
import { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import '../enquirer/enquirer_styles.css'
import { productPlanItems } from '../../utils/options_data';
import { useSelector } from 'react-redux'



const PlannerEditForm = ({corpName, productName, planName, enquiryName, status, autoShare}) => {
    const [productPlansE, setProductPlansE] = useState([{id:"0", title:" "}]);
    const rolodexList = useSelector((state)=> state.rolodex.list);
    const enquirerList = useSelector((state)=> state.enquirer.list);
    const [filteredEnquirerE, setFilteredEnquirerE] = useState([]);
    const [linkedEditE, setLinkedEditE] = useState(false);
    const [corpNamed, setCorpNamed] = useState(corpName);
    const [productNamed, setProductNamed] = useState(productName);
    const [planNamed, setPlanNamed] = useState(planName);
    const [enquiryNamed, setEnquiryNamed] = useState(enquiryName);
    const [autoShared, setAutoShared] = useState(autoShare);

    useEffect(() => {
        let planRef = document.getElementById("formPlannerPlanNameE");
        if(status > 1){setLinkedEditE(true);}
        if(status == 1){setLinkedEditE(false);}
        console.log(planName)
    }, [productPlansE, filteredEnquirerE, linkedEditE, corpNamed, productNamed, planNamed, enquiryNamed]);

    const setPlannerProductPlanE = () => {
        let productRef = document.getElementById("formPlannerProductNameE");
        console.log(productRef.options[productRef.selectedIndex].value)
        for (const product of productPlanItems){if (product.title == productRef.options[productRef.selectedIndex].value){setProductPlansE(product.plans)}}     
    }

    const setPlannerEnquiryE = () => {
        let planRef = document.getElementById("formPlannerPlanNameE");
        let enquiryLog = []
        setFilteredEnquirerE([])
        for(const enquiry of enquirerList){if(enquiry.productPlanName == planRef.options[planRef.selectedIndex].value){
            enquiryLog.push(enquiry)
            setFilteredEnquirerE(enquiryLog)
            }if(planRef.options[planRef.selectedIndex].value == "All Products Plan"){setFilteredEnquirerE(enquirerList)}}
            console.log(planRef.options[planRef.selectedIndex].value)
    }


    return(
        <>
        <MDBRow style={{paddingTop:'23px'}}>
            <MDBCol size={5}>
            <div>
                <Form.Select id='formPlannerCorpNameE' disabled={true} aria-describedby='plannerCorpName' aria-label="plannerCorpName"  defaultValue={corpNamed}>
                                <option>&nbsp;</option>
                                { rolodexList.map( rolodexItem => (
                                                            <option key={rolodexItem.id} value={rolodexItem.id}>{rolodexItem.companyName}</option>
                                                            ))}
                                </Form.Select>
                    <div id='plannerCorpNameLabelE' className='form-text form-hint'>Company Name</div>
                </div>
            </MDBCol>
            <MDBCol size={3}>
            <div>
                <Form.Select id='formPlannerProductNameE' disabled={true} aria-describedby='plannerProductName' aria-label="plannerProductName"  defaultValue={productNamed} onChange={setPlannerProductPlanE}>
                        { productPlanItems.map( productItem => (
                                                            <option key={productItem.id} value={productItem.title}>{productItem.title}</option>
                                                            ))}
                                </Form.Select>
                    <div id='plannerProductNameLabelE' className='form-text form-hint'>Product Name</div>
                </div>  
            </MDBCol>
            <MDBCol size={4}>
            <div>
                <Form.Select id='formPlannerPlanNameE'disabled={true} aria-describedby='plannerPlanName' aria-label="plannerPlanName"  defaultValue={planNamed} onChange={setPlannerEnquiryE}>
                                { productPlansE.map( productPlan => (
                                                                    <option key={productPlan.id} value={productPlan.title}>{productPlan.title}</option>
                                                                    ))}
                                </Form.Select>
                    <div id='plannerPlanNameLabelE' className='form-text form-hint'>Plan Name</div>
                </div>  
            </MDBCol>
        </MDBRow>
        <MDBRow style={{paddingTop:'23px'}}>
            <MDBCol size={5}>
                <div>
                    <Form.Select id='formPlannerEnquiryNameE' disabled={linkedEditE} aria-describedby='plannerEnquiryName' aria-label="plannerEnquiryName"  defaultValue={enquiryNamed}>
                                    <option>&nbsp;</option>
                                    { filteredEnquirerE.map( enquirerItem => (
                                                            <option key={enquirerItem.id} value={enquirerItem.id}>{enquirerItem.modelName}</option>
                                                            ))}
                                    </Form.Select>
                        <div id='plannerEnquiryNameLabelE' className='form-text form-hint'>Enquiry</div>
                    </div>  
            </MDBCol>
            <MDBCol size={3}>
                <div id='plannerEnquiryShareInputE'>
                    <div id='plannerEnquiryShareE'  className='form-text form-hint'>Auto share with primary contact</div>
                    <label style={{float: 'left'}} className="switch"><input id='formPlannerEnquiryShareE' disabled={linkedEditE} defaultChecked={autoShared} type="checkbox"/><span className="slider round"></span></label>
                </div>
            </MDBCol>
        </MDBRow>
        </>
    )
    }
export default PlannerEditForm;