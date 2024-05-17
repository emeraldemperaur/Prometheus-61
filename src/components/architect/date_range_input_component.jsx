import { MDBCol, MDBTooltip, MDBInput } from 'mdb-react-ui-kit';
import { DateRange } from 'react-date-range'
import { format } from 'date-fns'
import { useState, useEffect, useRef } from 'react'
import '../architect/architect_core_styles.css'
import '../architect/date_range_input_styles.css'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import { useField, useFormikContext } from 'formik';


const DateRangeInput = (props) => {
    const {setFieldValue} = useFormikContext();
    const initDate = new Date();
    const [state, setState] = useState([{ startDate: initDate, endDate: initDate, key: 'selection',},])
    const [inputValue, setInputValue] = useState("")
    const [formatDate, setFormatDate] = useState({ startDate: initDate, endDate: initDate,})
    useEffect(() => {
        setFormatDate((prev) => { 
        return {...prev, startDate: format(state[0].startDate, 'MMMM dd, yyyy'), endDate: format(state[0].endDate, 'MMMM dd, yyyy'),}

    })}, [state, props.alias]);
    const calendarRef = useRef();
    useEffect(() => {
    const handler = (e) => { if (!calendarRef?.current.contains(e.target)) {
        setInputOpen(false);
        fieldSet();
    }}
    document.addEventListener('mousedown', handler)
    return () => { 
        document.removeEventListener('mousedown', handler);
    }}, [formatDate])
    const [inputOpen, setInputOpen] = useState(false)
    const fieldSet = ()=>{
        setState([{ startDate: state[0].startDate, endDate: state[0].endDate, key: 'selection',},])
        setFormatDate({ startDate: formatDate.startDate, endDate: formatDate.endDate,});
        setInputValue(`${formatDate.startDate} - ${formatDate.endDate}`);
        setFieldValue(`${props.alias}`,`${formatDate.startDate} - ${formatDate.endDate}`);
    }


    return(
    <>
  
    {props.newRow ?
                <><div className='w-100'></div></>
                :null}
         <MDBCol key={props.alias} size={props.width}>
         <>
         <div className='dr-input-box'>
            <div className='dr-input-container'>
                <div className='element-container' ref={calendarRef}>
                <div className='single-calendar-input'>
                    <MDBInput key={props.alias} id={`${props.alias}FormInput`} name={`${props.alias}`} multiple={props.multipleFiles} accept={props.fileTypes}
                    readOnly={false} disabled={props.disabled} label={false} aria-describedby={`${props.alias}InputLabel`} 
                    placeholder={`${formatDate.startDate} - ${formatDate.endDate}`}
                    onClick={() => {setInputOpen(!inputOpen); fieldSet();}} 
                    value={props.value} onChange={()=>{props.onChange; fieldSet();}}/>
                    <div style={{marginLeft: '-33px'}} className='dr-input-icon'>
                        <i className="fa-regular fa-calendar-days"></i>
                    </div>
                </div>
                <div className={`dr-input-dropdown ${inputOpen ? 'active' : 'inactive'}`}>
                    
                    <DateRange key={props.alias} className='dr-input-calendarStyle' onChange={(item) => {setState([item.selection])}} ranges={state}
                    showSelectionPreview={true} editableDateInputs={true} showMonthAndYearPickers={true} showDateDisplay={true} 
                    rangeColors={['#216cb5', '#216cb5', '#000000']} direction='horizontal' />
                    </div>      
                </div>       
            </div>
        </div>
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
export default DateRangeInput;