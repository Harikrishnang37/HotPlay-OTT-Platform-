import React from "react";
import VideoPlayer from "./VideoPlayer"
import Rating from "./Ratings"
import VideoDescription from "./VideoDescription";
import Episodes from "./Episodes";
import Options from "./Options";

export default function SeriesDescriptionPage (props)
{
    return(
        <div className="SeriesDescriptionPage">
            <VideoPlayer></VideoPlayer>
            <VideoDescription></VideoDescription>
            <Rating></Rating>
            <Options></Options>
            <Episodes></Episodes>
        </div>
        
    )
}