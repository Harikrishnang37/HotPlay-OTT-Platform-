
import BigSlider from "../VideoComponent/BigSlider";
import SmallSlider from "../VideoComponent/SmallSlider";

import React from 'react'

function Movies() {
  return (
	
	<div className="Home-main">
	<BigSlider/>
	<h2 className="Title-Slider">Latest and Trending</h2>
	<SmallSlider />
	<h2 className="Title-Slider">Top Rated</h2>
	<SmallSlider/>
	<h2 className="Title-Slider">Recommended Shows and Movies</h2>
	<SmallSlider/>
	<h2 className="Title-Slider">Originals</h2>
	<SmallSlider/>
	
</div>
  )
}

export default Movies