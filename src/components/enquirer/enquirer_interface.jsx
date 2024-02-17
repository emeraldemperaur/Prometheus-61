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


const EnquirerInterface = () => {
    document.body.style.backgroundColor = "#ffffff"
    const [staticModal, setStaticModal] = useState(false);
    const toggleOpen = () => setStaticModal(!staticModal);

    const enquirer = useSelector((state)=> state.enquirer.list);
    const enquirerDispatch = useDispatch();

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
    <RecordsModal title="New Query Model" action="CREATE" size="fullscreen" 
                toggleOpen={toggleOpen} staticModal={staticModal} setStaticModal={setStaticModal} formComponent={<EnquirerInputForm/>}/>
    <div className="fab-btn" onClick={toggleOpen}> + </div>
    </>

    )


}
export default EnquirerInterface;