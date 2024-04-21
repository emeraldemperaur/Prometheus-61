import { useState } from "react";
import Ostiary from "../ostiary/ostiary_component";
import MSLogo from '../planner/assets/msaw-master-logo-white.png';
import '../ostiary/ostiary_style.css'


const AuthOstiary = () => {
    document.body.style.backgroundColor = "#002C51"
    document.body.style.fontFamily = "Montserrat"
    return(
        <div style={{height:'100vh', backgroundColor: '#002C51'}}>
            <h2 className="ostiary-logo">Prometheus</h2>
            <Ostiary/>
            <h3 className="ostiary-slogan">Big things have small beginnings...</h3>
            <div className="firm-logo">
            <a href="https://www.morganstanley.com/" target="_blank" rel="noreferrer">
            <img className="firm-logo" width="250px" height="100px"  alt='MS Logo'
            src={MSLogo}/></a>
            </div>
        </div>
    )
}
export default AuthOstiary;

