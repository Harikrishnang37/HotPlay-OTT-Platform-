import React, { useState, useEffect } from "react";
import BigSlider from "../VideoComponent/BigSlider";
import SmallSlider from "../VideoComponent/SmallSlider";
import { useLocation } from "react-router-dom";

const {EventEmitter} = require('events');


export default function Home(props)
{ 

    
    
    return(
        
        <div className="Home-main">
            <BigSlider from="Home" type="featured" />
            <h2 className="Title-Slider">Larending</h2>
            <SmallSlider from="Home" type = "LAT" />
            <h2 className="Title-Slider">Top Rated</h2>
            <SmallSlider from="Home" type = "TR"/>
            <h2 className="Title-Slider">Recommended Shows and Movies</h2>
            <SmallSlider from="Home" type = "Reccomended"/>
           
        </div>
    )
} 