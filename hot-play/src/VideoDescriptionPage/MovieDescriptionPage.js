import React from "react";
import VideoPlayer from "./VideoPlayer"
import Rating from "./Ratings"
import VideoDescription from "./VideoDescription";
import Options from "./Options";

export default function MovieDescriptionPage (props)
{
    return(
        <div className="MovieDescriptionPage">
            <VideoPlayer></VideoPlayer>
            <VideoDescription></VideoDescription>
            <Rating></Rating>
            <Options></Options>
        </div>
    )
}