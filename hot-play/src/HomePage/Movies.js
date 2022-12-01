
import BigSlider from "../VideoComponent/BigSlider";
import SmallSlider from "../VideoComponent/SmallSlider";

import React from 'react'

function Movies() {
  return (
	
	<div className="Home-main">
		<BigSlider from="Movie" type="featured" />
		<h2 className="Title-Slider">English Movies</h2>
		<SmallSlider from="Movie" type = "EM" />
		<h2 className="Title-Slider">Hindi Movies</h2>
		<SmallSlider from="Movie" type = "HM"/>
		<h2 className="Title-Slider">Telugu Movies</h2>
		<SmallSlider from="Movie" type = "TM"/>
		<h2 className="Title-Slider">Kannada Movies</h2>
		<SmallSlider from="Movie" type = "KM"/>
	
</div>
  )
}

export default Movies