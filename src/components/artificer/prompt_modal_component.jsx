import '../artificer/prompt_modal_styles.css'
import { MDBBtn, MDBModal, MDBModalDialog, MDBModalContent, MDBModalHeader, MDBModalTitle, MDBModalBody, MDBModalFooter, MDBIcon, MDBCol, MDBRow, MDBInput } from 'mdb-react-ui-kit';

const PromptModal = ({title, action, size, toggleOpen, setStaticModal, staticModal, togglePromptModal, setTogglePromptModal, scrollable, productPlan, corpName, onClickFunc}) => {
    return(
    <>
    <MDBModal staticBackdrop tabIndex='-1' open={togglePromptModal} setOpen={setTogglePromptModal}>
        <MDBModalDialog scrollable={scrollable} centered size={size}>
            <MDBModalContent>
                <MDBModalHeader className='prompt-modal-header'>
                    <MDBModalTitle className='prompt-modal-title'>{title}</MDBModalTitle>
                    <MDBBtn className='btn-close' onClick={() => setTogglePromptModal(!togglePromptModal)}></MDBBtn>
                    </MDBModalHeader>
                    <MDBModalBody>
                        <MDBRow>
                            <MDBCol size={12}>
                                <p className='prompt-modal-text'>An extant <strong>{productPlan}</strong> questionnaire already exists for <strong>{corpName}</strong>. Are you sure you want to proceed?</p>
                            </MDBCol>
                        </MDBRow> 
                        <MDBRow>
                            <MDBCol size={9}>
                            <div style={{paddingBottom:'3px'}}>
                                <MDBInput label='Portmanteau Label' type='text' id='formPortmanteauLabel' aria-describedby='promptPortmanteauLabel' defaultValue=" "/>
                                    <div id='promptPortmanteauLabel' className='form-text form-hint'>Portmanteau Identifier</div>
                            </div>
                            </MDBCol>
                        </MDBRow>         
                    </MDBModalBody>
                    <MDBModalFooter>
                        <MDBBtn outline rounded onClick={() => {
                            setTogglePromptModal(!togglePromptModal);
                            setTimeout(() => {
                                setStaticModal(!staticModal);
                            }, 400);
                            }}><i className="fa-regular fa-hand-point-left"></i> Go Back
                        </MDBBtn>
                        <MDBBtn onClick={onClickFunc} outline rounded><MDBIcon fab icon='plus circle' /> {action}</MDBBtn>
                    </MDBModalFooter>
            </MDBModalContent>
        </MDBModalDialog>
    </MDBModal>
    </>

    )


}
export default PromptModal;