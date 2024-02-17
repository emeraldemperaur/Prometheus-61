import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBBadge, MDBBtn, MDBIcon, MDBTable, MDBTableHead, MDBTableBody, MDBCheckbox } from 'mdb-react-ui-kit';
import Form from 'react-bootstrap/Form';

import '../planner/planner_styles.css'

const EnquirerTable = ({enquirerList}) => {

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
                    { enquirerList ?
                        enquirerList.map( enquirerItem => (
                                <tr key={enquirerItem.id}>
                                    <td>
            
                                        <div className='d-flex align-items-center'>
                                        <div className='ms-3'>
                                            <p className='fw-bold mb-1 enquirer-name-title'>{enquirerItem.modelName}</p>
                                            <p className='text-muted mb-0'>{enquirerItem.productPlanName}</p>
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
                                        <MDBBtn className="enquirer-form-button" rounded size='sm'>
                                        <i className="fa-regular fa-eye"></i> View</MDBBtn>&nbsp;
                                        <MDBBtn className="enquirer-form-button" rounded size='sm'>
                                        <i className="fa-regular fa-pen-to-square"></i> Edit</MDBBtn>&nbsp;
                                        <MDBBtn className="enquirer-form-button" rounded size='sm'>
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
export default EnquirerTable;