import { hubGreeting } from '../../utils/chronos';
import '../artificer/title_tile_styles.css'


const HubTile = (props) => {

    return(
    <>
     <div className="title-box container-fluid">
        <div className="row align-items-start">
            <div style={{display:'inline-block'}} className="col align-self-start">
                <div class="typed-out">{hubGreeting(props.userName)}</div>
            </div>           
            <div className="col align-self-end">
                <p className="page-title">{props.title}</p>
            </div>
        </div>
        <hr className="solid"></hr>
     </div>
    </>

    )


}
export default HubTile;