import { MDBBadge, MDBCol, MDBRow } from 'mdb-react-ui-kit';
import '../artificer/client_loader_styles.css'
import '../artificer/prompt_modal_styles.css'
import { MDBBtn, MDBModal, MDBModalDialog, MDBModalContent, MDBModalHeader, MDBModalTitle, MDBModalBody, MDBModalFooter, MDBIcon, MDBSpinner  } from 'mdb-react-ui-kit';
import { useEffect, useState } from 'react';
import { currentTime, fetchActionID } from '../../utils/chronos';

const SaveActionModal = ({title, icon, size, isCompleted, togglePromptModal, setTogglePromptModal, scrollable, productPlan, corpName}) => {
    
    const [isComplete, setIsComplete] = useState(false);
    let notPending = isCompleted
    useEffect(() => {
        
        
      });
    if(!isComplete && togglePromptModal){
        setTimeout(() => {
            setIsComplete(true);
          }, 3696);
    }
    
    
    return(
    <>
    <MDBModal key={fetchActionID()} staticBackdrop tabIndex='-1' open={togglePromptModal} setOpen={setTogglePromptModal}>
        <MDBModalDialog scrollable={scrollable} centered size={size}>
            <MDBModalContent>
                <MDBModalHeader className='client-prompt-modal-header'>
                    <MDBModalTitle className='prompt-modal-title'><MDBIcon icon={icon} /> {`${title}`}</MDBModalTitle>
                    {isComplete ?
                        <><MDBBtn className='btn-close' onClick={() => {setTogglePromptModal(!togglePromptModal), setIsComplete(false)}}></MDBBtn></>
                        :null}
                    </MDBModalHeader>
                    <MDBModalBody>
                    {!isComplete ?
                        <>
                        <MDBRow>
                            <MDBCol style={{marginTop: '33px', marginBottom: '33px'}} size={12}>
                                    <MDBSpinner className='saved-spinner-one' grow color='primary'>
                                        <span className='visually-hidden'>Loading...</span>
                                    </MDBSpinner>
                                    <MDBSpinner grow className='saved-spinner-two mx-2' color='secondary'>
                                        <span className='visually-hidden'>Loading...</span>
                                    </MDBSpinner>
                                    <MDBSpinner grow className='saved-spinner-one' color='success'>
                                        <span className='visually-hidden'>Loading...</span>
                                    </MDBSpinner>
                                    <MDBSpinner grow className='saved-spinner-two mx-2' color='warning'>
                                        <span className='visually-hidden'>Loading...</span>
                                    </MDBSpinner>
                                    <MDBSpinner grow className='saved-spinner-one' color='danger'>
                                        <span className='visually-hidden'>Loading...</span>
                                    </MDBSpinner>
                                    <MDBSpinner grow className='saved-spinner-two mx-2' color='info'>
                                        <span className='visually-hidden'>Loading...</span>
                                    </MDBSpinner>
                                    <MDBSpinner grow className='saved-spinner-one' color='light'>
                                        <span className='visually-hidden'>Loading...</span>
                                    </MDBSpinner>
                                    <MDBSpinner grow className='saved-spinner-two ms-2' color='dark'>
                                        <span className='visually-hidden'>Loading...</span>
                                    </MDBSpinner>
                            </MDBCol>
                        </MDBRow>  
                        </>
                        :<>
                        <MDBRow>
                            <p className='client-form-prompt-corp'>{corpName}</p>
                            <p className='client-form-prompt-title'>{productPlan}</p>
                        </MDBRow>
                        <MDBRow>
                            <MDBCol style={{display: 'grid'}} size={12}>
                            <MDBBadge className='saved-modal-badge planner-badge planner-view-badge' color='secondary' pill>&nbsp;Questionnaire Saved&nbsp;</MDBBadge>
                            </MDBCol>
                        </MDBRow>
                        <MDBRow>
                            <p className='planner-client-update-on'>{currentTime()}</p>
                        </MDBRow>
                        </>}       
                    </MDBModalBody>
            </MDBModalContent>
        </MDBModalDialog>
    </MDBModal>
    </>
    )
}
export default SaveActionModal;