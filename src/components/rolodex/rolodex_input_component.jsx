import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBInputGroup } from 'mdb-react-ui-kit';
import Form from 'react-bootstrap/Form';
import '../rolodex/rolodex_styles.css'

const RolodexInputForm = () => {
    return(
    <>
        <MDBRow>
            <MDBCol start>
                
            </MDBCol>  
            <MDBCol end>
                <div style={{paddingBottom:'6px'}}>
                <MDBInput label='Company Name' type='text' id='formCorpName' aria-describedby='corpName'/>
                    <div id='corpName' className='form-text form-hint'>Company Name</div>
                </div>
                <div style={{paddingBottom:'3px'}}>
                <MDBInput label='Authorized Name' type='text' id='formAuthName' aria-describedby='authName'/>
                    <div id='authName' className='form-text form-hint'>Authorized Contact Name</div>
                </div>
                <div style={{paddingBottom:'3px'}}>
                <MDBInput label='Authorized Email' type='text' id='formAuthEmail' aria-describedby='authEmail'/>
                    <div id='authEmail' className='form-text form-hint'>Authorized Contact Email</div>
                </div>
            </MDBCol>
        </MDBRow>
        <MDBRow style={{paddingTop: '23px'}}>
        <MDBCol size='4'>
        <div>
            <Form.Select aria-describedby='corpCountry' aria-label="corpCountry">
                            <option>&nbsp;</option>
                            <option value="1">US Section 423</option>
                            <option value="2">US Non-Qualified</option>
                            <option value="3">Employee Profit Sharing Plan</option>
                            <option value="4">Tax Free Savings Plan</option>
                            <option value="5">Employer Benefit Plan</option>
                            <option value="6">Non-Registered Plan</option>
                            <option value="7">Registered Retirement Savings Plan</option>
                            <option value="8">Trusteed Plan</option>
                            </Form.Select>
                <div id='corpCountry' className='form-text form-hint'>Country</div>
            </div>
        </MDBCol>
        <MDBCol size='4'>
            <div>
            <Form.Select aria-describedby='corpMarket' aria-label="corpMarket">
                            <option>&nbsp;</option>
                            <option value="1">NASDAQ</option>
                            <option value="2">US Non-Qualified</option>
                            <option value="3">Employee Profit Sharing Plan</option>
                            <option value="4">Tax Free Savings Plan</option>
                            <option value="5">Employer Benefit Plan</option>
                            <option value="6">Non-Registered Plan</option>
                            <option value="7">Registered Retirement Savings Plan</option>
                            <option value="8">Trusteed Plan</option>
                            </Form.Select>
                <div id='corpMarket' className='form-text form-hint'>Stock Exchange</div>
            </div>
        </MDBCol>
        <MDBCol size='4'>
            <MDBInputGroup className='mb-3' textBefore='NYSE'>
                <input className='form-control' id='formStockTicker' placeholder='Ticker Symbol' type='text' />
            </MDBInputGroup>
        </MDBCol> 
        </MDBRow>
        <MDBRow style={{paddingTop: '23px'}}>
            <MDBCol size='3'>
            <div>
                <div id='corpLimitedPartnership' className='form-text form-hint'>Limited Partnership</div>
                <label style={{float: 'left'}} className="switch"><input type="checkbox"/><span className="slider round"></span></label>
            </div>
            </MDBCol>
            <MDBCol size='3'>
            <div>
                <div id='corpDualListedStock' className='form-text form-hint'>Dual Listed Company</div>
                <label style={{float: 'left'}} className="switch"><input type="checkbox"/><span className="slider round"></span></label>
            </div>
            </MDBCol>
            <MDBCol size='3'>
            <div>
            <Form.Select id='formCorpDualMarket' aria-describedby='corpDualMarket' aria-label="corpDualMarket">
                            <option>&nbsp;</option>
                            <option value="1">NASDAQ</option>
                            <option value="2">US Non-Qualified</option>
                            <option value="3">Employee Profit Sharing Plan</option>
                            <option value="4">Tax Free Savings Plan</option>
                            <option value="5">Employer Benefit Plan</option>
                            <option value="6">Non-Registered Plan</option>
                            <option value="7">Registered Retirement Savings Plan</option>
                            <option value="8">Trusteed Plan</option>
                            </Form.Select>
                <div id='corpDualMarket' className='form-text form-hint'>Dual Stock Exchange</div>
            </div>
            </MDBCol>
            <MDBCol size='3'>
            <MDBInputGroup className='mb-3' textBefore='NASDAQ'>
                <input className='form-control' id='formDualStockTicker' placeholder='Ticker Symbol' type='text' />
            </MDBInputGroup>
            </MDBCol>


        </MDBRow>

    </>

    )
}
export default RolodexInputForm;