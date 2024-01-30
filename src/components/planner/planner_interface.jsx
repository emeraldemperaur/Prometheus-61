import NavigatorMenu from '../navigator/navigator_component';
import TitleTile from '../artificer/title_tile_component';

const PlannerInterface = () => {
    document.body.style.backgroundColor = "#ffffff"
    return(
    <>
    <NavigatorMenu/>
    <TitleTile title="Manage Plan Forms"/>
    <h1>Planner Interface</h1>
    </>

    )


}
export default PlannerInterface;