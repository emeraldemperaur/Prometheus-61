import React, { useEffect, useState } from 'react';
import '../architect/architect_core_styles.css'
import AlphaTrionForge from './alpha_trion_forge';
import AlphaPaxForge from './alpha_pax_forge';
import TextOutput from './text_output_component';
import NumberOutput from './number_output_component';
import DateOutput from './date_output_component';
import DateTimeOutput from './datetime_output_component';
import TimeOutput from './time_output_component';
import TextAreaOutput from './textarea_output_component';
import NumberRangeOutput from './number_range_output_component';
import TextMonthOutput from './textmonth_output_component';
import TextWeekOutput from './textweek_output_component';
import SelectOutput from './select_output_component';
import MultiselectOutput from './multiselect_output_component';
import CheckboxOutput from './checkbox_output_component';
import RadioOutput from './radio_output_component';
import ToggleOutput from './toggle_output_component';
import FileOutput from './file_output_component';
import MultiFileOutput from './multifile_output_component';
import DateRangeOutput from './date_range_output_component';
import SectionTitle from './section_title_component';


const VectorPrimus = (props) => {
    const [jsonModel, setJsonModel] = useState(props.jsonModel);
    const [vectorJSON, setVectorJSON] = useState(JSON.parse(props.jsonModel));
    const [sectionElements, setSectionElements] = useState([]);
    const [inputElements, setInputElements] = useState([]);


    useEffect(() => {
        let sectionElements = []
        let inputElements = []
    if(vectorJSON){
        vectorJSON.model.map( vectorElement => (sectionElements.push(vectorElement)))
        vectorJSON.model.map( vectorElement => (vectorElement.queries.map( inputElement => (inputElements.push(inputElement)))));
        
    }  
    }, [vectorJSON, jsonModel]);

    const outputArchitect = (inputType, newRow, inputWidth, inputLabel, isHinted, hintLink,
        hintText, inputKey, inputResponse) =>{
        if(inputWidth == null || inputWidth > 12){inputWidth = 4;}
        if(inputResponse == null){inputResponse = ""}
        switch(inputType.toLowerCase()) {
            case "text":
                return <TextOutput key={inputKey} newRow={newRow} width={inputWidth}  inputLabel={inputLabel} isHinted={isHinted} hintLink={hintLink} 
                    hintText={hintText} inputResponse={inputResponse}/>
                break;
            case "number":
                return <NumberOutput key={inputKey} newRow={newRow} width={inputWidth} inputLabel={inputLabel} isHinted={isHinted} hintLink={hintLink} 
                hintText={hintText} inputResponse={inputResponse}/>
                break;
            case "date":
                return <DateOutput key={inputKey} newRow={newRow} width={inputWidth} inputLabel={inputLabel} isHinted={isHinted} hintLink={hintLink} 
                hintText={hintText} inputResponse={inputResponse}/>
                break;
            case "datetime":
                return <DateTimeOutput key={inputKey} newRow={newRow} width={inputWidth} inputLabel={inputLabel} isHinted={isHinted} hintLink={hintLink} 
                hintText={hintText} inputResponse={inputResponse}/>
                break;
            case "time":
                return <TimeOutput key={inputKey} newRow={newRow} width={inputWidth} inputLabel={inputLabel} isHinted={isHinted} hintLink={hintLink} 
                hintText={hintText} inputResponse={inputResponse}/>
                break;
            case "textarea":
                return <TextAreaOutput key={inputKey} newRow={newRow} width={inputWidth} inputLabel={inputLabel} isHinted={isHinted} hintLink={hintLink} 
                hintText={hintText} inputResponse={inputResponse}/>
                break;
            case "range":
                return <NumberRangeOutput key={inputKey} newRow={newRow} width={inputWidth} inputLabel={inputLabel} isHinted={isHinted} hintLink={hintLink} 
                hintText={hintText} inputResponse={inputResponse}/>
                break;
            case "textmonth":
                return <TextMonthOutput key={inputKey} newRow={newRow} width={inputWidth} inputLabel={inputLabel} isHinted={isHinted} hintLink={hintLink} 
                hintText={hintText} inputResponse={inputResponse}/>            
                break;
            case "textweek":
                return <TextWeekOutput key={inputKey} newRow={newRow} width={inputWidth} inputLabel={inputLabel} isHinted={isHinted} hintLink={hintLink} 
                hintText={hintText} inputResponse={inputResponse}/>
                break;
            case "select":
                return <SelectOutput key={inputKey} newRow={newRow} width={inputWidth} inputLabel={inputLabel} isHinted={isHinted} hintLink={hintLink} 
                hintText={hintText} inputResponse={inputResponse}/>
                break;
            case "multiselect":
                return <MultiselectOutput key={inputKey} newRow={newRow} width={inputWidth} inputLabel={inputLabel} isHinted={isHinted} hintLink={hintLink} 
                hintText={hintText} inputResponse={inputResponse}/>
                break;
            case "checkbox":
                return <CheckboxOutput key={inputKey} newRow={newRow} width={inputWidth} inputLabel={inputLabel} isHinted={isHinted} hintLink={hintLink} 
                hintText={hintText} inputResponse={inputResponse}/>
                break;
            case "radio":
                return <RadioOutput key={inputKey} newRow={newRow} width={inputWidth} inputLabel={inputLabel} isHinted={isHinted} hintLink={hintLink} 
                hintText={hintText} inputResponse={inputResponse}/>
                break;
            case "toggle":
                return <ToggleOutput key={inputKey} newRow={newRow} width={inputWidth} inputLabel={inputLabel} isHinted={isHinted} hintLink={hintLink} 
                hintText={hintText} inputResponse={inputResponse}/>
                break;
           
            case "file":
                return <FileOutput key={inputKey} newRow={newRow} width={inputWidth} inputLabel={inputLabel} isHinted={isHinted} hintLink={hintLink} 
                hintText={hintText} inputResponse={inputResponse}/>
                break;
            case "multifile":
                return <MultiFileOutput key={inputKey} newRow={newRow} width={inputWidth} inputLabel={inputLabel} isHinted={isHinted} hintLink={hintLink} 
                hintText={hintText} inputResponse={inputResponse}/>
                break;
            case "daterange":
                return <DateRangeOutput key={inputKey} newRow={newRow} width={inputWidth} inputLabel={inputLabel} isHinted={isHinted} hintLink={hintLink} 
                hintText={hintText} inputResponse={inputResponse}/>
                break;
            default:
                return <TextOutput key={inputKey} newRow={newRow} width={inputWidth}  inputLabel={inputLabel} isHinted={isHinted} hintLink={hintLink} 
                hintText={hintText} inputResponse={inputResponse}/>
            }
        
    }
    

    return(
    <>
    {vectorJSON ?
           vectorJSON.model.map( vectorElement => (
            <React.Fragment key={vectorElement.sectionId}>
                <SectionTitle sectionIcon={vectorElement.icon} sectionTitle={vectorElement.title}/>
                <AlphaTrionForge sectionElement={vectorElement}/>
                {
                                vectorElement.queries ?
                                vectorElement.queries.map( inputElement => (
                                  <React.Fragment key={inputElement.queryId}>
                                    { outputArchitect(inputElement.inputType, inputElement.newRow, inputElement.inputWidth, inputElement.inputLabel, inputElement.isHinted, inputElement.hintURL,
                                        inputElement.hintText, inputElement.queryId, inputElement.queryResponse)
                                    }
                                   </React.Fragment>
                                   
                                    )):null
                    }
                     {
                                vectorElement.queries ?
                                <AlphaPaxForge sectionId={vectorElement.sectionId} inputElements={vectorElement.queries}/>
                                :null
                    }
                
            </React.Fragment>
                     )):null
                    }
    
    </>
    )


}
export default VectorPrimus;