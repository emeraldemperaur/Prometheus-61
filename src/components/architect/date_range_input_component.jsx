import { MDBCol, MDBTooltip, MDBInput } from 'mdb-react-ui-kit';
import { DateRange } from 'react-date-range'
import { format } from 'date-fns'
import { useState, useEffect, useRef } from 'react'
import '../architect/architect_core_styles.css'
import '../architect/date_range_input_styles.css'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'


const DateRangeInput = (props) => {
    const [state, setState] = useState([{ startDate: new Date(), endDate: new Date(), key: 'selection',},])
    const [formatDate, setFormatDate] = useState({ startDate: new Date(), endDate: new Date(),})
    useEffect(() => {
        setFormatDate((prev) => { return {...prev, startDate: format(state[0].startDate, 'MMMM dd, yyyy'), endDate: format(state[0].endDate, 'MMMM dd, yyyy'),}
    })}, [state])
    const calendarRef = useRef()
    useEffect(() => {
    const handler = (e) => { if (!calendarRef?.current.contains(e.target)) {setInputOpen(false)}}
    document.addEventListener('mousedown', handler)
    return () => { document.removeEventListener('mousedown', handler)}})
    const [inputOpen, setInputOpen] = useState(false)


    return(
    <>
    {props.newRow ?
                <><div className='w-100'></div></>
                :null}
         <MDBCol size={props.width}>
         <>
         <div className='dr-input-box'>
            <div className='dr-input-container'>
                <div className='element-container' ref={calendarRef}>
                <div className='single-calendar-input'>
                    <MDBInput id={`${props.alias}FormInput`} multiple={props.multipleFiles} accept={props.fileTypes}
                    readOnly={false} disabled={props.disabled} label={false} aria-describedby={`${props.alias}InputLabel`}
                    onClick={() => {setInputOpen(!inputOpen)}} value={`${formatDate.startDate} - ${formatDate.endDate}`}/>
                    <div style={{marginLeft: '-33px'}} className='dr-input-icon'>
                        <i className="fa-regular fa-calendar-days"></i>
                    </div>
                </div>
                <div className={`dr-input-dropdown ${inputOpen ? 'active' : 'inactive'}`}>
                    <DateRange className='dr-input-calendarStyle' onChange={(item) => setState([item.selection])} ranges={state}
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