import React, { useContext }  from 'react';
import { useParams } from 'react-router-dom';
import { MovieContext } from '../components/MovieContext';
import { MovieInfo } from '../components/MovieInfo';
import { CheckOut } from '../components/CheckOut';

export const Checkout = () => {
    const { id } = useParams();
    const { action } = useParams();
    const { moviesData } = useContext(MovieContext);
    const selectedMovie = moviesData.find(movie => movie.id === parseInt(id));
    if (!selectedMovie) {
        return <div>Movie not found</div>;
    }
    return (
        <div>
            <div className='image-container'>
                <img className='image' src={selectedMovie.img} alt="movieimage" />
            </div>
            <div className='info-container'>
                <MovieInfo selectedMovie={selectedMovie}></MovieInfo>
                <CheckOut selectedMovie={selectedMovie} action={action}></CheckOut>
            </div>
        </div>
    )
}

