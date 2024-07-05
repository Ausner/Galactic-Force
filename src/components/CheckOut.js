import React, {useState, useEffect, useContext}  from 'react';
import logo from '../assets/light-saber.png';
import { usePrice } from '../hooks/usePrice';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { MovieContext} from '../components/MovieContext';
import InfoDialog from '../dialogs/InfoDialog';
import fetchData from '../hooks/fetchData';


export const CheckOut = ({selectedMovie, action}) => {
    const { moviesData, setMoviesData } = useContext(MovieContext);
    const [amount, setAmount] = useState(1);
    const [daysDifference, setDaysDifference] = useState(0);
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);
    const [startDate, setStartDate] = useState(tomorrow);
    const price = (action === 'alquiler') ? selectedMovie.precioAlquiler: selectedMovie.precio;
    const { getPrice } = usePrice(price, amount, daysDifference);
    const [isOpen, setIsOpen] = useState(false);
    const [mensaje, setMensaje] = useState('');

    const openInfoDialog = (mensaje) => {
        setMensaje(mensaje)
        setIsOpen(true);
    };

    const closeInfoDialog = () => {
        setMensaje('');
        setIsOpen(false);
    };
    

    useEffect(() => {
        const calculateDaysDifference = () => {
            const currentDate = new Date();
            const timeDiff = Math.abs(currentDate.getTime() - startDate.getTime());
            const daysDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
            setDaysDifference(daysDiff);
        };
        calculateDaysDifference();
    }, [startDate]);

    async function pagar() {
        if (action === 'alquiler' ) {
            if(selectedMovie.alquilerHasta >= new Date()) {
                openInfoDialog(`La pelicula ya fue alquilada hasta el ${selectedMovie.alquilerHasta}`);
            } else {
                const updatedMoviesData = moviesData.map(movie => {
                    if (selectedMovie.id === movie.id) {
                        return {
                            ...movie,
                            alquilerHasta: new Date(startDate)
                        };
                    }
                    return movie;
                });
                setMoviesData(updatedMoviesData);
                await fetchData('http://localhost:8788/operator/alquileres', {
				targetMethod: 'POST',
				body: {
                        "idPelicula": 4,
                        "fechaDesde": new Date().toISOString().slice(0, 10).toString(),
                        "fechaHasta": startDate.toISOString().slice(0, 10).toString(),
                        "precioFinal": getPrice(),
                        "tipoRecibo": "Alquiler"
                    },
                });
                openInfoDialog('Pelicula alquilada exitosamente');
            }
        } else {
            await fetchData('http://localhost:8088/operator/compras', {
				targetMethod: 'POST',
				body: {
                    "idPelicula": selectedMovie.id,
                    "fechaCompra": new Date().toISOString().slice(0, 10).toString(),
                    "precioTotal": getPrice(),
                    "tipoPago": "Tarjeta"
                },
			});
            openInfoDialog('Su compra ha sido realizada con exito, lo sentimos pero de momento el sistema no esta procesando las descargas');
        }
    }

return (
        <div className="master-container">
        <div className="cardC cart">
        <label className="title">Su {action}</label>
        <div className="products">
            <div className="product">
            <img src={logo} alt="starWarsLogo" className='main-logo checkout'/>
            <div>
                <span>{selectedMovie.name}</span>
            </div>
            <div className="quantity">
                <button>
                <svg className='img-amount' onClick={() => {
                    if (action !== 'alquiler' && amount > 1) {
                        setAmount(amount - 1);
                    }
                }} fill="none" viewBox="0 0 24 24" height="14" width="14" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" stroke="#47484b" d="M20 12L4 12"></path>
                </svg>
                </button>
                <label>{amount}</label>
                <button>
                <svg  className='img-amount' onClick={() => {
                    if (action !== 'alquiler') {
                        setAmount(amount + 1);
                    }
                }} fill="none" viewBox="0 0 24 24" height="14" width="14" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" stroke="#47484b" d="M12 4V20M20 12H4"></path>
                </svg>
                </button>
            </div>
            <label className="price small">${getPrice()}</label>
            </div>
        </div>
        </div>
        { action === 'alquiler' ?
             <div className="cardC coupons">
             <label className="title">Alquilar hasta</label>
             <div className="form">
                    <label className='alquiler-text'>Fin del alquiler:</label>
                    <DatePicker minDate={tomorrow} selected={startDate} onChange={(date) => setStartDate(date)} />
                </div>
            </div> : 
            <div className="cardC coupons">
            <div className="form">
                   <label className='alquiler-text'>Al ser una compra con el nuevo sistema hay un descuento del 100%</label>
               </div>
           </div>
        }
    
        <div className="cardC checkout">
        <label className="title">Checkout</label>
        <div className="details">
            <span>Subtotal:</span>
            <span>${getPrice()}</span>
            <span>Descuento:</span>
            <span>${getPrice()}</span>
            <span>Costos de envio:</span>
            <span>$0</span>
        </div>
        <div className="checkout--footer">
            <label className="price"><sup>$</sup>0</label>
            <button className="checkout-btn" onClick={() => pagar()}>Pagar</button>
        </div>
        </div>
        <InfoDialog isOpen={isOpen} onClose={closeInfoDialog} mensaje={mensaje} />
    </div>
  )
}
