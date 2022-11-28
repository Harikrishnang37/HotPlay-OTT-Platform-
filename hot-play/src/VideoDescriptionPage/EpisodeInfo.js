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
                    Episode 1: The death of the Donkey
                </div>
                <p className="ep_more_info">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo, saepe distinctio? Ea nam cumque sequi cupiditate corrupti accusantium facilis repellat. Omnis nihil mollitia a nobis reiciendis voluptate eligendi, illo explicabo?
                </p>
            </div>
        </div>
    )
}