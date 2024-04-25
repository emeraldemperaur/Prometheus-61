import { MDBCol, MDBRow, MDBContainer, MDBBadge, MDBBtn, MDBIcon, MDBCard, MDBAccordion, MDBAccordionItem } from 'mdb-react-ui-kit';
import ClientNavigatorMenu from '../navigator/clientnavigator_component';
import PlannerViewerFooter from '../artificer/planner_viewer_footer';
import TextInput from "../architect/text_input_component";
import NumberInput from "../architect/number_input_component";
import DateInput from "../architect/date_input_component";
import DateTimeInput from "../architect/datetime_input_component";
import TimeInput from "../architect/time_input_component";
import TextAreaInput from "../architect/textarea_input_component";
import NumberRangeInput from "../architect/number_range_input_component";
import SectionTitle from "../architect/section_title_component";
import '../artificer/neo_toggle_styles.css'
import { useState, useEffect } from "react";
import SelectInput from "../architect/select_input_component";
import MultiSelectInput from "../architect/multiselect_input_component";
import CheckboxInput from "../architect/checkbox_input_component";
import RadioInput from "../architect/radio_input_component";
import ToggleInput from "../architect/toggle_input_component";
import ToggledInput from "../architect/toggled_input_component";
import FileInput from "../architect/file_input_component";
import DateRangeInput from "../architect/date_range_input_component";
import ClientLoader from '../artificer/client_loader_component';
import LogoHolder from '../planner/assets/placeholder-circle.png';
import '../planner/planner_client_styles.css';
import SaveActionModal from '../artificer/save_modal_component';
import { tr } from 'date-fns/locale';
import SubmitActionModal from '../artificer/submit_modal_component';





