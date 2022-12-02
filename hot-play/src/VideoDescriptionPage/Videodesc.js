import React from 'react'

export default function Videodesc(props) {
  return (
	<div className="desc">
	<h1 className="UnderTitle">
	<p className='desc_title'>Overview : </p>
		{props.desc}
	</h1></div>
  )
}
