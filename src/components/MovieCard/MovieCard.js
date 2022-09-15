import React from 'react'
import { BsFillPlayFill } from "react-icons/bs";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';


import "./MovieCard.sass"
const MovieCard = (movie) => {
    const { id, title, poster_path } = movie
    return (
        <div className='movie-card'>
            <div className="movie-card-thumb">
                <LazyLoadImage
                    effect='blur'
                    src={`https://image.tmdb.org/t/p/original${poster_path}`}
                    alt={title}
                />
            </div>
            <div className="movie-card-blur">
            </div>
            <div className="movie-card-title">
                {title}
            </div>
            <div className="movie-card-button">
                <Link to={`/movie_detail/${id}`}>
                    <BsFillPlayFill />
                </Link>
            </div>
        </div>
    )
}

export default MovieCard