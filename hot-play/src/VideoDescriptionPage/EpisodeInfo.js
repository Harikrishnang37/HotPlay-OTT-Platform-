import React from "react";
import ReactPlayer from "react-player"

export default function EpisodeInfo(props)
{
    return(
        <div className="EpisodeInfo">
            <div className="vidimage">
                <img src="" alt="" />
            </div>
            <div className="episode_desc">
                <div className="ep_title">
                 <button className="epi_button">  Episode {props.episode}</button>
                </div>
                <p className="ep_more_info">
                   {props.desc}
                </p>
            </div>
        </div>
    )
}