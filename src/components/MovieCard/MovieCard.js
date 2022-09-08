import React from 'react'
import { BsFillPlayFill } from "react-icons/bs";


import "./MovieCard.sass"
const MovieCard = (movie) => {
    const { id, title, poster_path } = movie
    return (
        <div className='movie-card'>
            <div className="movie-card-thumb">
                <img src={`https://image.tmdb.org/t/p/original${poster_path}`} alt={title} />
            </div>
            <div className="movie-card-blur">
            </div>
            <div className="movie-card-title">
                {title}
            </div>
            <div className="movie-card-button">
                <button>
                    <BsFillPlayFill/>
                </button>
            </div>
        </div>
    )
}

export default MovieCard