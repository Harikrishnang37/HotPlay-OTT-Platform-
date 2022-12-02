import React, { useState , useEffect} from "react";
import VideoPlayer from "./VideoPlayer"
import Rating from "./Ratings"
import VideoDescription from "./VideoDescription";
import Options from "./Options";
import { json, useParams } from "react-router-dom";
import Videodesc from "./Videodesc";

export default function MovieDescriptionPage (props)
{
    const param = useParams()
    const [MovieData, setMovieData] = useState({})

    useEffect(()=>{
        fetch(`http://localhost:8000/single/movies/${param.id}`,{
                method:'GET',
                headers:{'Content-Type':'application/json'},
            }).then((res)=>res.json())
            .then((data)=>{
                setMovieData(data)
                //console.log(data)
            })
            
    },[])

    if(Object.keys(MovieData).length === 0)
    {
        return(<div></div>)
    }

    return(
        <div className="MovieDescriptionPage">
            <VideoDescription title = {MovieData.title} desc = {MovieData.desc}></VideoDescription>
            <VideoPlayer type = "movie" id = {param.id}></VideoPlayer>
            <Videodesc  desc = {MovieData.desc}></Videodesc>
            {/* <Rating></Rating> */}
            {/* <Options></Options> */}
    
        </div>
    )
}