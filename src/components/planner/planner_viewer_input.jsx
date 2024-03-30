import { MDBCol, MDBRow, MDBCard, MDBAccordion, MDBAccordionItem, MDBCollapse } from "mdb-react-ui-kit";
import '../planner/planner_styles.css'
import '../artificer/neo_toggle_styles.css'
import TextInput from "../architect/text_input_component";
import NumberInput from "../architect/number_input_component";
import DateInput from "../architect/date_input_component";
import DateTimeInput from "../architect/datetime_input_component";
import TimeInput from "../architect/time_input_component";
import TextAreaInput from "../architect/textarea_input_component";
import NumberRangeInput from "../architect/number_range_input_component";
import PlannerViewerFooter from "../artificer/planner_viewer_footer";
import SectionTitle from "../architect/section_title_component";
import { useState } from "react";
import SelectInput from "../architect/select_input_component";
import MultiSelectInput from "../architect/multiselect_input_component";
import CheckboxInput from "../architect/checkbox_input_component";
import RadioInput from "../architect/radio_input_component";
import ToggleInput from "../architect/toggle_input_component";
import ToggledInput from "../architect/toggled_input_component";
import FileInput from "../architect/file_input_component";

const PlannerViewerInput = (props) => {
    const [stackedMode, setStackedMode] = useState(false);
    const [stackedActive, setStackedActive] = useState(0);
    const toggleStackView = () => {
        if(document.getElementById("stackedMode").checked){setStackedMode(true);console.log("Stacked Mode - ON");}
        if(!document.getElementById("stackedMode").checked){setStackedMode(false);console.log("Stacked Mode - OFF")}  
        //document.getElementById("stackedMode").focus();
    }

    return(
    <>
    <MDBRow>
        <MDBCol size={12}>
            {props.platformName == "Global - All Platforms" ?
            <><img className="planner-platform-img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Morgan_Stanley_Logo_1.svg/576px-Morgan_Stanley_Logo_1.svg.png" alt="Global - All Platforms"/></>
            :null}
            {props.platformName == "Shareworks" ?
            <><img className="planner-platform-img-sw" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlfH_kFG94vQnLD9u84V_f9XcItQrECmwQDqahi5cW&s" alt="Shareworks"/></>
            :null}
            {props.platformName == "E-Trade" ?
            <><img className="planner-platform-img-etrade" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/ETrade.svg/2560px-ETrade.svg.png" alt="E-Trade"/></>
            :null}
            {props.platformName == "UBS Group" ?
            <><img className="planner-platform-img-ubs" src="https://upload.wikimedia.org/wikipedia/commons/3/34/UBS_Logo.png" alt="UBS Group"/></>
            :null}
            {props.platformName == "Stockvantage" ?
            <><img className="planner-platform-img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Morgan_Stanley_Logo_1.svg/576px-Morgan_Stanley_Logo_1.svg.png" alt="Stockvantage"/></>
            :null}
        </MDBCol>
    </MDBRow>
    <MDBRow>
        <MDBCol className="planner-viewer-formbox" size={12}>
            <MDBCard>
            <MDBRow className="toggle-box">
                <MDBCol className="" size={12}>
                    <label className="label">
                    <div className="toggle">
                    <input id="stackedMode" className="toggle-state" type="checkbox" name="check" value="check" onClick={()=> toggleStackView()} />
                    <div className="indicator"></div>
                    </div>
                    <div className="label-text"><i className="fa-solid fa-layer-group"></i></div>
                </label>
                </MDBCol>
            </MDBRow>
            {stackedMode ?
            <>
            <MDBRow className="input-stack-box">
                <MDBAccordion alwaysOpen={true} borderless initialActive={stackedActive}>
                    <MDBAccordionItem collapseId={1} onClick={()=> setStackedActive(1)} headerTitle={<><h5 className="input-stack-title">
                    <i className="fa-solid fa-dumpster-fire"></i>
                    &nbsp;Alpha Section</h5></>}>
                        <MDBRow>
                        <TextInput newRow={false} width={4} alias={'textInput1'} inputLabel={'Text Input Element 1'} type={'time'} 
                        placeholder={''} defaultValue={''} readOnly={true} isHinted={true} hintLink={'www.mekaegwim.ca'} 
                        hintText={'This is test hint text content for Text Input Element 1'}/>
                        <NumberInput newRow={false} width={4} alias={'numberInput1'} inputLabel={'Number Input Element 1'} type={'month'}
                        placeholder={'1-100'} defaultValue={''} readOnly={true} isHinted={true} hintLink={null} 
                        hintText={'This is test hint text content for Number Input Element 1'} min={null} max={100}/>
                        <DateInput newRow={false} width={4} alias={'dateInput1'} inputLabel={'Date Input Element 1'} type={'time'} 
                        placeholder={''} defaultValue={100} readOnly={false} isHinted={true} hintLink={'www.mekaegwim.ca'} 
                        hintText={'This is test hint text content for Date Input Element 1'}/>
                        <DateTimeInput newRow={false} width={4} alias={'datetimeInput1'} inputLabel={'Date Time Input Element 1'} type={'time'} 
                        placeholder={''} defaultValue={''} readOnly={false} isHinted={true} hintLink={'www.mekaegwim.ca/portfolio'} 
                        hintText={'This is test hint text content for Date Time Input Element 1'}/>
                        <TimeInput newRow={false} width={4} alias={'timeInput1'} inputLabel={'Time Input Element 1'} type={'time'} 
                        placeholder={''} defaultValue={''} readOnly={true} isHinted={true} hintLink={'www.mekaegwim.ca/portfolio'} 
                        hintText={'This is test hint text content for Time Input Element 1'}/>
                        <TextAreaInput newRow={true} width={12} alias={'textAreaInput1'} inputLabel={'Text Area Element 1'} type={'time'} 
                        placeholder={'This is test text content for Text Area Input Element 1'} defaultValue={''} readOnly={true} isHinted={true} hintLink={'www.mekaegwim.ca/portfolio'} 
                        hintText={'This is test hint text content for Text Area Input Element 1'} rows={4}/>
                        <NumberInput newRow={true} width={6} alias={'numberInput2'} inputLabel={'Number Input Element 2'} type={null}
                        placeholder={'USD$ 1-1000'} defaultValue={''} readOnly={false} isHinted={true} hintLink={null} 
                        hintText={'This is test hint text content for Number Input Element 2'} min={50} max={100}/>
                        <NumberInput newRow={false} width={6} alias={'numberInput3'} inputLabel={'Number Input Element 3'} type={'month'}
                        placeholder={'1-100'} defaultValue={''} readOnly={true} isHinted={true} hintLink={null} 
                        hintText={'This is test hint text content for Number Input Element 3'} min={1} max={100}/>
                        <NumberRangeInput newRow={true} width={12} alias={'numberRangeInput1'} inputLabel={'Number Range Input Element 1'} type={'month'}
                        placeholder={'50-100'} defaultValue={''} readOnly={true} isHinted={true} hintLink={null} 
                        hintText={'This is test hint text content for Number Range Input Element 1'} min={50} max={100} step={0.01} disabled={false}/>
                        <NumberInput newRow={true} width={8} alias={'numberInput4'} inputLabel={'Number Input Element 4'} type={'month'}
                        placeholder={'1-100%'} defaultValue={69} readOnly={false} isHinted={true} hintLink={null} 
                        hintText={'This is test hint text content for Number Input Element 4'} min={1} max={100}/>
                        <NumberInput newRow={false} width={4} alias={'numberInput5'} inputLabel={'Number Input Element 5'} type={'month'}
                        placeholder={''} defaultValue={''} readOnly={false} isHinted={false} hintLink={null} 
                        hintText={'This is test hint text content for Number Input Element 5'} min={0} max={100}/>
                        </MDBRow>
                    </MDBAccordionItem>
                    <MDBAccordionItem collapseId={2} onClick={()=> setStackedActive(2)} headerTitle={<><h5 className="input-stack-title">
                    <i className="fa-solid fa-feather"></i> 
                    &nbsp;Omega Section</h5></>}>
                        <MDBRow>
                        <TextInput newRow={false} width={4} alias={'textInput2'} inputLabel={'Text Input Element 2'} type={'month'}
                        placeholder={''} defaultValue={''} readOnly={true} isHinted={false} hintLink={null} hintText={'This is test hint text content for Text Input Element 2'}/>            
                        <TextInput newRow={true} width={3} alias={'textInput3'} inputLabel={'Text Input Element 3'} type={'week'} 
                        placeholder={''} defaultValue={''} readOnly={true} isHinted={true} hintLink={'https://mekaegwim.ca/'} hintText={'This is test hint text content for Text Input Element 3'}/>
                        <TextInput newRow={false} width={5} alias={'textInput4'} inputLabel={'Text Input Element 4'} type={'text'} 
                        placeholder={'Text Input Element 4'} defaultValue={''} readOnly={true} isHinted={true} hintLink={'https://mekaegwim.ca/portfolio'} hintText={'This is test hint text content for Text Input Element 4'}/> 
                        </MDBRow>
                    </MDBAccordionItem>
                </MDBAccordion>
            </MDBRow>  
            </>
            :
            <>
            <MDBRow className="input-codex-box">
            <SectionTitle sectionIcon={'fa-solid fa-dumpster-fire'} sectionTitle={'Alpha Section'}/>
            <TextInput newRow={false} width={4} alias={'textInput1'} inputLabel={'Text Input Element 1'} type={'time'} 
            placeholder={''} defaultValue={''} readOnly={true} isHinted={true} hintLink={'www.mekaegwim.ca'} 
            hintText={'This is test hint text content for Text Input Element 1'}/>
            <NumberInput newRow={false} width={4} alias={'numberInput1'} inputLabel={'Number Input Element 1'} type={'month'}
            placeholder={'1-100'} defaultValue={''} readOnly={true} isHinted={true} hintLink={null} 
            hintText={'This is test hint text content for Number Input Element 1'} min={null} max={100}/>
            <DateInput newRow={false} width={4} alias={'dateInput1'} inputLabel={'Date Input Element 1'} type={'time'} 
            placeholder={''} defaultValue={''} readOnly={false} isHinted={true} hintLink={'www.mekaegwim.ca'} 
            hintText={'This is test hint text content for Date Input Element 1'}/>
            <DateTimeInput newRow={false} width={4} alias={'datetimeInput1'} inputLabel={'Date Time Input Element 1'} type={'time'} 
            placeholder={''} defaultValue={''} readOnly={false} isHinted={true} hintLink={'www.mekaegwim.ca/portfolio'} 
            hintText={'This is test hint text content for Date Time Input Element 1'}/>
            <TimeInput newRow={false} width={4} alias={'timeInput1'} inputLabel={'Time Input Element 1'} type={'time'} 
            placeholder={''} defaultValue={''} readOnly={true} isHinted={true} hintLink={'www.mekaegwim.ca/portfolio'} 
            hintText={'This is test hint text content for Time Input Element 1'}/>
            <TextAreaInput newRow={true} width={12} alias={'textAreaInput1'} inputLabel={'Text Area Element 1'} type={'time'} 
            placeholder={'This is test text content for Text Area Input Element 1'} defaultValue={''} readOnly={true} isHinted={true} hintLink={'www.mekaegwim.ca/portfolio'} 
            hintText={'This is test hint text content for Text Area Input Element 1'} rows={4}/>
            <NumberInput newRow={true} width={6} alias={'numberInput2'} inputLabel={'Number Input Element 2'} type={null}
            placeholder={'USD$ 1-1000'} defaultValue={''} readOnly={false} isHinted={true} hintLink={null} 
            hintText={'This is test hint text content for Number Input Element 2'} min={50} max={100}/>
            <NumberInput newRow={false} width={6} alias={'numberInput3'} inputLabel={'Number Input Element 3'} type={'month'}
            placeholder={'1-100'} defaultValue={''} readOnly={true} isHinted={true} hintLink={null} 
            hintText={'This is test hint text content for Number Input Element 3'} min={1} max={100}/>
            <NumberRangeInput newRow={true} width={12} alias={'numberRangeInput1'} inputLabel={'Number Range Input Element 1'} type={'month'}
            placeholder={'50-100'} defaultValue={''} readOnly={true} isHinted={true} hintLink={null} 
            hintText={'This is test hint text content for Number Range Input Element 1'} min={50} max={100} step={0.01} disabled={false}/>
            <NumberInput newRow={true} width={8} alias={'numberInput4'} inputLabel={'Number Input Element 4'} type={'month'}
            placeholder={'1-100%'} defaultValue={69} readOnly={false} isHinted={true} hintLink={null} 
            hintText={'This is test hint text content for Number Input Element 4'} min={1} max={100}/>
            <NumberInput newRow={false} width={4} alias={'numberInput5'} inputLabel={'Number Input Element 5'} type={'month'}
            placeholder={''} defaultValue={''} readOnly={false} isHinted={false} hintLink={null} 
            hintText={'This is test hint text content for Number Input Element 5'} min={0} max={100}/>
            <SectionTitle sectionIcon={'fa-solid fa-feather'} sectionTitle={'Omega Section'}/>
            <TextInput newRow={false} width={4} alias={'textInput2'} inputLabel={'Text Input Element 2'} type={'month'}
            placeholder={''} defaultValue={''} readOnly={true} isHinted={false} hintLink={null} hintText={'This is test hint text content for Text Input Element 2'}/>            
            <TextInput newRow={true} width={3} alias={'textInput3'} inputLabel={'Text Input Element 3'} type={'week'} 
            placeholder={''} defaultValue={''} readOnly={true} isHinted={true} hintLink={'https://mekaegwim.ca/'} hintText={'This is test hint text content for Text Input Element 3'}/>
            <TextInput newRow={false} width={5} alias={'textInput4'} inputLabel={'Text Input Element 4'} type={'text'} 
            placeholder={'Text Input Element 4'} defaultValue={''} readOnly={true} isHinted={true} hintLink={'https://mekaegwim.ca/portfolio'} hintText={'This is test hint text content for Text Input Element 4'}/>
            <SelectInput newRow={false} width={6} alias={'selectInput1'} inputLabel={'Select Input Element 1'} type={'text'} 
            placeholder={'Select Input Element 1'} defaultValue={''} readOnly={true} isHinted={true} hintLink={'https://mekaegwim.ca/portfolio'} hintText={'This is test hint text content for Select Input Element 1'}
            optionsList={[{id:"1", text:"Dashboard"}, {id:"2", text:"Company Profiles"}, {id:"3", text:"Query Models"}, {id:"4", text:"Plan Forms"}, {id:"5", text:"Insight Models"}]}/>
            <MultiSelectInput newRow={false} width={6} alias={'multiselectInput1'} inputLabel={'MultiSelect Input Element 1'} type={'text'} 
            placeholder={'MultiSelect Input Element 1'} defaultValue={[{id:"0", text:""}]} readOnly={true} isHinted={true} hintLink={'https://mekaegwim.ca/portfolio'} hintText={'This is test hint text content for MultiSelect Input Element 1'}
            optionsList={[{id:"1", text:"Dashboard"}, {id:"2", text:"Company Profiles"}, {id:"3", text:"Query Models"}, {id:"4", text:"Plan Forms"}, {id:"5", text:"Insight Models"}]}/>
            <CheckboxInput newRow={true} width={12} alias={'checkboxInput1'} inputLabel={'CheckBox Input Element 1'} type={'text'} 
            placeholder={'Checkbox Input Element 1'} defaultValue={[{id:"0", text:""}]} readOnly={true} disabled={true} isHinted={true} hintLink={'https://mekaegwim.ca/portfolio'} hintText={'This is test hint text content for Checkbox Input Element 1'}
            optionsList={[{id:"1", text:"Dashboard"}, {id:"2", text:"Company Profiles"}, {id:"3", text:"Query Models"}, {id:"4", text:"Plan Forms"}, {id:"5", text:"Insight Models"}]}/>
            <RadioInput newRow={true} width={12} alias={'radioInput1'} inputLabel={'RadioBox Input Element 1'} type={'text'} 
            placeholder={'RadioBox Input Element 1'} defaultValue={[{id:"0", text:""}]} readOnly={true} isHinted={true} hintLink={'https://mekaegwim.ca/portfolio'} hintText={'This is test hint text content for RadioBox Input Element 1'}
            optionsList={[{id:"1", text:"Dashboard"}, {id:"2", text:"Company Profiles"}, {id:"3", text:"Query Models"}, {id:"4", text:"Plan Forms"}, {id:"5", text:"Insight Models"}]}/>
            <ToggleInput newRow={true} width={4} alias={'toggleInput1'} inputLabel={'Toggle Input Element 1'} type={'text'} 
            placeholder={' '} defaultValue={true} readOnly={true} disabled={false} isHinted={true} hintLink={'https://mekaegwim.ca/portfolio'} hintText={'This is test hint text content for Toggle Input Element 1'}/>
            <ToggledInput newRow={false} width={4} alias={'toggledInput1'} inputLabel={'Toggled Input Element 1'} type={'text'} 
            toggledInputWidth={4} toggledInputElement={<TextInput newRow={true} width={12} alias={'toggledTextInput1'} inputLabel={'Toggled Text Input Element 1'} type={'text'} 
            placeholder={'Toggled Text Input'} defaultValue={''} readOnly={true} isHinted={true} hintLink={'https://mekaegwim.ca/'} hintText={'This is test hint text content for Toggled Text Input Element 1'}/>}
            placeholder={' '} defaultValue={null} readOnly={true} disabled={false} isHinted={true} hintLink={'https://mekaegwim.ca/portfolio'} hintText={'This is test hint text content for Toggled Text Input Element 1'}/>
            <SectionTitle sectionIcon={'fa-solid fa-icons'} sectionTitle={'Epsilon Section'}/>
            <FileInput newRow={false} width={6} alias={'fileInput1'} inputLabel={'File Input Element 1'} type={'text'} multipleFiles={true} fileTypes={'.pdf,.doc,.docx,.xlsx'}
            placeholder={'File Input Element 1'} defaultValue={true} readOnly={true} disabled={false} isHinted={true} hintLink={'https://mekaegwim.ca/portfolio'} hintText={'This is test hint text content for File Input Element 1'}/>
            <FileInput newRow={false} width={6} alias={'fileInput2'} inputLabel={'File Input Element 2'} type={'text'} multipleFiles={false} fileTypes={'.jpg,.jpeg,.png,.pdf'}
            placeholder={'File Input Element 2'} defaultValue={true} readOnly={true} disabled={false} isHinted={true} hintLink={'https://mekaegwim.ca/portfolio'} hintText={'This is test hint text content for File Input Element 2'}/>
            </MDBRow>
            </>}
            </MDBCard>
        </MDBCol>
        <PlannerViewerFooter platformName={props.platformName}/>
    </MDBRow>
    </>

    )


}
export default PlannerViewerInput;