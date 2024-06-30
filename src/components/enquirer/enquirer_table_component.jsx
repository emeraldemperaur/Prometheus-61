import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody, MDBModal, MDBModalDialog, MDBModalContent, MDBModalHeader, MDBModalTitle, MDBModalBody } from 'mdb-react-ui-kit';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import Form from 'react-bootstrap/Form';
import '../planner/planner_styles.css'
import EnquirerViewer from './enquirer_viewer';
import { useDispatch, useSelector } from 'react-redux'
import { deleteQueryModel, editQueryModel } from '../../forge/enquirer';
import ConfirmModal from '../artificer/confirm_modal_component';
import RecordsModal from '../artificer/records_modal_component';
import EnquirerEditForm from './enquirer_edit_component';
import { currentTime } from '../../utils/chronos';
import { clearInputs, inputMktValid, inputTextValid } from '../../utils/input_inspector';



const EnquirerTable = ({enquirerList}) => {

    const [enquirerModal, setEnquirerModal] = useState(false);
    const [enquirerItem, setEnquirerItem] = useState(null);
    const [confirmModal, setConfirmModal] = useState(false);
    const [editModal, setEditModal] = useState(false);
    const [editLinked, setEditLinked] = useState(false);
    const toggleEditOpen = () => setEditModal(!editModal);
    const toggleOpen = () => setEnquirerModal(!enquirerModal); 
    const enquirerDeleteDispatch = useDispatch();
    const enquirerEditDispatch = useDispatch();
    const planner = useSelector((state)=> state.planner.list);
    const renderEnquirerViewer = (enquirerItemObject) => { 
        setEnquirerItem(enquirerItemObject); 
        setEnquirerModal(!enquirerModal); 
        console.log(enquirerItem)
    }
    const deleteEnquirerRecord = (enquirerRecord) => {
        setEnquirerItem(enquirerRecord);
        setConfirmModal(!confirmModal)
        console.log(`Deleting Enquirer Record ${enquirerRecord.modelName}`);

    }
    const editEnquirerRecord = (enquirerRecord) => {
        setEnquirerItem(enquirerRecord);
        if(isLinkedEnquiry(enquirerRecord)){setEditLinked(true);}
        if(!isLinkedEnquiry(enquirerRecord)){setEditLinked(false);}
        setEditModal(!editModal);
        console.log(`Editing Enquirer Record ${enquirerRecord}`);
    }
    const updateEnquirerRecord = (enquirerRecord) => {

        if(inputTextValid(document.getElementById("formQueryModelNameE"), document.getElementById("queryModelNameLabelE")) 
        && inputTextValid(document.getElementById("formQueryModelProductE"), document.getElementById("queryModelProductLabelE")) 
        && inputTextValid(document.getElementById("formQueryModelPlanE"), document.getElementById("queryModelPlanLabelE")) 
        && inputTextValid(document.getElementById("formQueryModelRegionE"), document.getElementById("queryModelRegionLabelE")) 
        && inputMktValid(document.getElementById("formQueryModelMarketExE"), document.getElementById("queryModelMarketExLabelE"))
        && inputTextValid(document.getElementById("formQueryModelPlatformE"), document.getElementById("queryModelPlatformLabelE"))
        && inputTextValid(document.getElementById("formQueryModelJSONE"), document.getElementById("queryModelJSONLabelE"))){
            
        enquirerEditDispatch(editQueryModel({
                    id: enquirerRecord.id,
                    modelName: document.getElementById("formQueryModelNameE").value, 
                    productName: document.getElementById("formQueryModelProductE").value,
                    productPlanName: document.getElementById("formQueryModelPlanE").value,
                    regionName: document.getElementById("formQueryModelRegionE").value,
                    exchangeMarket: document.getElementById("formQueryModelMarketExE").value,
                    platformName: document.getElementById("formQueryModelPlatformE").value,
                    enquiryAuthor: enquirerRecord.enquiryAuthor,
                    enquiryDate: enquirerRecord.enquiryDate,
                    enquiryModified: true,
                    enquiryEditor: 'Prometheus Admin (Editor)',
                    enquiryEditDate: currentTime(),
                    jsonQueryDefinition: document.getElementById("formQueryModelJSONE").value
                }))
                clearInputs([document.getElementById("formQueryModelName"), document.getElementById("formQueryModelProduct"), 
                document.getElementById("formQueryModelPlan"), document.getElementById("formQueryModelRegion"), document.getElementById("formQueryModelMarketEx"), 
                document.getElementById("formQueryModelPlatform"), document.getElementById("formQueryModelJSON")])
                setEditModal(!editModal);
                toast.success(`${enquirerRecord.modelName} updated`,{ position: "top-right", autoClose: 1000, closeOnClick: true});
                console.log(`Successfully Updated '${enquirerRecord.modelName}' Enquirer Record`);
        }
    }
    const isLinkedEnquiry = (enquirerRecord) => {
        let isLinkedEnquiry = false;
        for(const plan of planner){
            if(enquirerRecord.id == plan.enquiryID){
                isLinkedEnquiry = true;
            }
        }
        return isLinkedEnquiry;
    }
   


    return(
    <>
    <div>
        <MDBTable striped hover align='middle'>
            <MDBTableHead className="enquirer-form-header-title">
            <tr>
                <th className='enquirer-heading' scope='col'>Query</th>
                <th className='enquirer-heading' scope='col'>Market Region</th>
                <th className='enquirer-heading' scope='col'>Platform</th>
                <th className='enquirer-heading' scope='col'>&nbsp;</th>
                <th className='enquirer-heading' scope='col'>Actions</th>
                <th className='enquirer-heading' scope='col'>&nbsp;</th>
            </tr>
            </MDBTableHead>
            <MDBTableBody style={{ fontFamily:'Montserrat' }}>
                    { enquirerList.length > 0 ?
                        enquirerList.map( enquirerItem => (
                                <tr key={enquirerItem.id}>
                                    <td>
            
                                        <div className='d-flex align-items-center'>
                                        <div className='ms-3'>
                                            <p className='fw-bold mb-1 enquirer-name-title enquirer-table-txt'>{enquirerItem.modelName}</p>
                                            <p className='text-muted mb-0 enquirer-table-txt'>{enquirerItem.productPlanName}</p>
                                        </div>
                                        </div>
                                    </td>
                                    <td>
                                        <p className='enquirer-form-region-text fw-normal mb-1'>{enquirerItem.regionName}</p>
                                        <p className='enquirer-form-market-text text-muted mb-0'>{enquirerItem.exchangeMarket}</p>
                                    </td>
                                    <td>
                                        {enquirerItem.platformName == "Global - All Platforms" ?
                                        <><MDBBadge className='enquirer-badge' color='dark' pill>Global - All Platforms</MDBBadge></>
                                        :null}
                                        {enquirerItem.platformName == "Shareworks" ?
                                        <><MDBBadge className='enquirer-badge-sw' color='dark' pill>Shareworks</MDBBadge></>
                                        :null}
                                        {enquirerItem.platformName == "E-Trade" ?
                                        <><MDBBadge className='enquirer-badge-etrade' color='dark' pill>E-Trade</MDBBadge></>
                                        :null}
                                        {enquirerItem.platformName == "UBS Group" ?
                                        <><MDBBadge className='enquirer-badge-ubs' color='dark' pill>UBS Group</MDBBadge></>
                                        :null}
                                        {enquirerItem.platformName == "Stockvantage" ?
                                        <><MDBBadge className='enquirer-badge-sv' color='dark' pill>Stockvantage</MDBBadge></>
                                        :null}
                                    </td>
                                    <td>
                                        
                                    </td>
                                    <td>
                                        <MDBBtn onClick={() => renderEnquirerViewer(enquirerItem)} className="enquirer-form-button" rounded size='sm'>
                                        <i className="fa-regular fa-eye"></i> View</MDBBtn>&nbsp;
                                        <MDBBtn onClick={() => editEnquirerRecord(enquirerItem)} className="enquirer-form-button" rounded size='sm'>
                                        <i className="fa-regular fa-pen-to-square"></i> Edit</MDBBtn>&nbsp;
                                        <MDBBtn onClick={() => deleteEnquirerRecord(enquirerItem)} className="enquirer-form-button" rounded size='sm'>
                                        <i className="fa-solid fa-trash"></i> Delete</MDBBtn>
                                    </td>
                                    <td>
                                    
                                    </td>
                                </tr>
                                )):
                                <> 
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
        <MDBModal open={enquirerModal} tabIndex='-1' setOpen={setEnquirerModal}>
            <MDBModalDialog scrollable size='xl'>
                <MDBModalContent>
                    <MDBModalHeader>
                        <MDBModalTitle className='enquirer-viewer-title'>{enquirerItem ?
                        <>{enquirerItem.modelName}<br/>
                        <p className='enquirer-viewer-subtitle'>{enquirerItem.productPlanName}</p></>
                            :null}
                        </MDBModalTitle>
                        <MDBBtn className='btn-close' color='none' onClick={toggleOpen}></MDBBtn>
                    </MDBModalHeader>
                    <MDBModalBody>{enquirerItem ?
                        <>
                        <EnquirerViewer modelName={enquirerItem.modelName} regionName={enquirerItem.regionName} exchangeMarket={enquirerItem.exchangeMarket} 
                        platformName={enquirerItem.platformName} enquiryAuthor={enquirerItem.enquiryAuthor} enquiryDate={enquirerItem.enquiryDate}
                        jsonQueryDefinition={enquirerItem.jsonQueryDefinition}
                        enquiryModified={enquirerItem.enquiryModified} enquiryEditor={enquirerItem.enquiryEditor} enquiryEditDate={enquirerItem.enquiryEditDate}/>
                        </>
                            :null}
                    </MDBModalBody>
            </MDBModalContent>
            </MDBModalDialog>
        </MDBModal>
        </>
        {enquirerItem ?
        <>
        <ConfirmModal title="Delete Query Model" size="lg" confirmPromptModal={confirmModal} setConfirmPromptModal={setConfirmModal}
                    scrollable={false} recordType={'query model'} entityProductName={`${enquirerItem.productPlanName}: ${enquirerItem.modelName}`}
                    recordIcon="fa-regular fa-circle-question"
                    onClickFunc={() => {enquirerDeleteDispatch(deleteQueryModel({...enquirerItem})); setConfirmModal(!confirmModal);}}/>         
        </>
         :null}
        {enquirerItem ?
        <>
        <RecordsModal title={`Edit Query Model`} action="UPDATE" size="fullscreen" onClickFunc={() => updateEnquirerRecord(enquirerItem)}
                toggleOpen={toggleEditOpen} staticModal={editModal} setStaticModal={setEditModal} formComponent={
                <>
                 {enquirerItem ?
                <EnquirerEditForm isLinked={editLinked} modelName={enquirerItem.modelName} modelProduct={enquirerItem.productName} modelPlan={enquirerItem.productPlanName} 
                modelRegion={enquirerItem.regionName} modelMarket={enquirerItem.exchangeMarket} modelPlatform={enquirerItem.platformName} modelJSON={enquirerItem.jsonQueryDefinition}/>
                :null}
                </>
            }/>
        </>
        :null}
    </div>
    </>
    )


}
export default EnquirerTable;