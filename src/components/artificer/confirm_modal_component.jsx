import '../artificer/extant_modal_styles.css'
import { MDBBtn, MDBModal, MDBModalDialog, MDBModalContent, MDBModalHeader, MDBModalTitle, MDBModalBody, MDBModalFooter, MDBCol, MDBRow, MDBIcon } from 'mdb-react-ui-kit';

const ConfirmModal = ({title, size, confirmPromptModal, setConfirmPromptModal, scrollable, recordType, entityProductName, recordIcon, onClickFunc}) => {
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
                                <p className='extant-modal-text'>Sure you would like to delete this {recordType} record for <strong>{entityProductName}</strong>?</p>
                            </MDBCol>
                        </MDBRow>     
                    </MDBModalBody>
                    <MDBModalFooter>
                        <MDBBtn outline rounded onClick={() => {
                            setConfirmPromptModal(!confirmPromptModal);
                            }}><i className="fa-regular fa-circle-xmark"></i> Cancel
                        </MDBBtn>
                        <MDBBtn onClick={onClickFunc} outline rounded><MDBIcon fas icon='trash' /> Delete</MDBBtn>
                    </MDBModalFooter>
            </MDBModalContent>
        </MDBModalDialog>
    </MDBModal>
    </>

    )


}
export default ConfirmModal;