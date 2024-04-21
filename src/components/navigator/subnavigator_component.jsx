import '../navigator/subnavigator_styles.css'
import { subMenuItems } from '../../utils/nav_data';
import { Link, NavLink } from 'react-router-dom';


const SubNavigatorMenu = (props) => {
    
    
    const onMenuToggleHandler = () => {
        
        
      }

    return(
        <div>
         <div style={{position: `${props.absolute}`}} className="navigation">
            <div className="user-box">
                <div className="image-box">
                    <img src="https://mekaegwim.ca/wp-content/uploads/2024/03/20221225_125955-scaled.jpg" alt="avatar"/>
                </div>&nbsp;
                <p className="username">Meka</p>
            </div>
            <div className="menu-toggle" onClick={() => {
                console.log('Profile Menu Toggled')
                //let menuToggle = document.querySelector('.menu-toggle');
                let navigation = document.querySelector('.navigation');
                navigation.classList.toggle('active');
        
            }}>   
            </div>
            <ul className="menu">
                { subMenuItems.map( subMenuItem => (
                        <li key={subMenuItem.id}><NavLink to={subMenuItem.link}>
                            <i style={{color: "#ffffff"}} className={subMenuItem.icon}></i>
                            {subMenuItem.title}</NavLink>
                            </li>
                       ))}
            </ul>
            </div>
        </div>
    )

}
export default SubNavigatorMenu;