import '../dashboard/dashboard_styles.css'
import { useState } from 'react';
import { useEffect } from 'react';
import NavigatorMenu from '../navigator/navigator_component';
import TitleTile from '../artificer/title_tile_component';
import HubTile from '../artificer/hub_title_component';

const DashboardInterface = () => {

    document.body.style.backgroundColor = "#ffffff"
    document.body.style.fontFamily = "Montserrat"
    return(
    <>
    <NavigatorMenu/>
    <HubTile userName="Meka" title="Dashboard"/>
    </>

    )


}
export default DashboardInterface;