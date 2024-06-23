import { MDBBadge, MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem, MDBRow, MDBCol, MDBBtnGroup, MDBBtn, MDBTabs, MDBTabsItem, MDBTabsLink, MDBTabsContent, MDBTabsPane, MDBTooltip } from 'mdb-react-ui-kit';
import { useState, useEffect } from 'react';
import '../planner/planner_styles.css'
import { toast } from 'react-toastify';
import PlannerViewerOverview from './planner_viewer_overview';
import PlannerViewerInput from './planner_viewer_input';
import { Link } from 'react-router-dom';
import LogoHolder from '../planner/assets/placeholder-circle.png';



const PlannerViewer = (props) => {

    const [inputViewActive, setInputViewActive] = useState('OVERVIEW');
    const handleInputViewClick = (value) => { if (value === inputViewActive) {return;} setInputViewActive(value); };
    let queryLink = `${window.location.origin.toString()}/questionnaire/${props.id}`;
    const copyLink = () => {
        try {
            navigator.clipboard.writeText(queryLink);
            toast.info(`Questionnaire link copied`,{position: "top-right", autoClose: 1000, closeOnClick: true});
            console.log(`Questionnaire link '${queryLink}' copied to clipboard!`);
          }catch (err) {
                console.error(`Failed to copy '${queryLink}' to clipboard!`, err);
          } 
    }
    const shareEnquiry = (queryCorrespondence) => {
        toast.success(`Questionnaire notification sent to ${queryCorrespondence}`,{
        position: "top-right",
        autoClose: 1000,
        closeOnClick: true
    })
     console.log(`Questionnaire notification sent to ${queryCorrespondence}`);   
    }

    


    return(
        <>
        <MDBRow>
            <MDBCol size={3}>
                <>
                <img src={LogoHolder} alt='Logo Holder' style={{ width: '169px', height: '169px', float:'left' }} className='rounded-circle'/>
                </>
                <>
                    <p className='planner-viewer-region'>{props.companyRegion}</p>
                    <p className='planner-viewer-mkt'>{props.companyStockExchange} | {props.companyTickerSymbol}</p>
                    {props.isCorpDualListed ?
                        <>
                        <p className='planner-viewer-dual-listed'>Dual Listed</p>
                        <p className='planner-viewer-dual-mkt'>{props.companyDualStockExchange} | {props.companyDualTickerSymbol}</p>
                        </>
                    :null}
                    
                </>
            </MDBCol>
            <MDBCol size={3}>
                
                <p className='planner-viewer-heading'>Status</p>
                {props.status == 1 ?
                <><MDBBadge className='planner-badge planner-view-badge' color='warning' pill>Client Onboarding</MDBBadge></>
                :null}
                {props.status == 2 ?
                <><MDBBadge className='planner-badge planner-view-badge' color='secondary' pill>In Progress</MDBBadge></>
                :null}
                {props.status == 3 ?
                <><MDBBadge className='planner-badge planner-view-badge' color='success' pill>Complete</MDBBadge></>
                :null} 

               
               
            </MDBCol>
            <MDBCol size={3}>
                <p className='planner-viewer-heading'>Build Rank</p>
                {props.buildRank == 0 ?
                                                <><p className='planner-build-rank-pending planner-viewer-build-rank'>PENDING</p></>
                                                :null}
                                        {props.buildRank == 1 ?
                                                <><p className='planner-build-rank-lite planner-viewer-build-rank'>LITE</p></>
                                                :null}
                                        {props.buildRank == 2 ?
                                                <><p className='planner-build-rank-medium planner-viewer-build-rank'>MEDIUM</p></>
                                                :null}
                                        {props.buildRank == 3 ?
                                                <><p className='planner-build-rank-large planner-viewer-build-rank'>LARGE</p></>
                                                :null} 
            </MDBCol>
            <MDBCol size={3}>
                <p className='planner-viewer-heading'>
                <>
                    <MDBTooltip tag='a'
                    title={`Last saved ${props.lastSavedCorrespondenceTime}`} placement='bottom'>
                    &nbsp;Correspondence
                    </MDBTooltip>
                    </>
                    </p>
                <p className='planner-viewer-prime-contact'>{props.correspondenceName}</p>
                <p className='planner-viewer-update-on'>as at {props.correspondenceTime}</p>
            </MDBCol>
        </MDBRow>
        <MDBRow>
            <MDBCol size={12}>
            <>
                        
            <MDBBtnGroup style={{position: 'absolute', right: '360px', fontFamily: 'Montserrat', 
            fontWeight: 800, fontSize:'14px', letterSpacing: '0.21em'}} shadow='0' aria-label='share plan synopsis'>
                    <MDBBtn onClick={() => copyLink()} 
                    style={{fontFamily: 'Montserrat', fontWeight: 800, fontSize:'0.875rem', letterSpacing: '0.21em', paddingTop: '0.75rem', paddingBottom: '0.6875rem', lineHeight: 1.6}} color='secondary' outline>
                    <i className="fa-regular fa-copy"></i></MDBBtn>
                    <MDBBtn onClick={() => shareEnquiry(props.correspondenceName)} 
                    style={{fontFamily: 'Montserrat', fontWeight: 800, fontSize:'0.875rem', letterSpacing: '0.21em', paddingTop: '0.75rem', paddingBottom: '0.6875rem', lineHeight: 1.6}} color='secondary'>
                    <i className="fa-regular fa-share-from-square"></i> SHARE ENQUIRY</MDBBtn>
            </MDBBtnGroup>
            </>
            <MDBDropdown style={{position: 'absolute', right: '33px', backgroundColor: '#002c51', fontFamily: 'Montserrat', 
            fontWeight: 700, letterSpacing: '0.13em'}} animation group>
                <MDBDropdownToggle style={{backgroundColor: '#002c51', letterSpacing: '0.21em'}} className='planner-viewer-export-btn' size='lg'>
                <i className="fa-solid fa-file-export"></i> EXPORT SYNOPSIS</MDBDropdownToggle>
                <MDBDropdownMenu>
                <MDBDropdownItem link onClick={() => console.log(".CSV Data Export")}><i className="fa-solid fa-file-csv"></i> .CSV Data</MDBDropdownItem>
                <MDBDropdownItem link onClick={() => console.log(".XLSX Data Export")}><i className="fa-regular fa-file-excel"></i> .XLSX Data</MDBDropdownItem>
                <MDBDropdownItem link onClick={() => console.log("PDF Outline Export")}><i className="fa-regular fa-file-pdf"></i> PDF Outline</MDBDropdownItem>
                <MDBDropdownItem link onClick={() => console.log("Manual Guide Export")}><i className="fa-brands fa-mandalorian"></i> Manual Guide</MDBDropdownItem>
                <MDBDropdownItem link onClick={() => console.log("Auto Deploy Export")}><i className="fa-solid fa-robot"></i> Auto Deploy</MDBDropdownItem>
                <MDBDropdownItem divider />
                <MDBDropdownItem link disabled><i className="fa-solid fa-key"></i> PIN: {props.accessPIN}</MDBDropdownItem>
                </MDBDropdownMenu>
            </MDBDropdown>
            </MDBCol>
          
        </MDBRow>
        <MDBRow style={{backgroundColor: '#216cb5', marginTop: '69px', width:'100%', paddingTop: '13px', paddingBottom:'13px'}}>
            <MDBCol>
                <h2 className='planner-viewer-synopsis'>Implementation Synopsis</h2>
            </MDBCol>
        </MDBRow>
        <MDBRow>
            <>
            <MDBTabs justify className='mb-3'>
                <MDBTabsItem>
                <MDBTabsLink  onClick={() => handleInputViewClick('OVERVIEW')} active={inputViewActive === 'OVERVIEW'}>
                <i className="fa-solid fa-tachograph-digital"></i><div className='planner-synopsis-tabs'>Overview</div>
                </MDBTabsLink>
                </MDBTabsItem>
                <MDBTabsItem>
                <MDBTabsLink className='planner-synopsis-tabs' onClick={() => handleInputViewClick('INPUT')} active={inputViewActive === 'INPUT'}>
                <i className="fa-solid fa-keyboard"></i><div className='planner-synopsis-tabs'>Input</div>
                </MDBTabsLink>
                </MDBTabsItem>
            </MDBTabs>

            <MDBTabsContent>
                <MDBTabsPane open={inputViewActive === 'OVERVIEW'}>
                    <PlannerViewerOverview companyName={props.companyName} status={props.status} platformName={props.platformName} 
                    planRecord={props.planRecord} jsonModel={props.jsonQueryDefinition} isLocked={props.isLocked}/>
                </MDBTabsPane>
                <MDBTabsPane open={inputViewActive === 'INPUT'}>
                    <PlannerViewerInput platformName={props.platformName} planRecord={props.planRecord}/>
                </MDBTabsPane>
            </MDBTabsContent>
            </>
        </MDBRow>
        </>
        )
    }
export default PlannerViewer;