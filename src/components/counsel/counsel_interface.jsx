import NavigatorMenu from '../navigator/navigator_component';
import TitleTile from '../artificer/title_tile_component';
import CounselViewer from './counsel_viewer';
import counsellogo from '../counsel/infos-logo.png';
import counsellogo2 from '../counsel/infos-logo-two.png';
import counsellogo3 from '../counsel/infos-logo-three.png';
import { MDBCol, MDBRow, MDBContainer } from 'mdb-react-ui-kit';

const CounselInterface = () => {
    document.body.style.backgroundColor = "#ffffff"
    document.body.style.fontFamily = "Montserrat"
    return(
    <>
    <NavigatorMenu absolute={'absolute'}/>
    <TitleTile title="Documentation"/>
    <MDBContainer fluid className='counsel-box'>
    <MDBRow className='logo-box'>
        <MDBCol size={8}>
            <p className='version-text'>Prometheus v61.0.0</p>
        </MDBCol>
        <MDBCol size={4}>
        <><img className="counsel-logo" src={counsellogo} alt="Documentation"/></>
        </MDBCol>
    </MDBRow>
    <MDBRow>
      <CounselViewer/>
    </MDBRow>
    </MDBContainer>
   
    </>

    )


}
export default CounselInterface;