import { useState } from "react";
import Ostiary from "../ostiary/ostiary_component";
import '../ostiary/ostiary_style.css'


const AuthOstiary = () => {
    document.body.style.backgroundColor = "#002C51"

    return(
        <div>
            <h2 className="ostiary-logo">Prometheus</h2>
            <Ostiary/>
            <h3 className="ostiary-slogan">Big things have small beginnings...</h3>
            <div className="firm-logo">
            <a href="https://www.morganstanley.com/" target="_blank" rel="noreferrer">
            <img className="firm-logo" width="250px" height="100px"  alt='MS Logo'
            src="./msaw-master-logo-white.png"/></a>
            </div>
        </div>
    )
}
export default AuthOstiary;

