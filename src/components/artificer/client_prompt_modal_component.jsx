import '../artificer/prompt_modal_styles.css'
import { MDBBtn, MDBModal, MDBModalDialog, MDBModalContent, MDBModalHeader, MDBModalTitle, MDBModalBody, MDBModalFooter, MDBIcon, MDBCol, MDBRow, MDBInput } from 'mdb-react-ui-kit';

const ClientPromptModal = ({title, size, setStaticModal, icon, staticModal, togglePromptModal, setTogglePromptModal, scrollable, productPlan, corpName, id, onClickFunc}) => {
    return(
    <>
    <MDBModal key={id} staticBackdrop tabIndex='-1' open={togglePromptModal} setOpen={setTogglePromptModal}>
        <MDBModalDialog scrollable={scrollable} centered size={size}>
            <MDBModalContent>
                <MDBModalHeader className='prompt-modal-header'>
                    <MDBModalTitle className='prompt-modal-title'><MDBIcon icon={icon} /> {title}</MDBModalTitle>
                    <MDBBtn type='button' className='btn-close' onClick={() => setTogglePromptModal(!togglePromptModal)}></MDBBtn>
                    </MDBModalHeader>
                    <MDBModalBody>
                        <MDBRow>
                            <MDBCol size={12}>
                                <p className='prompt-modal-text'>Are you sure you would like to submit the details provided for the <strong>{corpName}</strong>: <strong>{productPlan}</strong>?</p>
                                <br/>
                            </MDBCol>
                        </MDBRow>          
                    </MDBModalBody>
                    <MDBModalFooter>
                    <MDBBtn type='button' onClick={() => setTogglePromptModal(!togglePromptModal)} outline rounded><i className="fa-regular fa-hand-point-left"></i> Cancel</MDBBtn>
                        <MDBBtn type='submit' outline rounded onClick={() => {
                            setTogglePromptModal(!togglePromptModal);
                            setStaticModal(!staticModal);
                            }}><MDBIcon icon="paper-plane" /> Submit
                        </MDBBtn>    
                    </MDBModalFooter>
            </MDBModalContent>
        </MDBModalDialog>
    </MDBModal>
    </>

    )


}
export default ClientPromptModal;