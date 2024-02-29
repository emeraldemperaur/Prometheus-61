import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody, MDBModal, MDBModalDialog, MDBModalContent, MDBModalHeader, MDBModalTitle, MDBModalBody } from 'mdb-react-ui-kit';
import { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import '../planner/planner_styles.css'
import EnquirerViewer from './enquirer_viewer';

const EnquirerTable = ({enquirerList}) => {

    const [enquirerModal, setEnquirerModal] = useState(false);
    const [enquirerItem, setEnquirerItem] = useState(null);
    const toggleOpen = () => setEnquirerModal(!enquirerModal); 
    const renderEnquirerViewer = (enquirerItemObject) => { 
        setEnquirerItem(enquirerItemObject); 
        setEnquirerModal(!enquirerModal); 
        console.log(enquirerItem)
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
                    { enquirerList ?
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
    </div>
    </>
    )


}
export default EnquirerTable;