import '../navigator/subnavigator_styles.css'
import { subMenuItems } from '../../utils/nav_data';
import { Link, NavLink } from 'react-router-dom';


const SubNavigatorMenu = () => {
    
    
    const onMenuToggleHandler = () => {
        
        
      }

    return(
        <div>
         <div className="navigation">
            <div className="user-box">
                <div className="image-box">
                    <img src="https://media.licdn.com/dms/image/D5603AQEl5KtuOMO8Kw/profile-displayphoto-shrink_800_800/0/1669664147445?e=1710979200&v=beta&t=5eT37IEmWMoGFbmC-UDdXluP_i-xsw4xpFkGloDfuXw" alt="avatar"/>
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