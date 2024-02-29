import NavigatorMenu from '../navigator/navigator_component';
import TitleTile from '../artificer/title_tile_component';
import { MDBContainer, MDBRow, MDBCol, MDBInputGroup, MDBDropdown, MDBDropdownItem, MDBDropdownMenu, MDBDropdownToggle, MDBBtn, MDBIcon  } from 'mdb-react-ui-kit';
import { MDBCard, MDBCardHeader, MDBCardBody, MDBCardTitle, MDBCardText } from 'mdb-react-ui-kit';
import RecordsCount from '../artificer/records_count_component';
import { plannerFilterItems } from '../../utils/options_data';
import RecordsModal from '../artificer/records_modal_component';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import PlannerInputForm from './planner_input_component';
import { addPlanQuestionnaire } from '../../forge/planner';
import PlannerTable from './planner_table_component';
import { toast } from 'react-toastify';
import rolodex from '../../forge/rolodex';
import { currentTime } from '../../utils/chronos';


const PlannerInterface = () => {
    document.body.style.backgroundColor = "#ffffff"
    const [staticModal, setStaticModal] = useState(false);
    const toggleOpen = () => setStaticModal(!staticModal);
    const rolodexList = useSelector((state)=> state.rolodex.list);
    const enquirerList = useSelector((state)=> state.enquirer.list);
    const planner = useSelector((state)=> state.planner.list);
    const plannerDispatch = useDispatch();

    const submitPQModel = () =>{
        let plannerCorpNameInput = document.getElementById("formPlannerCorpName");
        let plannerCorpNameLabel = document.getElementById("plannerCorpNameLabel");
        let plannerProductNameInput = document.getElementById("formPlannerProductName");
        let plannerProductNameLabel = document.getElementById("plannerProductNameLabel");
        let plannerPlanNameInput = document.getElementById("formPlannerPlanName");
        let plannerPlanNameLabel = document.getElementById("plannerPlanNameLabel");
        let plannerEnquiryNameInput = document.getElementById("formPlannerEnquiryName");
        let plannerEnquiryNameLabel = document.getElementById("plannerEnquiryNameLabel");
        let plannerAutoShareInput = document.getElementById("formPlannerEnquiryShare");
        if(inputTextValid(plannerCorpNameInput, plannerCorpNameLabel) && inputTextValid(plannerProductNameInput, plannerProductNameLabel) 
        && inputTextValid(plannerPlanNameInput, plannerPlanNameLabel) && inputTextValid(plannerEnquiryNameInput, plannerEnquiryNameLabel)){
            let selectedCorp = fetchCompany(rolodexList, plannerCorpNameInput.value)
            let selectedQuery = fetchQuery(enquirerList, plannerEnquiryNameInput.value)
            plannerDispatch(addPlanQuestionnaire({
                id:getNextId(planner),
                companyName: selectedCorp.companyName,
                companyID: selectedCorp.id, 
                companyRegion: selectedCorp.incorporationRegion,
                companyStockExchange: selectedCorp.primeStockExchange,
                companyTickerSymbol: selectedCorp.primeTickerSymbol,
                isCorpDualListed: selectedCorp.dualListed,
                companyDualStockExchange: selectedCorp.dualStockExchange,
                companyDualTickerSymbol: selectedCorp.dualTickerSymbol,
                productName: plannerProductNameInput.value,
                productPlanName: plannerPlanNameInput.value,
                enquiryName: selectedQuery.modelName,
                enquiryID: selectedQuery.id,
                enquiryPlatformName: selectedQuery.platformName,
                autoShare: plannerAutoShareInput.checked,
                status: 1,
                buildRank: 0,
                correspondenceName: selectedCorp.primaryContactName,
                correspondenceEmail:selectedCorp.correspondenceEmail,
                correspondenceTime: currentTime()
            }))
            clearInputs([plannerCorpNameInput, plannerProductNameInput, plannerPlanNameInput, plannerEnquiryNameInput])
            clearToggles([plannerAutoShareInput])
            setStaticModal(!staticModal);
        }

    }

    const inputTextValid = (inputElement, inputLabel) =>{
        let inputValid = false
        if(inputElement.value.trim().length == 0){inputValid = false; inputLabel.style.color = "#880808"; inputLabel.style.fontWeight = 500; toast.warn('Missing required field!',{ position: "top-right", autoClose: 696, closeOnClick: true})
            inputElement.focus();
        }
        if(inputElement.value.trim().length != 0){inputValid = true; inputLabel.style.color = "#757575"; inputLabel.style.fontWeight = 'normal'}
        console.log("Input Valid: " + inputValid)
        return inputValid
    }

    const fetchCompany = (rolodexList, selectedId) =>{
        let corpObject = null
        for(const corp of rolodexList){
            if(corp.id == selectedId){
                corpObject = corp
            }
        }
        return corpObject;
    }

    const fetchQuery = (enquirerList, selectedId) =>{
        let queryObject = null
        for(const enquiry of enquirerList){
            if(enquiry.id == selectedId){
                queryObject = enquiry
            }
        }
        return queryObject;
    }

    const getNextId = (plannerStore) => { let plannerLength = plannerStore.length; return ++plannerLength}
    const clearInputs = (inputList) =>{for(const inputElement of inputList){inputElement.value = " ";}}
    const clearToggles = (toggleList) => { for(const toggle of toggleList){ toggle.checked = false;}}

    return(
    <>
    <NavigatorMenu/>
    <TitleTile title="Manage Plan Forms"/>
    <MDBContainer fluid className='action-box'>
                    <MDBRow start>
                        <MDBCol size='4'>
                            <MDBInputGroup className='mb-3'>
                                <input id='plannerSearch' style={{ fontFamily: 'Montserrat'}} className='form-control' type='search' placeholder="Search..."/>
                                <MDBDropdown style={{ fontFamily: 'Montserrat'}}>
                                <MDBDropdownToggle style={{ backgroundColor: '#002C51', fontFamily: 'Montserrat', fontSize: 15, fontWeight: 500 , letterSpacing: '0.21em'}}>Filter By</MDBDropdownToggle>
                                    <MDBDropdownMenu style={{ margin: 0 }}>
                                    { plannerFilterItems.map( filterItem => (
                                        <MDBDropdownItem key={filterItem.id} link>{filterItem.title}</MDBDropdownItem>
                                        ))}
                                        </MDBDropdownMenu>
                                </MDBDropdown>
                            </MDBInputGroup>
                        </MDBCol>
                        <MDBCol size='4'>
                            <MDBBtn onClick={toggleOpen} style={{ backgroundColor: '#002C51', fontFamily: 'Montserrat', fontSize: 13, fontWeight: 600, letterSpacing: '0.21em' }} href=''>
                                <MDBIcon fab icon='plus circle' />  NEW PLAN QUESTIONNAIRE
                            </MDBBtn>
                        </MDBCol>
                    </MDBRow>

                    <MDBRow>
                    <MDBCol size='4'>
                        <RecordsCount recordtitle='Records Found' recordcount={planner.length}/>
                    </MDBCol>
                    </MDBRow>
                    <MDBRow>
                    <div>
                    <MDBCard className='list-bottom'>
                        <PlannerTable plannerList={planner}/>
                            {/* <MDBCardBody>
                          } {
                                    planner ?
                                    planner.map(plan => (
                                            <li key={plan.id}>{plan.companyName}<br/>{plan.productPlanName}</li>
                                        ))
                                        :null
                                }
                            </MDBCardBody>
                            */}
                    </MDBCard>
                    </div>
                    </MDBRow>
    </MDBContainer>
    <RecordsModal title="New Plan Questionnaire" action="CREATE" size="xl" onClickFunc={submitPQModel}
                toggleOpen={toggleOpen} staticModal={staticModal} setStaticModal={setStaticModal} formComponent={<PlannerInputForm/>}/>
    <div className="fab-btn" onClick={toggleOpen}> + </div>
    </>

    )


}
export default PlannerInterface;