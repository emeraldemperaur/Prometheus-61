import '../dashboard/dashboard_styles.css'
import { useState } from 'react';
import { useEffect } from 'react';
import NavigatorMenu from '../navigator/navigator_component';
import TitleTile from '../artificer/title_tile_component';

const DashboardInterface = () => {

    document.body.style.backgroundColor = "#ffffff"
    return(
    <>
    <NavigatorMenu/>
    <TitleTile title="Dashboard"/>
    </>

    )


}
export default DashboardInterface;