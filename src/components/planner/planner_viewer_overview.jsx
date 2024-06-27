import { MDBCard, MDBCol, MDBRow } from "mdb-react-ui-kit";
import '../planner/planner_styles.css'
import PlannerViewerFooter from "../artificer/planner_viewer_footer";
import SectionTitle from "../architect/section_title_component";
import NoDataBadge from "../artificer/no_data_badge";
import PlanLock from "../artificer/planner_lock_component";
import MSLogo from '../planner/assets/MorganStanleyLogo.png';
import ShareworksLogo from '../planner/assets/MorganStanleyAtWorkLogo.png';
import ETradeLogo from '../planner/assets/ETradeLogo.png';
import UBSGroupLogo from '../planner/assets/UBSLogo.png';
import TextOutput from "../architect/text_output_component";
import NumberOutput from "../architect/number_output_component";
import DateOutput from "../architect/date_output_component";
import DateTimeOutput from "../architect/datetime_output_component";
import TimeOutput from "../architect/time_output_component";
import TextAreaInput from "../architect/textarea_input_component";
import TextAreaOutput from "../architect/textarea_output_component";
import NumberRangeOutput from "../architect/number_range_output_component";
import TextWeekOutput from "../architect/textweek_output_component";
import TextMonthOutput from "../architect/textmonth_output_component";
import SelectOutput from "../architect/select_output_component";
import MultiselectOutput from "../architect/multiselect_output_component";
import CheckboxOutput from "../architect/checkbox_output_component";
import RadioOutput from "../architect/radio_output_component";
import ToggleOutput from "../architect/toggle_output_component";
import MultiFileOutput from "../architect/multifile_output_component";
import FileOutput from "../architect/file_output_component";
import DateRangeOutput from "../architect/date_range_output_component";
import AlertOutput from "../architect/output_alert_component";
import AlertBadgeOutput from "../architect/output_alertbadge_component";
import VectorPrimus from "../architect/vector_primus_core";



const PlannerViewerOverview = (props) => {
    const lockClientInput = () =>{
        if(props.isLocked){
            console.log(`>>> Unlocking Query`)
        } 
        if(!props.isLocked){
            console.log(`>>> Locking Query`)
        }
    }

    return(
    <>
    <MDBRow>
        <MDBCol size={12}>
            {props.status > 1 ?
            <><div className="lock-box"><PlanLock onClickFunc={props.lockOnClick} isLocked={props.isLocked}/></div></>
            :null}
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
    <MDBRow className="planner-viewer-formbox">
        <MDBCol size={12}>
            <MDBCard>
            {props.status == 1 ?
            <><MDBRow><NoDataBadge companyName={props.companyName}/></MDBRow></>
            :
            <>
            <MDBRow>
                <VectorPrimus jsonModel={props.jsonModel}/>
            </MDBRow>
            </>}
            </MDBCard>
        </MDBCol>
        <PlannerViewerFooter platformName={props.platformName}/>
    </MDBRow>
    </>

    )


}
export default PlannerViewerOverview;