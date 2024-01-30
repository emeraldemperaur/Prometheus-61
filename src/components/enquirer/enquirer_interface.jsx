import NavigatorMenu from '../navigator/navigator_component';
import TitleTile from '../artificer/title_tile_component';

const EnquirerInterface = () => {
    document.body.style.backgroundColor = "#ffffff"
    return(
    <>
    <NavigatorMenu/>
    <TitleTile title="Manage Query Models"/>
    <h1>Enquirer Interface</h1>
    </>

    )


}
export default EnquirerInterface;