import '../artificer/extant_modal_styles.css'
import { MDBBtn, MDBModal, MDBModalDialog, MDBModalContent, MDBModalHeader, MDBModalTitle, MDBModalBody, MDBModalFooter, MDBCol, MDBRow } from 'mdb-react-ui-kit';

const ExtantModal = ({title, size, setStaticModal, staticModal, togglePromptModal, setTogglePromptModal, scrollable, recordType, recordName, entity, recordIcon, context}) => {
    return(
    <>
    <MDBModal staticBackdrop tabIndex='-1' open={togglePromptModal} setOpen={setTogglePromptModal}>
        <MDBModalDialog scrollable={scrollable} centered size={size}>
            <MDBModalContent>
                <MDBModalHeader className='extant-modal-header'>
                    <MDBModalTitle className='extant-modal-title'>{title}</MDBModalTitle>
                    <MDBBtn className='btn-close' onClick={() => setTogglePromptModal(!togglePromptModal)}></MDBBtn>
                    </MDBModalHeader>
                    <MDBModalBody>
                        <MDBRow>
                            <MDBCol size={4}>
                                <i className={`${recordIcon} extant-modal-icon`}></i>
                            </MDBCol>
                            <MDBCol size={8}>
                                <p className='extant-modal-text'>A {recordType} already exists for <strong>{recordName}</strong> {context}. Please provide a unique {entity}.</p>
                            </MDBCol>
                        </MDBRow>     
                    </MDBModalBody>
                    <MDBModalFooter>
                        <MDBBtn outline rounded onClick={() => {
                            setTogglePromptModal(!togglePromptModal);
                            setTimeout(() => {
                                setStaticModal(!staticModal);
                            }, 333);
                            }}><i className="fa-regular fa-hand-point-left"></i> Go Back
                        </MDBBtn>
                    </MDBModalFooter>
            </MDBModalContent>
        </MDBModalDialog>
    </MDBModal>
    </>

    )


}
export default ExtantModal;