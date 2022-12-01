import React from "react";
import ReactPlayer from "react-player"


export default function VideoPlayer(props)
{
    const src = props.type=='Movie'?`dedjhjd`:`dkjkj`

    return(
        <div className="VideoPlayer">
            
            <ReactPlayer url = {props.type === "movie"?`http://localhost:8000/video/movie/${props.id}`: `http://localhost:8000/video/Series/${props.id}/${props.season}/${props.ep}`} controls></ReactPlayer>
        </div>
    )
}