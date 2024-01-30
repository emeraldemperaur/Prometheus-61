import '../artificer/title_tile_styles.css'


const TitleTile = (props) => {

    return(
    <>
     <div className="title-box container-fluid">
        <div className="row align-items-start">
            <div className="col align-self-end">
                <p className="page-title">{props.title}</p>
            </div>
        </div>
        <hr className="solid"></hr>
     </div>
    </>

    )


}
export default TitleTile;