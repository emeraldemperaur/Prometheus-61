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
import ClientPromptModal from '../artificer/client_prompt_modal_component';
import { Formik, useFormikContext } from 'formik';
import * as Yup from 'yup';
import VectorSigma from '../architect/vector_sigma_core';





const PlannerClientInterfaceSBX = ({planRecord}) => {
    document.body.style.backgroundColor = "#ffffff"
    document.body.style.fontFamily = "Montserrat"
    const [stackedMode, setStackedMode] = useState(false);
    const [stackedActive, setStackedActive] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [actionComplete, setActionComplete] = useState(false);
    const [saveTogglePromptModal, setSaveTogglePromptModal] = useState(false);
    const [confirmTogglePromptModal, setConfirmTogglePromptModal] = useState(false);
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
        setConfirmTogglePromptModal(!confirmTogglePromptModal);
        setActionComplete(true);
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
    
    <Formik
    
    initialValues={{
        textInput1: '',
        numberInput1: '',
        dateInput1: '',
        datetimeInput1: '',
        timeInput1: '',
        textAreaInput1: '',
        numberInput2: '',
        numberInput3:'',
        numberRangeInput1:'',
        numberInput4: '',
        numberInput5:'',
        textInput2:'',
        textInput3:'',
        textInput4:'',
        selectInput1:'',
        multiselectInput1:'',
        checkboxInput1:'',
        radioInput1:'',
        toggleInput1:'',
        toggledTextInput1:'',
        toggledInput1:'',
        fileInput1:'',
        fileInput2:'',
        daterangeInput1:'',
        daterangeInput2:'',
        daterangeInput3:'',

    }}
   
    validationSchema={Yup.object({
        textInput1: Yup.string().required('This field is required').max(33, 'Sorry, this is too long'),
        numberInput1: Yup.number().required('This field is required'),
        dateInput1: Yup.string().required('This field is required'),
        datetimeInput1: Yup.string().required('This field is required'),
        timeInput1: Yup.string().required('This field is required'),
        textAreaInput1: Yup.string().required('This field is required').max(1000, 'Sorry, this is too long'),
        numberInput2: Yup.number().required('This field is required'),
        numberInput3:Yup.number().required('This field is required'),
        numberRangeInput1:Yup.number().required('This field is required'),
        numberInput4: Yup.number().required('This field is required'),
        numberInput5:Yup.number().required('This field is required'),
        textInput2:Yup.string().required('This field is required').max(33, 'Sorry, this is too long'),
        textInput3:Yup.string().required('This field is required').max(33, 'Sorry, this is too long'),
        textInput4:Yup.string().required('This field is required').max(33, 'Sorry, this is too long'),
        selectInput1:Yup.string().required('This field is required'),
        multiselectInput1:Yup.array().of(Yup.string().min(1, 'This field is required')).min(1, 'This field is required').required('This field is required'),
        checkboxInput1:Yup.array().of(Yup.string().min(1, 'This field is required')).min(1, 'This field is required').required('This field is required'),
        radioInput1:Yup.string().required('This field is required'),
        toggleInput1:Yup.array().of(Yup.string().min(1, 'This field is required')).min(1, 'This field is required').required('This field is required'),
        toggledTextInput1:Yup.string().required('This field is required'),
        toggledInput1:Yup.string().required('This field is required'),
        fileInput1:Yup.mixed().required('This field is required'),
        fileInput2:Yup.mixed().required('This field is required'),
        daterangeInput1:Yup.string().required('This field is required'),
        daterangeInput2:Yup.string().required('This field is required'),
        daterangeInput3:Yup.string().required('This field is required'),

    })}

    onSubmit={(values) => {
        console.log(`Submitting: ${values}`)
    }}
    >  
    {
            ({values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,}) => (
          <>
           <MDBRow>
            <ClientNavigatorMenu platformName={planRecord.enquiryPlatformName}/>
            
            <form onSubmit={handleSubmit}>

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
                        onClick={() => saveDetails()} type='submit'>
                            <MDBIcon icon='save' />  SAVE DETAILS&nbsp;&nbsp;&nbsp;&nbsp;
                        </MDBBtn>
                        <>
                        {planRecord.status == 3 ?
                        <>
                        <MDBBtn className='client-form-button' style={{ backgroundColor: '#002C51', fontFamily: 'Montserrat', fontSize: 13, fontWeight: 600, letterSpacing: '0.21em', margin: '10px' }} 
                        onClick={() => submitDetails()} type='submit'>
                            <i className="fa-solid fa-upload"></i>  RESUBMIT FORM&nbsp;
                        </MDBBtn>
                        </>
                        :
                        <>
                        <MDBBtn className='client-form-button' style={{ backgroundColor: '#002C51', fontFamily: 'Montserrat', fontSize: 13, fontWeight: 600, letterSpacing: '0.21em', margin: '10px' }} 
                        onClick={() => submitDetails()} type='submit'>
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
           <VectorSigma jsonModel={planRecord.jsonQueryDefinition} stackedMode={stackedMode} handleChange={handleChange}
           values={values}
            handleBlur={handleBlur} touched={touched} errors={errors} clientUI={true}/>
            </MDBCard>
                    </MDBCol>
                    <PlannerViewerFooter style={{marginBottom: '6px'}} platformName={planRecord.enquiryPlatformName}/>
                </MDBRow>


                <SaveActionModal title={'Saving Details...'} icon="save" size="lg" isCompleted={false}
                    togglePromptModal={saveTogglePromptModal} setTogglePromptModal={setSaveTogglePromptModal} scrollable={false} 
                    productPlan={planRecord.productPlanName} corpName={planRecord.companyName} id={planRecord.id}/>
                {planRecord.status == 3 ?
                        <>
                        <ClientPromptModal title="Resubmitting Details..." icon="paper-plane" size="lg" staticModal={submitTogglePromptModal} setStaticModal={setSubmitTogglePromptModal}
                        togglePromptModal={confirmTogglePromptModal} setTogglePromptModal={setConfirmTogglePromptModal} scrollable={false} 
                        productPlan={planRecord.productPlanName} corpName={planRecord.companyName} id={planRecord.id}
                        />
                        <SubmitActionModal title="Resubmitting Details..." icon="upload" size="lg" isCompleted={false}
                    togglePromptModal={submitTogglePromptModal} setTogglePromptModal={setSubmitTogglePromptModal} scrollable={false} 
                    productPlan={planRecord.productPlanName} corpName={planRecord.companyName} id={planRecord.id}/>
                        </>
                        :
                        <>
                        <ClientPromptModal title="Submitting Details..." icon="paper-plane" size="lg" staticModal={submitTogglePromptModal} setStaticModal={setSubmitTogglePromptModal}
                        togglePromptModal={confirmTogglePromptModal} setTogglePromptModal={setConfirmTogglePromptModal} scrollable={false} 
                        productPlan={planRecord.productPlanName} corpName={planRecord.companyName} id={planRecord.id}
                        />
                        <SubmitActionModal title="Submitting Details..." icon="paper-plane" size="lg" isCompleted={false}
                    togglePromptModal={submitTogglePromptModal} setTogglePromptModal={setSubmitTogglePromptModal} scrollable={false} 
                    productPlan={planRecord.productPlanName} corpName={planRecord.companyName} id={planRecord.id}/> 
                        
                        </>}
                
        <div className="client-form-fab fab-btn" type="submit" onClick={() => {saveOrSubmitDetails();}}> ✔ </div>
        </form>
        </MDBRow>
       
    </>      
        )}  
    </Formik>

    </>
    }
    </>
    )
}
export default PlannerClientInterfaceSBX;