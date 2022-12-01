
import BigSlider from "../VideoComponent/BigSlider";
import SmallSlider from "../VideoComponent/SmallSlider";

import React from 'react'

function Movies() {
  return (
	
	<div className="Home-main">
		<BigSlider from="movie" type="featured" />
		<h2 className="Title-Slider">English Movies</h2>
		<SmallSlider from="movie" type = "en" />
		<h2 className="Title-Slider">Hindi Movies</h2>
		<SmallSlider from="movie" type = "hi"/>
		<h2 className="Title-Slider">Telugu Movies</h2>
		<SmallSlider from="movie" type = "te"/>
		<h2 className="Title-Slider">Kannada Movies</h2>
		<SmallSlider from="movie" type = "ka"/>
	
</div>
  )
}

export default Movies