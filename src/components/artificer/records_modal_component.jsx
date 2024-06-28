import '../artificer/records_modal_styles.css'
import { MDBBtn, MDBModal, MDBModalDialog, MDBModalContent, MDBModalHeader, MDBModalTitle, MDBModalBody, MDBModalFooter, MDBIcon } from 'mdb-react-ui-kit';
import RolodexInputForm from '../rolodex/rolodex_input_component';
import { useEffect, useState } from 'react';

const RecordsModal = ({title, action, size, toggleOpen, staticModal, setStaticModal, scrollable, formComponent, onClickFunc}) => {
    let icon = ''
    const [crudIcon, setCrudIcon] = useState(<></>);    
    if(action == 'CREATE'){icon = <MDBIcon fab icon='plus circle' />;}
    if(action == 'EDIT'){icon = <MDBIcon far icon="edit" />;;}
  


    return(
    <>
    <MDBModal staticBackdrop tabIndex='-1' open={staticModal} setOpen={setStaticModal}>
        <MDBModalDialog scrollable={scrollable} centered size={size}>
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
                        <MDBBtn onClick={onClickFunc} outline rounded>{icon} {action}</MDBBtn>
                    </MDBModalFooter>
            </MDBModalContent>
        </MDBModalDialog>
    </MDBModal>
    </>

    )
}
export default RecordsModal;