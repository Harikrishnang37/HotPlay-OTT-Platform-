import React from "react";

export default function VideoDescription(props)
{
    return(
        <div className= "VideoDescription">
            <div className="VideoTitle">
                {props.title}
            </div>
            <p className="UnderTitle">
                {props.desc}
            </p>
        </div>
    )
}