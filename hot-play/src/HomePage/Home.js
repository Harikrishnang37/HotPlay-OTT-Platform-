import React from "react";
import BigSlider from "../VideoComponent/BigSlider";
import SmallSlider from "../VideoComponent/SmallSlider";

export default function Home(props)
{
    return(
        <div className="Home-main">
            <BigSlider/>
            <SmallSlider />
            <SmallSlider/>
            
        </div>
    )
} 