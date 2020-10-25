import React from "react"
// components
import ListOfGifs from "../../components/ListOfGifs/ListOfGifs"
import Sipnner from "../../components/Spinner/Sipnner"
// custom hooks
import { useGifs } from "../../hooks/useGifs"

export default function SearchResults(props) {
	const { params } = props
	// console.log(props)
	const { keyword } = params

	// TODO ESTO AHORA LO RECUPERAMOS DESDE NUESTRO CUSTOM HOOK
	// const [gifs, setGifs] = useState([])
	// const [loading, setLoading] = useState(false)

	// useEffect(() => {
	// 	setLoading(true)
	// 	getGifs({ keyword }).then((gifs) => {
	// 		setGifs(gifs)
	// 		setLoading(false)
	// 	})
	// }, [keyword])
	const { loading, gifs } = useGifs({ keyword })

	return <>{loading ? <Sipnner /> : <ListOfGifs gifs={gifs} />}</>
}
