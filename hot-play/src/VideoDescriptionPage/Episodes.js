import React from "react";
import ReactPlayer from "react-player"
import EpisodeInfo from "./EpisodeInfo";

export default function Episodes(props)
{
    return(
        <div className="Episodes">
            <div className="ep_selection">
                <select name="" id="">
                    <option value=""></option>
                </select>
            </div>
            <EpisodeInfo></EpisodeInfo>
            <EpisodeInfo></EpisodeInfo>
            <EpisodeInfo></EpisodeInfo>
        </div>
        
    )
}