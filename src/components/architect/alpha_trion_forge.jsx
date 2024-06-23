import React, { useEffect, useState } from 'react';
import '../architect/architect_core_styles.css'
import AlertBadgeOutput from './output_alertbadge_component';


const AlphaTrionForge = ({sectionElement}) => {
    const [alertsList, setAlertsList] = useState(sectionElement);
    const [foundAlerts, setFoundAlerts] = useState(false);
    const [warnCount, setWarnCount] = useState(0);
    const [hintCount, setHintCount] = useState(0);
    const [infoCount, setInfoCount] = useState(0);
    const [hasWarnCount, setHasWarnCount] = useState(false);
    const [hasHintCount, setHasHintCount] = useState(false);
    const [hasInfoCount, setHasInfoCount] = useState(false);
    let wCount = 0;
    let hCount = 0;
    let iCount= 0;
    let hasWCount = false;
    let hasHCount = false;
    let hasICount = false;
    let hasAlerts = false;
    useEffect(() => {
        sectionElement.queries.map( inputElement => {   
            orionTrion(inputElement);
        })
    }, [alertsList, foundAlerts, warnCount, hintCount, infoCount, hasWarnCount, hasHintCount, hasInfoCount]);

    const isValidNote = (queryNote) =>{
        let isValid = false;
        let testNote = queryNote.split("|", 3);
        let types = ["w", "h", "i", "warning", "hint", "info"]
        if(types.includes(testNote[0].trim().toLowerCase()) && testNote[1].trim().length > 1){
            isValid = true;
        }
        return isValid;
    }

    const noteCounter = (queryNote) =>{
        let countNote = queryNote.split("|", 3);
        console.log(`QNote Check Output: ${countNote}`)
        let types = ["w", "h", "i", "warning", "hint", "info"];
        if(types.includes(countNote[0].trim().toLowerCase())){
            switch(countNote[0].trim().toLowerCase()) {
                case "w" || "warning":
                    wCount++;
                    console.log(`Note Counter::${foundAlerts} -- W Count: ${wCount} -- H Count: ${hCount} -- I Count: ${iCount}`)
                    hasWCount = true;
                    setWarnCount(wCount);
                    setHasWarnCount(hasWCount);
                break;
                case "h" || "hint":
                    hCount++;
                    console.log(`Note Counter::${foundAlerts} -- W Count: ${wCount} -- H Count: ${hCount} -- I Count: ${iCount}`)
                    hasHCount = true;
                    setHintCount(hCount);
                    setHasHintCount(hasHCount);
                break;
                case "i" || "info":
                    iCount++;
                    console.log(`Note Counter::${foundAlerts} -- W Count: ${wCount} -- H Count: ${hCount} -- I Count: ${iCount}`)
                    hasICount = true;
                    setInfoCount(iCount);
                    setHasInfoCount(hasICount);
                break;
                }
        }
    }

    const orionTrion = (inputElement) =>{
        if(inputElement.inputType == "select"){
            console.log(`Running OrionTrion Test 2:  ${inputElement.inputType}`)                   
                inputElement.inputOptions ?
                inputElement.inputOptions.map( inputOption => {
                    if(inputOption.text == inputElement.queryResponse){
                        console.log(`Running OrionTrion Test 3:  Option >> ${inputOption.text} -- Response >> ${inputElement.queryResponse}`)                   
                        if(isValidNote(inputOption.queryNote.trim())){
                            if(!foundAlerts){setFoundAlerts(true);}
                            noteCounter(inputOption.queryNote.trim())
                        }}
                }):null
        }   
        if(inputElement.inputType == "radio"){
            console.log(`Running OrionTrion Test 2:  ${inputElement.inputType}`)                   
                inputElement.inputOptions ?
                inputElement.inputOptions.map( inputOption => {
                    if(inputOption.text == inputElement.queryResponse){
                        console.log(`Running OrionTrion Test 3:  Option >> ${inputOption.text} -- Response >> ${inputElement.queryResponse}`)                   
                        if(isValidNote(inputOption.queryNote.trim())){
                            if(!foundAlerts){setFoundAlerts(true);}
                            noteCounter(inputOption.queryNote.trim())
                        }}
                }):null
        }       
        if(inputElement.inputType == "multiselect"){
            console.log(`Running OrionTrion Test 2:  ${inputElement.inputType}`)                   
            inputElement.inputOptions ?
            inputElement.inputOptions.map( inputOption => {
                if(inputElement.queryResponse.includes(inputOption.text)){
                    console.log(`Running OrionTrion Test 3:  Option >> ${inputOption.text} -- Response >> ${inputElement.queryResponse}`)                   
                    if(isValidNote(inputOption.queryNote.trim())){
                        if(!hasAlerts){hasAlerts = true;}
                        noteCounter(inputOption.queryNote.trim())
                    }}
            }):null
        }   
        if(inputElement.inputType == "checkbox"){
            console.log(`Running OrionTrion Test 2:  ${inputElement.inputType}`)                   
            inputElement.inputOptions ?
            inputElement.inputOptions.map( inputOption => {
                if(inputElement.queryResponse.includes(inputOption.text)){
                    console.log(`Running OrionTrion Test 3:  Option >> ${inputOption.text} -- Response >> ${inputElement.queryResponse}`)                   
                    if(isValidNote(inputOption.queryNote.trim())){
                        if(!hasAlerts){hasAlerts = true;}
                        noteCounter(inputOption.queryNote.trim())
                    }}
            }):null
        }   
        if(inputElement.inputType == "toggle"){
            console.log(`Running OrionTrion Test 2:  ${inputElement.inputType}`)            
                if(inputElement.queryResponse = true){
                    console.log(`Running OrionTrion Test 3:  Option >> ${inputElement.inputType} -- Response >> ${inputElement.queryResponse}`)                   
                    if(isValidNote(inputElement.queryNote.trim())){
                        if(!hasAlerts){hasAlerts = true;}
                        noteCounter(inputElement.queryNote.trim())
                    }}
        }           
    }

    return(
    <>
     {foundAlerts ?
            <React.Fragment key={`${sectionElement.title}-${sectionElement.sectionId}`}>
                <AlertBadgeOutput sectionId={sectionElement.sectionId} hasAlert={foundAlerts} warn={hasWarnCount} info={hasInfoCount} hint={hasHintCount}/>
            </React.Fragment>
            :null}
    
    </>
    )


}
export default AlphaTrionForge;