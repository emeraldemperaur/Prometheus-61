import NavigatorMenu from '../navigator/navigator_component';
import TitleTile from '../artificer/title_tile_component';

const TerminalInterface = () => {
    document.body.style.backgroundColor = "#ffffff"
    return(
    <>
    <NavigatorMenu/>
    <TitleTile title="Terminal Console"/>
    </>

    )


}
export default TerminalInterface;