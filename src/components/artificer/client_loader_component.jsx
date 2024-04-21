import { MDBCol, MDBRow } from 'mdb-react-ui-kit';
import '../artificer/client_loader_styles.css'


const ClientLoader = (props) => {
    document.body.style.color = "#ffffff !important"
    return(
    <>
    <MDBRow style={{marginTop: '0px'}}>
    <MDBCol size={12}>
    <div className='cl-box'>
     <div className="cl-container">
     <div className="upper">Prometheus</div>
      <div className="lower">Prometheus</div>
      <div className="inside">Loading...</div>
    </div>
    </div>
    </MDBCol>
    </MDBRow>
    <MDBRow>

    </MDBRow>
    </>
    )
}
export default ClientLoader;