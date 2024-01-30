import NavigatorMenu from '../navigator/navigator_component';
import TitleTile from '../artificer/title_tile_component';

const ProfilerInterface = () => {
    document.body.style.backgroundColor = "#ffffff"
    return(
    <>
    <NavigatorMenu/>
    <TitleTile title="Account Profile"/>
    <h1>Profiler Interface</h1>
    </>

    )


}
export default ProfilerInterface;