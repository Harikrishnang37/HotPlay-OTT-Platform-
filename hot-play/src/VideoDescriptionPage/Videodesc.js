import React from 'react'

export default function Videodesc(props) {
  return (
	<div className="desc">
	<p className="UnderTitle">
	<h1 className='desc_title'>Overview : </h1>
		{props.desc}
	</p></div>
  )
}
