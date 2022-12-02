import React from "react";
import VideoPlayer from "./VideoPlayer"
import Rating from "./Ratings"
import VideoDescription from "./VideoDescription";
import Episodes from "./Episodes";
import Options from "./Options";
import { useParams } from "react-router-dom";
import { useState ,useEffect} from "react";

export default function SeriesDescriptionPage (props)
{
    const param = useParams()
    const [SeriesData, setSeriesData] = useState({})

    useEffect(()=>{
        fetch(`http://localhost:8000/single/series/${param.id}/${param.season}/${param.ep}`,{
                method:'GET',
                headers:{'Content-Type':'application/json'},
                body: JSON.stringify({id: param.id})
            }).then((res)=>res.json())
            .then((data)=>setSeriesData(data))
            
    },[])

    if(Object.keys(SeriesData).length === 0)
    {
        return(<div></div>)
    }

    return(
        <div className="SeriesDescriptionPage">
            <VideoPlayer type = "Series" id = {param.id} season = {param.season} ep = {param.ep}></VideoPlayer>
            <VideoDescription title = {SeriesData.name} desc = {SeriesData.desc}></VideoDescription>
            {/* <Rating></Rating>
            <Options></Options> */}
            <Episodes id = {param.id} season = {param.season} ep = {param.ep}></Episodes>
        </div>
        
    )
}