import { MDBBadge, MDBBtn, MDBRow, MDBTable, MDBTableHead, MDBTableBody, MDBCheckbox, MDBModal, MDBModalDialog, MDBModalContent, MDBModalHeader, MDBModalTitle, MDBModalBody, MDBTooltip } from 'mdb-react-ui-kit';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { CSSTransition, TransitionGroup} from 'react-transition-group';
import '../planner/planner_styles.css'
import PlannerViewer from './planner_viewer';
import LogoHolder from '../planner/assets/placeholder-circle.png';
import { useDispatch, useSelector } from 'react-redux'
import { deletePlanQuestionnaire, editPlanQuestionnaire } from '../../forge/planner';
import ConfirmModal from '../artificer/confirm_modal_component';
import RecordsModal from '../artificer/records_modal_component';
import PlannerEditForm from './planner_edit_component';
import { clearInputs, fetchCompany, fetchQuery, inputTextValid } from '../../utils/input_inspector';



const PlannerTable = ({plannerList}) => {

    const [plannerModal, setPlannerModal] = useState(false);
    const [plannerItem, setPlannerItem] = useState(null);
    const [confirmModal, setConfirmModal] = useState(false);
    const [editModal, setEditModal] = useState(false);
    const toggleOpen = () => setPlannerModal(!plannerModal);
    const toggleEditOpen = () => setEditModal(!editModal);
    const planDeleteDispatch = useDispatch();
    const planEditDispatch = useDispatch();
    const enquirerList = useSelector((state)=> state.enquirer.list);
    const rolodexList = useSelector((state)=> state.rolodex.list);
    

    const renderPlannerViewer = (plannerItemObject) => {
        setPlannerItem(plannerItemObject)
        setPlannerModal(!plannerModal);
        console.log(plannerItem);
    }
    const editPlanRecord = (planRecord) => {
        setPlannerItem(planRecord);
        setEditModal(!editModal);
        console.log(`Editing Plan Record ${planRecord.companyName}: ${planRecord.productPlanName}`);

    }
    const deletePlanRecord = (planRecord) => {
        setPlannerItem(planRecord);
        setConfirmModal(!confirmModal);
        console.log(`Deleting Plan Record ${planRecord.companyName}: ${planRecord.productPlanName}`);
    }
    const updatePlanRecord = (planRecord) => {
      
        if(inputTextValid(document.getElementById("formPlannerCorpNameE"), document.getElementById("plannerCorpNameLabelE")) 
        && inputTextValid(document.getElementById("formPlannerProductNameE"), document.getElementById("plannerProductNameLabelE")) 
        && inputTextValid(document.getElementById("formPlannerPlanNameE"), document.getElementById("plannerPlanNameLabelE")) 
        && inputTextValid(document.getElementById("formPlannerEnquiryNameE"), document.getElementById("plannerEnquiryNameLabelE"))){
            let selectedQuery = fetchQuery(enquirerList, document.getElementById("formPlannerEnquiryNameE").value)
            let selectedCorp = fetchCompany(rolodexList, document.getElementById("formPlannerCorpNameE").value)
            console.log(`Selected Query >>>>> ${selectedQuery.modelName}`)
            console.log(`Selected Corp >>>>> ${selectedCorp.companyName}`)
            planEditDispatch(editPlanQuestionnaire({
                id: planRecord.id,
                companyName: planRecord.companyName,
                companyID: planRecord.companyID, 
                companyRegion: planRecord.companyRegion,
                companyStockExchange: planRecord.companyStockExchange,
                companyTickerSymbol: planRecord.companyTickerSymbol,
                isCorpDualListed: planRecord.isCorpDualListed,
                companyDualStockExchange: planRecord.companyDualStockExchange,
                companyDualTickerSymbol: planRecord.companyDualTickerSymbol,
                productName: document.getElementById("formPlannerProductNameE").value,
                productPlanName: document.getElementById("formPlannerPlanNameE").value,
                isPortmanteau: false,
                portmanteauLabel: ' ',
                enquiryName: selectedQuery.modelName,
                enquiryID: selectedQuery.id,
                enquiryPlatformName: selectedQuery.platformName,
                autoShare: document.getElementById("formPlannerEnquiryShareE").checked,
                accessPIN: planRecord.accessPIN,
                status: planRecord.status,
                buildRank: planRecord.buildRank,
                correspondenceName: selectedCorp.primaryContactName,
                correspondenceEmail:selectedCorp.correspondenceEmail,
                correspondenceTime: planRecord.correspondenceTime,
                lastSavedCorrespondenceTime: planRecord.lastSavedCorrespondenceTime,
                isLocked: planRecord.isLocked,
                jsonQueryDefinition: selectedQuery.jsonQueryDefinition
            }))
            setEditModal(!editModal);
            toast.success(`${planRecord.companyName}: ${planRecord.productPlanName} updated`,{ position: "top-right", autoClose: 1000, closeOnClick: true});
            console.log(`Successfully Updated '${planRecord.companyName}: ${planRecord.productPlanName}' Plan Record`);
        }
    }
    const isInProgress = (planRecord) => {
        let inProgress = false;
        if(planRecord.status > 1){inProgress = true;}
        return inProgress;
    }

    return(
    <>
    <div>
        <MDBTable striped hover align='middle'>
            <MDBTableHead className="enquirer-form-header-title">
            <tr>
                <th scope='col'><MDBCheckbox id='plannerTableCheckAll' style={{display: 'table'}}></MDBCheckbox></th>
                <th className='planner-heading' scope='col'>Product Plan</th>
                <th className='planner-heading' scope='col'>Market Region</th>
                <th className='planner-heading' scope='col'>Status</th>
                <th className='planner-heading' scope='col'>Build Rank</th>
                <th className='planner-heading' scope='col'>Actions</th>
                <th className='planner-heading' scope='col'>&nbsp;</th>
            </tr>
            </MDBTableHead>
            <MDBTableBody style={{ fontFamily:'Montserrat' }}>
                <>
                    { plannerList.length > 0 ?
                                plannerList.map( plannerItem => (
                                <tr key={plannerItem.id}>
                                    <th scope='col'><MDBCheckbox id={'plannerTableCheckRow' + plannerItem.id} style={{display: 'table'}}></MDBCheckbox></th>
                                    <td>
                                        <div className='d-flex align-items-center'>
                                        <img
                                            src={LogoHolder}
                                            alt=''
                                            style={{ width: '69px', height: '69px' }}
                                            className='rounded-circle'
                                        />
                                        <div className='ms-3'>
                                            <p className='fw-bold mb-1 planner-name-title planner-table-txt'>{plannerItem.productPlanName}</p>
                                            {plannerItem.isPortmanteau ?
                                            <><p className='text-muted mb-0 planner-table-txt'>{plannerItem.portmanteauLabel}</p></>
                                            :null}
                                            <p className='text-muted mb-0 planner-table-txt'>{plannerItem.companyName}</p>
                                        </div>
                                        </div>
                                    </td>
                                    <td>
                                        <p className='planner-form-region-text fw-normal mb-1'>{plannerItem.companyRegion}</p>
                                        <p className='planner-form-market-text text-muted mb-0'>{plannerItem.companyStockExchange}</p>
                                        <p className='planner-form-symbol-text text-muted mb-0'>{plannerItem.companyTickerSymbol}</p>
                                    </td>
                                    <td>
                                        {plannerItem.status == 1 ?
                                            <><MDBBadge className='planner-badge' color='warning' pill>Client Onboarding</MDBBadge></>
                                            :null}
                                        {plannerItem.status == 2 ?
                                            <><MDBBadge className='planner-badge' color='secondary' pill>In Progress</MDBBadge></>
                                            :null}
                                        {plannerItem.status == 3 ?
                                            <><MDBBadge className='planner-badge' color='success' pill>Complete</MDBBadge></>
                                            :null} 
                                    </td>
                                    <td>
                                        {plannerItem.buildRank == 0 ?
                                                <><p className='planner-build-rank-pending'>PENDING</p></>
                                                :null}
                                        {plannerItem.buildRank == 1 ?
                                                <><p className='planner-build-rank-lite'>LITE</p></>
                                                :null}
                                        {plannerItem.buildRank == 2 ?
                                                <><p className='planner-build-rank-medium'>MEDIUM</p></>
                                                :null}
                                        {plannerItem.buildRank == 3 ?
                                                <><p className='planner-build-rank-large'>LARGE</p></>
                                                :null}  
                                    </td>
                                    <td>
                                        <MDBBtn onClick={() => renderPlannerViewer(plannerItem)} className="planner-form-button" rounded size='sm'>
                                        <i className="fa-regular fa-eye"></i> View</MDBBtn>&nbsp;&nbsp;
                                        
                                        <MDBBtn onClick={() => deletePlanRecord(plannerItem)} className="planner-form-button" rounded size='sm'>
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
                                <th scope='col'>&nbsp;</th>
                                <th scope='col'><a className='no-records-found'>No Records Found</a></th>
                                <th scope='col'>&nbsp;</th>
                                <th scope='col'>&nbsp;</th>
                                <th scope='col'>&nbsp;</th>
                               </tr>
                               </>
                    }
                    </>
            </MDBTableBody>
        </MDBTable>
        <>
        <MDBModal open={plannerModal} tabIndex='-1' setOpen={setPlannerModal}>
            <MDBModalDialog scrollable size='fullscreen'>
                <MDBModalContent>
                    <MDBModalHeader>
                        <MDBModalTitle className='planner-viewer-title'>{plannerItem ?
                        <>
                         {plannerItem.isPortmanteau ?
                                            <><MDBTooltip tag='a' title={plannerItem.enquiryName} >
                                            {`${plannerItem.productPlanName} - ${plannerItem.portmanteauLabel}`}<br/></MDBTooltip></>
                                            :<MDBTooltip tag='a' title={plannerItem.enquiryName}>
                                            {plannerItem.productPlanName}<br/></MDBTooltip>}
                        
                        <p className='planner-viewer-subtitle planner-table-txt'>{plannerItem.companyName}</p>
                        
                        </>
                            :null}
                        </MDBModalTitle>
                        <MDBBtn className='btn-close' color='none' onClick={toggleOpen}></MDBBtn>
                    </MDBModalHeader>
                    <MDBModalBody>{plannerItem ?
                        <>
                        <PlannerViewer id={plannerItem.id} companyName={plannerItem.companyName} productPlanName={plannerItem.productPlanName} status={plannerItem.status} buildRank={plannerItem.buildRank} 
                        companyRegion={plannerItem.companyRegion} companyStockExchange={plannerItem.companyStockExchange}
                        companyTickerSymbol={plannerItem.companyTickerSymbol} isCorpDualListed={plannerItem.isCorpDualListed} companyDualStockExchange={plannerItem.companyDualStockExchange}
                        companyDualTickerSymbol={plannerItem.companyDualTickerSymbol} correspondenceName={plannerItem.correspondenceName} correspondenceTime={plannerItem.correspondenceTime}
                        lastSavedCorrespondenceTime={plannerItem.lastSavedCorrespondenceTime} isLocked={plannerItem.isLocked}
                        platformName={plannerItem.enquiryPlatformName} accessPIN={plannerItem.accessPIN} jsonQueryDefinition={plannerItem.jsonQueryDefinition} planRecord={plannerItem}/>
                        </>
                            :null}
                    </MDBModalBody>
            </MDBModalContent>
            </MDBModalDialog>
        </MDBModal>
        </>
        {plannerItem ?
        <>
        <ConfirmModal title="Delete Plan Form" size="lg" confirmPromptModal={confirmModal} setConfirmPromptModal={setConfirmModal}
                    scrollable={false} recordType={'plan form'} entityProductName={`${plannerItem.companyName}: ${plannerItem.productPlanName}`}
                    recordIcon="fa-solid fa-file-signature"
                    onClickFunc={() => {planDeleteDispatch(deletePlanQuestionnaire({...plannerItem})); setConfirmModal(!confirmModal);}}/>         
        </>
         :null}
        {plannerItem ?
        <>
        <RecordsModal title={`Edit Plan Questionnaire`} action="UPDATE" size="xl" onClickFunc={()=> updatePlanRecord(plannerItem)}
                toggleOpen={toggleEditOpen} staticModal={editModal} setStaticModal={setEditModal} formComponent={
                <>
                <PlannerEditForm corpName={plannerItem.companyID} productName={plannerItem.productPlanName} autoShare={plannerItem.autoShare}
                planName={plannerItem.productPlanName} enquiryName={plannerItem.enquiryName} status={plannerItem.status}/>
                </>}/>
        </>
         :null}
    </div>
    </>
    )


}
export default PlannerTable;