import '../navigator/navigator_styles.css'
import '../navigator/client_navigator_styles.css'
import { menuItems } from '../../utils/nav_data';
import SubNavigatorMenu from './subnavigator_component';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';

const ClientNavigatorMenu = (props) => {
    let [index, setIndex] = useState(0);
    
    useEffect(()=>{
        //alert("Menu Effect Triggered")
        return ()=>{
            console.log('Element Dismounted')
        }

    }, [index])

    return(
        <>
        <header style={{position: `${props.absolute}`, zIndex: 6}}>
            <section>
                <div><><Link id="logo">PROMETHEUS</Link></></div>
                
                <div className='client-enquiry-logo'>
                {props.platformName == "Global - All Platforms" ?
                <><h5 className='client-enquiry-platform'><a style={{color:'#000000'}} href='https://www.morganstanley.com/' target='_blank'>Morgan Stanley</a></h5></>
                :null}
                {props.platformName == "Shareworks" ?
                <><h5 className='client-enquiry-platform'><a style={{color:'#000000'}} href='https://www.morganstanley.com/atwork/shareworks' target='_blank'>Morgan Stanley at Work</a></h5></>
                :null}
                {props.platformName == "E-Trade" ?
                <><h5 className='client-enquiry-platform'><a style={{color:'#000000'}} href='https://us.etrade.com/home' target='_blank'>E-Trade</a></h5></>
                :null}
                {props.platformName == "UBS Group" ?
                <><h5 className='client-enquiry-platform'><a style={{color:'#000000'}} href='https://www.ubs.com/global/en.html' target='_blank'>UBS Group</a></h5></>
                :null}
                {props.platformName == "Stockvantage" ?
                <><h5 className='client-enquiry-platform'><a style={{color:'#000000'}} href='https://www.morganstanley.com/atwork/en-ca' target='_blank'>Stockvantage</a></h5></>
                :null}
                <h6 className='client-enquiry-text'>PLAN ENQUIRY</h6>
                </div>
            </section>
            
        </header>
        </>
             )
}
export default ClientNavigatorMenu;