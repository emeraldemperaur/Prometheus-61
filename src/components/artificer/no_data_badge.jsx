import { MDBCol, MDBRow, MDBBadge } from "mdb-react-ui-kit";
import '../artificer/no_data_badge.css'


const NoDataBadge = (props) => {

    return(
    <>
    <MDBRow>
    <MDBCol size={12}>
        <MDBBadge className='no-data-badge' color='warning' pill>{props.companyName} Onboarding</MDBBadge>
        <p className='no-data-badge-text'>No Overview Data Available</p>
    </MDBCol>
    </MDBRow>
    </>

    )


}
export default NoDataBadge;