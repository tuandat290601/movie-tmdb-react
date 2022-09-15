import React from 'react'
import { Filter, MovieList } from '../../components'
import "./Movies.sass"

const Movies = () => {
    return (
        <div className='movies'>
            <div className="container d-flex flex-column">
                <h1 className='title'>

                </h1>
                <div className="filter-container">
                    <Filter />
                </div>
                <div className="movie-list-container">
                    <MovieList />
                </div>
            </div>
        </div>
    )
}

export default Movies