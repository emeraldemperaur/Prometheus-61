import '../architect/architect_core_styles.css'
import {MDBCol, MDBFile, MDBTooltip } from 'mdb-react-ui-kit';



const FileInput = (props) => {

    return(
        <>
        {props.newRow ?
                <><div className='w-100'></div></>
                :null}
         <MDBCol size={props.width}>
         <>
                    <MDBFile id={`${props.alias}FormInput`} multiple={props.multipleFiles} accept={props.fileTypes}
                    readOnly={props.readOnly} disabled={props.disabled} label={false} aria-describedby={`${props.alias}InputLabel`}/>
         </>
                    <div id={`${props.alias}InputLabel`} className='form-text core-input-label'>
                        <p className='core-input-label-text'>{props.inputLabel}  
                        {props.isHinted ?
                        <>
                        <MDBTooltip tag='a' wrapperProps={{ href: props.hintLink, target:'_blank' }} 
                        title={props.hintText} placement='bottom'>
                        &nbsp;<i className="fa-regular fa-circle-question core-input-icon"></i>
                        </MDBTooltip>
                        </>
                        :null}  
                        </p>
                        {props.errorText ?
                        <>
                        <p className='core-input-label-error'>{props.errorText}</p>
                        </>
                        : null}      
                    </div>
        </MDBCol>
        </>
    )
}
export default FileInput;