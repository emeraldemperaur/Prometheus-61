import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBBadge, MDBBtn, MDBIcon, MDBTable, MDBTableHead, MDBTableBody, MDBCheckbox } from 'mdb-react-ui-kit';

import '../planner/planner_styles.css'

const PlannerTable = ({plannerList}) => {

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
                    { plannerList ?
                                plannerList.map( plannerItem => (
                                <tr key={plannerItem.id}>
                                    <th scope='col'><MDBCheckbox id={'plannerTableCheckRow' + plannerItem.id} style={{display: 'table'}}></MDBCheckbox></th>
                                    <td>
                                        <div className='d-flex align-items-center'>
                                        <img
                                            src='https://csncollision.com/wp-content/uploads/2019/10/placeholder-circle.png'
                                            alt=''
                                            style={{ width: '69px', height: '69px' }}
                                            className='rounded-circle'
                                        />
                                        <div className='ms-3'>
                                            <p className='fw-bold mb-1 planner-name-title'>{plannerItem.productPlanName}</p>
                                            <p className='text-muted mb-0'>{plannerItem.companyName}</p>
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
                                        <MDBBtn className="planner-form-button" rounded size='sm'>
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
            </MDBTableBody>
        </MDBTable>
    </div>
    </>
    )


}
export default PlannerTable;