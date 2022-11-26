import React from "react";
import Navbar from "../NavBar/Navbar";
import {Outlet} from "react-router-dom"   
function SharedLayout(props)
{
    return(
        <div className="Shared-Layout">
        <Navbar/>
        <Outlet/>
        </div>
    )
}

export default SharedLayout