import { MDBRow, MDBCol, MDBInput, MDBInputGroup, MDBFile } from 'mdb-react-ui-kit';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import '../enquirer/enquirer_styles.css'
import { equityPlatformItems, countryRegionItems, productPlanItems } from '../../utils/options_data';
import { queryExchangeMarketsItems } from '../../utils/exchanges_data';
import { useDispatch } from 'react-redux';
import { addQueryModel } from '../../forge/enquirer';


const EnquirerInputForm = () => {
    const [productPlanList, setProductPlanList] = useState([{id:" ", title:" "}]);


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
                <MDBInput label='Model Name' type='text' id='formQueryModelName' aria-describedby='queryModelName' defaultValue=" "/>
                    <div id='queryModelNameLabel' className='form-text form-hint'>Model Name</div>
                </div>
            </MDBCol>
            <MDBCol size={4}>
                <div>
                <Form.Select id='formQueryModelProduct' aria-describedby='queryModelProduct' aria-label="queryModelProduct" defaultValue=" " onChange={setEnquiryProductPlan}>
                            { productPlanItems.map( productItem => (
                                                    <option key={productItem.id} value={productItem.title}>{productItem.title}</option>
                                                    ))}
                                </Form.Select>
                    <div id='queryModelProductLabel' className='form-text form-hint'>Product</div>
                </div>
            </MDBCol>
            <MDBCol size={4}>
                <div>
                <Form.Select id='formQueryModelPlan' aria-describedby='queryModelPlan' aria-label="queryModelPlan" defaultValue=" ">
                            { productPlanList.map( productPlanItem => (
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
                <Form.Select id='formQueryModelRegion' aria-describedby='queryModelRegion' aria-label="queryModelRegion" defaultValue=" ">
                                { countryRegionItems.map( countryRegion => (
                                        <option key={countryRegion.id} value={countryRegion.label}>{countryRegion.title}</option>
                                        ))}
                                </Form.Select>
                    <div id='queryModelRegionLabel' className='form-text form-hint'>Region</div>
                </div>
            </MDBCol>
            <MDBCol size={4}>
            <div>
                <Form.Select id='formQueryModelMarketEx' aria-describedby='queryModelMarketExLabel' aria-label="queryModelMarketExLabel" defaultValue="----">
                                { queryExchangeMarketsItems.map( exchangeMarket => (
                                        <option key={exchangeMarket.id} value={exchangeMarket.label}>{exchangeMarket.title}</option>
                                        ))}
                                </Form.Select>
                    <div id='queryModelMarketExLabel' className='form-text form-hint'>Stock Exchange Market</div>
                </div>
            </MDBCol>
            <MDBCol size={4}>
            <div>
                <Form.Select id='formQueryModelPlatform' aria-describedby='queryModelPlatform' aria-label="queryModelPlatform" defaultValue=" ">
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