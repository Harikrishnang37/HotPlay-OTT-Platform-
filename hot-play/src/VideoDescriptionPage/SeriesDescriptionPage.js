import React from "react";
import VideoPlayer from "./VideoPlayer"
import Rating from "./Ratings"
import VideoDescription from "./VideoDescription";
import Episodes from "./Episodes";
import Options from "./Options";
import {useState, useEffect} from 'react'
import { useParams } from "react-router-dom";

export default function SeriesDescriptionPage (props)
{
    const param = useParams()
    const [SeriesData, setSeriesData] = useState({})

    useEffect(()=>{
        fetch(`http://localhost:8000/single/series/${param.id}/${param.season}/${param.episode}`,{
                method:'GET',
                headers:{'Content-Type':'application/json'},
            }).then((res)=>res.json())
            .then((data)=>setSeriesData(data))
            
    },[])

    if(Object.keys(SeriesData).length === 0)
    {
        return(<div></div>)
    }

    return(
        <div className="SeriesDescriptionPage">
            <VideoPlayer type = "Series" id = {param.id} season = {param.season} ep = {param.episode}></VideoPlayer>
            <VideoDescription title = {SeriesData.name} desc = {SeriesData.desc}></VideoDescription>
            {/* <Rating></Rating>
            <Options></Options> */}
            <Episodes nos = {SeriesData.no_of_seasons} id = {param.id} season = {param.season} episode = {param.episode}></Episodes>
        </div>
        
    )
}