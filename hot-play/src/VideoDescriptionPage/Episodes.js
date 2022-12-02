import React from "react";
import ReactPlayer from "react-player"
import EpisodeInfo from "./EpisodeInfo";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Episodes(props)
{
   const [currentSeason, setCurrentSeason] = useState(props.season)
   const [episodeList, setEpisodeList] = useState([])

   const seasons = []
   for (var i =1; i<= props.nos ;i++ )
   {
    seasons.push(i)
   }

   function handleChange(event){
    setCurrentSeason(event.target.value)

    fetch(`http://localhost:8000/data/series/${props.id}/${event.target.value}`,{
            method:'GET',
            headers:{'Content-Type':'application/json'},
        }).then((res)=>res.json())
        .then((data)=>{
            setEpisodeList(data)
        
            console.log(data)
        })

   }

   useEffect(()=>{
    fetch(`http://localhost:8000/data/series/${props.id}/${currentSeason}`,{
            method:'GET',
            headers:{'Content-Type':'application/json'},
        }).then((res)=>res.json())
        .then((data)=>setEpisodeList(data))
        
},[])

    return(
        <div className="Episodes">
            <div className="ep_selection">
                <select name="" id="" value = {currentSeason} onChange = {handleChange}>
                    {seasons.map((season, index)=>(<option key = {index} value = {season}>Season {season}</option>))}
                </select>
            </div>

            {episodeList.map((element , index)=> <Link key = {index} to = {`/app/Web-Series/${element.id}/${element.season}/${element.episode}`}><EpisodeInfo episode = {element.episode} desc = {element.episode_desc}></EpisodeInfo> </Link>)}

        </div>
        
    )
}