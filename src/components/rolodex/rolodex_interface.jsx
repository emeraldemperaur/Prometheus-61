import TitleTile from '../artificer/title_tile_component';
import NavigatorMenu from '../navigator/navigator_component';
import { MDBContainer, MDBRow, MDBCol, MDBInputGroup, MDBDropdown, MDBDropdownItem, MDBDropdownMenu, MDBDropdownToggle, MDBBtn, MDBIcon  } from 'mdb-react-ui-kit';
import { MDBCard, MDBCardHeader, MDBCardBody, MDBCardTitle, MDBCardText } from 'mdb-react-ui-kit';
import '../rolodex/rolodex_styles.css'
import RecordsCount from '../artificer/records_count_component';
import { rolodexFilterItems } from '../../utils/options_data';
import RecordsModal from '../artificer/records_modal_component';
import { useEffect, useState } from 'react';
import RolodexInputForm from './rolodex_input_component';
import { useSelector, useDispatch } from 'react-redux'
import { addCompanyProfile, fetchRolodex } from '../../forge/rolodex';
import RolodexTable from './rolodex_table_component';
import { countriesItems } from '../../utils/country_data';
import { toast } from 'react-toastify';
import ExtantModal from '../artificer/extant_modal_component';

const RolodexInterface = () => {
    document.body.style.backgroundColor = "#ffffff"
    const [staticModal, setStaticModal] = useState(false);
    const [toggleExtantModal, setToggleExtantModal] = useState(false);
    const [extantCorp, setExtantCorp] = useState(" ");
    const [marketPrefix, setMarketPrefix] = useState("----");
    const [dualMarketPrefix, setDualMarketPrefix] = useState("----");

    const toggleOpen = () => setStaticModal(!staticModal);
    const rolodex = useSelector((state)=> state.rolodex.list);
    const rolodexDispatch = useDispatch();

    const submitCPModel = () =>{
        let corpNameInput = document.getElementById("formCorpName");
        let corpNameLabel = document.getElementById("corpNameLabel");
        let corpContactNameInput = document.getElementById("formAuthName");
        let corpContactNameLabel = document.getElementById("authNameLabel");
        let corpContactEmailInput = document.getElementById("formAuthEmail");
        let corpContactEmailLabel = document.getElementById("authEmailLabel");
        let corpLogoInput = document.getElementById("formCorpLogoFile");
        let corpCountryInput = document.getElementById("formCorpCountry");
        let corpCountryLabel = document.getElementById("corpCountryLabel");
        let corpExchangeInput = document.getElementById("formCorpMarketEx");
        let corpExchangeLabel = document.getElementById("corpMarketExLabel");
        let corpSymbolInput = document.getElementById("formStockTicker");
        let corpSymbolLabel = document.getElementById("corpMarketExLabel");
        let corpDualListedInput = document.getElementById("formCorpDualListedToggle");
        let corpDualExchangeOption = document.getElementById("formCorpDualMarketInput");
        let corpDualExchangeInput = document.getElementById("formCorpDualMarketEx");
        let corpDualExchangeLabel = document.getElementById("corpDualMarketExLabel");
        let corpDualSymbolInput = document.getElementById("formDualStockTicker");
        let corpDualSymbolLabel = document.getElementById("corpDualMarketExLabel");
        let corpDualSymbolOption = document.getElementById("formDualStockTickerInput");
        let corpLegendInput = document.getElementById("formCorpLegendConditions");
        let corpDividendsInput = document.getElementById("formCorpDividendsToggle");
        let corpDividendDistroInput = document.getElementById("formCorpDividendsDistroMethod");
        let corpDividendDistroLabel = document.getElementById("corpDividendsMethodLabel");
        let corpDividendDistroOption = document.getElementById("formCorpDividendsMethodInput");
        let corpCategoryInput = document.getElementById("formCorpCategoryType");
        let corpCategoryLabel = document.getElementById("formCorpCategoryTypeLabel");
        if(inputTextValid(corpNameInput, corpNameLabel) && inputTextValid(corpContactNameInput, corpContactNameLabel) 
        && inputTextValid(corpContactEmailInput, corpContactEmailLabel) && inputTextValid(corpCountryInput, corpCountryLabel) 
        && inputMktValid(corpExchangeInput, corpExchangeLabel) && inputTextValid(corpSymbolInput, corpSymbolLabel) 
        && duoListedValid(corpDualListedInput, corpDualExchangeInput, corpDualExchangeLabel, corpDualSymbolInput, corpDualSymbolLabel) 
        && dividendsValid(corpDividendsInput, corpDividendDistroInput, corpDividendDistroLabel) 
        && inputTextValid(corpCategoryInput, corpCategoryLabel)){
            if(rolodexExists(corpNameInput.value, corpCountryInput.value, rolodex)){
                setExtantCorp(corpNameInput.value)
                setStaticModal(!staticModal);
                setTimeout(() => {
                        setToggleExtantModal(!toggleExtantModal);
                    }, 333);
            } 
            if(!rolodexExists(corpNameInput.value, corpCountryInput.value, rolodex)){
                rolodexDispatch(addCompanyProfile({
                    id:getNextId(rolodex),
                    companyName: corpNameInput.value, 
                    primaryContactName: corpContactNameInput.value,
                    primaryContactEmail: corpContactEmailInput.value,
                    companyLogo: '',
                    incorporationCountry: corpCountryInput.value,
                    incorporationRegion: fetchRegion(corpCountryInput.value),
                    primeStockExchange: corpExchangeInput.value,
                    primeTickerSymbol: corpSymbolInput.value,
                    dualListed: corpDualListedInput.checked,
                    dualStockExchange: toggledInputValue(corpDualListedInput, corpDualExchangeInput),
                    dualTickerSymbol: toggledInputValue(corpDualListedInput, corpDualSymbolInput),
                    legendConditions: corpLegendInput.checked,
                    distributesDividends: corpDividendsInput.checked,
                    dividendsDistribution: toggledInputValue(corpDividendsInput, corpDividendDistroInput),
                    incorporationCategory: corpCategoryInput.value
                }))
                setStaticModal(!staticModal);
                clearInputs([corpNameInput, corpContactNameInput, corpContactEmailInput, corpCountryInput, corpExchangeInput, corpSymbolInput, 
                    corpDualExchangeInput, corpDualSymbolInput, corpDividendDistroInput, corpCategoryInput])
                clearToggles([corpDualListedInput, corpLegendInput, corpDividendsInput])
                setMarketPrefix("----");setDualMarketPrefix("----");
                hideToggledInput([corpDualExchangeOption, corpDualSymbolOption, corpDividendDistroOption])
            } 
            
        }
    }

    const inputTextValid = (inputElement, inputLabel) =>{
        let inputValid = false;
        if(inputElement.value.trim().length == 0){inputValid = false; inputLabel.style.color = "#880808"; inputLabel.style.fontWeight = 500; toast.warn('Missing required field!',{ position: "top-right", autoClose: 696, closeOnClick: true})
            inputElement.focus();
        }
        if(inputElement.value.trim().length != 0){inputValid = true; inputLabel.style.color = "#757575"; inputLabel.style.fontWeight = 'normal'}
        console.log("Input Valid: " + inputValid)
        return inputValid
    }

    const inputMktValid = (inputElement, inputLabel) =>{
        let inputMktValid = false;
        if(inputElement.value.trim() == "----"){inputMktValid = false; inputLabel.style.color = "#880808"; inputLabel.style.fontWeight = 500; toast.warn('Missing required field!',{ position: "top-right", autoClose: 696, closeOnClick: true})
            inputElement.focus();
        }
        if(inputElement.value.trim() != 0 && inputElement.value.trim() != "----"){inputMktValid = true; inputLabel.style.color = "#757575"; inputLabel.style.fontWeight = 'normal'}
        console.log("Input Mkt Valid: " + inputMktValid)
        return inputMktValid
    }

    const duoListedValid = (toggleElement, inputElement, inputLabel, symbolElement, symbolLabel) => {
        let duoListed = false;
        console.log("Duo Toggle Position: " + toggleElement.checked);
        if(toggleElement && toggleElement.checked){ duoListed = inputMktValid(inputElement, inputLabel);if(duoListed){duoListed = inputTextValid(symbolElement, symbolLabel);}}
        if(!toggleElement.checked){duoListed = true;}return duoListed}

    const dividendsValid = (toggleElement, inputElement, inputLabel) =>{
        let dividendsValid = false;
        console.log("Dividends Toggle Position: " + toggleElement.checked);
        if(toggleElement && toggleElement.checked){dividendsValid = inputTextValid(inputElement, inputLabel);}
        if(!toggleElement.checked){dividendsValid = true;} return dividendsValid
    }

    const toggledInputValue = (toggleInput, inputElement) =>{ let inputValue = " "; if(toggleInput.value){inputValue = inputElement.value} return inputValue}

    const fetchRegion = (countryName) => {
        let regionName = " "; let countryObject = null;
        for(const country of countriesItems){if(country.name == countryName)countryObject = country}
        if(countryObject.continent == "North America"){regionName = "North America"}
        if(countryObject.continent == "Asia"){regionName = "Asia-Pacific"}
        if(countryObject.continent == "South America"){regionName = "Latin America"}
        if(countryObject.continent == "Caribbean"){regionName = "Latin America"}
        if(countryObject.continent == "Oceania"){regionName = "Asia-Pacific"}
        if(countryObject.continent == "Europe"){regionName = "EMEA"}
        if(countryObject.continent == "Middle East"){regionName = "EMEA"}
        if(countryObject.continent == "Africa"){regionName = "EMEA"}
       
        return regionName;
    }

    const clearInputs = (inputList) =>{for(const inputElement of inputList){inputElement.value = " ";}}

    const clearToggles = (toggleList) => { for(const toggle of toggleList){ toggle.checked = false;}}

    const rolodexExists = (companyName, countryName, rolodexList) =>{
        let extantRolodex = false;
        for(const rolodex of rolodexList){
            if(rolodex.companyName == companyName && rolodex.incorporationCountry == countryName){
                extantRolodex = true;
                console.log(`An extant company profile already exists for ${companyName} in that region. Please provide a unique company name.`)
            }
        }
        return extantRolodex;
    }

    const hideToggledInput = (inputList) => {
        for(const visibleInput of inputList){
            visibleInput.style.visibility = "hidden"
            console.log("Hide Toggled Input check: " + visibleInput)
        }
    }

    const getNextId = (rolodexStore) => { let rolodexLength = rolodexStore.length; return ++rolodexLength}

    return(
    <>
    <NavigatorMenu/>
    <TitleTile title="Manage Company Profiles"/>
    <MDBContainer fluid className='action-box'>
                    <MDBRow start>
                        <MDBCol size='4'>
                            <MDBInputGroup className='mb-3'>
                                <input style={{ fontFamily: 'Montserrat'}} id='rolodexSearch' className='form-control' type='search' placeholder="Search..."/>
                                <MDBDropdown style={{ fontFamily: 'Montserrat'}}>
                                <MDBDropdownToggle style={{ backgroundColor: '#002C51', fontFamily: 'Montserrat', fontSize: 15, fontWeight: 500 , letterSpacing: '0.21em'}}>Filter By</MDBDropdownToggle>
                                    <MDBDropdownMenu style={{ margin: 0 }}>
                                    { rolodexFilterItems.map( filterItem => (
                                        <MDBDropdownItem onClick={()=> rolodexDispatch(fetchRolodex())} key={filterItem.id} link>{filterItem.title}</MDBDropdownItem>
                                        ))}
                                        </MDBDropdownMenu>
                                </MDBDropdown>
                            </MDBInputGroup>
                        </MDBCol>
                        <MDBCol size='4'>
                            <MDBBtn onClick={toggleOpen} style={{ backgroundColor: '#002C51', fontFamily: 'Montserrat', fontSize: 13, fontWeight: 600, letterSpacing: '0.21em' }} href=''>
                                <MDBIcon fab icon='plus circle'/>  NEW COMPANY PROFILE
                            </MDBBtn>
                        </MDBCol>
                    </MDBRow>

                    <MDBRow>
                    <MDBCol size='4'>
                        <RecordsCount recordtitle='Records Found' recordcount={rolodex.length}/>
                    </MDBCol>
                    </MDBRow>
                    <MDBRow>
                    <div>
                    <MDBCard className='list-bottom'>
                           <RolodexTable rolodexList={rolodex}/> 
                           {console.log("Pre UI List: "+ rolodex.length)}    
                               
                    </MDBCard>
                    </div>
                    </MDBRow>
                </MDBContainer>
                <RecordsModal title="New Company Profile" action="CREATE" size="xl" scrollable={true} onClickFunc={submitCPModel}
                toggleOpen={toggleOpen} staticModal={staticModal} setStaticModal={setStaticModal} 
                formComponent={<RolodexInputForm marketPrefix={marketPrefix} dualMarketPrefix={dualMarketPrefix}
                 setMarketPrefix={setMarketPrefix} setDualMarketPrefix={setDualMarketPrefix}/>}/>

                <ExtantModal title="Extant Company Profile" size="lg" staticModal={staticModal} setStaticModal={setStaticModal}
                                    togglePromptModal={toggleExtantModal} setTogglePromptModal={setToggleExtantModal} scrollable={false} 
                                    recordType="company profile" recordName={extantCorp} entity="company name" recordIcon="fa-regular fa-registered"
                                    context="in that market region"/>
                <div className="fab-btn" onClick={toggleOpen}> + </div>
    
    </>

    )


}
export default RolodexInterface;