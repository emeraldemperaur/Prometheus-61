import TitleTile from '../artificer/title_tile_component';
import NavigatorMenu from '../navigator/navigator_component';
import '../rolodex/rolodex_styles.css'


const RolodexInterface = () => {
    document.body.style.backgroundColor = "#ffffff"
    return(
    <>
    
    <NavigatorMenu/>
    <TitleTile title="Manage Company Profiles"/>
    <h1>Rolodex Interface</h1>
    
    </>

    )


}
export default RolodexInterface;