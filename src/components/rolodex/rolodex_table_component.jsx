import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBBadge, MDBBtn, MDBIcon, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { MDBModal, MDBModalDialog, MDBModalContent, MDBModalHeader, MDBModalTitle, MDBModalBody } from 'mdb-react-ui-kit';
import { useState } from 'react';
import '../rolodex/rolodex_styles.css'
import RolodexViewer from './rolodex_viewer';
import LogoHolder from '../planner/assets/placeholder-circle.png';
import { useDispatch, useSelector } from 'react-redux'
import { deleteCompanyProfile } from '../../forge/rolodex';
import ConfirmModal from '../artificer/confirm_modal_component';
import CascadeModal from '../artificer/cascade_modal_component';



const RolodexTable = ({rolodexList}) => {

    const [rolodexModal, setRolodexModal] = useState(false);
    const [rolodexItem, setRolodexItem] = useState(null);
    const [confirmModal, setConfirmModal] = useState(false);
    const [cascadeModal, setCascadeModal] = useState(false);
    const toggleOpen = () => setRolodexModal(!rolodexModal);
    const rolodexDeleteDispatch = useDispatch();
    const planner = useSelector((state)=> state.planner.list);


    const renderRolodexViewer = (rolodexItemObject) => {
        setRolodexItem(rolodexItemObject)
        setRolodexModal(!rolodexModal);
        console.log(rolodexItem)
    }

    const deleteRolodexRecord = (rolodexRecord) => {
        setRolodexItem(rolodexRecord);
        if(linkedRolodex(rolodexRecord)){
            setCascadeModal(!cascadeModal);
            console.log(`Note: This rolodex record is linked to an extant plan record`)
        }
        if(!linkedRolodex(rolodexRecord)){
            setConfirmModal(!confirmModal)
            console.log(`Deleting Record ${rolodexRecord.companyName}`);
        }
    }

    const linkedRolodex = (rolodexRecord) => {
        let isLinked = false;
        for(const plan of planner){
            if(rolodexRecord.id == plan.companyID){
                isLinked = true;
            }
        }
        return isLinked;
    }

    return(
    <>
    <div>
        <MDBTable striped hover align='middle'>
            <MDBTableHead className="rolodex-form-header-title">
            <tr>
                <th className='rolodex-heading' scope='col'>Company</th>
                <th className='rolodex-heading' scope='col'>Market Region</th>
                <th className='rolodex-heading' scope='col'>Crux</th>
                <th className='rolodex-heading' scope='col'>&nbsp;</th>
                <th className='rolodex-heading' scope='col'>Actions</th>
                <th className='rolodex-heading' scope='col'>&nbsp;</th>
            </tr>
            </MDBTableHead>
            <MDBTableBody style={{ fontFamily:'Montserrat' }}>
                { rolodexList.length > 0 ?
                rolodexList.map( rolodexItem => (
                                            <tr key={rolodexItem.id}>
                                            <td>
                                                <div className='d-flex align-items-center'>
                                                <img
                                                    src={LogoHolder}
                                                    alt=''
                                                    style={{ width: '69px', height: '69px' }}
                                                    className='rounded-circle'
                                                />
                                                <div className='ms-3'>
                                                    <p style={{textAlign:'left'}} className='fw-bold mb-1 rolodex-name-title rolodex-table-txt'>{rolodexItem.companyName}</p>
                                                    <p style={{textAlign:'left'}} className='text-muted mb-0 rolodex-table-txt'>{rolodexItem.incorporationCountry}</p>
                                                    <p style={{textAlign:'left'}} className='text-muted mb-0 rolodex-table-txt'>{rolodexItem.incorporationCategory}</p>
                                                </div>
                                                </div>
                                            </td>
                                            <td>
                                                <p className='rolodex-form-region-text fw-normal mb-1'>{rolodexItem.incorporationRegion}</p>
                                                <p className='rolodex-form-market-text text-muted mb-0'>{rolodexItem.primeStockExchange}</p>
                                                <p className='rolodex-form-symbol-text text-muted mb-0'>{rolodexItem.primeTickerSymbol}</p>
                                            </td>
                                            <td>
                                            {rolodexItem.dualListed ?
                                            <><MDBBadge className='rolodex-badge' color='info' pill>Dual Listed</MDBBadge><br/></>
                                            :null}
                                            {rolodexItem.distributesDividends ?
                                            <><MDBBadge className='rolodex-badge' color='info' pill>Dividends</MDBBadge><br/></>
                                            :null}
                                            {rolodexItem.legendConditions ?
                                            <><MDBBadge className='rolodex-badge' color='info' pill>Legend Conditions</MDBBadge><br/></>
                                            :null}   
                                            </td>
                                            <td>
                                                
                                            </td>
                                            <td>
                                                <MDBBtn onClick={() => renderRolodexViewer(rolodexItem)} className="rolodex-form-button" rounded size='sm'>
                                                <i className="fa-regular fa-eye"></i> View</MDBBtn>&nbsp;
                                                <MDBBtn className="rolodex-form-button" rounded size='sm'>
                                                <i className="fa-regular fa-pen-to-square"></i> Edit</MDBBtn>&nbsp;
                                                <MDBBtn onClick={() => deleteRolodexRecord(rolodexItem)} className="rolodex-form-button" rounded size='sm'>
                                                <i className="fa-solid fa-trash"></i> Delete</MDBBtn>
                                            </td>
                                            <td>
                                            
                                            </td>        

                                            </tr>
                                            )):<> 
                                            <tr>
                                             <th scope='col'>&nbsp;</th>
                                             <th scope='col'>&nbsp;</th>
                                             <th scope='col'><a className='no-records-found'>No Records Found</a></th>
                                             <th scope='col'>&nbsp;</th>
                                             <th scope='col'>&nbsp;</th>
                                             <th scope='col'>&nbsp;</th>
                                            </tr>
                                            </>
                                        }
            </MDBTableBody>
        </MDBTable>
        <>
        <MDBModal open={rolodexModal} tabIndex='-1' setOpen={setRolodexModal}>
            <MDBModalDialog size='xl'>
                <MDBModalContent>
                    <MDBModalHeader>
                        <MDBModalTitle className='rolodex-viewer-title'>{rolodexItem ?
                        <>{rolodexItem.companyName}</>
                            :null}
                        </MDBModalTitle>
                        <MDBBtn className='btn-close' color='none' onClick={toggleOpen}></MDBBtn>
                    </MDBModalHeader>
                    <MDBModalBody>{rolodexItem ?
                        <>
                        <RolodexViewer countryName={rolodexItem.incorporationCountry} region={rolodexItem.incorporationRegion}
                         primeExchange={rolodexItem.primeStockExchange} primeSymbol={rolodexItem.primeTickerSymbol} legends={rolodexItem.legendConditions}
                         dividends={rolodexItem.distributesDividends} dividendsMethod={rolodexItem.dividendsDistribution} dualListed={rolodexItem.dualListed}
                         dualExchange={rolodexItem.dualStockExchange} dualSymbol={rolodexItem.dualTickerSymbol} contactName={rolodexItem.primaryContactName}
                         contactEmail={rolodexItem.primaryContactEmail} corpType={rolodexItem.incorporationCategory}/>
                        
                        </>
                            :null}
                    </MDBModalBody>
            </MDBModalContent>
            </MDBModalDialog>
        </MDBModal>
        </>
        {rolodexItem ?
        <>
        <ConfirmModal title="Delete Company Profile" size="lg" confirmPromptModal={confirmModal} setConfirmPromptModal={setConfirmModal}
                    scrollable={false} recordType={'company profile'} entityProductName={`${rolodexItem.companyName}`}
                    recordIcon="fa-regular fa-registered"
                    onClickFunc={() => {rolodexDeleteDispatch(deleteCompanyProfile({...rolodexItem})); setConfirmModal(!confirmModal);}}/>         
        <CascadeModal title="Linked Company Profile" size="lg" confirmPromptModal={cascadeModal} setConfirmPromptModal={setCascadeModal}
                    scrollable={false} entityProductName={`${rolodexItem.companyName}`}
                    recordIcon="fa-solid fa-sign-hanging"
                    />         
        
        </>
         :null}
    </div>
    </>
    )


}
export default RolodexTable;