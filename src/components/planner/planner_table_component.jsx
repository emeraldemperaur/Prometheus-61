import { MDBBadge, MDBBtn, MDBIcon, MDBTable, MDBTableHead, MDBTableBody, MDBCheckbox, MDBModal, MDBModalDialog, MDBModalContent, MDBModalHeader, MDBModalTitle, MDBModalBody, MDBTooltip } from 'mdb-react-ui-kit';
import { useState } from 'react';
import { CSSTransition, TransitionGroup} from 'react-transition-group';
import '../planner/planner_styles.css'
import PlannerViewer from './planner_viewer';
import LogoHolder from '../planner/assets/placeholder-circle.png';

const PlannerTable = ({plannerList}) => {

    const [plannerModal, setPlannerModal] = useState(false);
    const [plannerItem, setPlannerItem] = useState(null);
    const toggleOpen = () => setPlannerModal(!plannerModal);

    const renderPlannerViewer = (plannerItemObject) => {
        setPlannerItem(plannerItemObject)
        setPlannerModal(!plannerModal);
        console.log(plannerItem)
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
                    { plannerList ?
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
                                        <i className="fa-regular fa-eye"></i> View</MDBBtn>&nbsp;
                                        <MDBBtn className="planner-form-button" rounded size='sm'>
                                        <i className="fa-regular fa-pen-to-square"></i> Edit</MDBBtn>&nbsp;
                                        <MDBBtn className="planner-form-button" rounded size='sm'>
                                        <i className="fa-solid fa-trash"></i> Delete</MDBBtn>
                                    </td>
                                    <td>
                                    
                                    </td>
                                </tr>
                                )):null
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
                        lastSavedCorrespondenceTime={plannerItem.lastSavedCorrespondenceTime} 
                        platformName={plannerItem.enquiryPlatformName} accessPIN={plannerItem.accessPIN} jsonQueryDefinition={plannerItem.jsonQueryDefinition} planRecord={plannerItem}/>
                        </>
                            :null}
                    </MDBModalBody>
            </MDBModalContent>
            </MDBModalDialog>
        </MDBModal>
        </>
    </div>
    </>
    )


}
export default PlannerTable;