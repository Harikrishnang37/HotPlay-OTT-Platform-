
import BigSlider from "../VideoComponent/BigSlider";
import SmallSlider from "../VideoComponent/SmallSlider";

import React from 'react'

function Movies() {
  return (
	
	<div className="Home-main">
		<BigSlider from="movies" type="featured" />
		<h2 className="Title-Slider">English Movies</h2>
		<SmallSlider from="movies" type = "en" />
		<h2 className="Title-Slider">Hindi Movies</h2>
		<SmallSlider from="movies" type = "hi"/>
		<h2 className="Title-Slider">Telugu Movies</h2>
		<SmallSlider from="movies" type = "te"/>
		<h2 className="Title-Slider">Kannada Movies</h2>
		<SmallSlider from="movies" type = "ka"/>
	
</div>
  )
}

export default Movies