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

const PlannerInterface = () => {
    document.body.style.backgroundColor = "#ffffff"
    const [staticModal, setStaticModal] = useState(false);
    const toggleOpen = () => setStaticModal(!staticModal);

    const planner = useSelector((state)=> state.planner.list);
    const plannerDispatch = useDispatch();

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
    <RecordsModal title="New Plan Questionnaire" action="CREATE" size="xl" 
                toggleOpen={toggleOpen} staticModal={staticModal} setStaticModal={setStaticModal} formComponent={<PlannerInputForm/>}/>
    <div className="fab-btn" onClick={toggleOpen}> + </div>
    </>

    )


}
export default PlannerInterface;