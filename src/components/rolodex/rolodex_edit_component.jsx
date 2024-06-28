import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBInputGroup, MDBFile } from 'mdb-react-ui-kit';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import '../rolodex/rolodex_styles.css'
import { dividendDistributionItems, corporationCategoryItems } from '../../utils/options_data';
import { exchangeMarketsItems } from '../../utils/exchanges_data';
import { countriesItems } from '../../utils/country_data';


const RolodexEditForm = ({companyName, authorizedName, authorizedEmail, corpCountry, corpMarket, stockTicker, duoListed,
    corpDuoMarket, duoStockTicker, legendConditions, distributesDividends, dividendsDistribution, corporationCategory, 
    corpLogo}) => {
        
        const [marketPrefixE, setMarketPrefixE] = useState(corpMarket);
        const [dualMarketPrefixE, setDualMarketPrefixE] = useState(corpDuoMarket);
  
    const toggleDualListingMaskE = () => {
        if(document.getElementById("formCorpDualMarketInputE").style.visibility == "hidden"){document.getElementById("formCorpDualMarketInputE").style.visibility = "visible"; document.getElementById("formDualStockTickerInput").style.visibility = "visible";
        }else{document.getElementById("formDualStockTickerInput").style.visibility = "hidden"; document.getElementById("formCorpDualMarketInputE").style.visibility = "hidden";}
    }
    const toggleDividendMethodMaskE = () => {
        if(document.getElementById("formCorpDividendsMethodInputE").style.visibility == "hidden"){document.getElementById("formCorpDividendsMethodInputE").style.visibility = "visible";
        }else{ document.getElementById("formCorpDividendsMethodInputE").style.visibility = "hidden";}
    }

    const setMarketLabelE = () => {
        let elementRef = document.getElementById("formCorpMarketExE");
        setMarketPrefixE(elementRef.options[elementRef.selectedIndex].value);
        console.log(elementRef.options[elementRef.selectedIndex].value);
    }

    const setDuoMarketLabelE = () => {
        let elementDuoRef = document.getElementById("formCorpDualMarketExE");
        setDualMarketPrefixE(elementDuoRef.options[elementDuoRef.selectedIndex].value)
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
                <MDBInput label='Company Name' type='text' id='formCorpName' aria-describedby='corpNameLabel' defaultValue={companyName}/>
                    <div id='corpNameLabel' className='form-text form-hint'>Company Name</div>
                </div>
                <div style={{paddingBottom:'3px'}}>
                <MDBInput label='Authorized Name' type='text' id='formAuthName' aria-describedby='authName' defaultValue={authorizedName}/>
                    <div id='authNameLabel' className='form-text form-hint'>Primary Contact Name</div>
                </div>
                <div style={{paddingBottom:'3px'}}>
                <MDBInput label='Authorized Email' type='text' id='formAuthEmail' aria-describedby='authEmail' defaultValue={authorizedEmail}/>
                    <div id='authEmailLabel' className='form-text form-hint'>Primary Contact Email</div>
                </div>
            </MDBCol>
        </MDBRow>
        <MDBRow style={{paddingTop: '23px'}}>
        <MDBCol size='4'>
        <div>
            <Form.Select id='formCorpCountry' aria-describedby='corpCountry' aria-label="corpCountry" defaultValue={corpCountry}>
                    { countriesItems.map( countryItem => (
                                                <option  key={countryItem.id} value={countryItem.name}>{countryItem.name}</option>
                                                ) )}
                            </Form.Select>
                <div id='corpCountryLabel' className='form-text form-hint'>Country of Incorporation</div>
            </div>
        </MDBCol>
        <MDBCol size='4'>
            <div>
            <Form.Select   id='formCorpMarketExE' aria-describedby='corpMarket' aria-label="corpMarket" defaultValue={corpMarket} onChange={setMarketLabelE}>
                            { exchangeMarketsItems.map( exchangeMarket => (
                                        <option  key={exchangeMarket.id} value={exchangeMarket.label}>{exchangeMarket.title}</option>
                                        ) )}
                            </Form.Select>
                <div id='corpMarketExLabel' className='form-text form-hint'>Stock Exchange</div>
            </div>
        </MDBCol>
        <MDBCol size='4'>
            <MDBInputGroup id='formStockTickerInput' className='mb-3' textBefore={marketPrefixE}>
                <input className='form-control' id='formStockTicker' placeholder='Ticker Symbol' type='text' defaultValue={stockTicker}/>
            </MDBInputGroup>
        </MDBCol> 
        </MDBRow>
        
        <MDBRow style={{paddingTop: '23px'}}>
            <MDBCol size='2'>
            <div>
                <div id='corpDualListedStock' className='form-text form-hint'>Dual Listed Company</div>
                <label style={{float: 'left'}} className="switch"><input id='formCorpDualListedToggle' type="checkbox" defaultChecked={duoListed} onClick={toggleDualListingMaskE}/><span className="slider round"></span></label>
            </div>
            </MDBCol>
            <MDBCol size='4'>
            <div id='formCorpDualMarketInputE' style={{visibility:'hidden'}}>
            <Form.Select id='formCorpDualMarketExE' aria-describedby='corpDualMarket' aria-label="corpDualMarket" defaultValue={corpDuoMarket} onChange={setDuoMarketLabelE}>
                            { exchangeMarketsItems.map( dualExchangeMarket => (
                                                        <option key={dualExchangeMarket.id} value={dualExchangeMarket.label}>{dualExchangeMarket.title}</option>
                                                        ))}
                            </Form.Select>
                <div id='corpDualMarketExLabel' className='form-text form-hint'>Dual Stock Exchange</div>
            </div>
            </MDBCol>
            <MDBCol size='4'>
            <MDBInputGroup style={{visibility:'hidden'}} id='formDualStockTickerInput' className='mb-3' textBefore={dualMarketPrefixE}>
                <input className='form-control' id='formDualStockTicker' placeholder='Ticker Symbol' type='text' defaultValue={duoStockTicker}/>
            </MDBInputGroup>
            </MDBCol>
        </MDBRow>
        
        <MDBRow style={{paddingTop: '23px'}}>
        <MDBCol size='2'>
            <div id='corpLegendConditionsInput'>
                <div id='corpLegendConditions' className='form-text form-hint'>Legend Conditions</div>
                <label style={{float: 'left'}} className="switch"><input id='formCorpLegendConditions' defaultChecked={legendConditions} type="checkbox"/><span className="slider round"></span></label>
            </div>
        </MDBCol>
        <MDBCol size='2'>
            <div id='corpDividendsInput'>
                <div id='corpDividends' className='form-text form-hint'>Distributes Dividends</div>
                <label style={{float: 'left'}} className="switch"><input id='formCorpDividendsToggle' defaultChecked={distributesDividends} type="checkbox" onClick={toggleDividendMethodMaskE} /><span className="slider round"></span></label>
            </div>
        </MDBCol>
        <MDBCol size='3'>
            <div id='formCorpDividendsMethodInputE' style={{visibility:'hidden'}}>
                <Form.Select id='formCorpDividendsDistroMethod' aria-describedby='corpDividendsMethod' aria-label="corpDividendsMethod" defaultValue={dividendsDistribution}>
                                { dividendDistributionItems.map( distributionMethod => (
                                                        <option key={distributionMethod.id} value={distributionMethod.label}>{distributionMethod.title}</option>
                                                        ))}
                                </Form.Select>
                    <div id='corpDividendsMethodLabel' className='form-text form-hint'>Distribution Method</div>
                </div>
        </MDBCol>
        <MDBCol size='5'>
            <div id='formCorpCategoryTypeInput' >
                <Form.Select id='formCorpCategoryType' aria-describedby='corpCategoryType' aria-label="corpCategoryType" defaultValue={corporationCategory}>
                                { corporationCategoryItems.map( corporationCategory => (
                                                        <option key={corporationCategory.id} value={corporationCategory.label}>{corporationCategory.title}</option>
                                                        ))}
                                </Form.Select>
                    <div id='formCorpCategoryTypeLabel' className='form-text form-hint'>Incorporation Category</div>
                </div>
        </MDBCol>
        </MDBRow>

    </>

    )
}
export default RolodexEditForm;