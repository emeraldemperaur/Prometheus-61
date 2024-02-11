import { MDBRow, MDBCol, MDBInput, MDBInputGroup, MDBFile } from 'mdb-react-ui-kit';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import '../enquirer/enquirer_styles.css'
import { equityPlatformItems, countryRegionItems, productPlanItems } from '../../utils/options_data';
import { queryExchangeMarketsItems } from '../../utils/exchanges_data';


const EnquirerInputForm = () => {
    const [productPlanList, setProductPlanList] = useState([{id:"0", title:" "}]);


    const setEnquiryProductPlan = () => {
        let productRef = document.getElementById("formQueryModelProduct");
        console.log(productRef.options[productRef.selectedIndex].value)
        for (const product of productPlanItems){
            if (product.title == productRef.options[productRef.selectedIndex].value){
                setProductPlanList(product.plans)
            }
        }
        
    }

    return(
        <>
        <MDBRow style={{paddingTop:'23px'}}>
            <MDBCol size={4}>
                <div>
                <MDBInput label='Model Name' type='text' id='formQueryModelName' aria-describedby='queryModelName'/>
                    <div id='queryModelName' className='form-text form-hint'>Model Name</div>
                </div>
            </MDBCol>
            <MDBCol size={4}>
                <div>
                <Form.Select id='formQueryModelProduct' aria-describedby='queryModelProduct' aria-label="queryModelProduct" defaultValue=" " onChange={setEnquiryProductPlan}>
                            { productPlanItems.map( productItem => (
                                                    <option key={productItem.id} value={productItem.title}>{productItem.title}</option>
                                                    ))}
                                </Form.Select>
                    <div id='queryModelProduct' className='form-text form-hint'>Product</div>
                </div>
            </MDBCol>
            <MDBCol size={4}>
                <div>
                <Form.Select aria-describedby='queryModelPlan' aria-label="queryModelPlan" defaultValue=" ">
                            { productPlanList.map( productPlanItem => (
                                                                <option key={productPlanItem.id} value={productPlanItem.title}>{productPlanItem.title}</option>
                                                                ))}
                                </Form.Select>
                    <div id='queryModelPlan' className='form-text form-hint'>Plan</div>
                </div>
            </MDBCol>
        </MDBRow>
        <MDBRow style={{paddingTop: '23px'}}>
            <MDBCol size={4}>
            <div>
                <Form.Select aria-describedby='queryModelRegion' aria-label="queryModelRegion" defaultValue=" ">
                                { countryRegionItems.map( countryRegion => (
                                        <option key={countryRegion.id}>{countryRegion.title}</option>
                                        ))}
                                </Form.Select>
                    <div id='queryModelPlan' className='form-text form-hint'>Region</div>
                </div>
            </MDBCol>
            <MDBCol size={4}>
            <div>
                <Form.Select aria-describedby='queryModelMarket' aria-label="queryModelMarket" defaultValue=" ">
                                { queryExchangeMarketsItems.map( exchangeMarket => (
                                        <option key={exchangeMarket.id}>{exchangeMarket.title}</option>
                                        ))}
                                </Form.Select>
                    <div id='queryModelMarket' className='form-text form-hint'>Stock Exchange Market</div>
                </div>
            </MDBCol>
            <MDBCol size={4}>
            <div>
                <Form.Select aria-describedby='queryModelPlatform' aria-label="queryModelPlatform" defaultValue=" ">
                                { equityPlatformItems.map( equityPlatform => (
                                        <option key={equityPlatform.id}>{equityPlatform.title}</option>
                                        ))}
                </Form.Select>
                    <div id='queryModelPlatform' className='form-text form-hint'>Platform</div>
                </div>
            </MDBCol>
        </MDBRow>
        <MDBRow style={{paddingTop:'23px'}}>
            <div>
            <MDBCol size={12}>
               <div>
               <div id='queryModelJSON' className='form-text form-hint'>JSON Query Definition</div>
                <div className="input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon">
                        <i className="fa-solid fa-code prefix"></i>
                        </span>
                    </div>
                    <textarea className="enquirer-query-box" id="formQueryModelJSON"></textarea>
                </div>
                </div>
            </MDBCol>
            
            </div>
        </MDBRow>
        </>
    )
}
export default EnquirerInputForm;