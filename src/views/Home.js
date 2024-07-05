import React, { useContext, useState } from 'react'
import { Card } from '../components/Card';
import { MovieContext } from '../components/MovieContext';
import {Search} from '../components/Search';
import fetchData from '../hooks/fetchData';


export const Home = () => {
	const { moviesData } = useContext(MovieContext);
	const [inputValue, setInputValue] = useState('');
	const [movieValue, setMovieValue] = useState(moviesData);


	const getValue = async (card) => {





		if (inputValue.length >= 1) {

			let queryParams2 = {};

			if (!isNaN(parseFloat(inputValue)) && isFinite(inputValue)) {
				queryParams2 = {
					"ano": [inputValue.trim()],
				}
			} else  {
				queryParams2 = {
					"name": [inputValue.trim()],
				}
			}



			let data = await fetchData('https://back-end-cloud-gateway-filters.onrender.com/ms-movies-inventory/facets', {
				targetMethod: 'GET',
				"queryParams": queryParams2,
				});

				console.log("here",  {
					targetMethod: 'GET',
					"queryParams": queryParams2,
					})

	
			console.log(inputValue)
			console.log("data from ES: ", data)

			// Extraer los nombres de los empleados
			const moviesNames = data.employees.map(mv => mv.name);
			const movieYears = data.employees.map(mv => mv.ano);


			console.log('mY: ',movieYears)
			const filteredMovies = moviesData.filter(movie => {
				return moviesNames.includes(movie.name) || movieYears.includes(movie.ano);
			});
	
			console.log("Filtered Movies: ", filteredMovies);
			setMovieValue(filteredMovies.length > 0 ? filteredMovies : moviesData);
			
		}

	}

	return (
		<div>
			<div className='menu-header'>
				<div className='header-menu-container'>
					<h4 className='menu-title'>Bienvenidio al Menu de Galactic Force</h4>
					<p>Es hora de ser uno con la fuerza, escoje la pelicula que quieras alquilar o comprar.</p>
					<Search inputValue={inputValue} setInputValue={setInputValue} getValue={getValue}></Search>
					<span className='search-subtitle'>Puedes realizar una busqueda por nombre, director o año de estreno</span>
				</div>
			</div>
			<div className='card-container'>
			{movieValue.map((card, index) => (
				<Card key={index} card={card} />
			))}
		</div>
		</div>
	)
}

