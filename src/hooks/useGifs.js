import { useEffect, useState, useContext } from "react"
import getGifs from "../services/getGifs"
import GifsContext from "../context/GifsContext"

export function useGifs({ keyword } = { keyword: null }) {
	// const [gifs, setGifs] = useState([])
	const { gifs, setGifs } = useContext(GifsContext)
	const [loading, setLoading] = useState(false)

	useEffect(() => {
		setLoading(true)

		// recuperamos la keyword del localStorage
		const kewywordToUse =
			keyword || localStorage.getItem("lastKeyword") || "random"

		getGifs({ keyword: kewywordToUse }).then((gifs) => {
			setGifs(gifs)
			setLoading(false)
			// guardamos la keyword en localStorage
			localStorage.setItem("lastKeyword", keyword)
		})
	}, [keyword, setGifs])

	return { loading, gifs }
}

// custom hooks se utilizan para reutilizar logica en varios componentes que lo necesitemos
