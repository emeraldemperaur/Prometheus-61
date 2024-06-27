import '../artificer/extant_modal_styles.css'
import { MDBBtn, MDBModal, MDBModalDialog, MDBModalContent, MDBModalHeader, MDBModalTitle, MDBModalBody, MDBModalFooter, MDBCol, MDBRow, MDBIcon } from 'mdb-react-ui-kit';

const CascadeModal = ({title, size, confirmPromptModal, setConfirmPromptModal, scrollable, entityProductName, recordIcon, onClickFunc}) => {
    return(
    <>
    <MDBModal staticBackdrop tabIndex='-1' open={confirmPromptModal} setOpen={setConfirmPromptModal}>
        <MDBModalDialog scrollable={scrollable} centered size={size}>
            <MDBModalContent>
                <MDBModalHeader className='extant-modal-header'>
                    <MDBModalTitle className='extant-modal-title'>{title}</MDBModalTitle>
                    <MDBBtn className='btn-close' onClick={() => setConfirmPromptModal(!confirmPromptModal)}></MDBBtn>
                    </MDBModalHeader>
                    <MDBModalBody>
                        <MDBRow>
                            <MDBCol size={4}>
                                <i className={`${recordIcon} extant-modal-icon`}></i>
                            </MDBCol>
                            <MDBCol size={8}>
                                <p className='extant-modal-text'><strong>{entityProductName}</strong> is linked to an extant plan record and as a result can't be deleted at this time.</p>
                            </MDBCol>
                        </MDBRow>     
                    </MDBModalBody>
                    <MDBModalFooter>
                        <MDBBtn outline rounded onClick={() => {
                            setConfirmPromptModal(!confirmPromptModal);
                            }}><i className="fa-solid fa-check"></i> Okay
                        </MDBBtn>
                    </MDBModalFooter>
            </MDBModalContent>
        </MDBModalDialog>
    </MDBModal>
    </>

    )


}
export default CascadeModal;