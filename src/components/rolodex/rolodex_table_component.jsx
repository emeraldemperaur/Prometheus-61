import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBBadge, MDBBtn, MDBIcon, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { MDBModal, MDBModalDialog, MDBModalContent, MDBModalHeader, MDBModalTitle, MDBModalBody } from 'mdb-react-ui-kit';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import '../rolodex/rolodex_styles.css'
import RolodexViewer from './rolodex_viewer';
import LogoHolder from '../planner/assets/placeholder-circle.png';
import { useDispatch, useSelector } from 'react-redux'
import { deleteCompanyProfile, editCompanyProfile } from '../../forge/rolodex';
import ConfirmModal from '../artificer/confirm_modal_component';
import CascadeModal from '../artificer/cascade_modal_component';
import RecordsModal from '../artificer/records_modal_component';
import RolodexEditForm from './rolodex_edit_component';
import { clearInputs, dividendsValid, duoListedValid, fetchRegion, inputMktValid, inputTextValid, toggleDuoInput, toggledInputValue } from '../../utils/input_inspector';



const RolodexTable = ({rolodexList}) => {
    const [rolodexModal, setRolodexModal] = useState(false);
    const [rolodexItem, setRolodexItem] = useState(null);
    const [confirmModal, setConfirmModal] = useState(false);
    const [cascadeModal, setCascadeModal] = useState(false);
    const [editModal, setEditModal] = useState(false);
    const toggleEditOpen = () => setEditModal(!editModal);
    const toggleOpen = () => setRolodexModal(!rolodexModal);
    const rolodexDeleteDispatch = useDispatch();
    const rolodexEditDispatch = useDispatch();
    const planner = useSelector((state)=> state.planner.list);

    useEffect(() => {
       
      }, [rolodexItem]);

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
            console.log(`Deleting Rolodex Record ${rolodexRecord.companyName}`);
        }
    }
    const editRolodexRecord = (rolodexRecord) => {
        setRolodexItem(rolodexRecord);
        setEditModal(!editModal);
        console.log(`Editing Rolodex Record ${rolodexRecord.companyName}`);
    }
    const updateRolodexRecord = (rolodexRecord) => {
        if(inputTextValid(document.getElementById("formCorpNameE"), document.getElementById("corpNameLabelE")) 
        && inputTextValid(document.getElementById("formAuthNameE"), document.getElementById("authNameLabelE")) 
        && inputTextValid(document.getElementById("formAuthEmailE"), document.getElementById("authEmailLabelE")) 
        && inputTextValid(document.getElementById("formCorpCountryE"), document.getElementById("corpCountryLabelE")) 
        && inputMktValid(document.getElementById("formCorpMarketExE"), document.getElementById("corpMarketExLabelE")) 
        && inputTextValid(document.getElementById("formStockTickerE"), document.getElementById("corpMarketExLabelE")) 
        && duoListedValid(document.getElementById("formCorpDualListedToggleE"),document.getElementById("formCorpDualMarketExE"), document.getElementById("corpDualMarketExLabelE"), document.getElementById("formDualStockTickerE"), document.getElementById("corpDualMarketExLabelE")) 
        && dividendsValid(document.getElementById("formCorpDividendsToggleE"), document.getElementById("formCorpDividendsDistroMethodE"), document.getElementById("corpDividendsMethodLabelE")) 
        && inputTextValid(document.getElementById("formCorpCategoryTypeE"), document.getElementById("formCorpCategoryTypeLabelE"))){
            rolodexEditDispatch(editCompanyProfile({
                id: rolodexRecord.id,
                companyName: document.getElementById("formCorpNameE").value, 
                primaryContactName: document.getElementById("formAuthNameE").value,
                primaryContactEmail: document.getElementById("formAuthEmailE").value,
                companyLogo: '',
                incorporationCountry: document.getElementById("formCorpCountryE").value,
                incorporationRegion: fetchRegion(document.getElementById("formCorpCountryE").value),
                primeStockExchange: document.getElementById("formCorpMarketExE").value,
                primeTickerSymbol: document.getElementById("formStockTickerE").value,
                dualListed: document.getElementById("formCorpDualListedToggleE").checked,
                dualStockExchange: toggleDuoInput(document.getElementById("formCorpDualListedToggleE"), document.getElementById("formCorpDualMarketExE")),
                dualTickerSymbol: toggledInputValue(document.getElementById("formCorpDualListedToggleE"), document.getElementById("formDualStockTickerE")),
                legendConditions: document.getElementById("formCorpLegendConditionsE").checked,
                distributesDividends: document.getElementById("formCorpDividendsToggleE").checked,
                dividendsDistribution: toggledInputValue(document.getElementById("formCorpDividendsToggleE"), document.getElementById("formCorpDividendsDistroMethodE")),
                incorporationCategory: document.getElementById("formCorpCategoryTypeE").value
            }))
            setEditModal(!editModal);
            toast.success(`${rolodexRecord.companyName} updated`,{ position: "top-right", autoClose: 1000, closeOnClick: true});
            console.log(`Successfully Updated '${rolodexRecord.companyName}' Rolodex Record`)
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
                                                <MDBBtn onClick={() => editRolodexRecord(rolodexItem)} className="rolodex-form-button" rounded size='sm'>
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
         {rolodexItem ?
        <>
        <RecordsModal title={`Edit Company Profile`} action="UPDATE" size="xl" onClickFunc={() => updateRolodexRecord(rolodexItem)}
                toggleOpen={toggleEditOpen} staticModal={editModal} setStaticModal={setEditModal} formComponent={
                <>
                <RolodexEditForm companyName={rolodexItem.companyName} authorizedName={rolodexItem.primaryContactName}
                 authorizedEmail={rolodexItem.primaryContactEmail} corpCountry={rolodexItem.incorporationCountry} corpMarket={rolodexItem.primeStockExchange} stockTicker={rolodexItem.primeTickerSymbol} duoListed={rolodexItem.dualListed} 
                 corpDuoMarket={rolodexItem.dualStockExchange} duoStockTicker={rolodexItem.dualTickerSymbol} legendConditions={rolodexItem.legendConditions} distributesDividends={rolodexItem.distributesDividends} 
                 dividendsDistribution={rolodexItem.dividendsDistribution} corporationCategory={rolodexItem.incorporationCategory} />
                </>}/>
        </>
        :null}
    </div>
    </>
    )


}
export default RolodexTable;