import '../artificer/records_modal_styles.css'
import { MDBBtn, MDBModal, MDBModalDialog, MDBModalContent, MDBModalHeader, MDBModalTitle, MDBModalBody, MDBModalFooter, MDBIcon } from 'mdb-react-ui-kit';
import RolodexInputForm from '../rolodex/rolodex_input_component';

const RecordsModal = ({title, action, size, toggleOpen, staticModal, setStaticModal, formComponent}) => {
    return(
    <>
    <MDBModal staticBackdrop tabIndex='-1' open={staticModal} setOpen={setStaticModal}>
        <MDBModalDialog centered size={size}>
            <MDBModalContent>
                <MDBModalHeader className='records-modal-header'>
                    <MDBModalTitle className='records-modal-title'>{title}</MDBModalTitle>
                    <MDBBtn className='btn-close' onClick={toggleOpen}></MDBBtn>
                    </MDBModalHeader>
                    <MDBModalBody>
                        {formComponent}
                    </MDBModalBody>
                    <MDBModalFooter>
                        <MDBBtn outline rounded onClick={toggleOpen}>Cancel</MDBBtn>
                        <MDBBtn outline rounded><MDBIcon fab icon='plus circle' /> {action}</MDBBtn>
                    </MDBModalFooter>
            </MDBModalContent>
        </MDBModalDialog>
    </MDBModal>
    
    </>

    )


}
export default RecordsModal;