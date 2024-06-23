import { MDBCol, MDBRow } from 'mdb-react-ui-kit';
import '../architect/architect_core_styles.css'
import { Alert } from 'react-bootstrap';
import { useEffect, useState } from 'react';


const AlertOutput = ({infoNote}) => {
    let outputInfoNote = infoNote.split("|", 3)
    const [outputObject, setOutputObject] = useState(infoNote.split("|", 3))
    const [alertType, setAlertType] = useState("")
    const [alertIcon, setAlertIcon] = useState("fa-regular fa-lightbulb")
    
    const setType = (inputInfoNote) =>{
        switch(inputInfoNote[0].trim().toLowerCase()) {
            case "w":
                console.log(`Running Output Type: W`)
                setAlertType("danger")
                setAlertIcon("fa-solid fa-radiation");
                 break;
            case "h":
                console.log(`Running Output Type: H`)
                setAlertType("warning")
                setAlertIcon("fa-regular fa-lightbulb");
                break;
            case "i":
                console.log(`Running Output Type: I`)
                setAlertType("primary");
                setAlertIcon("fa-solid fa-info");
                break;
        }
    }

    useEffect(() => {
        console.log(`Running Output Note:   ${outputObject}`)
        console.log(`Running Output Note 1:   ${outputObject[0]}`)
        console.log(`Running Output Note 2:   ${outputObject[1]}`)
        console.log(`Running Output Note 3:   ${outputObject[2]}`)

        setType(outputObject)
        
        }, [outputObject, alertType]);
    return(
    <>
     <MDBCol size={12}>
     <Alert className='core-overview-alert' variant={alertType}><i className={alertIcon}></i>&nbsp;&nbsp;
     {outputObject[1] ?
                    <>{outputObject[1].trim()}</>
                    :null}
    {outputObject[2] ?
                    <>{outputObject[2].trim().length > 1 ?
                        <Alert.Link href={outputObject[2]} target='_blank'>&nbsp;&nbsp;More Info</Alert.Link>
                        :null}</>
                    :null}
     
     </Alert>
    </MDBCol>
    </>
    )


}
export default AlertOutput;