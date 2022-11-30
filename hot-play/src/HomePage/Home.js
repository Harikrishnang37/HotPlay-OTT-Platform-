import React, { useState, useEffect } from "react";
import BigSlider from "../VideoComponent/BigSlider";
import SmallSlider from "../VideoComponent/SmallSlider";

const {EventEmitter} = require('events');


export default function Home(props)
{ //var [tempvar, setTempvar] = useState([])

    
    //console.log(tempvar)
    //var [data,setData] = useState([])
    
        // fetch("http://localhost:6900",{
        //     method:'GET',
        //     headers:{'Content-Type':'application/json'},
        // }).then((response)=>response.text()).then(function(res){data = res})
        
        // console.log(data)

    // if (tempvar.length === 0)
    //     {
    //         return (<div></div>)
    //     }
    // //console.log(tempvar)
    return(
        
        <div className="Home-main">
            <BigSlider />
            <h2 className="Title-Slider">Larending</h2>
            <SmallSlider />
            <h2 className="Title-Slider">Top Rated</h2>
            <SmallSlider />
            <h2 className="Title-Slider">Recommended Shows and Movies</h2>
            <SmallSlider />
            <h2 className="Title-Slider">Originals</h2>
            <SmallSlider />
            
        </div>
    )
} 