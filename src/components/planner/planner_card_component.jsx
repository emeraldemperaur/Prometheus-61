import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn } from 'mdb-react-ui-kit';
import '../planner/planner_styles.css'

const PlannerCard = (props) => {

    return(
    <>
    <MDBCard>
      <MDBCardBody>
        <MDBCardTitle>Card title</MDBCardTitle>
        <MDBCardText>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </MDBCardText>
        <MDBBtn>Button</MDBBtn>
      </MDBCardBody>
    </MDBCard>
    </>

    )


}
export default PlannerCard;