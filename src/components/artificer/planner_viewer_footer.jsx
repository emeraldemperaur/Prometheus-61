import { MDBCol, MDBRow } from 'mdb-react-ui-kit'
import '../artificer/planner_footer_styles.css'
import '../planner/planner_styles.css'
import MSLogo from '../planner/assets/MorganStanleyLogo.png';
import ShareworksLogo from '../planner/assets/MorganStanleyAtWorkLogo.png';
import ETradeLogo from '../planner/assets/ETradeLogo.png';
import UBSGroupLogo from '../planner/assets/UBSLogo.png';


const PlannerViewerFooter = (props) => {

    return(
    <>
    <MDBRow>
        <MDBCol className='planner-footer-box'>
        {props.platformName == "Global - All Platforms" ?
            <><img className="planner-footer-img" src={MSLogo} alt="Global - All Platforms"/></>
            :null}
            {props.platformName == "Shareworks" ?
            <><img className="planner-footer-img planner-platform-img-sw" src={ShareworksLogo} alt="Shareworks"/></>
            :null}
            {props.platformName == "E-Trade" ?
            <><img className="planner-footer-img planner-platform-img-etrade" src={ETradeLogo} alt="E-Trade"/></>
            :null}
            {props.platformName == "UBS Group" ?
            <><img className="planner-footer-img planner-platform-img-ubs" src={UBSGroupLogo} alt="UBS Group"/></>
            :null}
            {props.platformName == "Stockvantage" ?
            <><img className="planner-footer-img planner-platform-img" src={MSLogo} alt="Stockvantage"/></>
            :null}
        </MDBCol>
    </MDBRow>
    </>

    )
}
export default PlannerViewerFooter;