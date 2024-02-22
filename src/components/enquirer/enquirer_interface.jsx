import NavigatorMenu from '../navigator/navigator_component';
import TitleTile from '../artificer/title_tile_component';
import { MDBContainer, MDBRow, MDBCol, MDBInputGroup, MDBDropdown, MDBDropdownItem, MDBDropdownMenu, MDBDropdownToggle, MDBBtn, MDBIcon  } from 'mdb-react-ui-kit';
import { MDBCard, MDBCardHeader, MDBCardBody, MDBCardTitle, MDBCardText } from 'mdb-react-ui-kit';
import RecordsCount from '../artificer/records_count_component';
import { enquirerFilterItems } from '../../utils/options_data';
import RecordsModal from '../artificer/records_modal_component';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import EnquirerInputForm from './enquirer_input_component';
import { addQueryModel } from '../../forge/enquirer';
import EnquirerTable from './enquirer_table_component';
import { toast } from 'react-toastify';
import { currentTime } from '../../utils/chronos';


const EnquirerInterface = () => {
    document.body.style.backgroundColor = "#ffffff"
    const [staticModal, setStaticModal] = useState(false);
    const toggleOpen = () => setStaticModal(!staticModal);

    const enquirer = useSelector((state)=> state.enquirer.list);
    const enquirerDispatch = useDispatch();

    const submitQMModel = () =>{
        let queryModelInput = document.getElementById("formQueryModelName");
        let queryModelLabel = document.getElementById("queryModelNameLabel");
        let queryModelProductInput = document.getElementById("formQueryModelProduct");
        let queryModelProductLabel = document.getElementById("queryModelProductLabel");
        let queryModelPlanInput = document.getElementById("formQueryModelPlan");
        let queryModelPlanLabel = document.getElementById("queryModelPlanLabel");
        let queryModelRegionInput = document.getElementById("formQueryModelRegion");
        let queryModelRegionLabel = document.getElementById("queryModelRegionLabel");
        let queryModelMarketInput = document.getElementById("formQueryModelMarketEx");
        let queryModelMarketLabel = document.getElementById("queryModelMarketExLabel");
        let queryModelPlatformInput = document.getElementById("formQueryModelPlatform");
        let queryModelPlatformLabel = document.getElementById("queryModelPlatformLabel");
        let queryModelJSONInput = document.getElementById("formQueryModelJSON");
        let queryModelJSONLabel = document.getElementById("queryModelJSONLabel");
        if(inputTextValid(queryModelInput, queryModelLabel) && inputTextValid(queryModelInput, queryModelLabel) 
        && inputTextValid(queryModelProductInput, queryModelProductLabel) && inputTextValid(queryModelPlanInput, queryModelPlanLabel) 
        && inputTextValid(queryModelRegionInput, queryModelRegionLabel) && inputMktValid(queryModelMarketInput, queryModelMarketLabel)
        && inputTextValid(queryModelPlatformInput, queryModelPlatformLabel) && inputTextValid(queryModelJSONInput, queryModelJSONLabel)){
            enquirerDispatch(addQueryModel({
                id:getNextId(enquirer),
                modelName: queryModelInput.value, 
                productName: queryModelProductInput.value,
                productPlanName: queryModelPlanInput.value,
                regionName: queryModelRegionInput.value,
                exchangeMarket: queryModelMarketInput.value,
                platformName: queryModelPlatformInput.value,
                enquiryAuthor: 'Prometheus Admin',
                enquiryDate: currentTime(),
                enquiryModified: false,
                enquiryEditor: ' ',
                enquiryEditDate: ' ',
                jsonQueryDefinition: queryModelJSONInput.value
            }))
            clearInputs([queryModelInput, queryModelProductInput, queryModelPlanInput, queryModelRegionInput, queryModelMarketInput, 
                queryModelPlatformInput, queryModelJSONInput])
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

    const inputMktValid = (inputElement, inputMktLabel) =>{
        let inputMktValid = false
        if(inputElement.value.trim() == "----"){inputMktValid = false; inputMktLabel.style.color = "#880808"; inputMktLabel.style.fontWeight = 500; toast.warn('Missing required field!',{ position: "top-right", autoClose: 696, closeOnClick: true}); inputElement.focus();}
        if(inputElement.value.trim() != 0 && inputElement.value.trim() != "----"){inputMktValid = true; inputMktLabel.style.color = "#757575"; inputMktLabel.style.fontWeight = 'normal'}
        console.log("Input Mkt Valid: " + inputMktValid)
        return inputMktValid
    }

    const getNextId = (enquirerStore) => { let enquirerLength = enquirerStore.length; return ++enquirerLength}
    const clearInputs = (inputList) =>{for(const inputElement of inputList){inputElement.value = " ";}}



    return(
    <>
    <NavigatorMenu/>
    <TitleTile title="Manage Query Models"/>
    <MDBContainer fluid className='action-box'>
                    <MDBRow start>
                        <MDBCol size='4'>
                            <MDBInputGroup className='mb-3'>
                                <input id='enquirerSearch' style={{ fontFamily: 'Montserrat'}} className='form-control' type='search' placeholder="Search..."/>
                                <MDBDropdown style={{ fontFamily: 'Montserrat'}}>
                                <MDBDropdownToggle style={{ backgroundColor: '#002C51', fontFamily: 'Montserrat', fontSize: 15, fontWeight: 500 , letterSpacing: '0.21em'}}>Filter By</MDBDropdownToggle>
                                    <MDBDropdownMenu style={{ margin: 0 }}>
                                    { enquirerFilterItems.map( filterItem => (
                                        <MDBDropdownItem key={filterItem.id} link>{filterItem.title}</MDBDropdownItem>
                                        ))}
                                        </MDBDropdownMenu>
                                </MDBDropdown>
                            </MDBInputGroup>
                        </MDBCol>
                        <MDBCol size='4'>
                            <MDBBtn onClick={toggleOpen} style={{ backgroundColor: '#002C51', fontFamily: 'Montserrat', fontSize: 13, fontWeight: 600, letterSpacing: '0.21em' }} href=''>
                                <MDBIcon fab icon='plus circle' />  NEW QUERY MODEL
                            </MDBBtn>
                        </MDBCol>
                    </MDBRow>

                    <MDBRow>
                    <MDBCol size='4'>
                        <RecordsCount recordtitle='Records Found' recordcount={enquirer.length}/>
                    </MDBCol>
                    </MDBRow>
                    <MDBRow>
                    <div>
                    <MDBCard className='list-bottom'>
                        <EnquirerTable enquirerList={enquirer}/>
                            {/*<MDBCardBody>
                           } {
                                    enquirer ?
                                        enquirer.map(enquiry => (
                                            <li key={enquiry.id}>{enquiry.modelName}</li>
                                        ))
                                        :null
                                }
                            
                            </MDBCardBody>
                            */}
                    </MDBCard>
                    </div>
                    </MDBRow>
    </MDBContainer>
    <RecordsModal title="New Query Model" action="CREATE" size="fullscreen" onClickFunc={submitQMModel}
                toggleOpen={toggleOpen} staticModal={staticModal} setStaticModal={setStaticModal} formComponent={<EnquirerInputForm/>}/>
    <div className="fab-btn" onClick={toggleOpen}> + </div>
    </>

    )


}
export default EnquirerInterface;