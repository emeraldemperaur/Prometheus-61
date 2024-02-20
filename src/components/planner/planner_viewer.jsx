import { MDBBadge, MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import { useState, useEffect } from 'react';
import '../planner/planner_styles.css'
import { toast } from 'react-toastify';


const PlannerViewer = (props) => {

    return(
        <>
        <MDBRow>
            <MDBCol size={3}>
                <>
                <img src='https://csncollision.com/wp-content/uploads/2019/10/placeholder-circle.png'alt='' style={{ width: '169px', height: '169px', float:'left' }} className='rounded-circle'/>
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
                <p className='planner-viewer-heading'>Correspondence</p>
                <p className='planner-viewer-prime-contact'>{props.correspondenceName}</p>
                <p className='planner-viewer-update-on'>as at {props.correspondenceTime}</p>
            </MDBCol>
        </MDBRow>
        <MDBRow>
            <MDBCol size={12}>
            <MDBDropdown style={{position: 'fixed', right: '33px', backgroundColor: '#002c51', fontFamily: 'Montserrat', 
            fontWeight: 700, letterSpacing: '0.13em'}} group>
                <MDBDropdownToggle style={{backgroundColor: '#002c51', letterSpacing: '0.21em'}} className='planner-viewer-export-btn' size='lg'>
                <i className="fa-solid fa-file-export"></i> EXPORT SYNOPSIS</MDBDropdownToggle>
                <MDBDropdownMenu>
                <MDBDropdownItem link>.CSV Data</MDBDropdownItem>
                <MDBDropdownItem link>.XLSX Data</MDBDropdownItem>
                <MDBDropdownItem link>PDF Outline</MDBDropdownItem>
                <MDBDropdownItem link>Manual Guide</MDBDropdownItem>
                <MDBDropdownItem divider />
                <MDBDropdownItem link>Auto Deploy</MDBDropdownItem>
                </MDBDropdownMenu>
            </MDBDropdown>
            </MDBCol>
          
        </MDBRow>
        <MDBRow style={{backgroundColor: '#216cb5', marginTop: '69px', width:'100%', paddingTop: '13px', paddingBottom:'13px'}}>
            <MDBCol>
                <h2 className='planner-viewer-synopsis'>Implementation Synopsis</h2>
            </MDBCol>
        </MDBRow>
        </>
        )
    }
export default PlannerViewer;