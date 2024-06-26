import { MDBCol, MDBContainer, MDBRow } from 'mdb-react-ui-kit';
import '../architect/architect_core_styles.css'


const SectionTitle = (props) => {

    return(
    <>
    <MDBContainer fluid>
        <MDBRow>
            <MDBCol size={12}>
                <div className='core-input-section-ribbon'>
                    <p className='core-input-section-text'><i className={props.sectionIcon}></i>&nbsp;{props.sectionTitle}</p>
                </div>
            </MDBCol>
        </MDBRow>
    </MDBContainer>
    </>
    )


}
export default SectionTitle;