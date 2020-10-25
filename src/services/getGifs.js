// const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=sHqK5zVTLRp2iU6i8reJrW9ZVxj4w7lq&q=panda&limit=10&offset=0&rating=G&lang=en`

/* export default function getGifs() {
	// console.log("efecto ejecutado")
	return fetch(apiURL)
		.then((res) => res.json())
		.then((response) => {
			const { data } = response // es un array de objetos
			// console.log(data)
			const gifs = data.map((image) => image.images.downsized_medium.url)
			// console.log(gifs)
			return gifs
		})
} */

////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////

// Hasta acá esto devuelve la url perfectamente en un array, podraiamos mejorarlo pasandole un parámetro para que tome lo que esta buscando y lo inyecte en la url
// metemos la url adentro de la funcion para poder tomar como paramentro una palabra de busqueda (keyword) y poder inyectarla en la url

// si el parámetro keyword fuese pasado al momento de llamar a esta promesa podemos darle un valor poder defecto en la destructuracion pero aun asi seguira esperando  el parametro y su no es pasado al momento de llamar a la fucnion el valor por defecto seá un objeto ({keyword = 'busquedaPorDefecto'} = {})

/* const apiKey = "sHqK5zVTLRp2iU6i8reJrW9ZVxj4w7lq"

export default function getGifs({ keyword = "morty" } = {}) {
	const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=10&offset=0&rating=G&lang=en`
	return fetch(apiURL)
		.then((res) => res.json())
		.then((response) => {
			const { data } = response
			const gifs = data.map((image) => image.images.downsized_medium.url)
			return gifs
		})
} */

////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////

// vamos a extraer mas informacion sobre la devolucion de la api
// la api nos devielve un array de objetos donde cada objeto tiene valores especificos e inclusive otros objetos con valores como podria ser "images" que contiene el tamaño, la url, el formato etc...

/* const apiKey = "sHqK5zVTLRp2iU6i8reJrW9ZVxj4w7lq"

export default function getGifs({ keyword = "morty" } = {}) {
	const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=10&offset=0&rating=G&lang=en`
	return fetch(apiURL)
		.then((res) => res.json())
		.then((response) => {
			const { data = [] } = response
			// console.log(data)
			const gifs = data.map((image) => {
				// image ahora representa a cada objeto del que vamos a extraer la informacion que necesitamos
				// por cada image que hayas recorrido devolveme...
				const { images, title, id } = image

				// extraeme el parametro url de 'images' (que ya lo extrajimos en la linea anterior de cada elemento recrrido) de la siguiente ruta
				// !!!!!!! no se pone el ultimo campo ya que el nombre de extraccion que le estamos dando es el mismo que tiene dentro del objeto ¡¡¡¡¡¡¡¡¡¡¡
				const { url } = images.downsized_medium // sacamos la url para renderizar el gif
				return { title, url, id }
			})
			// de la respuesta que era un array hicimos un map() para extraer ciertos parametros y queremos que esos parametros sean retornados como objetos con esas key y su respectivo valor
			// [{title: "asd", url: "asd", id:"asd"},{...},{...},{...},{...},{...},{...},{...},{...}]
			return gifs
		})
} */

////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////

const apiKey = "sHqK5zVTLRp2iU6i8reJrW9ZVxj4w7lq"

export default function getGifs({ keyword = "morty" } = {}) {
	const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=25&offset=0&rating=G&lang=en`
	return fetch(apiURL)
		.then((res) => res.json())
		.then((response) => {
			const { data = [] } = response
			const gifs = data.map((image) => {
				const { images, title, id } = image
				const { url } = images.downsized_medium // sacamos la url para renderizar el gif
				// de forma independiente le estoy agregando keyword para que me lo pase como parametro en el estado
				return { title, url, id, keyword }
			})
			return gifs
		})
}
