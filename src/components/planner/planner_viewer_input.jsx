import { MDBCol, MDBRow, MDBCard, MDBAccordion, MDBAccordionItem } from "mdb-react-ui-kit";
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

const PlannerViewerInput = (props) => {
    const [stackedMode, setStackedMode] = useState(false);
    const [stackedActive, setStackedActive] = useState(1);
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
                    <MDBAccordionItem collapseId={1} onClick={()=> setStackedActive(1)} headerTitle={<><h5 className="input-stack-title"><i className="fa-solid fa-heading"></i> Section Title Text #1</h5></>}>Section 1</MDBAccordionItem>
                    <MDBAccordionItem collapseId={2} onClick={()=> setStackedActive(2)} headerTitle={<><h5 className="input-stack-title"><i className="fa-solid fa-heading"></i> Section Title Text #2</h5></>}>Section 2</MDBAccordionItem>
                    <MDBAccordionItem collapseId={3} onClick={()=> setStackedActive(3)} headerTitle={<><h5 className="input-stack-title"><i className="fa-solid fa-heading"></i> Section Title Text #3</h5></>}>Section 3</MDBAccordionItem>
                </MDBAccordion>
            </MDBRow>            
            </>
            :
            <>
            <MDBRow className="input-codex-box">
            <SectionTitle/>
            <TextInput newRow={false} width={4} alias={'textInput1'} inputLabel={'Text Input Element 1'} type={'time'} 
            placeholder={''} defaultValue={''} readOnly={true} hintLink={'www.mekaegwim.ca'} 
            hintText={'This is test hint text content for Text Input Element 1'}/>
            <NumberInput newRow={false} width={4} alias={'numberInput1'} inputLabel={'Number Input Element 1'} type={'month'}
            placeholder={'1-100'} defaultValue={''} readOnly={true} isHinted={true} hintLink={null} 
            hintText={'This is test hint text content for Number Input Element 1'} min={null} max={100}/>
            <DateInput/>
            <DateTimeInput/>
            <TimeInput/>
            <TextAreaInput/>
            <NumberInput newRow={true} width={6} alias={'numberInput2'} inputLabel={'Number Input Element 2'} type={null}
            placeholder={'USD$ 1-1000'} defaultValue={''} readOnly={false} isHinted={true} hintLink={null} 
            hintText={'This is test hint text content for Number Input Element 2'} min={50} max={100}/>
            <NumberInput newRow={false} width={6} alias={'numberInput3'} inputLabel={'Number Input Element 3'} type={'month'}
            placeholder={'1-100'} defaultValue={''} readOnly={true} isHinted={true} hintLink={null} 
            hintText={'This is test hint text content for Number Input Element 3'} min={1} max={100}/>
            <NumberRangeInput/>
            <NumberInput newRow={true} width={8} alias={'numberInput4'} inputLabel={'Number Input Element 4'} type={'month'}
            placeholder={'1-100%'} defaultValue={69} readOnly={false} isHinted={true} hintLink={null} 
            hintText={'This is test hint text content for Number Input Element 4'} min={1} max={100}/>
            <NumberInput newRow={false} width={4} alias={'numberInput5'} inputLabel={'Number Input Element 5'} type={'month'}
            placeholder={''} defaultValue={''} readOnly={false} isHinted={false} hintLink={null} 
            hintText={'This is test hint text content for Number Input Element 5'} min={0} max={100}/>
            <SectionTitle/>
            <TextInput newRow={false} width={4} alias={'textInput2'} inputLabel={'Text Input Element 2'} type={'month'}
            placeholder={''} defaultValue={''} readOnly={true} isHinted={false} hintLink={null} hintText={'This is test hint text content for Text Input Element 2'}/>            
            <TextInput newRow={true} width={3} alias={'textInput3'} inputLabel={'Text Input Element 3'} type={'week'} 
            placeholder={''} defaultValue={''} readOnly={true} isHinted={true} hintLink={'https://mekaegwim.ca/'} hintText={'This is test hint text content for Text Input Element 3'}/>
            <TextInput newRow={false} width={5} alias={'textInput4'} inputLabel={'Text Input Element 4'} type={'text'} 
            placeholder={'Text Input Element 4'} defaultValue={''} readOnly={true} isHinted={true} hintLink={'https://mekaegwim.ca/portfolio'} hintText={'This is test hint text content for Text Input Element 4'}/>
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