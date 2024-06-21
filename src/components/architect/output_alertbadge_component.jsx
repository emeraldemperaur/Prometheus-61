import { MDBCol, MDBRow } from 'mdb-react-ui-kit';
import '../architect/architect_core_styles.css'
import { useEffect, useState } from 'react';


const AlertBadgeOutput = (props) => {
    const [hasAlert, setHasAlert] = useState(props.hasAlert);
    const [hasInfo, setHasInfo] = useState(false);
    const [hasHint, setHasHint] = useState(false);
    const [hasWarn, setHasWarn] = useState(false);


    useEffect(() => {
        setHasInfo(props.info);
        setHasHint(props.hint);
        setHasWarn(props.warn);
        }, [props.hasAlert, hasInfo, hasHint, hasWarn]);

    return(
    <>
     {props.hasAlert ?
            <>
            <MDBRow className='core-overview-alert-box'>
                <MDBCol size={3}>
                    &nbsp;
                </MDBCol>
                <MDBCol size={3}>
                    &nbsp;
                </MDBCol>
                <MDBCol size={6}>
                <a className='core-overview-highlights'>HIGHLIGHTS</a>
                {hasInfo ?
                    <><a href={`#${props.sectionId}Alerts`}><i className="core-overview-alert-info core-overview-alert-icon fa-solid fa-info"></i></a></>
                :null}
                {hasHint ?
                    <><a href={`#${props.sectionId}Alerts`}><i className="core-overview-alert-hint core-overview-alert-icon fa-regular fa-lightbulb"></i></a></>
                :null}
                {hasWarn ?
                    <><a href={`#${props.sectionId}Alerts`}><i className="core-overview-alert-warn core-overview-alert-icon fa-solid fa-radiation"></i></a></>
                :null}
                </MDBCol>
            </MDBRow>
            </>
            :null}
    </>
    )


}
export default AlertBadgeOutput;