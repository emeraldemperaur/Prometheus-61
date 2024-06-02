import { MDBCol, MDBRow, MDBCard, MDBAccordion, MDBAccordionItem, MDBCollapse } from "mdb-react-ui-kit";
import '../planner/planner_styles.css'
import '../artificer/neo_toggle_styles.css'
import MSLogo from '../planner/assets/MorganStanleyLogo.png';
import ShareworksLogo from '../planner/assets/MorganStanleyAtWorkLogo.png';
import ETradeLogo from '../planner/assets/ETradeLogo.png';
import UBSGroupLogo from '../planner/assets/UBSLogo.png';
import PlannerViewerFooter from "../artificer/planner_viewer_footer";
import { useState } from "react";
import { Formik } from 'formik';
import VectorSigma from '../architect/vector_sigma_core';
import { tr } from "date-fns/locale";

const PlannerViewerInput = (props) => {
    const [stackedMode, setStackedMode] = useState(false);
    const [stackedActive, setStackedActive] = useState(0);
    const toggleStackView = () => {
        if(document.getElementById("stackedMode").checked){setStackedMode(true);console.log("Stacked Mode - ON");}
        if(!document.getElementById("stackedMode").checked){setStackedMode(false);console.log("Stacked Mode - OFF")}  
        //document.getElementById("stackedMode").focus();
    }
    const formikvalues = (jsonModel) =>{
        let initialValues = {};
        if(jsonModel){
        let vectorJSON = JSON.parse(jsonModel);
        if(vectorJSON.model){
        vectorJSON.model.map( vectorElement => {
            vectorElement.queries.map( inputElement => {
                initialValues[inputElement.inputAlias] = inputElement.queryResponse || "";
            })
        })
        }}
        return initialValues;
    }
    

    return(
    <>
     <Formik
    
    initialValues={
        formikvalues(props.planRecord.jsonQueryDefinition)
    }
   
    onSubmit={(values) => {
        console.log(`FormData: ${values}`)
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
            
            <form onSubmit={handleSubmit}>

            
                <MDBRow>
                <MDBCol size={12}>
                    {props.platformName == "Global - All Platforms" ?
                    <><img className="planner-platform-img" src={MSLogo} alt="Global - All Platforms"/></>
                    :null}
                    {props.platformName == "Shareworks" ?
                    <><img className="planner-platform-img-sw" src={ShareworksLogo} alt="Shareworks"/></>
                    :null}
                    {props.platformName == "E-Trade" ?
                    <><img className="planner-platform-img-etrade" src={ETradeLogo} alt="E-Trade"/></>
                    :null}
                    {props.platformName == "UBS Group" ?
                    <><img className="planner-platform-img-ubs" src={UBSGroupLogo} alt="UBS Group"/></>
                    :null}
                    {props.platformName == "Stockvantage" ?
                    <><img className="planner-platform-img" src={MSLogo} alt="Stockvantage"/></>
                    :null}
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
           <VectorSigma jsonModel={props.planRecord.jsonQueryDefinition} stackedMode={stackedMode} handleChange={handleChange}
           values={values}
            handleBlur={handleBlur} touched={touched} errors={errors} clientUI={false}/>
            </MDBCard>
                    </MDBCol>
                    <PlannerViewerFooter style={{marginBottom: '6px'}} platformName={props.planRecord.enquiryPlatformName}/>
                </MDBRow>


          
                
        <div className="client-form-fab fab-btn" type="submit" onClick={() => {saveOrSubmitDetails();}}> ✔ </div>
        </form>
        </MDBRow>
       
    </>      
        )}  
    </Formik>

  </>
    )


}
export default PlannerViewerInput;