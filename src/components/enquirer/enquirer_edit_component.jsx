import { MDBRow, MDBCol, MDBInput, MDBInputGroup, MDBFile, MDBTextArea } from 'mdb-react-ui-kit';
import { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import '../enquirer/enquirer_styles.css'
import { equityPlatformItems, countryRegionItems, productPlanItems } from '../../utils/options_data';
import { queryExchangeMarketsItems } from '../../utils/exchanges_data';



const EnquirerEditForm = (props) => {
    const [productPlanListE, setProductPlanListE] = useState([{id:" ", title:" "}]);
    const [linkedEdit, setLinkedEdit] = useState(props.isLinked);
    const [productPlanItemListE, setProductPlanItemListE] = useState(productPlanItems);

    useEffect(() => {
        setLinkedEdit(props.isLinked);
        setProductPlanItemListE(productPlanItems);
        document.getElementById("formQueryModelNameE").value = props.modelName;
        document.getElementById("formQueryModelProductE").value = props.modelProduct;
        document.getElementById("formQueryModelRegionE").value = props.modelRegion;
        document.getElementById("formQueryModelMarketExE").value = props.modelMarket;
        document.getElementById("formQueryModelPlatformE").value = props.modelPlatform;
        document.getElementById("formQueryModelJSONE").value = props.modelJSON;
        setEnquiryProductPlanE(props.modelProduct);
        document.getElementById("formQueryModelPlanE").value = props.modelPlan;
    }, [props.modelPlan, linkedEdit, props.modelName, props.modelProduct, 
        props.modelRegion, props.modelMarket, props.modelPlatform, props.modelJSON, productPlanItemListE]);
   
    const setEnquiryProductPlanE = (focusProduct) => {
        setProductPlanListE(productPlanItems)
        let productRef = document.getElementById("formQueryModelProductE");
        console.log(productRef.options[productRef.selectedIndex].value)
        for (const product of productPlanItemListE){
            if (product.title == focusProduct){
                setProductPlanListE(product.plans)
            }
        }
        setTimeout(() => {
            document.getElementById("formQueryModelPlanE").value = props.modelPlan;
        }, 1000);
    }

    return(
        <>
        <MDBRow style={{paddingTop:'23px'}}>
            <MDBCol size={4}>
                <div>
                <MDBInput label='Model Name' type='text' id='formQueryModelNameE' aria-describedby='queryModelName' readOnly={linkedEdit} defaultValue={props.modelName}/>
                    <div id='queryModelNameLabelE' className='form-text form-hint'>Model Name</div>
                </div>
            </MDBCol>
            <MDBCol size={4}>
                <div>
                <Form.Select id='formQueryModelProductE' aria-describedby='queryModelProduct' disabled={props.linkedEdit} aria-label="queryModelProduct" defaultValue={props.modelProduct} onChange={setEnquiryProductPlanE}>
                            { productPlanItems.map( productItem => (
                                                    <option key={productItem.id} value={productItem.title}>{productItem.title}</option>
                                                    ))}
                                </Form.Select>
                    <div id='queryModelProductLabelE' className='form-text form-hint'>Product</div>
                </div>
            </MDBCol>
            <MDBCol size={4}>
                <div>
                <Form.Select id='formQueryModelPlanE' aria-describedby='queryModelPlan' disabled={props.linkedEdit} aria-label="queryModelPlan" defaultValue={props.modelPlan}>
                            { productPlanListE.map( productPlanItem => (
                                                                <option key={productPlanItem.id} value={productPlanItem.title}>{productPlanItem.title}</option>
                                                                ))}
                                </Form.Select>
                    <div id='queryModelPlanLabelE' className='form-text form-hint'>Plan</div>
                </div>
            </MDBCol>
        </MDBRow>
        <MDBRow style={{paddingTop: '23px'}}>
            <MDBCol size={4}>
            <div>
                <Form.Select id='formQueryModelRegionE' aria-describedby='queryModelRegion' aria-label="queryModelRegion" defaultValue={props.modelRegion}>
                                { countryRegionItems.map( countryRegion => (
                                        <option key={countryRegion.id} value={countryRegion.label}>{countryRegion.title}</option>
                                        ))}
                                </Form.Select>
                    <div id='queryModelRegionLabelE' className='form-text form-hint'>Region</div>
                </div>
            </MDBCol>
            <MDBCol size={4}>
            <div>
                <Form.Select id='formQueryModelMarketExE' aria-describedby='queryModelMarketExLabel' aria-label="queryModelMarketExLabel" defaultValue={props.modelMarket}>
                                { queryExchangeMarketsItems.map( exchangeMarket => (
                                        <option key={exchangeMarket.id} value={exchangeMarket.label}>{exchangeMarket.title}</option>
                                        ))}
                                </Form.Select>
                    <div id='queryModelMarketExLabelE' className='form-text form-hint'>Stock Exchange Market</div>
                </div>
            </MDBCol>
            <MDBCol size={4}>
            <div>
                <Form.Select id='formQueryModelPlatformE' aria-describedby='queryModelPlatform' aria-label="queryModelPlatform" defaultValue={props.modelPlatform}>
                                { equityPlatformItems.map( equityPlatform => (
                                        <option key={equityPlatform.id} value={equityPlatform.title}>{equityPlatform.title}</option>
                                        ))}
                </Form.Select>
                    <div id='queryModelPlatformLabelE' className='form-text form-hint'>Platform</div>
                </div>
            </MDBCol>
        </MDBRow>
        <MDBRow style={{paddingTop:'23px'}}>
            <div>
            <MDBCol size={12}>
               <div>
               <div id='queryModelJSONLabelE' className='form-text form-hint'>JSON Query Definition</div>
                <div className="input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon">
                        <i className="fa-solid fa-code prefix"></i>
                        </span>
                    </div>
                    <MDBTextArea defaultValue={props.modelJSON} className="enquirer-query-box" id="formQueryModelJSONE"></MDBTextArea>
                </div>
                </div>
            </MDBCol>
            
            </div>
        </MDBRow>
        </>
    )
}
export default EnquirerEditForm;