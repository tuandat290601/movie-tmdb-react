import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllMovie, getNowPlaying, getPopular, getToprate } from '../../features/movieSlice'
import MovieCard from '../MovieCard/MovieCard'
import "./MovieList.sass"
const MovieList = () => {
  const dispatch = useDispatch()
  const movieList = useSelector(store => store.movie.movieList)
  const  movieListKey  = useSelector(store => store.movie.movieListKey)
  const pages = [1, 2, 3, 4]
  const [page, setPage] = useState(1)

  const [key, setKey] = useState(movieListKey)

  useEffect(() => {
    if(key !== movieListKey){
      setPage(1)
    }
    setKey(movieListKey)
    switch (movieListKey) {
      case "now playing":
        dispatch(getNowPlaying(page))
        return
      case "popular":
        dispatch(getPopular(page))
        return
      case "top rate":
        dispatch(getToprate(page))
        return
      default:
        dispatch(getAllMovie(page))
    }
  }, [dispatch, movieListKey, page, key])

  return (
    <>
      <div className='movie-list'>
        <div className="row">
          {movieList.map((movie) => {
            return <div className='col-4 col-md-3 mb-5 movie-card-size' key={movie.id}>
              <MovieCard {...movie} />
            </div>
          })}
        </div>
      </div>
      <div className="movie-list-pagination">
        {page !== 1 &&
          <button onClick = {()=>setPage(page - 1)}> Pre </button>
        }
        {pages.map((p) => {
          return <p key = {p} className = {p === page ? "current-page" : ""} onClick = {()=>setPage(p)}>{p}</p>
        })}
        {page !== 4 &&
          <button onClick = {()=>setPage(page + 1)}> Next </button>
        }
      </div>
    </>
  )
}

export default MovieList