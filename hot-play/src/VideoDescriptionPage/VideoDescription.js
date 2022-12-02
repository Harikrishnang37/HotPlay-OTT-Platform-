import React from "react";
import "./v.css";

export default function VideoDescription(props)
{
    return(
        <div className= "VideoDescription">     
            <div className="VideoTitle">
                <h1>
                {props.title}</h1>
            </div>
           
        </div>
    )
}