import { MovieContext} from './components/MovieContext';
import { MovieRouter }  from './router/MovieRouter';
import { useEffect, useState } from "react";
import stwNewHope from './assets/stwNewHope.png';
import stwImperio from './assets/stwImperio.png';
import stwReturn from './assets/stwReturn.png';
import stwAmenaza from './assets/stwAmenaza.webp';
import stwAtaque from './assets/stwAtaque.webp';
import stwLast from './assets/stwLast.webp';
import stwSith from './assets/stwSith.jpeg';
import stwDespertar from './assets/stwDespertar.png';
import stwSky from './assets/stwSky.webp';
import './App.css';
import fetchData from './hooks/fetchData';

function App() {
	const sdata  = [{
			name: 'Star Wars: episodio I - La Amenaza Fantasma',
			desc: 'Obi-Wan Kenobi es un joven aprendiz caballero Jedi bajo la tutela de Qui-Gon Jinn; Anakin Skywalker, quien después será padre de Luke Skywalker y se convertirá en Darth Vader, solamente es un niño de 9 años. Cuando la Federación de Comercio corta todas las rutas al planeta Naboo, Qui-Gon y Obi-Wan son asignados para solucionar el problema.',
			img: stwAmenaza,
			alquilada: false,
			precioAlquiler: 1,
			precio: 3.99,
			director: 'George Lucas',
			ano: 1999,
			alquilerHasta: new Date(),
			video: 'https://www.youtube.com/watch?v=n1CUHjrc9Sc',
			id: 1}, 
		{
			name: 'Star Wars: episodio II - El ataque de los clones',
			desc: 'En el Senado Galáctico reina la inquietud. Varios miles de sistemas solares han declarado su intención de abandonar la República. Este movimiento separatista, liderado por el misterioso conde Dooku, ha provocado que al limitado número de caballeros Jedi les resulte difícil mantener la paz y el orden en la galaxia. La senadora Amidala, antigua Reina de Naboo, regresa al Senado Galáctico para dar su voto en la crítica cuestión de crear un ejército de la República que ayude a los desbordados Jedi.',
			img: stwAtaque,
			alquilada: false,
			precioAlquiler: 1,
			precio: 3.99,
			director: 'George Lucas',
			ano: 2002,
			alquilerHasta: new Date(),
			video: 'https://www.youtube.com/watch?v=DywnxIuPtUs',
			id: 2},
		{
			name: 'Star wars: episodio III - La venganza de los sith',
			desc: '¡Guerra! La República se desmorona bajo los ataques del despiadado Lord Sith, el conde Dooku. Hay héroes en ambos bandos, pero el mal está por doquier. En una contundente jugada, el diabólico líder droide, el general Grievous, ha irrumpido en la capital de la República y ha secuestrado al Canciller Palpatine, líder del senado Galáctico. Mientras el ejército droide separatista trata de huir con su valioso rehén, dos caballeros Jedi inician una misión desesperada para liberar al Canciller cautivo.',
			img: stwSith,
			alquilada: false,
			precioAlquiler: 1,
			precio: 3.99,
			director: 'George Lucas',
			ano: 2005,
			alquilerHasta: new Date(),
			video: 'https://www.youtube.com/watch?v=kqkfjBKmWc4',
			id: 3},
		{
			name: 'Star Wars: episodio IV - Una nueva esperanza',
			desc: 'La nave en la que viaja la princesa Leia es capturada por las tropas imperiales al mando del temible Darth Vader. Antes de ser atrapada, Leia consigue introducir un mensaje en su robot R2-D2, quien acompañado de su inseparable C-3PO logran escapar. Tras aterrizar en el planeta Tattooine son capturados y vendidos al joven Luke Skywalker, quien descubrirá el mensaje oculto que va destinado a Obi Wan Kenobi, maestro Jedi a quien Luke debe encontrar para salvar a la princesa.', 
			img: stwNewHope,
			alquilada: false,
			precioAlquiler: 2,
			precio: 4.99,
			director: 'George Lucas',
			ano: 1997,
			alquilerHasta: new Date(),
			video: 'https://www.youtube.com/watch?v=beAH5vea99k',
			id: 4},
		{
			name: 'Star wars: episodio V - El imperio contraataca',
			desc: 'Son tiempos adversos para la rebelión. Aunque la Estrella de la Muerte ha sido destruida, las tropas imperiales han hecho salir a las fuerzas rebeldes de sus bases ocultas y los persiguen a través de la galaxia. Tras escapar de la terrible Flota Imperial, un grupo de guerreros de la libertad, encabezados por Luke Skywalker, ha establecido una nueva base secreta en el remonto mundo helado de Hoth.',
			img: stwImperio,
			alquilada: false,
			precioAlquiler: 2,
			director: 'Irvin Kershner',
			ano: 1980,
			precio: 4.99,
			alquilerHasta: new Date(),
			video: 'https://www.youtube.com/watch?v=xr3hPFJAHO4',
			id: 5},
		{
			name: 'Star wars: episodio VI - El regreso del Jedi',
			desc: 'Seis meses después de que Han Solo fuera capturado y congelado en carbonita en la Ciudad de las Nubes, el Imperio Galáctico está construyendo una nueva Estrella de la Muerte. Mientras tanto, el joven Luke lucha para alcanzar la maestría jedi.',
			img: stwReturn,
			alquilada: false,
			precioAlquiler: 2,
			precio: 4.99,
			director: 'Richard Marquand',
			ano: 1983,
			alquilerHasta: new Date(),
			video: 'https://www.youtube.com/watch?v=yhuKapE-Bio',
			id: 6},
		{
			name: 'Star wars: episodio VII - El despertar de la fuerza', 
			desc: 'Treinta años después de la victoria de la Alianza Rebelde sobre la segunda Estrella de la Muerte, la galaxia tiene que enfrentarse a una nueva amenaza: el malvado Kylo Ren y la Primera Orden. Cuando el desertor Finn llega a un planeta desierto conoce a Rey, cuyo androide contiene un mapa secreto. Juntos, la joven pareja unirá fuerzas con Han Solo para asegurarse de que la resistencia encuentra a Luke Skywalker, el último de los caballeros Jedi.',
			img: stwDespertar,
			alquilada: false,
			precioAlquiler: 3,
			precio: 5.99,
			director: 'J. J. Abrams',
			ano: 2015,
			alquilerHasta: new Date(),
			video: 'https://www.youtube.com/watch?v=V8qlIZsutAQ',
			id: 7},
		{
			name: 'Star wars: episodio VIII - Los Últimos Jedi',
			desc: 'La Primera Orden ha acorralado a los últimos miembros de la resistencia. Su última esperanza es que Finn se introduzca en la nave de Snoke y desactive el radar que les permite localizarlos. Mientras él trata, en compañía de una soldado de la Resistencia, de cumplir esta misión imposible, Rey se encuentra lejos, intentando convencer a Luke Skywalker de que la entrene y la convierta en la última jedi.',
			img: stwLast,
			alquilada: false,
			precioAlquiler: 3,
			precio: 5.99,
			director: 'Rian Johnson',
			ano: 2017,
			alquilerHasta: new Date(),
			video: 'https://www.youtube.com/watch?v=anOJjqQb8x0',
			id: 8},
		{
			name: 'Star wars: episodio IX - El ascenso de Skywalker',
			desc: 'La Resistencia sobreviviente se enfrenta a la Primera Orden, y Rey, Finn, Poe y el resto de los héroes encararán nuevos retos y una batalla final con la sabiduría de las generaciones anteriores.',
			img: stwSky,
			alquilada: false,
			precioAlquiler: 3,
			precio: 5.99,
			director: 'J. J. Abrams',
			ano: 2019,
			alquilerHasta: new Date(),
			video: 'https://www.youtube.com/watch?v=Izme__ZsURY',
			id: 9} ]


	const [moviesData, setMoviesData] = useState([]);
	useEffect(() => {
		let prices = [];
		// const getPrices = async () => {
		// 	// try {
		// 	// 	const data = await fetchData('http://localhost:8089/ms-movies-inventory/Price', {
		// 	// 	targetMethod: 'GET',
		// 	// 	queryParams: {},
		// 	// 	});
		// 	// 	prices = data;
		// 	// } catch (error) {
		// 	// 	console.log(error);
		// 	// }
		// };
		// getPrices().then(res => {
			const getMovies = async () => {
				try {
					const data = await fetchData('http://localhost:8762/ms-movies-inventory/movies', {
					targetMethod: 'GET',
					queryParams: {},
					});


					console.log(data)
					data.forEach(m => {
						// ({ precio: m.precio, precioAlquiler: m.precioAlquiler } = selectPrice(m.img, prices));
						m.img = selectImage(m.img)
					});
					console.log(data);
					setMoviesData(data);
				} catch (error) {
					console.log(error);
				} finally {
					console.log("final data loading");
				}
			};
			getMovies();
		// });
		
	}, []);

	function selectPrice(image, prices) {
		let precio = 1;
		let precioAlquiler = 1;
		switch (image) {
			case 'stwAmenaza':
				precio = prices[0].precio;
				precioAlquiler = prices[0].precioAlquiler;
				break;
			case 'stwAtaque':
				precio = prices[0].precio;
				precioAlquiler = prices[0].precioAlquiler;
				break;
			case 'stwSith':
				precio = prices[0].precio;
				precioAlquiler = prices[0].precioAlquiler;
				break;
			case 'stwNewHope':
				precio = prices[1].precio;
				precioAlquiler = prices[1].precioAlquiler;
				break;
			case 'stwImperio':
				precio = prices[1].precio;
				precioAlquiler = prices[1].precioAlquiler;
				break;
			case 'stwReturn':
				precio = prices[1].precio;
				precioAlquiler = prices[1].precioAlquiler;
				break;
			case 'stwDespertar':
				precio = prices[2].precio;
				precioAlquiler = prices[2].precioAlquiler;
				break;
			case 'stwLast':
				precio = prices[2].precio;
				precioAlquiler = prices[2].precioAlquiler;
				break;
			case 'stwSky':
				precio = prices[2].precio;
				precioAlquiler = prices[2].precioAlquiler;
				break;
			default:
				break;
		}
		return {precio, precioAlquiler}; 
	}

	function selectImage(image) {
		let res = stwAmenaza
		switch (image) {
			case 'stwAmenaza':
				res = stwAmenaza;
				break;
			case 'stwAtaque':
				res = stwAtaque;
				break;
			case 'stwSith':
				res = stwSith;
				break;
			case 'stwNewHope':
				res = stwNewHope;
				break;
			case 'stwImperio':
				res = stwImperio;
				break;
			case 'stwReturn':
				res = stwReturn;
				break;
			case 'stwDespertar':
				res = stwDespertar;
				break;
			case 'stwLast':
				res = stwLast;
				break;
			case 'stwSky':
				res = stwSky;
				break;
			default:
				break;
		}
		return res; 
	}

	return (
		<div>
			<MovieContext.Provider value={{moviesData, setMoviesData}}>
					<MovieRouter></MovieRouter>
			</MovieContext.Provider>
		</div>
	)
}

export default App;
