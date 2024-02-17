import TitleTile from '../artificer/title_tile_component';
import NavigatorMenu from '../navigator/navigator_component';
import { MDBContainer, MDBRow, MDBCol, MDBInputGroup, MDBDropdown, MDBDropdownItem, MDBDropdownMenu, MDBDropdownToggle, MDBBtn, MDBIcon  } from 'mdb-react-ui-kit';
import { MDBCard, MDBCardHeader, MDBCardBody, MDBCardTitle, MDBCardText } from 'mdb-react-ui-kit';
import '../rolodex/rolodex_styles.css'
import RecordsCount from '../artificer/records_count_component';
import { rolodexFilterItems } from '../../utils/options_data';
import RecordsModal from '../artificer/records_modal_component';
import { useState } from 'react';
import RolodexInputForm from './rolodex_input_component';
import { useSelector, useDispatch } from 'react-redux'
import { addCompanyProfile } from '../../forge/rolodex';
import RolodexTable from './rolodex_table_component';

const RolodexInterface = () => {
    document.body.style.backgroundColor = "#ffffff"
    const [staticModal, setStaticModal] = useState(false);
    const toggleOpen = () => setStaticModal(!staticModal);

    const rolodex = useSelector((state)=> state.rolodex.list);
    const rolodexDispatch = useDispatch();

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
                                        <MDBDropdownItem key={filterItem.id} link>{filterItem.title}</MDBDropdownItem>
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
                <RecordsModal title="New Company Profile" action="CREATE" size="xl" scrollable={true}
                toggleOpen={toggleOpen} staticModal={staticModal} setStaticModal={setStaticModal} formComponent={<RolodexInputForm/>}/>
                <div className="fab-btn" onClick={toggleOpen}> + </div>
    
    </>

    )


}
export default RolodexInterface;