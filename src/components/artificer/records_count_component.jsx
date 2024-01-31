import '../artificer/records_count_styles.css'


const RecordsCount = (props) => {

    return(
    <>
    <div>
    <div className="form-records-box">
        <a id="records-found-txt" className="form-records-found">{props.recordtitle}</a><a id="records-found-int" className="form-records-found-count">&nbsp;{props.recordcount}</a>
    </div>
    </div>
    </>

    )


}
export default RecordsCount;