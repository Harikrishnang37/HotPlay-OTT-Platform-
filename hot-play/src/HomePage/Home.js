import React from "react";
import HomeSpotlight from "./HomeSpotlight";
import VideoStrip from "./VideoStrip";

export default function Home(props)
{
    return(
        <div className="Home-main">
            <HomeSpotlight/>
            <VideoStrip/>
            
        </div>
    )
} 