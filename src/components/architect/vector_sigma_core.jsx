import '../architect/architect_core_styles.css'
import SelectInput from "../architect/select_input_component";
import MultiSelectInput from "../architect/multiselect_input_component";
import CheckboxInput from "../architect/checkbox_input_component";
import RadioInput from "../architect/radio_input_component";
import ToggleInput from "../architect/toggle_input_component";
import ToggledInput from "../architect/toggled_input_component";
import FileInput from "../architect/file_input_component";
import DateRangeInput from "../architect/date_range_input_component";
import TextInput from "../architect/text_input_component";
import NumberInput from "../architect/number_input_component";
import DateInput from "../architect/date_input_component";
import DateTimeInput from "../architect/datetime_input_component";
import TimeInput from "../architect/time_input_component";
import TextAreaInput from "../architect/textarea_input_component";
import NumberRangeInput from "../architect/number_range_input_component";
import SectionTitle from "../architect/section_title_component";
import { useState, useEffect } from "react";
import React from 'react'
import { MDBCol, MDBRow, MDBContainer, MDBBadge, MDBBtn, MDBIcon, MDBCard, MDBAccordion, MDBAccordionItem } from 'mdb-react-ui-kit';
import { fetchActionID } from '../../utils/chronos';



const VectorSigma = (props) => {

    let jsonModel = props.jsonModel
    let vectorJSON = {}
    if(jsonModel){
        vectorJSON = JSON.parse(jsonModel);
    }
    
    const clientMode = props.clientUI;
    const [stackedActive, setStackedActive] = useState(0);

    const inputArchitect = (inputType, newRow, inputWidth, inputAlias, inputLabel, inputPlaceholder, fvalues, fhandleChange, readOnly, disabled, isHinted, hintLink,
                            hintText, inputMin, inputMax, inputHeight, stepValue, inputOptions, fileTypes, ferrors, ftouched, fhandleBlur, inputKey) => {
        if(inputWidth == null || inputWidth > 12){inputWidth = 4;}
        if(inputHeight == null){ inputHeight = 4;}
        if(!clientMode){ readOnly = true; disabled = true;}
        if(clientMode){ readOnly = false; disabled = false;}
        switch(inputType.toLowerCase()) {
                case "text":
                    return <TextInput key={inputKey} newRow={newRow} width={inputWidth} alias={inputAlias} inputLabel={inputLabel} type={inputType} 
                        placeholder={inputPlaceholder} value={fvalues} onChange={fhandleChange} readOnly={readOnly} disabled={disabled} isHinted={isHinted} hintLink={hintLink} 
                        hintText={hintText} errorText={ferrors} touched={ftouched}/>
                    break;
                case "number":
                    return <NumberInput key={inputKey} newRow={newRow} width={inputWidth} alias={inputAlias} inputLabel={inputLabel} type={inputType}
                    placeholder={inputPlaceholder} value={fvalues} onChange={fhandleChange} readOnly={readOnly} disabled={disabled} isHinted={isHinted} hintLink={hintLink} 
                    hintText={hintText} errorText={ferrors} min={inputMin} max={inputMax} touched={ftouched}/>
                    break;
                case "date":
                    return <DateInput key={inputKey} newRow={newRow} width={inputWidth} alias={inputAlias} inputLabel={inputLabel} type={inputType} 
                        placeholder={inputPlaceholder} value={fvalues} onChange={fhandleChange} readOnly={readOnly} disabled={disabled} isHinted={isHinted} hintLink={hintLink} 
                        hintText={hintText} errorText={ferrors} touched={ftouched}/>
                    break;
                case "datetime":
                    return <DateTimeInput key={inputKey} newRow={newRow} width={inputWidth} alias={inputAlias} inputLabel={inputLabel} type={inputType} 
                        placeholder={inputPlaceholder} value={fvalues} onChange={fhandleChange} readOnly={readOnly} disabled={disabled} isHinted={isHinted} hintLink={hintLink} 
                        hintText={hintText} errorText={ferrors} touched={ftouched}/>
                    break;
                case "time":
                    return <TimeInput key={inputKey} newRow={newRow} width={inputWidth} alias={inputAlias} inputLabel={inputLabel} type={inputType} 
                        placeholder={inputPlaceholder} value={fvalues} onChange={fhandleChange} readOnly={readOnly} disabled={disabled} isHinted={isHinted} hintLink={hintLink} 
                        hintText={hintText} errorText={ferrors} touched={ftouched}/>
                    break;
                case "textarea":
                    return <TextAreaInput key={inputKey} newRow={newRow} width={inputWidth} alias={inputAlias} inputLabel={inputLabel} type={inputType} 
                        placeholder={inputPlaceholder} value={fvalues} onChange={fhandleChange} readOnly={readOnly} disabled={disabled} isHinted={isHinted} hintLink={hintLink} 
                        hintText={hintText} errorText={ferrors} rows={inputHeight} touched={ftouched}/>
                    break;
                case "range":
                    return <NumberRangeInput key={inputKey} newRow={newRow} width={inputWidth} alias={inputAlias} inputLabel={inputLabel} type={inputType}
                        placeholder={inputPlaceholder} value={fvalues} onChange={fhandleChange} readOnly={readOnly} disabled={disabled} isHinted={isHinted} hintLink={hintLink} 
                        hintText={hintText} errorText={ferrors} min={inputMin} max={inputMax}
                        step={stepValue} touched={ftouched}/>
                    break;
                case "textmonth":
                    return <TextInput key={inputKey} newRow={newRow} width={inputWidth} alias={inputAlias} inputLabel={inputLabel} type={"month"}
                        placeholder={inputPlaceholder} value={fvalues} onChange={fhandleChange} readOnly={readOnly} isHinted={isHinted} hintLink={hintLink} 
                        hintText={hintText} errorText={ferrors} touched={ftouched}/>            
                    break;
                case "textweek":
                    return <TextInput key={inputKey} newRow={newRow} width={inputWidth} alias={inputAlias} inputLabel={inputLabel} type={"week"} 
                        placeholder={inputPlaceholder} value={fvalues} onChange={fhandleChange} readOnly={readOnly} isHinted={isHinted} hintLink={hintLink} 
                        hintText={hintText} errorText={ferrors} touched={ftouched}/>
                    break;
                case "select":
                    return <SelectInput key={inputKey} newRow={newRow} width={inputWidth} alias={inputAlias} inputLabel={inputLabel} type={inputType} 
                    placeholder={inputPlaceholder} value={fvalues} onChange={fhandleChange} readOnly={readOnly} isHinted={isHinted} hintLink={hintLink} 
                    hintText={hintText} errorText={ferrors} touched={ftouched} disabled={disabled}
                    optionsList={inputOptions}/>
                    break;
                case "multiselect":
                    return <MultiSelectInput key={inputKey} newRow={newRow} width={inputWidth} alias={inputAlias} inputLabel={inputLabel} type={inputType} 
                        placeholder={inputPlaceholder} value={fvalues || []} onChange={fhandleChange}  readOnly={readOnly} isHinted={isHinted} hintLink={hintLink} 
                        hintText={hintText} errorText={ferrors} touched={ftouched} disabled={disabled}
                        optionsList={inputOptions}/>
                    break;
                case "checkbox":
                    return <CheckboxInput key={inputKey} newRow={newRow} width={inputWidth} alias={inputAlias} inputLabel={inputLabel} type={inputType} 
                    placeholder={inputPlaceholder} value={fvalues || []} onChange={fhandleChange} onBlur={fhandleBlur} readOnly={readOnly} disabled={disabled} isHinted={isHinted} hintLink={hintLink} 
                    hintText={hintText} errorText={ferrors} touched={ftouched}
                    optionsList={inputOptions}/>
                    break;
                case "radio":
                    return <RadioInput key={inputKey} newRow={newRow} width={inputWidth} alias={inputAlias} inputLabel={inputLabel} type={inputType} 
                        placeholder={inputPlaceholder} value={fvalues || []} onChange={fhandleChange} onBlur={fhandleBlur} readOnly={readOnly} isHinted={isHinted} hintLink={hintLink} 
                        hintText={hintText} errorText={ferrors} touched={ftouched} disabled={disabled}
                        optionsList={inputOptions}/>
                    break;
                case "toggle":
                    return <ToggleInput key={inputKey} newRow={newRow} width={inputWidth} alias={inputAlias} inputLabel={inputLabel} type={inputType} 
                        placeholder={""} value={fvalues} onChange={fhandleChange} onBlur={fhandleBlur} readOnly={readOnly} disabled={disabled} isHinted={isHinted} hintLink={hintLink} 
                        hintText={hintText} errorText={ferrors} touched={ftouched}/>
                    break;
               
                case "file":
                    return <FileInput key={inputKey} newRow={newRow} width={inputWidth} alias={inputAlias} inputLabel={inputLabel} type={inputType} multipleFiles={false} fileTypes={fileTypes}
                    placeholder={inputPlaceholder} value={fvalues} onChange={fhandleChange} readOnly={readOnly} disabled={disabled} isHinted={isHinted} hintLink={hintLink} 
                    hintText={hintText} errorText={ferrors} touched={ftouched}/>
                    break;
                case "multifile":
                    return <FileInput key={inputKey} newRow={newRow} width={inputWidth} alias={inputAlias} inputLabel={inputLabel} type={'file'} multipleFiles={true} fileTypes={fileTypes}
                        placeholder={inputPlaceholder} value={fvalues} onChange={fhandleChange} readOnly={readOnly} disabled={disabled} isHinted={isHinted} hintLink={hintLink} 
                        hintText={hintText} errorText={ferrors} touched={ftouched}/>
                    break;
                case "daterange":
                    return <DateRangeInput key={inputKey} newRow={newRow} width={inputWidth} alias={inputAlias} inputLabel={inputLabel} type={inputType} 
                    placeholder={inputPlaceholder} value={fvalues} onChange={fhandleChange} readOnly={readOnly} isHinted={isHinted} hintLink={hintLink} 
                    hintText={hintText} errorText={ferrors} touched={ftouched} disabled={disabled}/>
                    break;
                default:
                    return <TextInput key={inputKey} newRow={newRow} width={inputWidth} alias={inputAlias} inputLabel={inputLabel} type={inputType} 
                    placeholder={inputPlaceholder} value={fvalues} onChange={fhandleChange} readOnly={readOnly} disabled={disabled} isHinted={isHinted} hintLink={hintLink} 
                    hintText={hintText} errorText={ferrors} touched={ftouched}/>
                }
    }



    return(
    <>
            <>
                {props.stackedMode ?
                <>
                 <MDBRow key={111} className="input-stack-box">
                <MDBAccordion alwaysOpen={true} borderless initialActive={stackedActive}>
                {
        vectorJSON ?
        vectorJSON.model.map( vectorElement => (
            <React.Fragment key={vectorElement.sectionId}>

                    <MDBAccordionItem key={vectorElement.sectionId} collapseId={vectorElement.sectionId} onClick={()=> setStackedActive(vectorElement.sectionId)} headerTitle={<><h5 className="input-stack-title">
                    <i className={vectorElement.icon}></i>
                    &nbsp;{vectorElement.title}</h5></>}>
                        <MDBRow key={vectorElement.sectionId}>
                            {
                                vectorElement.queries ?
                                vectorElement.queries.map( inputElement => (
                                  <React.Fragment key={inputElement.queryId}>
                                    {inputArchitect(inputElement.inputType, inputElement.newRow, inputElement.inputWidth, inputElement.inputAlias, inputElement.inputLabel, 
                                        inputElement.inputPlaceholder, props.values[inputElement.inputAlias], props.handleChange, clientMode, clientMode, inputElement.isHinted, inputElement.hintURL,
                                        inputElement.hintText, inputElement.minValue, inputElement.maxValue, inputElement.inputHeight, inputElement.stepValue, 
                                        inputElement.inputOptions, inputElement.fileTypes, props.errors[inputElement.inputAlias], props.touched[inputElement.inputAlias], props.handleBlur, inputElement.queryId)
                                    }
                                   </React.Fragment>
                                    )):null
                                

                            }
                         </MDBRow>
                    </MDBAccordionItem>
                    </React.Fragment>
                     )):null
                    }
                </MDBAccordion>
            </MDBRow>  
                </>
                :
                <>
                <MDBRow key={112} className="input-codex-box">
                {
        vectorJSON ?
        vectorJSON.model.map( vectorElement => (
                    <React.Fragment key={vectorElement.sectionId}>

                    <SectionTitle key={vectorElement.sectionId} sectionIcon={vectorElement.icon} sectionTitle={vectorElement.title}/>
                    {
                                vectorElement.queries ?
                                vectorElement.queries.map( inputElement => (
                                  <React.Fragment key={inputElement.queryId}>
                                    { inputArchitect(inputElement.inputType, inputElement.newRow, inputElement.inputWidth, inputElement.inputAlias, inputElement.inputLabel, 
                                        inputElement.inputPlaceholder, props.values[inputElement.inputAlias], props.handleChange, clientMode, clientMode, inputElement.isHinted, inputElement.hintURL,
                                        inputElement.hintText, inputElement.minValue, inputElement.maxValue, inputElement.inputHeight, inputElement.stepValue, 
                                        inputElement.inputOptions, inputElement.fileTypes, props.errors[inputElement.inputAlias], props.touched[inputElement.inputAlias], props.handleBlur, inputElement.queryId)
                                    }
                                   </React.Fragment>
                                    )):null
                                

                    }
                    
                    </React.Fragment>
                     )):null
                    }
                </MDBRow>
                </>
                }
            
            </>
           
    
    </>
    )


}
export default VectorSigma;