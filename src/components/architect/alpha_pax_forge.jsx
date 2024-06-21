import { useEffect, useState } from 'react';
import '../architect/architect_core_styles.css'
import AlertOutput from './output_alert_component';


const AlphaPaxForge = ({inputElements}) => {
    const [alertsList, setAlertsList] = useState(inputElements);
    const [hasAlerts, setHasAlerts] = useState(false);

    useEffect(() => {
        
        }, [inputElements, hasAlerts]);

const isValidNote = (queryNote) =>{
    let isValid = false;
    let testNote = queryNote.split("|", 3);
    let types = ["w", "h", "i", "warning", "hint", "info"]
    if(types.includes(testNote[0].trim().toLowerCase()) && testNote[1].trim().length > 1){
        isValid = true;
    }
    return isValid;
}

const orionPax = (inputElement) =>{
    switch(inputElement.inputType.toLowerCase()) {
        case "select":
            {
                inputElement.inputOptions ?
                inputElement.inputOptions.map( inputOption => {
                    if(inputOption.text == inputElement.queryResponse){
                        if(isValidNote(inputOption.queryNote.trim())){
                            if(!hasAlerts){setHasAlerts(true);}
                            return <React.Fragment key={inputOption.id}><AlertOutput infoId={inputOption.id} infoNote={inputOption.queryNote}/></React.Fragment>
                        }}
            }):null}
            break;
        case "multiselect":
            {
                inputElement.inputOptions ?
                inputElement.inputOptions.map( inputOption => {
                    if(inputOption.text == inputElement.queryResponse){
                        if(isValidNote(inputOption.queryNote.trim())){
                            if(!hasAlerts){setHasAlerts(true);}
                            return <React.Fragment key={inputOption.id}><AlertOutput infoId={inputOption.id} infoNote={inputOption.queryNote}/></React.Fragment>
                        }}
            }):null}
            break;
        case "checkbox":
            {
                inputElement.inputOptions ?
                inputElement.inputOptions.map( inputOption => {
                    if(isValidNote(inputOption.queryNote.trim())){
                        if(!hasAlerts){setHasAlerts(true);}
                        return<React.Fragment key={inputOption.id}><AlertOutput infoId={inputOption.id} infoNote={inputOption.queryNote}/></React.Fragment>
                    }
            }):null}
            break;
        case "radio":
            {
                inputElement.inputOptions ?
                inputElement.inputOptions.map( inputOption => {
                    if(inputOption.text == inputElement.queryResponse){
                        if(isValidNote(inputOption.queryNote.trim())){
                            if(!hasAlerts){setHasAlerts(true);}
                            return <React.Fragment key={inputOption.id}><AlertOutput infoId={inputOption.id} infoNote={inputOption.queryNote}/></React.Fragment>
                        }}
            }):null}
            break;
        case "toggle":
            {
                inputElement.queryResponse == true && isValidNote(inputElement.queryNote.trim()) ?
                <React.Fragment key={inputElement.queryId}>
                {setHasAlerts(true)}
                <AlertOutput infoId={inputElement.queryId} infoNote={inputElement.queryNote}/>
                </React.Fragment>
                :null}
            break;
       
        }

}

    return(
    <>
    
      {hasAlerts ?
            <MDBRow id={`${props.sectionId}Alerts`}>
            {alertsList.map( inputElement => (orionPax(inputElement)))}
            </MDBRow>
            :null}
    
    </>
    )


}
export default AlphaPaxForge;