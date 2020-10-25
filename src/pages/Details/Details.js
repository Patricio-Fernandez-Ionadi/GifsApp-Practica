import React from "react"
import Gif from "../../components/Gif/Gif"
// import { GifsContext } from "../../context/GifsContext"
import useGlobalGifs from "../../hooks/useGlobalGifs"

export default function Detail({ params }) {
	// const { gifs } = useContext(GifsContext)
	const gifs = useGlobalGifs()
	const gif = gifs.find((singleGif) => singleGif.id === params.id)

	// console.log(gif)
	// console.log(params.id)

	//
	return <Gif {...gif} />
}
