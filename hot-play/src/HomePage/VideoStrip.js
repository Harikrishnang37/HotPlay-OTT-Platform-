import React from "react";
import VideoBaby from "./VideoBaby";
import VidoBaby from "./VideoBaby";

export default function VideoStrip(props)
{
    return(
        <div className="VideoStrip">
            <p className="Strip-title">Yadav Exclusive+</p>
            <VideoBaby/>
            <VideoBaby/>
            <VideoBaby/>
            <VideoBaby/>
            
        </div>
    )
}