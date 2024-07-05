import React from 'react'

export const MovieInfo = ({selectedMovie}) => {
  return (
    <div className='movie-info'>
        <p>{selectedMovie.name}</p>
        <p>{selectedMovie.desc}</p>
        <p>Director: {selectedMovie.director}</p>
        <p>Año: {selectedMovie.ano}</p>
    </div>
  )
}

