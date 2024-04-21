import '../navigator/navigator_styles.css'
import { menuItems } from '../../utils/nav_data';
import SubNavigatorMenu from './subnavigator_component';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';

const NavigatorMenu = (props) => {
    let [index, setIndex] = useState(0);
    
    useEffect(()=>{
        //alert("Menu Effect Triggered")
        return ()=>{
            console.log('Element Dismounted')
        }

    }, [index])

    return(
        <>
        <header style={{position: `${props.absolute}`}}>
            <section>
                <div><><Link to="/" id="logo">PROMETHEUS</Link></></div>
                
                <div>
                <nav>
                    <ul>
                        { menuItems.map( menuItem => (
                        <li key={menuItem.id}><NavLink to={menuItem.link}><i className={menuItem.icon}></i>{menuItem.title}</NavLink></li>
                       ))}
                    </ul>
                    <SubNavigatorMenu absolute={props.absolute} />
                </nav>
                
                </div>
            </section>
        </header>
        </>
             )
}
export default NavigatorMenu;