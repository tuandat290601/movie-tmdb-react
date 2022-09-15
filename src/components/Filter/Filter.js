import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getGenres, getMovieByGenre, setMovieListKey } from '../../features/movieSlice'
import "./Filter.sass"
const Filter = () => {
  const genres = useSelector(store => store.movie.genres)
  const movieListKey  = useSelector(store => store.movie.movieListKey)
  const dispatch = useDispatch()

  const [chosen, setChosen] = useState(movieListKey)

  useEffect(() => {
    if (genres.length === 0) {
      dispatch(getGenres())
    }
  }, [dispatch, genres])


  const handleChosen = (e) => {
    setChosen(e.target.innerHTML)
  }

  useEffect(() => {
    switch (chosen) {
      case "now playing":
        dispatch(setMovieListKey(chosen))
        return
      case "popular":
        dispatch(setMovieListKey(chosen))
        return
      case "top rate":
        dispatch(setMovieListKey(chosen))
        return
      default:
        dispatch(getMovieByGenre(chosen, 1))
    }
  }, [chosen, dispatch])

  return (
    <div className='filter-list' >
      <div className='d-flex' onClick={handleChosen}>
        <div className={chosen === "All" ? "filter chosen" : "filter"}>All</div>
        <div className={chosen === "now playing" ? "filter chosen" : "filter"}>now playing</div>
        <div className={chosen === "popular" ? "filter chosen" : "filter"}>popular</div>
        <div className={chosen === "top rate" ? "filter chosen" : "filter"}>top rate</div>
      </div>
      {genres.map((gen) => {
        return <div className={chosen === gen.id ? 'filter chosen' : 'filter'} key={gen.id} onClick={()=>setChosen(gen.id)}>
          {gen.name}
        </div>
      })}
    </div>
  )
}

export default Filter