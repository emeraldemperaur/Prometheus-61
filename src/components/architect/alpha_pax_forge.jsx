import React, { useEffect, useRef, useState } from 'react';
import '../architect/architect_core_styles.css'
import AlertOutput from './output_alert_component';
import { MDBRow } from 'mdb-react-ui-kit';


const AlphaPaxForge = ({sectionId, inputElements}) => {
    const [alertsList, setAlertsList] = useState(inputElements);
    const [hasAlerts, setHasAlerts] = useState(false);
    const [noteList, setNoteList] = useState([]);
    let queryNotes = []
    const notesRef = useRef(new Set(queryNotes));
    const notesListRef = useRef(queryNotes);
    let index = 0;

    useEffect(() => {
        notesRef.current = []
        alertsList.map( inputElement => (orionPrime(inputElement)))
        }, []);

const isValidNote = (queryNote) =>{
    let isValid = false;
    let testNote = queryNote.split("|", 3);
    let types = ["w", "h", "i", "warning", "hint", "info"]
    if(types.includes(testNote[0].trim().toLowerCase()) && testNote[1].trim().length > 1){
        isValid = true;
    }
    return isValid;
}

const orionPrime = (inputElement) =>{

    if(inputElement.inputType.trim().toLowerCase() == "select"){
        inputElement.inputOptions ?
                inputElement.inputOptions.map( inputOption => {
                    if(inputOption.text == inputElement.queryResponse){
                        if(isValidNote(inputOption.queryNote.trim())){
                            console.log(`Orion Prime Test 1 -- ${inputElement.inputType}:: ${hasAlerts}`);
                            queryNotes.push(inputOption.queryNote)
                            //setNoteList(queryNotes) 
                            notesRef.current = new Set(queryNotes);
                            notesListRef.current = Array.from(notesRef.current);
                            console.log(`Note List Objects: ${queryNotes}`)
                            if(!hasAlerts){setHasAlerts(true);}
                        }}
            }):null
    }
    if(inputElement.inputType.trim().toLowerCase() == "multiselect"){
        inputElement.inputOptions ?
                inputElement.inputOptions.map( inputOption => {
                    if(inputElement.queryResponse.includes(inputOption.text)){
                        if(isValidNote(inputOption.queryNote.trim())){
                            console.log(`Orion Prime Test 1 -- ${inputElement.inputType}:: ${hasAlerts}`);
                            queryNotes.push(inputOption.queryNote)
                            //setNoteList(queryNotes)
                            notesRef.current = new Set(queryNotes);
                            notesListRef.current = Array.from(notesRef.current);
                            console.log(`Note List Objects: ${queryNotes}`)
                            if(!hasAlerts){setHasAlerts(true);}
                        }}
            }):null
    }
    if(inputElement.inputType.trim().toLowerCase() == "checkbox"){
        inputElement.inputOptions ?
                inputElement.inputOptions.map( inputOption => {
                    if(inputElement.queryResponse.includes(inputOption.text)){
                        if(isValidNote(inputOption.queryNote.trim())){
                            console.log(`Orion Prime Test 1 -- ${inputElement.inputType}:: ${hasAlerts}`);
                            queryNotes.push(inputOption.queryNote)
                            //setNoteList(queryNotes)
                            notesRef.current = new Set(queryNotes);
                            notesListRef.current = Array.from(notesRef.current);
                            console.log(`Note List Objects: ${queryNotes}`)
                            if(!hasAlerts){setHasAlerts(true);}
                        }}
            }):null
    }
    if(inputElement.inputType.trim().toLowerCase() == "radio"){
        inputElement.inputOptions ?
                inputElement.inputOptions.map( inputOption => {
                    if(inputOption.text == inputElement.queryResponse){
                        if(isValidNote(inputOption.queryNote.trim())){
                            console.log(`Orion Prime Test 1 -- ${inputElement.inputType}:: ${hasAlerts}`);
                            queryNotes.push(inputOption.queryNote)
                            //setNoteList(queryNotes)
                            notesRef.current = new Set(queryNotes);
                            notesListRef.current = Array.from(notesRef.current);
                            console.log(`Note List Objects: ${queryNotes}`)
                            if(!hasAlerts){setHasAlerts(true);}
                        }}
            }):null
    }
    if(inputElement.inputType.trim().toLowerCase() == "toggle"){                
                    if(inputElement.queryResponse == true){
                        if(isValidNote(inputElement.queryNote.trim())){
                            console.log(`Orion Prime Test 1 -- ${inputElement.inputType}:: ${hasAlerts}`);
                            queryNotes.push(inputElement.queryNote)
                            //setNoteList(queryNotes)
                            notesRef.current = new Set(queryNotes);
                            notesListRef.current = Array.from(notesRef.current);
                            console.log(`Note List Objects: ${queryNotes}`)
                            if(!hasAlerts){setHasAlerts(true);}
                        }}
    }
}

const orionPax = (queryNote) =>{
    noteList.map( inputNotes => {})
    let QNObject = queryNote.split("|", 3);
    let queryType = QNObject[0].trim();
    let queryText

}

    return(
    <>
    
      {hasAlerts ?
            <MDBRow id={`Section${sectionId}Alerts`}>
            {console.log(`Alerts List Check -->> ${noteList}`)}
            {
        notesListRef.current ?
        notesListRef.current.map( inputNote => (
                <React.Fragment key={index++}>
                        <AlertOutput infoNote={inputNote}/>
                        {console.log(`Alerts Note Check -->> ${inputNote}`)}
                </React.Fragment>
                     )):null
                    }
            </MDBRow>
            :null}
    
    </>
    )


}
export default AlphaPaxForge;