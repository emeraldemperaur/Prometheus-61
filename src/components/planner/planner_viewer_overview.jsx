import { MDBCard, MDBCol, MDBRow } from "mdb-react-ui-kit";
import '../planner/planner_styles.css'
import TextInput from "../architect/text_input_component";
import PlannerViewerFooter from "../artificer/planner_viewer_footer";
import SectionTitle from "../architect/section_title_component";

const PlannerViewerOverview = (props) => {
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
    <MDBRow className="planner-viewer-formbox">
        <MDBCol size={12}>
            <MDBCard>
            <MDBRow>
                <SectionTitle/>
            </MDBRow>
            </MDBCard>
        </MDBCol>
        <PlannerViewerFooter platformName={props.platformName}/>
    </MDBRow>
    </>

    )


}
export default PlannerViewerOverview;