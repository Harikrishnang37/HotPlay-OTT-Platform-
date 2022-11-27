import BigSlider from "../VideoComponent/BigSlider";
import SmallSlider from "../VideoComponent/SmallSlider";
import SmallSlider1 from "../VideoComponent/smallSlider1";



import React from 'react'

export default function Exclusives() {
  return (
	<div className="Home-main">
	<h2 className="Title-Slider1">Latest and Trending</h2>
	<SmallSlider1 />
	<h2 className="Title-Slider">Top Rated</h2>
	<SmallSlider/>
	<h2 className="Title-Slider">Recommended Shows and Movies</h2>
	<SmallSlider/>
	<h2 className="Title-Slider">Originals</h2>
	<SmallSlider/>
	
</div>
  )
}
