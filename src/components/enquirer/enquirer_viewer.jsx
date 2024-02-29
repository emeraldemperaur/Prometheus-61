import { MDBBadge, MDBBtn, MDBModal, MDBModalDialog, MDBModalContent, MDBModalHeader, MDBModalTitle, MDBModalBody, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import { useState, useEffect } from 'react';
import '../rolodex/rolodex_styles.css'
import { toast } from 'react-toastify';


const EnquirerViewer = (props) => {
    const copyContent = async (queryTitle) => {
                try {
                  navigator.clipboard.writeText(props.jsonQueryDefinition);
                  toast.info(queryTitle + ' copied to clipboard!',{
                  position: "top-right",
                  autoClose: 1000,
                  closeOnClick: true
               })
              console.log(queryTitle + ' copied to clipboard');
                }catch (err) {
                      console.error('Failed to copy to clipboard!', err);
                }  
          }
    

    return(
    <>
    <MDBRow>
      <MDBCol size={4}>
        <>
        <p className='enquirer-viewer-heading'>Market Region</p>
        <p className='enquirer-viewer-region'>{props.regionName}</p>
        <p className='enquirer-viewer-mkt'>{props.exchangeMarket}</p>
        </>
      </MDBCol>
      <MDBCol size={4}>
      <>
        <p className='enquirer-viewer-heading'>Platform</p>
        {props.platformName == "Global - All Platforms" ?
                                        <><MDBBadge className='enquirer-badge enquirer-view-badge' color='dark' pill>Global - All Platforms</MDBBadge></>
                                        :null}
                                        {props.platformName == "Shareworks" ?
                                        <><MDBBadge className='enquirer-badge-sw enquirer-view-badge' color='dark' pill>Shareworks</MDBBadge></>
                                        :null}
                                        {props.platformName == "E-Trade" ?
                                        <><MDBBadge className='enquirer-badge-etrade enquirer-view-badge' color='dark' pill>E-Trade</MDBBadge></>
                                        :null}
                                        {props.platformName == "UBS Group" ?
                                        <><MDBBadge className='enquirer-badge-ubs enquirer-view-badge' color='dark' pill>UBS Group</MDBBadge></>
                                        :null}
                                        {props.platformName == "Stockvantage" ?
                                        <><MDBBadge className='enquirer-badge-sv enquirer-view-badge' color='dark' pill>Stockvantage</MDBBadge></>
                                        :null}
        </>
      </MDBCol>
      <MDBCol size={4}>
      <>
        <p className='enquirer-viewer-heading'>Author</p>
        <p className='enquirer-viewer-author'>{props.enquiryAuthor}</p>
        <p className='enquirer-viewer-author-time'>{props.enquiryDate}</p>
        {props.enquiryModified ? 
        <>
        <p className='enquirer-viewer-heading'>Modified By</p>
        <p className='enquirer-viewer-author'>{props.enquiryEditor}</p>
        <p className='enquirer-viewer-author-time'>{props.enquiryEditDate}</p>
        </> : <></>}
        </>
      </MDBCol>
    </MDBRow>
    <MDBRow>
        <MDBCol size={12}>
            <>
            <p className='enquirer-viewer-heading'>JSON Query Definition</p>
            <div className="input-group">
                    <div onClick={() => copyContent(props.modelName)} className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon">
                        <i className="fa-solid fa-copy prefix"></i>
                        </span>
                    </div>
                    <textarea disabled className="enquirer-query-box-view" id="formQueryModelJSONView" value={props.jsonQueryDefinition}>
                    </textarea>
                </div>
            </>
        </MDBCol>
    </MDBRow>
    </>
    )
}
export default EnquirerViewer;