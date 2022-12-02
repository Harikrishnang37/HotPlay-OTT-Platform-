import BigSlider from "../VideoComponent/BigSlider";
import SmallSlider from "../VideoComponent/SmallSlider";
import SmallSlider1 from "../VideoComponent/smallSlider1";


import React from 'react'

export default function Series() {
  return (
	<div className="Home-main">
	<BigSlider from = "series" type = "u" />
	<h2 className="Title-Slider" >Top Rated</h2>
	<SmallSlider from = "series" type = "u"/>
	<h2 className="Title-Slider">Recommended Shows and Movies</h2>
	<SmallSlider from = "series" type = "u"/>
	<h2 className="Title-Slider">Originals</h2>
	<SmallSlider from = "series" type = "u"/>
	
</div>
  )
}