const PlannerClientInterface = ({planRecord}) => {
    document.body.style.backgroundColor = "#ffffff"
    document.body.style.fontFamily = "Montserrat"
    const [stackedMode, setStackedMode] = useState(false);
    const [stackedActive, setStackedActive] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [actionComplete, setActionComplete] = useState(false);
    const [saveTogglePromptModal, setSaveTogglePromptModal] = useState(false);
    const [submitTogglePromptModal, setSubmitTogglePromptModal] = useState(false);

    const toggleStackView = () => {
        if(document.getElementById("stackedMode").checked){setStackedMode(true);console.log("Stacked Mode - ON");}
        if(!document.getElementById("stackedMode").checked){setStackedMode(false);console.log("Stacked Mode - OFF")}  
    }
    const saveDetails = () => {
        setSaveTogglePromptModal(!saveTogglePromptModal);
        setTimeout(() => {
            setActionComplete(false);
            console.log(`Saving Plan Details`)  
        }, 0);   
    }
    const submitDetails = () => {
        setSubmitTogglePromptModal(!submitTogglePromptModal);
        setTimeout(() => {
            setActionComplete(false);
            console.log(`Submitting Plan Details`)  
        }, 0);
    }
    const saveOrSubmitDetails = () => {
        console.log(`Saving or Submitting Plan Details`)   
       }
    useEffect(() => {
        setTimeout(() => {
          setIsLoading(false);
        }, 1569);
      });

    return(
    <>
    {isLoading ?
    <>
    <MDBContainer style={{height: '100vh', backgroundColor: '#ffffff'}} fluid>
        <ClientLoader/>
    </MDBContainer>
    </>
    :
    <>
        <MDBRow>
            <ClientNavigatorMenu platformName={planRecord.enquiryPlatformName}/>
            <MDBRow className='client-form-info'>
                    <MDBCol size='2'>
                    <img src={LogoHolder} alt='' style={{ width: '169px', height: '169px'}} className='rounded-circle'/>
                    <MDBRow>
                    <a style={{color:'#000000'}} className='client-form-corp'>{planRecord.companyName}</a><br/>
                    </MDBRow>
                    </MDBCol>
                    <MDBCol size='5'>
                    {planRecord.status == 1 ?
                        <><MDBBadge className='planner-badge planner-view-badge' color='warning' pill>Client Onboarding</MDBBadge></>
                        :null}
                    {planRecord.status == 2 ?
                        <><MDBBadge className='planner-badge planner-view-badge' color='secondary' pill>In Progress</MDBBadge></>
                        :null}
                    {planRecord.status == 3 ?
                        <><MDBBadge className='planner-badge planner-view-badge' color='success' pill>Complete</MDBBadge></>
                        :null} 
                    
                    <br></br>
                        <div className="form-records-box">
                        <a style={{color:'#002c51', fontFamily: "Montserrat"}} className="client-form-info-title form-records-found">{planRecord.productPlanName}</a><br></br>
                        <MDBRow start>
                    <MDBCol size='4'>
                     <div>
                        <a className="client-form-title-subtitle-text">Requirements By</a><br></br>
                        <a style={{color:'#000000', fontFamily: "Montserrat"}} className="client-form-title-subtext-text">{planRecord.correspondenceName}</a>
                      </div>
                    </MDBCol>
                    <MDBCol size='6'>
                      <div>
                        <a className="client-form-title-subtitle-text">Correspondence as at</a><br></br>
                        <a style={{color:'#000000', fontFamily: "Montserrat"}} className="client-form-time-text client-form-title-subtext-text">{planRecord.correspondenceTime}</a>
                      </div>
                    </MDBCol>
                    </MDBRow>
                        </div>
                    </MDBCol>
                    <MDBCol size='5'>
                    <div className='client-form-actions'>
                   
                        <MDBBtn className='client-form-button' style={{ backgroundColor: '#002C51', fontFamily: 'Montserrat', fontSize: 13, fontWeight: 600, letterSpacing: '0.21em', margin: '10px' }} 
                        onClick={() => saveDetails()}>
                            <MDBIcon icon='save' />  SAVE DETAILS&nbsp;&nbsp;&nbsp;&nbsp;
                        </MDBBtn>
                        <>
                        {planRecord.status == 3 ?
                        <>
                        <MDBBtn className='client-form-button' style={{ backgroundColor: '#002C51', fontFamily: 'Montserrat', fontSize: 13, fontWeight: 600, letterSpacing: '0.21em', margin: '10px' }} 
                        onClick={() => submitDetails()}>
                            <i class="fa-solid fa-upload"></i>  RESUBMIT FORM&nbsp;
                        </MDBBtn>
                        </>
                        :
                        <>
                        <MDBBtn className='client-form-button' style={{ backgroundColor: '#002C51', fontFamily: 'Montserrat', fontSize: 13, fontWeight: 600, letterSpacing: '0.21em', margin: '10px' }} 
                        onClick={() => submitDetails()}>
                            <MDBIcon  icon='paper-plane' />  COMPLETE FORM
                        </MDBBtn>
                        </>}
                        
                        </>
                        </div>
                    </MDBCol>
                
                </MDBRow>
                <MDBRow>
                    <hr/>
                <MDBCol size={12}>
                    {planRecord.enquiryPlatformName == "Global - All Platforms" ?
                    <><img className="planner-platform-img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Morgan_Stanley_Logo_1.svg/576px-Morgan_Stanley_Logo_1.svg.png" alt="Global - All Platforms"/></>
                    :null}
                    {planRecord.enquiryPlatformName == "Shareworks" ?
                    <><img className="planner-platform-img-sw" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlfH_kFG94vQnLD9u84V_f9XcItQrECmwQDqahi5cW&s" alt="Shareworks"/></>
                    :null}
                    {planRecord.enquiryPlatformName == "E-Trade" ?
                    <><img className="planner-platform-img-etrade" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/ETrade.svg/2560px-ETrade.svg.png" alt="E-Trade"/></>
                    :null}
                    {planRecord.enquiryPlatformName == "UBS Group" ?
                    <><img className="planner-platform-img-ubs" src="https://upload.wikimedia.org/wikipedia/commons/3/34/UBS_Logo.png" alt="UBS Group"/></>
                    :null}
                    {planRecord.enquiryPlatformName == "Stockvantage" ?
                    <><img className="planner-platform-img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Morgan_Stanley_Logo_1.svg/576px-Morgan_Stanley_Logo_1.svg.png" alt="Stockvantage"/></>
                    :null}
                </MDBCol>
                </MDBRow>
                <MDBRow style={{marginTop: '33px'}}>
                    <MDBCol>
                        <p className="client-form-edit-hint-title">Tell us more about your {planRecord.productPlanName}</p>
                    </MDBCol>
                </MDBRow>
                <MDBRow>
                    <MDBCol className='planner-viewer-formbox' size={12}>
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
                        placeholder={''} defaultValue={''} readOnly={false} isHinted={true} hintLink={'www.mekaegwim.ca'} 
                        hintText={'This is test hint text content for Text Input Element 1'} errorText={'This field is required'}/>
                        <NumberInput newRow={false} width={4} alias={'numberInput1'} inputLabel={'Number Input Element 1'} type={'month'}
                        placeholder={'1-100'} defaultValue={''} readOnly={false} isHinted={true} hintLink={null} 
                        hintText={'This is test hint text content for Number Input Element 1'} errorText={'This field is required'} min={null} max={100}/>
                        <DateInput newRow={false} width={4} alias={'dateInput1'} inputLabel={'Date Input Element 1'} type={'time'} 
                        placeholder={''} defaultValue={''} readOnly={false} isHinted={true} hintLink={'www.mekaegwim.ca'} 
                        hintText={'This is test hint text content for Date Input Element 1'} errorText={'This field is required'}/>
                        <DateTimeInput newRow={false} width={4} alias={'datetimeInput1'} inputLabel={'Date Time Input Element 1'} type={'time'} 
                        placeholder={''} defaultValue={''} readOnly={false} isHinted={true} hintLink={'www.mekaegwim.ca/portfolio'} 
                        hintText={'This is test hint text content for Date Time Input Element 1'} errorText={'This field is required'}/>
                        <TimeInput newRow={false} width={4} alias={'timeInput1'} inputLabel={'Time Input Element 1'} type={'time'} 
                        placeholder={''} defaultValue={''} readOnly={false} isHinted={true} hintLink={'www.mekaegwim.ca/portfolio'} 
                        hintText={'This is test hint text content for Time Input Element 1'} errorText={'This field is required'}/>
                        <TextAreaInput newRow={true} width={12} alias={'textAreaInput1'} inputLabel={'Text Area Element 1'} type={'time'} 
                        placeholder={'This is test text content for Text Area Input Element 1'} defaultValue={''} readOnly={false} isHinted={true} hintLink={'www.mekaegwim.ca/portfolio'} 
                        hintText={'This is test hint text content for Text Area Input Element 1'} errorText={'This field is required'} rows={4}/>
                        <NumberInput newRow={true} width={6} alias={'numberInput2'} inputLabel={'Number Input Element 2'} type={null}
                        placeholder={'USD$ 1-1000'} defaultValue={''} readOnly={false} isHinted={true} hintLink={null} 
                        hintText={'This is test hint text content for Number Input Element 2'} errorText={'This field is required'} min={50} max={100}/>
                        <NumberInput newRow={false} width={6} alias={'numberInput3'} inputLabel={'Number Input Element 3'} type={'month'}
                        placeholder={'1-100'} defaultValue={''} readOnly={false} isHinted={true} hintLink={null} 
                        hintText={'This is test hint text content for Number Input Element 3'} errorText={'This field is required'} min={1} max={100}/>
                        <NumberRangeInput newRow={true} width={12} alias={'numberRangeInput1'} inputLabel={'Number Range Input Element 1'} type={'month'}
                        placeholder={'50-100'} defaultValue={''} readOnly={false} isHinted={true} hintLink={null} 
                        hintText={'This is test hint text content for Number Range Input Element 1'} errorText={'This field is required'} min={50} max={100} step={0.01} disabled={false}/>
                        <NumberInput newRow={true} width={8} alias={'numberInput4'} inputLabel={'Number Input Element 4'} type={'month'}
                        placeholder={'1-100%'} defaultValue={69} readOnly={false} isHinted={true} hintLink={null} 
                        hintText={'This is test hint text content for Number Input Element 4'} errorText={'This field is required'} min={1} max={100}/>
                        <NumberInput newRow={false} width={4} alias={'numberInput5'} inputLabel={'Number Input Element 5'} type={'month'}
                        placeholder={''} defaultValue={''} readOnly={false} isHinted={false} hintLink={null} 
                        hintText={'This is test hint text content for Number Input Element 5'} errorText={'This field is required'} min={0} max={100}/>
                        </MDBRow>
                    </MDBAccordionItem>
                    <MDBAccordionItem collapseId={2} onClick={()=> setStackedActive(2)} headerTitle={<><h5 className="input-stack-title">
                    <i className="fa-solid fa-feather"></i> 
                    &nbsp;Omega Section</h5></>}>
                        <MDBRow>
                        <TextInput newRow={false} width={4} alias={'textInput2'} inputLabel={'Text Input Element 2'} type={'month'}
                        placeholder={''} defaultValue={''} readOnly={false} isHinted={false} hintLink={null} 
                        hintText={'This is test hint text content for Text Input Element 2'} errorText={'This field is required'}/>            
                        <TextInput newRow={true} width={3} alias={'textInput3'} inputLabel={'Text Input Element 3'} type={'week'} 
                        placeholder={''} defaultValue={''} readOnly={false} isHinted={true} hintLink={'https://mekaegwim.ca/'} 
                        hintText={'This is test hint text content for Text Input Element 3'} errorText={'This field is required'}/>
                        <TextInput newRow={false} width={5} alias={'textInput4'} inputLabel={'Text Input Element 4'} type={'text'} 
                        placeholder={'Text Input Element 4'} defaultValue={''} readOnly={false} isHinted={true} hintLink={'https://mekaegwim.ca/portfolio'} 
                        hintText={'This is test hint text content for Text Input Element 4'} errorText={'This field is required'}/>
                        <SelectInput newRow={false} width={6} alias={'selectInput1'} inputLabel={'Select Input Element 1'} type={'text'} 
                        placeholder={'Select Input Element 1'} defaultValue={''} readOnly={false} isHinted={true} hintLink={'https://mekaegwim.ca/portfolio'} 
                        hintText={'This is test hint text content for Select Input Element 1'} errorText={'This field is required'}
                        optionsList={[{id:"1", text:"Dashboard"}, {id:"2", text:"Company Profiles"}, {id:"3", text:"Query Models"}, {id:"4", text:"Plan Forms"}, {id:"5", text:"Insight Models"}]}/>
                        <MultiSelectInput newRow={false} width={6} alias={'multiselectInput1'} inputLabel={'MultiSelect Input Element 1'} type={'text'} 
                        placeholder={'MultiSelect Input Element 1'} defaultValue={[{id:"0", text:""}]} readOnly={false} isHinted={true} hintLink={'https://mekaegwim.ca/portfolio'} 
                        hintText={'This is test hint text content for MultiSelect Input Element 1'} errorText={'This field is required'}
                        optionsList={[{id:"1", text:"Dashboard"}, {id:"2", text:"Company Profiles"}, {id:"3", text:"Query Models"}, {id:"4", text:"Plan Forms"}, {id:"5", text:"Insight Models"}]}/>
                        <CheckboxInput newRow={true} width={12} alias={'checkboxInput1'} inputLabel={'CheckBox Input Element 1'} type={'text'} 
                        placeholder={'Checkbox Input Element 1'} defaultValue={[{id:"0", text:""}]} readOnly={false} disabled={true} isHinted={true} hintLink={'https://mekaegwim.ca/portfolio'} 
                        hintText={'This is test hint text content for Checkbox Input Element 1'} errorText={'This field is required'}
                        optionsList={[{id:"1", text:"Dashboard"}, {id:"2", text:"Company Profiles"}, {id:"3", text:"Query Models"}, {id:"4", text:"Plan Forms"}, {id:"5", text:"Insight Models"}]}/>
                        <RadioInput newRow={true} width={12} alias={'radioInput1'} inputLabel={'Radio Input Element 1'} type={'text'} 
                        placeholder={'Radio Input Element 1'} defaultValue={[{id:"0", text:""}]} readOnly={false} isHinted={true} hintLink={'https://mekaegwim.ca/portfolio'} 
                        hintText={'This is test hint text content for Radio Input Element 1'} errorText={'This field is required'}
                        optionsList={[{id:"1", text:"Dashboard"}, {id:"2", text:"Company Profiles"}, {id:"3", text:"Query Models"}, {id:"4", text:"Plan Forms"}, {id:"5", text:"Insight Models"}]}/>
                        <ToggleInput newRow={true} width={4} alias={'toggleInput1'} inputLabel={'Toggle Input Element 1'} type={'text'} 
                        placeholder={' '} defaultValue={true} readOnly={false} disabled={false} isHinted={true} hintLink={'https://mekaegwim.ca/portfolio'} 
                        hintText={'This is test hint text content for Toggle Input Element 1'} errorText={'This field is required'}/>
                        <ToggledInput newRow={false} width={4} alias={'toggledInput1'} inputLabel={'Toggled Input Element 1'} type={'text'} 
                        toggledInputWidth={4} toggledInputElement={<TextInput newRow={true} width={12} alias={'toggledTextInput1'} inputLabel={'Toggled Text Input Element 1'} type={'text'} 
                        placeholder={'Toggled Text Input'} defaultValue={''} readOnly={false} isHinted={true} hintLink={'https://mekaegwim.ca/'} 
                        hintText={'This is test hint text content for Toggled Text Input Element 1'} errorText={'This field is required'}/>}
                        placeholder={' '} defaultValue={null} readOnly={false} disabled={false} isHinted={true} hintLink={'https://mekaegwim.ca/portfolio'} 
                        hintText={'This is test hint text content for Toggled Text Input Element 1'} errorText={'This field is required'}/>
                        </MDBRow>
                    </MDBAccordionItem>
                    <MDBAccordionItem collapseId={3} onClick={()=> setStackedActive(3)} headerTitle={<><h5 className="input-stack-title">
                    <i className="fa-solid fa-icons"></i> 
                    &nbsp;Epsilon Section</h5></>}>
                        <MDBRow>
                        <FileInput newRow={false} width={6} alias={'fileInput1'} inputLabel={'File Input Element 1'} type={'text'} multipleFiles={true} fileTypes={'.pdf,.doc,.docx,.xlsx'}
                        placeholder={'File Input Element 1'} defaultValue={true} readOnly={false} disabled={false} isHinted={true} hintLink={'https://mekaegwim.ca/portfolio'} 
                        hintText={'This is test hint text content for File Input Element 1'} errorText={'This field is required'}/>
                        <FileInput newRow={false} width={6} alias={'fileInput2'} inputLabel={'File Input Element 2'} type={'text'} multipleFiles={false} fileTypes={'.jpg,.jpeg,.png,.pdf'}
                        placeholder={'File Input Element 2'} defaultValue={true} readOnly={false} disabled={false} isHinted={true} hintLink={'https://mekaegwim.ca/portfolio'} 
                        hintText={'This is test hint text content for File Input Element 2'} errorText={'This field is required'}/>
                        <DateRangeInput newRow={false} width={4} alias={'daterangeInput1'} inputLabel={'Date Range Input Element 1'} type={'text'} 
                        placeholder={'Date Range Input Element 1'} defaultValue={''} readOnly={false} isHinted={true} hintLink={'https://mekaegwim.ca/portfolio'} 
                        hintText={'This is test hint text content for Date Range Input Element 1'} errorText={'This field is required'}/>
                        <DateRangeInput newRow={false} width={4} alias={'daterangeInput2'} inputLabel={'Date Range Input Element 2'} type={'text'} 
                        placeholder={'Date Range Input Element 2'} defaultValue={'daterangeInput2'} readOnly={false} isHinted={false} hintLink={'https://mekaegwim.ca/portfolio'} 
                        hintText={'This is test hint text content for Date Range Input Element 2'} errorText={'This field is required'}/>
                        <DateRangeInput newRow={false} width={4} alias={'daterangeInput3'} inputLabel={'Date Range Input Element 3'} type={'text'} 
                        placeholder={'Date Range Input Element 3'} defaultValue={'daterangeInput3'} readOnly={false} isHinted={true} hintLink={'https://mekaegwim.ca/portfolio'} 
                        hintText={'This is test hint text content for Date Range Input Element 3'} errorText={'This field is required'}/>
                        </MDBRow>
                    </MDBAccordionItem>
                </MDBAccordion>
            </MDBRow>  
            </>
            :
            <>
            <MDBRow className="input-codex-box">
            <SectionTitle sectionIcon={'fa-solid fa-dumpster-fire'} sectionTitle={'Alpha Section'}/>
            <TextInput newRow={false} width={4} alias={'textInput1'} inputLabel={'Text Input Element 1'} type={'text'} 
            placeholder={''} defaultValue={''} readOnly={false} isHinted={true} hintLink={'www.mekaegwim.ca'} 
            hintText={'This is test hint text content for Text Input Element 1'} errorText={'This field is required'}/>
            <NumberInput newRow={false} width={4} alias={'numberInput1'} inputLabel={'Number Input Element 1'} type={'month'}
            placeholder={'1-100'} defaultValue={''} readOnly={false} isHinted={true} hintLink={null} 
            hintText={'This is test hint text content for Number Input Element 1'} errorText={'This field is required'} min={null} max={100}/>
            <DateInput newRow={false} width={4} alias={'dateInput1'} inputLabel={'Date Input Element 1'} type={'time'} 
            placeholder={''} defaultValue={''} readOnly={false} isHinted={true} hintLink={'www.mekaegwim.ca'} 
            hintText={'This is test hint text content for Date Input Element 1'} errorText={'This field is required'}/>
            <DateTimeInput newRow={false} width={4} alias={'datetimeInput1'} inputLabel={'Date Time Input Element 1'} type={'time'} 
            placeholder={''} defaultValue={''} readOnly={false} isHinted={true} hintLink={'www.mekaegwim.ca/portfolio'} 
            hintText={'This is test hint text content for Date Time Input Element 1'} errorText={'This field is required'}/>
            <TimeInput newRow={false} width={4} alias={'timeInput1'} inputLabel={'Time Input Element 1'} type={'time'} 
            placeholder={''} defaultValue={''} readOnly={false} isHinted={true} hintLink={'www.mekaegwim.ca/portfolio'} 
            hintText={'This is test hint text content for Time Input Element 1'} errorText={'This field is required'}/>
            <TextAreaInput newRow={true} width={12} alias={'textAreaInput1'} inputLabel={'Text Area Element 1'} type={'time'} 
            placeholder={'This is test text content for Text Area Input Element 1'} defaultValue={''} readOnly={false} isHinted={true} hintLink={'www.mekaegwim.ca/portfolio'} 
            hintText={'This is test hint text content for Text Area Input Element 1'} errorText={'This field is required'} rows={4}/>
            <NumberInput newRow={true} width={6} alias={'numberInput2'} inputLabel={'Number Input Element 2'} type={null}
            placeholder={'USD$ 1-1000'} defaultValue={''} readOnly={false} isHinted={true} hintLink={null} 
            hintText={'This is test hint text content for Number Input Element 2'} errorText={'This field is required'} min={50} max={100}/>
            <NumberInput newRow={false} width={6} alias={'numberInput3'} inputLabel={'Number Input Element 3'} type={'month'}
            placeholder={'1-100'} defaultValue={''} readOnly={false} isHinted={true} hintLink={null} 
            hintText={'This is test hint text content for Number Input Element 3'} errorText={'This field is required'} min={1} max={100}/>
            <NumberRangeInput newRow={true} width={12} alias={'numberRangeInput1'} inputLabel={'Number Range Input Element 1'} type={'month'}
            placeholder={'50-100'} defaultValue={''} readOnly={false} isHinted={true} hintLink={null} 
            hintText={'This is test hint text content for Number Range Input Element 1'} errorText={'This field is required'} min={50} max={100} step={0.01} disabled={false}/>
            <NumberInput newRow={true} width={8} alias={'numberInput4'} inputLabel={'Number Input Element 4'} type={'month'}
            placeholder={'1-100%'} defaultValue={69} readOnly={false} isHinted={true} hintLink={null} 
            hintText={'This is test hint text content for Number Input Element 4'} errorText={'This field is required'} min={1} max={100}/>
            <NumberInput newRow={false} width={4} alias={'numberInput5'} inputLabel={'Number Input Element 5'} type={'month'}
            placeholder={''} defaultValue={''} readOnly={false} isHinted={false} hintLink={null} 
            hintText={'This is test hint text content for Number Input Element 5'} errorText={'This field is required'} min={0} max={100}/>
            <SectionTitle sectionIcon={'fa-solid fa-feather'} sectionTitle={'Omega Section'}/>
            <TextInput newRow={false} width={4} alias={'textInput2'} inputLabel={'Text Input Element 2'} type={'month'}
            placeholder={''} defaultValue={''} readOnly={false} isHinted={false} hintLink={null} 
            hintText={'This is test hint text content for Text Input Element 2'} errorText={'This field is required'}/>            
            <TextInput newRow={true} width={3} alias={'textInput3'} inputLabel={'Text Input Element 3'} type={'week'} 
            placeholder={''} defaultValue={''} readOnly={false} isHinted={true} hintLink={'https://mekaegwim.ca/'} 
            hintText={'This is test hint text content for Text Input Element 3'} errorText={'This field is required'}/>
            <TextInput newRow={false} width={5} alias={'textInput4'} inputLabel={'Text Input Element 4'} type={'text'} 
            placeholder={'Text Input Element 4'} defaultValue={''} readOnly={false} isHinted={true} hintLink={'https://mekaegwim.ca/portfolio'} 
            hintText={'This is test hint text content for Text Input Element 4'} errorText={'This field is required'}/>
            <SelectInput newRow={false} width={6} alias={'selectInput1'} inputLabel={'Select Input Element 1'} type={'text'} 
            placeholder={'Select Input Element 1'} defaultValue={''} readOnly={false} isHinted={true} hintLink={'https://mekaegwim.ca/portfolio'} 
            hintText={'This is test hint text content for Select Input Element 1'} errorText={'This field is required'}
            optionsList={[{id:"1", text:"Dashboard"}, {id:"2", text:"Company Profiles"}, {id:"3", text:"Query Models"}, {id:"4", text:"Plan Forms"}, {id:"5", text:"Insight Models"}]}/>
            <MultiSelectInput newRow={false} width={6} alias={'multiselectInput1'} inputLabel={'MultiSelect Input Element 1'} type={'text'} 
            placeholder={'MultiSelect Input Element 1'} defaultValue={[{id:"0", text:""}]} readOnly={false} isHinted={true} hintLink={'https://mekaegwim.ca/portfolio'} 
            hintText={'This is test hint text content for MultiSelect Input Element 1'} errorText={'This field is required'}
            optionsList={[{id:"1", text:"Dashboard"}, {id:"2", text:"Company Profiles"}, {id:"3", text:"Query Models"}, {id:"4", text:"Plan Forms"}, {id:"5", text:"Insight Models"}]}/>
            <CheckboxInput newRow={true} width={12} alias={'checkboxInput1'} inputLabel={'CheckBox Input Element 1'} type={'text'} 
            placeholder={'Checkbox Input Element 1'} defaultValue={[{id:"0", text:""}]} readOnly={false} disabled={false} isHinted={true} hintLink={'https://mekaegwim.ca/portfolio'} 
            hintText={'This is test hint text content for Checkbox Input Element 1'} errorText={'This field is required'}
            optionsList={[{id:"1", text:"Dashboard"}, {id:"2", text:"Company Profiles"}, {id:"3", text:"Query Models"}, {id:"4", text:"Plan Forms"}, {id:"5", text:"Insight Models"}]}/>
            <RadioInput newRow={true} width={12} alias={'radioInput1'} inputLabel={'Radio Input Element 1'} type={'text'} 
            placeholder={'Radio Input Element 1'} defaultValue={[{id:"0", text:""}]} readOnly={false} isHinted={true} hintLink={'https://mekaegwim.ca/portfolio'} 
            hintText={'This is test hint text content for Radio Input Element 1'} errorText={'This field is required'}
            optionsList={[{id:"1", text:"Dashboard"}, {id:"2", text:"Company Profiles"}, {id:"3", text:"Query Models"}, {id:"4", text:"Plan Forms"}, {id:"5", text:"Insight Models"}]}/>
            <ToggleInput newRow={true} width={4} alias={'toggleInput1'} inputLabel={'Toggle Input Element 1'} type={'text'} 
            placeholder={' '} defaultValue={true} readOnly={false} disabled={false} isHinted={true} hintLink={'https://mekaegwim.ca/portfolio'} 
            hintText={'This is test hint text content for Toggle Input Element 1'} errorText={'This field is required'}/>
            <ToggledInput newRow={false} width={4} alias={'toggledInput1'} inputLabel={'Toggled Input Element 1'} type={'text'} 
            toggledInputWidth={4} toggledInputElement={<TextInput newRow={true} width={12} alias={'toggledTextInput1'} inputLabel={'Toggled Text Input Element 1'} type={'text'} 
            placeholder={'Toggled Text Input'} defaultValue={''} readOnly={false} isHinted={true} hintLink={'https://mekaegwim.ca/'} 
            hintText={'This is test hint text content for Toggled Text Input Element 1'} errorText={'This field is required'}/>}
            placeholder={' '} defaultValue={null} readOnly={false} disabled={false} isHinted={true} hintLink={'https://mekaegwim.ca/portfolio'} 
            hintText={'This is test hint text content for Toggled Text Input Element 1'} errorText={'This field is required'}/>
            <SectionTitle sectionIcon={'fa-solid fa-icons'} sectionTitle={'Epsilon Section'}/>
            <FileInput newRow={false} width={6} alias={'fileInput1'} inputLabel={'File Input Element 1'} type={'text'} multipleFiles={true} fileTypes={'.pdf,.doc,.docx,.xlsx'}
            placeholder={'File Input Element 1'} defaultValue={true} readOnly={false} disabled={false} isHinted={true} hintLink={'https://mekaegwim.ca/portfolio'} 
            hintText={'This is test hint text content for File Input Element 1'} errorText={'This field is required'}/>
            <FileInput newRow={false} width={6} alias={'fileInput2'} inputLabel={'File Input Element 2'} type={'text'} multipleFiles={false} fileTypes={'.jpg,.jpeg,.png,.pdf'}
            placeholder={'File Input Element 2'} defaultValue={true} readOnly={false} disabled={false} isHinted={true} hintLink={'https://mekaegwim.ca/portfolio'} 
            hintText={'This is test hint text content for File Input Element 2'} errorText={'This field is required'}/>
            <DateRangeInput newRow={false} width={4} alias={'daterangeInput1'} inputLabel={'Date Range Input Element 1'} type={'text'} 
            placeholder={'Date Range Input Element 1'} defaultValue={''} readOnly={false} isHinted={true} hintLink={'https://mekaegwim.ca/portfolio'} 
            hintText={'This is test hint text content for Date Range Input Element 1'} errorText={'This field is required'}/>
            <DateRangeInput newRow={false} width={4} alias={'daterangeInput2'} inputLabel={'Date Range Input Element 2'} type={'text'} 
            placeholder={'Date Range Input Element 2'} defaultValue={'daterangeInput2'} readOnly={false} isHinted={false} hintLink={'https://mekaegwim.ca/portfolio'} 
            hintText={'This is test hint text content for Date Range Input Element 2'} errorText={'This field is required'}/>
            <DateRangeInput newRow={false} width={4} alias={'daterangeInput3'} inputLabel={'Date Range Input Element 3'} type={'text'} 
            placeholder={'Date Range Input Element 3'} defaultValue={'daterangeInput3'} readOnly={false} isHinted={true} hintLink={'https://mekaegwim.ca/portfolio'} 
            hintText={'This is test hint text content for Date Range Input Element 3'} errorText={'This field is required'}/>
            </MDBRow>
            </>}
            </MDBCard>
                    </MDBCol>
                    <PlannerViewerFooter style={{marginBottom: '6px'}} platformName={planRecord.enquiryPlatformName}/>
                </MDBRow>

                <SaveActionModal title={'Saving Details...'} icon="save" size="lg" isCompleted={false}
                    togglePromptModal={saveTogglePromptModal} setTogglePromptModal={setSaveTogglePromptModal} scrollable={false} 
                    productPlan={planRecord.productPlanName} corpName={planRecord.companyName}/>
                <SubmitActionModal title="Submitting Details..." icon="paper-plane" size="lg" isCompleted={false}
                    togglePromptModal={submitTogglePromptModal} setTogglePromptModal={setSubmitTogglePromptModal} scrollable={false} 
                    productPlan={planRecord.productPlanName} corpName={planRecord.companyName}/>

        </MDBRow>
    <div className="client-form-fab fab-btn" onClick={() => saveOrSubmitDetails()}> ✔ </div>
    </>
    }
    </>
    )
}
export default PlannerClientInterface;