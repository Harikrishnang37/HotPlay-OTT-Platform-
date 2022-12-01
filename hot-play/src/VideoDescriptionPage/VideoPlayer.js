import React from "react";
import ReactPlayer from "react-player"

export default function VideoPlayer(props)
{
    const src = props.type=='Movie'?`dedjhjd`:`dkjkj`

    return(
        <div className="VideoPlayer">
            <ReactPlayer src = {props.type === "Movie"?`http://localhost:8000/Video/Movie/${props.id}`: `http://localhost:8000/Video/Series/${props.id}/${props.season}/${props.ep}`}></ReactPlayer>
        </div>
    )
}