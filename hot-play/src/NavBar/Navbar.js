import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom"
import Navigate from "./Navigate";
import TitleBar from "./TitleBar";

export default function Navbar(props)
{
    return(
        <div className="navbar">
            <TitleBar/>
            <Navigate/>
        </div>
    )
}