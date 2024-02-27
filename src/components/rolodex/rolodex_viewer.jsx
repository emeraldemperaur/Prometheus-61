import { MDBBadge, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import '../rolodex/rolodex_styles.css'

const RolodexViewer = (props) => {
    return(
    <>
    <MDBRow>
      <MDBCol size={4}>
      <img src='https://csncollision.com/wp-content/uploads/2019/10/placeholder-circle.png'alt='' style={{ width: '169px', height: '169px' }} className='rounded-circle'/>
      </MDBCol>
      <MDBCol size={4}>
        <>
        <p className='rolodex-viewer-heading'>Country of Incorporation</p>
        <p className='rolodex-viewer-country'>{props.countryName}</p>
        <p className='rolodex-viewer-region'>{props.region}</p>
        </>
      </MDBCol>
      <MDBCol size={4}>
      <>
        <p className='rolodex-viewer-heading'>Exchange Market</p>
        <p className='rolodex-viewer-exchange'>{props.primeExchange}</p>
        <p className='rolodex-viewer-heading'>Ticker Symbol</p>
        <p className='rolodex-viewer-ticker'>{props.primeSymbol}</p>
        </>
      </MDBCol>
    </MDBRow>
    <MDBRow>
      <MDBCol size={4}>
        <>
        <p className='rolodex-viewer-heading'>Legend Conditions</p>
        {props.legends ? <><MDBBadge className='rolodex-badge rolodex-view-badge' color='dark' pill>Yes</MDBBadge></>
         : <MDBBadge className='rolodex-badge rolodex-view-badge' color='dark' pill>Not Applicable</MDBBadge>}
        </>
      </MDBCol>
      <MDBCol size={4}>
        <>
        <p className='rolodex-viewer-heading'>Distributes Dividends</p>
        {props.dividends ? <><MDBBadge className='rolodex-badge rolodex-view-badge' color='dark' pill>{props.dividendsMethod}</MDBBadge>
        </> : <><MDBBadge className='rolodex-badge rolodex-view-badge' color='dark' pill>Not Applicable</MDBBadge></>}
        </>
      </MDBCol>
      <MDBCol size={4}>
      <p className='rolodex-viewer-heading'>Dual Listed</p>
      {props.dualListed ? 
        <>
        <p className='rolodex-viewer-exchange'>{props.dualExchange}</p>
        <p style={{marginTop: '-23px'}} className='rolodex-viewer-ticker'>{props.dualSymbol}</p>
        </>
        : <><MDBBadge className='rolodex-badge rolodex-view-badge' color='dark' pill>No</MDBBadge></>}
      </MDBCol>
    </MDBRow>
    <MDBRow>
      <MDBCol size={5}>
        <>
        <p style={{marginTop: '23px'}} className='rolodex-viewer-heading'>Primary Contact</p>
        <p className='rolodex-viewer-prime-contact'>{props.contactName}</p>
        <a href={'mailto:' + props.contactEmail} className='rolodex-viewer-prime-contact-info'>{props.contactEmail}</a>
        </>
      </MDBCol>
      <MDBCol size={7}>
        <>
        <p className='rolodex-viewer-corp-type'>{props.corpType}</p>
        </>
      </MDBCol>
    </MDBRow>
    </>

    )


}
export default RolodexViewer;