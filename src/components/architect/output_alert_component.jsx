import { MDBCol, MDBRow } from 'mdb-react-ui-kit';
import '../architect/architect_core_styles.css'
import { Alert } from 'react-bootstrap';
import { useEffect, useState } from 'react';


const AlertOutput = (props) => {
    let outputInfoNote = props.infoNote.split("|", 3)
    const [alertType, setAlertType] = useState("")
    const [alertIcon, setAlertIcon] = useState("fa-regular fa-lightbulb")
    
    const setType = (inputInfoNote) =>{
        switch(inputInfoNote[0].trim().toLowerCase()) {
            case "w" || "warning":
                setAlertType("danger")
                setAlertIcon("fa-solid fa-radiation");
                 break;
            case "h" || "hint":
                setAlertType("warning")
                setAlertIcon("fa-regular fa-lightbulb");
                break;
            case "i" || "info":
                setAlertType("primary");
                setAlertIcon("fa-solid fa-info");
                break;
        }
    }

    useEffect(() => {
        console.log(`Output Note:   ${outputInfoNote}`)
        console.log(`Output Note 1:   ${outputInfoNote[0]}`)
        console.log(`Output Note 2:   ${outputInfoNote[1]}`)
        console.log(`Output Note 3:   ${outputInfoNote[2]}`)

        setType(outputInfoNote)
        
        }, [alertType, props.infoNote]);
    return(
    <>
    <MDBRow>
     <MDBCol size={12}>
     <Alert className='core-overview-alert' key={props.infoId} variant={alertType}><i className={alertIcon}></i>&nbsp;&nbsp;
     {outputInfoNote[1].trim()}<Alert.Link href={outputInfoNote[2]} target='_blank'>&nbsp;&nbsp;More Info</Alert.Link>
     </Alert>
    </MDBCol>
    </MDBRow>
    </>
    )


}
export default AlertOutput;