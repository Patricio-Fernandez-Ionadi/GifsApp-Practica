import React from "react"
import "./App.css"
import { Route, Link } from "wouter"
// pages
import Home from "./pages/Home/Home"
import Details from "./pages/Details/Details"
import SearchResults from "./pages/SearchResults"
// contexto
// el contexto tiene 2 partes: el consumidor y el proveedor
import StaticContext from "./context/StaticContext"
import { GifsContextProvider } from "./context/GifsContext"

export default function App() {
	return (
		<StaticContext.Provider value={{ name: "Poker", reactPro: true }}>
			<div className='App'>
				<section className='App-container'>
					<Link to='/'>
						<img className='App-logo' alt='Giffy logo' src='/logo.png' />
					</Link>
					<GifsContextProvider>
						<Route component={Home} path='/' />
						<Route component={SearchResults} path='/search/:keyword' />
						<Route component={Details} path='/gif/:id' />
					</GifsContextProvider>
				</section>
			</div>
		</StaticContext.Provider>
	)
}

// const state = useState([])
// const value = state[0]
// const updateValue = state[1]
// const [gifs, setGifs] = useState([])
