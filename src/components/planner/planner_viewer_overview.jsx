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



const PlannerViewerOverview = (props) => {
    return(
    <>
    <MDBRow>
        <MDBCol size={12}>
            <div className="lock-box">
            <PlanLock/>
            </div>
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
                <SectionTitle sectionIcon={'fa-solid fa-dumpster-fire'} sectionTitle={'Alpha Section'}/>
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