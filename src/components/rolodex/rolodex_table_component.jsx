import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBBadge, MDBBtn, MDBIcon, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';

import '../rolodex/rolodex_styles.css'

const RolodexTable = ({rolodexList}) => {

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
                { rolodexList ?
                rolodexList.map( rolodexItem => (
                                            <tr key={rolodexItem.id}>
                                            <td>
                                                <div className='d-flex align-items-center'>
                                                <img
                                                    src='https://csncollision.com/wp-content/uploads/2019/10/placeholder-circle.png'
                                                    alt=''
                                                    style={{ width: '69px', height: '69px' }}
                                                    className='rounded-circle'
                                                />
                                                <div className='ms-3'>
                                                    <p className='fw-bold mb-1 rolodex-name-title'>{rolodexItem.companyName}</p>
                                                    <p className='text-muted mb-0'>{rolodexItem.incorporationCountry}</p>
                                                    <p className='text-muted mb-0'>{rolodexItem.incorporationCategory}</p>
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
                                            <><MDBBadge className='rolodex-badge' color='info' pill> Dual Listed</MDBBadge><br/></>
                                            :null}
                                            {rolodexItem.distributesDividends ?
                                            <><MDBBadge className='rolodex-badge' color='info' pill> Dividends</MDBBadge><br/></>
                                            :null}
                                            {rolodexItem.legendConditions ?
                                            <><MDBBadge className='rolodex-badge' color='info' pill> Legend Conditions</MDBBadge><br/></>
                                            :null}   
                                            </td>
                                            <td>
                                                
                                            </td>
                                            <td>
                                                <MDBBtn className="rolodex-form-button" rounded size='sm'>
                                                <i className="fa-regular fa-eye"></i> View</MDBBtn>&nbsp;
                                                <MDBBtn className="rolodex-form-button" rounded size='sm'>
                                                <i className="fa-regular fa-pen-to-square"></i> Edit</MDBBtn>&nbsp;
                                                <MDBBtn className="rolodex-form-button" rounded size='sm'>
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
export default RolodexTable;