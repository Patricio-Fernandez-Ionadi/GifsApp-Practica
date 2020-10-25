import React from "react"
import Gif from "../Gif/Gif"
import "./loading.css"

export default function ListOfGifs({ gifs }) {
	return (
		<div className='gifs-container'>
			{gifs.map(({ id, title, url }) => (
				<Gif id={id} key={id} title={title} url={url} />
			))}
		</div>
	)
}

////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////

/* import React, { useEffect, useState } from "react"
import Gif from "./Gif"
import getGifs from "../services/getGifs"

// parametro recibido desde donde se renderea
// representa la busqueda que querra hacer el usuario
export default function ListOfGifs({ keyword }) {
	const [gifs, setGifs] = useState([])

	useEffect(() => {
		getGifs({ keyword }).then((gifs) => setGifs(gifs))
	}, [keyword])
	// esta dependencia necesitamos que ejecute el efecto para que cada vez que se cambie realice la llamada a la api con el parametro que pasamos
	// recordemos que el parametro que toma getGifs(llamada a la api) toma el parametro con el que va a realizar la busqueda

	return gifs.map(({ title, id, url }) => (
		<Gif id={id} key={id} title={title} url={url} />
	))
} */

// de esta forma el componente ListOfGifs esta retornando un array y eso no es bueno

////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////

/* import React, { useEffect, useState } from "react"
import Gif from "./Gif"
import getGifs from "../services/getGifs"

export default function ListOfGifs({ keyword }) {
	const [gifs, setGifs] = useState([])

	useEffect(() => {
		getGifs({ keyword }).then((gifs) => setGifs(gifs))
	}, [keyword])

	return (
		<>
			{gifs.map(({ title, id, url }) => (
				<Gif id={id} key={id} title={title} url={url} />
			))}
		</>
	)
} */

////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////

/* import React, { useEffect, useState } from "react"
import Gif from "./Gif"
import getGifs from "../services/getGifs"

export default function ListOfGifs(props) {
	// vemos qué props le llegan al componene
	// console.log(props)
	// nos llega un objeto params (podriamos desestructurar params desde los parametros de la funcion pero lo voy a hacer aca pora que quede claro el paso a paso)
	const { params } = props
	// ahora si podemos destructurar keyword para que al usar Route nos funcione el chiche
	const { keyword } = params

	const [gifs, setGifs] = useState([])

	useEffect(() => {
		getGifs({ keyword }).then((gifs) => setGifs(gifs))
	}, [keyword])

	return (
		<>
			{gifs.map(({ title, id, url }) => (
				<Gif id={id} key={id} title={title} url={url} />
			))}
		</>
	)
} */

////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////
// LOADING

/* import React, { useEffect, useState } from "react"
import Gif from "./Gif"
import getGifs from "../services/getGifs"
import "./loading.css"

export default function ListOfGifs(props) {
	const { params } = props
	const { keyword } = params
	const [gifs, setGifs] = useState([])

	// Valor inicial del loading
	const [loading, setLoading] = useState(false)

	useEffect(() => {
		// antes de llamar al servicio
		setLoading(true)
		getGifs({ keyword }).then((gifs) => {
			setGifs(gifs)
			// una vez que ya tengamos la info de la api dejar de cargar
			setLoading(false)
		})
	}, [keyword])

	// retornamos de forma condicional
	// si esta cargando el loading
	// y cuando no.. el componente

	if (loading) {
		return (
			<div class='lds-ripple'>
				<div></div>
				<div></div>
			</div>
		)
	} else {
		return (
			<>
				{gifs.map(({ title, id, url }) => (
					<Gif id={id} key={id} title={title} url={url} />
				))}
			</>
		)
	}
} */
