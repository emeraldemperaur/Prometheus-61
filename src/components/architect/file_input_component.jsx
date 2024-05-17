import '../architect/architect_core_styles.css'
import {MDBCol, MDBFile, MDBTooltip } from 'mdb-react-ui-kit';
import { useFormikContext } from 'formik';



const FileInput = (props) => {
    const {setFieldValue} = useFormikContext();
   
    return(
        <>
        {props.newRow ?
                <><div className='w-100'></div></>
                :null}
         <MDBCol size={props.width}>
         <>
                    <MDBFile id={`${props.alias}FormInput`} name={`${props.alias}`} multiple={props.multipleFiles} accept={props.fileTypes}
                    readOnly={props.readOnly} onChange={(event) => {
                        setFieldValue(`${props.alias}`, event.currentTarget.files[0]);
                      }} 
                    disabled={props.disabled} label={false} aria-describedby={`${props.alias}InputLabel`}/>
         </>
                    <div id={`${props.alias}InputLabel`} className='form-text core-input-label'>
                        <p className='core-input-label-text'>{props.inputLabel}  
                        {props.isHinted ?
                        <>
                        <MDBTooltip tag='a' wrapperProps={{ href: props.hintLink, target:'_blank' }} 
                        title={props.hintText} placement='bottom'>
                        &nbsp;<i className="fa-regular fa-circle-question core-input-icon"></i>
                        </MDBTooltip>
                        <><br/><a className='core-input-file-name'>{props.value.name}</a></>
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