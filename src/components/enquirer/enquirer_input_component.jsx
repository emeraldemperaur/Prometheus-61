import { MDBRow, MDBCol, MDBInput, MDBInputGroup, MDBFile } from 'mdb-react-ui-kit';
import Form from 'react-bootstrap/Form';
import '../enquirer/enquirer_styles.css'


const EnquirerInputForm = () => {

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
                <Form.Select aria-describedby='queryModelProduct' aria-label="queryModelProduct">
                                <option>&nbsp;</option>
                                <option value="1">Stock Options and Awards</option>
                                <option value="2">Share Purchase and Holdings</option>
                                <option value="3">Online Payments</option>
                                <option value="4">File Feed Integration</option>
                                <option value="5">Single Sign-On Integration</option>
                                </Form.Select>
                    <div id='queryModelProduct' className='form-text form-hint'>Product</div>
                </div>
            </MDBCol>
            <MDBCol size={4}>
                <div>
                <Form.Select aria-describedby='queryModelPlan' aria-label="queryModelPlan">
                                <option>&nbsp;</option>
                                <option value="1">Employee Share Purchase Plan</option>
                                <option value="2">Stock Options and Awards</option>
                                <option value="3">Share Purchase and Holdings</option>
                                </Form.Select>
                    <div id='queryModelPlan' className='form-text form-hint'>Plan</div>
                </div>
            </MDBCol>
        </MDBRow>
        <MDBRow style={{paddingTop: '23px'}}>
            <MDBCol size={4}>
            <div>
                <Form.Select aria-describedby='queryModelRegion' aria-label="queryModelRegion">
                                <option>&nbsp;</option>
                                <option value="0">Global - All Regions</option>
                                <option value="1">NA - North America</option>
                                <option value="2">EMEA - Europe, Middle East and Africa</option>
                                <option value="3">LATAM - Latin America</option>
                                <option value="4">APAC - Asia-Pacific</option>
                                </Form.Select>
                    <div id='queryModelPlan' className='form-text form-hint'>Region</div>
                </div>
            </MDBCol>
            <MDBCol size={4}>
            <div>
                <Form.Select aria-describedby='queryModelMarket' aria-label="queryModelMarket">
                                <option>&nbsp;</option>
                                <option value="0">Global - All Markets</option>
                                <option value="1">NASDAQ</option>
                                <option value="2">NYSE</option>
                                <option value="3">TSX</option>
                                <option value="4">LSE</option>
                                </Form.Select>
                    <div id='queryModelMarket' className='form-text form-hint'>Stock Exchange Market</div>
                </div>
            </MDBCol>
            <MDBCol size={4}>
            <div>
                <Form.Select aria-describedby='queryModelPlatform' aria-label="queryModelPlatform">
                                <option>&nbsp;</option>
                                <option value="0">Global - All Platforms</option>
                                <option value="1">Shareworks</option>
                                <option value="2">E-Trade</option>
                                <option value="3">UBS Group</option>
                                <option value="4">Stockvantage</option>
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