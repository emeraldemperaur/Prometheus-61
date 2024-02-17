import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBInputGroup, MDBFile } from 'mdb-react-ui-kit';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import '../rolodex/rolodex_styles.css'
import { dividendDistributionItems, corporationCategoryItems } from '../../utils/options_data';
import { exchangeMarketsItems } from '../../utils/exchanges_data';
import { countriesItems } from '../../utils/country_data';


const RolodexInputForm = () => {
    const [marketPrefix, setMarketPrefix] = useState("----");
    const [dualMarketPrefix, setDualMarketPrefix] = useState("----");
    

  
    const toggleDualListingMask = () => {
        if(document.getElementById("formCorpDualMarketInput").style.visibility == "hidden"){
            document.getElementById("formCorpDualMarketInput").style.visibility = "visible";
            document.getElementById("formDualStockTickerInput").style.visibility = "visible";
        }else{
            document.getElementById("formDualStockTickerInput").style.visibility = "hidden";
            document.getElementById("formCorpDualMarketInput").style.visibility = "hidden";
        }
    }
    const toggleDividendMethodMask = () => {
        if(document.getElementById("formCorpDividendsMethodInput").style.visibility == "hidden"){
            document.getElementById("formCorpDividendsMethodInput").style.visibility = "visible";
        }else{
            document.getElementById("formCorpDividendsMethodInput").style.visibility = "hidden";
        }
    }

    const setMarketLabel = () => {
        let elementRef = document.getElementById("formCorpMarket");
        setMarketPrefix(elementRef.options[elementRef.selectedIndex].value)
        console.log(elementRef.options[elementRef.selectedIndex].value)

    }

    const setDuoMarketLabel = () => {
        let elementDuoRef = document.getElementById("formCorpDualMarket");
        setDualMarketPrefix(elementDuoRef.options[elementDuoRef.selectedIndex].value)
        console.log(elementDuoRef.options[elementDuoRef.selectedIndex].value)

    }



    return(
    <>
        <MDBRow>
            <MDBCol start>
                <MDBRow>
                <MDBCol size={12}>
                    <img src="https://csncollision.com/wp-content/uploads/2019/10/placeholder-circle.png" id='formCorpLogo' alt="Company Logo" className="logo-avatar"/>
                </MDBCol>
                </MDBRow>
                <MDBRow>
                <MDBCol size={12}>
                    <div id='corpLogo' className='form-text form-hint'>Upload Company Logo</div>
                    <MDBFile id='formCorpLogoFile' accept="image/png, image/gif, image/jpeg" />
                </MDBCol>
                </MDBRow>
            </MDBCol>  
            <MDBCol end>
                <div style={{paddingBottom:'6px'}}>
                <MDBInput label='Company Name' type='text' id='formCorpName' aria-describedby='corpName'/>
                    <div id='corpName' className='form-text form-hint'>Company Name</div>
                </div>
                <div style={{paddingBottom:'3px'}}>
                <MDBInput label='Authorized Name' type='text' id='formAuthName' aria-describedby='authName'/>
                    <div id='authName' className='form-text form-hint'>Primary Contact Name</div>
                </div>
                <div style={{paddingBottom:'3px'}}>
                <MDBInput label='Authorized Email' type='text' id='formAuthEmail' aria-describedby='authEmail'/>
                    <div id='authEmail' className='form-text form-hint'>Primary Contact Email</div>
                </div>
            </MDBCol>
        </MDBRow>
        <MDBRow style={{paddingTop: '23px'}}>
        <MDBCol size='4'>
        <div>
            <Form.Select id='formCorpCountry' aria-describedby='corpCountry' aria-label="corpCountry">
                    { countriesItems.map( countryItem => (
                                                <option  key={countryItem.id} value={countryItem.alpha_3}>{countryItem.name}</option>
                                                ) )}
                            </Form.Select>
                <div id='corpCountry' className='form-text form-hint'>Country of Incorporation</div>
            </div>
        </MDBCol>
        <MDBCol size='4'>
            <div>
            <Form.Select   id='formCorpMarket' aria-describedby='corpMarket' aria-label="corpMarket" defaultValue=" " onChange={setMarketLabel}>
                            { exchangeMarketsItems.map( exchangeMarket => (
                                        <option  key={exchangeMarket.id} value={exchangeMarket.label}>{exchangeMarket.title}</option>
                                        ) )}
                            </Form.Select>
                <div id='corpMarket' className='form-text form-hint'>Stock Exchange</div>
            </div>
        </MDBCol>
        <MDBCol size='4'>
            <MDBInputGroup className='mb-3' textBefore={marketPrefix}>
                <input className='form-control' id='formStockTicker' placeholder='Ticker Symbol' type='text' />
            </MDBInputGroup>
        </MDBCol> 
        </MDBRow>
        
        <MDBRow style={{paddingTop: '23px'}}>
            <MDBCol size='2'>
            <div>
                <div id='corpDualListedStock' className='form-text form-hint'>Dual Listed Company</div>
                <label style={{float: 'left'}} className="switch"><input id='corpDualListedInput' type="checkbox" onClick={toggleDualListingMask}/><span className="slider round"></span></label>
            </div>
            </MDBCol>
            <MDBCol size='4'>
            <div id='formCorpDualMarketInput' style={{visibility:'hidden'}}>
            <Form.Select id='formCorpDualMarket' aria-describedby='corpDualMarket' aria-label="corpDualMarket" defaultValue=" " onChange={setDuoMarketLabel}>
                            { exchangeMarketsItems.map( dualExchangeMarket => (
                                                        <option key={dualExchangeMarket.id} value={dualExchangeMarket.label}>{dualExchangeMarket.title}</option>
                                                        ))}
                            </Form.Select>
                <div id='corpDualMarket' className='form-text form-hint'>Dual Stock Exchange</div>
            </div>
            </MDBCol>
            <MDBCol size='4'>
            <MDBInputGroup style={{visibility:'hidden'}} id='formDualStockTickerInput' className='mb-3' textBefore={dualMarketPrefix}>
                <input className='form-control' id='formDualStockTicker' placeholder='Ticker Symbol' type='text'/>
            </MDBInputGroup>
            </MDBCol>
        </MDBRow>
        
        <MDBRow style={{paddingTop: '23px'}}>
        <MDBCol size='2'>
            <div id='corpLegendConditionsInput'>
                <div id='corpLegendConditions' className='form-text form-hint'>Legend Conditions</div>
                <label style={{float: 'left'}} className="switch"><input id='formCorpLegendConditions' type="checkbox"/><span className="slider round"></span></label>
            </div>
        </MDBCol>
        <MDBCol size='2'>
            <div id='corpDividendsInput'>
                <div id='corpDividends' className='form-text form-hint'>Distributes Dividends</div>
                <label style={{float: 'left'}} className="switch"><input id='formCorpDividends' type="checkbox" onClick={toggleDividendMethodMask}/><span className="slider round"></span></label>
            </div>
        </MDBCol>
        <MDBCol size='3'>
            <div id='formCorpDividendsMethodInput' style={{visibility:'hidden'}}>
                <Form.Select id='formCorpDividendsMethod' aria-describedby='corpDividendsMethod' aria-label="corpDividendsMethod">
                                { dividendDistributionItems.map( distributionMethod => (
                                                        <option key={distributionMethod.id}>{distributionMethod.title}</option>
                                                        ))}
                                </Form.Select>
                    <div id='corpDividendsMethod' className='form-text form-hint'>Distribution Method</div>
                </div>
        </MDBCol>
        <MDBCol size='5'>
            <div id='formCorpCategoryTypeInput' >
                <Form.Select id='formCorpCategoryType' aria-describedby='corpCategoryType' aria-label="corpCategoryType">
                                { corporationCategoryItems.map( corporationCategory => (
                                                        <option key={corporationCategory.id}>{corporationCategory.title}</option>
                                                        ))}
                                </Form.Select>
                    <div id='formCorpCategoryType' className='form-text form-hint'>Incorporation Category</div>
                </div>
        </MDBCol>
        </MDBRow>

    </>

    )
}
export default RolodexInputForm;