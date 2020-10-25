import React from "react"
import { Link } from "wouter"
import "./Gif.css"

// ESTRUCTURA DE CADA GIF NECESITA RECIBIR LOS PARAMETROS DESDE QUIEN LO RENDERIZA
// ListOfGifs

export default function Gif(props) {
	const { title, url, id } = props
	return (
		<div className='Gif'>
			<Link to={`/gif/${id}`} className='Gif-link'>
				<h4>{title}</h4>
				<img loading='lazy' src={url} alt={title} />
			</Link>
		</div>
	)
}
