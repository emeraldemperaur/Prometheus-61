import { useEffect, useState } from 'react';
import '../architect/architect_core_styles.css'
import AlertBadgeOutput from './output_alertbadge_component';


const AlphaTrionForge = ({sectionElement}) => {
    const [alertsList, setAlertsList] = useState(sectionElement);
    const [hasAlerts, setHasAlerts] = useState(false);
    const [warnCount, setWarnCount] = useState(0);
    const [hintCount, setHintCount] = useState(0);
    const [infoCount, setInfoCount] = useState(0);
    const [hasWarnCount, setHasWarnCount] = useState(false);
    const [hasHintCount, setHasHintCount] = useState(false);
    const [hasInfoCount, setHasInfoCount] = useState(false);

    let wCount = 0;
    let hCount = 0;
    let iCount= 0;
    useEffect(() => {
        alertsList.queries.map( inputElement => {                      
            orionTrion(inputElement);
        })
    }, [sectionElement, hasAlerts, warnCount, hintCount, infoCount]);

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
        let types = ["w", "h", "i", "warning", "hint", "info"];
        if(types.includes(countNote[0].trim().toLowerCase())){
            switch(countNote[0].trim().toLowerCase()) {
                case "w" || "warning":
                    setWarnCount(wCount++);
                    console.log(`Current W Count: ${wCount}`)
                    setHasWarnCount(true);
                break;
                case "h" || "hint":
                    setHintCount(hCount++);
                    console.log(`Current H Count: ${hCount}`)
                    setHasHintCount(true)
                break;
                case "i" || "info":
                    setInfoCount(iCount++);
                    console.log(`Current I Count: ${iCount}`)
                    setHasInfoCount(true);
                break;
                }
        }
    }

    const orionTrion = (inputElement) =>{
        let inputTypesX = ["select", "radio"]
        let inputTypesY = ["multiselect", "checkbox"]
        let inputTypesZ = ["toggle"]
        switch(inputElement.inputType.toLowerCase()) {
            case inputTypesX.includes(inputElement.inputType):
                inputElement.inputOptions ?
                inputElement.inputOptions.map( inputOption => {
                    if(inputOption.text == inputElement.queryResponse){
                        if(isValidNote(inputOption.queryNote.trim())){
                            if(!hasAlerts){setHasAlerts(true);}
                            noteCounter(inputOption.queryNote.trim())
                        }}
                }):null
                break;
            case inputTypesY.includes(inputElement.inputType):
                inputElement.inputOptions ?
                inputElement.inputOptions.map( inputOption => {
                    if(inputElement.queryResponse.includes(inputOption.text)){
                        if(isValidNote(inputOption.queryNote.trim())){
                            if(!hasAlerts){setHasAlerts(true);}
                            noteCounter(inputOption.queryNote.trim())
                        }}
                }):null
                break;  
            case inputTypesZ.includes(inputElement.inputType):
                    if(inputElement.queryResponse == true){
                        if(isValidNote(inputOption.queryNote.trim())){
                            if(!hasAlerts){setHasAlerts(true);}
                            noteCounter(inputOption.queryNote.trim())
                        }}
                break;  
        }  
    }

    return(
    <>
     {hasAlerts ?
            <React.Fragment key={`${sectionElement.title}-${sectionElement.sectionId}`}>
                <AlertBadgeOutput sectionId={sectionElement.sectionId} hasAlert={hasAlerts} warn={hasWarnCount} info={hasInfoCount} hint={hasHintCount}/>
            </React.Fragment>
            :null}
    
    </>
    )


}
export default AlphaTrionForge;