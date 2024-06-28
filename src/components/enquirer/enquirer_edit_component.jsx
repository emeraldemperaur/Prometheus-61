import { MDBRow, MDBCol, MDBInput, MDBInputGroup, MDBFile, MDBTextArea } from 'mdb-react-ui-kit';
import { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import '../enquirer/enquirer_styles.css'
import { equityPlatformItems, countryRegionItems, productPlanItems } from '../../utils/options_data';
import { queryExchangeMarketsItems } from '../../utils/exchanges_data';



const EnquirerEditForm = ({isLinked, modelName, modelProduct, modelPlan, modelRegion, modelMarket, modelPlatform, modelJSON}) => {
    const [productPlanListE, setProductPlanListE] = useState([{id:" ", title:" "}]);
    const [linkedEdit, setLinkedEdit] = useState(isLinked);
    const [productPlanItemListE, setProductPlanItemListE] = useState(productPlanItems);

    useEffect(() => {
        setEnquiryProductPlanE(modelProduct);
        document.getElementById("formQueryModelPlanE").value = modelPlan;
    }, [productPlanListE, linkedEdit]);
   
    const setEnquiryProductPlanE = (focusProduct) => {
        setProductPlanListE(productPlanItems)
        let productRef = document.getElementById("formQueryModelProductE");
        console.log(productRef.options[productRef.selectedIndex].value)
        for (const product of productPlanItemListE){
            if (product.title == focusProduct){
                setProductPlanListE(product.plans)
            }
        }
        
    }

    return(
        <>
        <MDBRow style={{paddingTop:'23px'}}>
            <MDBCol size={4}>
                <div>
                <MDBInput label='Model Name' type='text' id='formQueryModelName' aria-describedby='queryModelName' readOnly={linkedEdit} defaultValue={modelName}/>
                    <div id='queryModelNameLabel' className='form-text form-hint'>Model Name</div>
                </div>
            </MDBCol>
            <MDBCol size={4}>
                <div>
                <Form.Select id='formQueryModelProductE' aria-describedby='queryModelProduct' disabled={linkedEdit} aria-label="queryModelProduct" defaultValue={modelProduct} onChange={setEnquiryProductPlanE}>
                            { productPlanItems.map( productItem => (
                                                    <option key={productItem.id} value={productItem.title}>{productItem.title}</option>
                                                    ))}
                                </Form.Select>
                    <div id='queryModelProductLabel' className='form-text form-hint'>Product</div>
                </div>
            </MDBCol>
            <MDBCol size={4}>
                <div>
                <Form.Select id='formQueryModelPlanE' aria-describedby='queryModelPlan' disabled={linkedEdit} aria-label="queryModelPlan" defaultValue={modelPlan}>
                            { productPlanListE.map( productPlanItem => (
                                                                <option key={productPlanItem.id} value={productPlanItem.title}>{productPlanItem.title}</option>
                                                                ))}
                                </Form.Select>
                    <div id='queryModelPlanLabel' className='form-text form-hint'>Plan</div>
                </div>
            </MDBCol>
        </MDBRow>
        <MDBRow style={{paddingTop: '23px'}}>
            <MDBCol size={4}>
            <div>
                <Form.Select id='formQueryModelRegion' aria-describedby='queryModelRegion' aria-label="queryModelRegion" defaultValue={modelRegion}>
                                { countryRegionItems.map( countryRegion => (
                                        <option key={countryRegion.id} value={countryRegion.label}>{countryRegion.title}</option>
                                        ))}
                                </Form.Select>
                    <div id='queryModelRegionLabel' className='form-text form-hint'>Region</div>
                </div>
            </MDBCol>
            <MDBCol size={4}>
            <div>
                <Form.Select id='formQueryModelMarketEx' aria-describedby='queryModelMarketExLabel' aria-label="queryModelMarketExLabel" defaultValue={modelMarket}>
                                { queryExchangeMarketsItems.map( exchangeMarket => (
                                        <option key={exchangeMarket.id} value={exchangeMarket.label}>{exchangeMarket.title}</option>
                                        ))}
                                </Form.Select>
                    <div id='queryModelMarketExLabel' className='form-text form-hint'>Stock Exchange Market</div>
                </div>
            </MDBCol>
            <MDBCol size={4}>
            <div>
                <Form.Select id='formQueryModelPlatform' aria-describedby='queryModelPlatform' aria-label="queryModelPlatform" defaultValue={modelPlatform}>
                                { equityPlatformItems.map( equityPlatform => (
                                        <option key={equityPlatform.id} value={equityPlatform.title}>{equityPlatform.title}</option>
                                        ))}
                </Form.Select>
                    <div id='queryModelPlatformLabel' className='form-text form-hint'>Platform</div>
                </div>
            </MDBCol>
        </MDBRow>
        <MDBRow style={{paddingTop:'23px'}}>
            <div>
            <MDBCol size={12}>
               <div>
               <div id='queryModelJSONLabel' className='form-text form-hint'>JSON Query Definition</div>
                <div className="input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon">
                        <i className="fa-solid fa-code prefix"></i>
                        </span>
                    </div>
                    <MDBTextArea defaultValue={modelJSON} className="enquirer-query-box" id="formQueryModelJSON"></MDBTextArea>
                </div>
                </div>
            </MDBCol>
            
            </div>
        </MDBRow>
        </>
    )
}
export default EnquirerEditForm;