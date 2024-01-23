import '../navigator/navigator_styles.css'
import { menuItems } from '../../utils/nav_data';
import SubNavigatorMenu from './subnavigator_component';
import { useState } from 'react';
import { useEffect } from 'react';

const NavigatorMenu = () => {
    let [index, setIndex] = useState(0);
    
    useEffect(()=>{
        //alert("Menu Effect Triggered")
        return ()=>{
            console.log('Element Dismounted')
        }

    }, [index])

    return(
        <>
        <header>
            <section>
                <div><a href="/" id="logo">PROMETHEUS</a></div>
                
                <div>
                <nav>
                    <ul>
                        { menuItems.map( menuItem => (
                        <li key={menuItem.id}><a href={menuItem.link}><i className={menuItem.icon}></i>{menuItem.title}</a></li>
                       ))}
                    </ul>
                    <SubNavigatorMenu/>
                </nav>
                
                </div>
            </section>
        </header>
        </>
             )
}
export default NavigatorMenu;