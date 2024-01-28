import '../dashboard/dashboard_styles.css'
import { useState } from 'react';
import { useEffect } from 'react';
import NavigatorMenu from '../navigator/navigator_component';

const DashboardInterface = () => {

    document.body.style.backgroundColor = "#ffffff"
    return(
    <>
    <NavigatorMenu/>
    <h1>Dashboard Interface</h1>
    </>

    )


}
export default DashboardInterface;