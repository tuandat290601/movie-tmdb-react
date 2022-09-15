import React, { useEffect, useState } from 'react'
import { BsChevronRight } from "react-icons/bs";
import { useDispatch, useSelector } from 'react-redux';
import MovieCard from '../../MovieCard/MovieCard';
import { getPopular } from '../../../features/movieSlice';
import "./Popular.sass"

const Popular = () => {
  const dispatch = useDispatch()
  const popular = useSelector(store => store.movie.popular)
  const [display, setDisplay] = useState([])
  const [pagination, setPagination] = useState([])
  const [page, setPage] = useState(1)
  useEffect(()=>{
    dispatch(getPopular())
  },[dispatch])
  useEffect(() => {
    let initDisplay = popular.slice(0, 4)
    let max = popular.length % 4 !== 0 ? popular.length / 4 + 1 : popular.length / 4
    let pages = Array.from(Array(max).keys()).filter(num => num !== 0)
    setDisplay(initDisplay)
    setPagination(pages)
  }, [popular])

  useEffect(() => {
    let newDisplay = popular.slice((page - 1) * 4, (page - 1) * 4 + 4)
    setDisplay(newDisplay)
  }, [page, popular])

  return (
    <section className='popular'>
      <div className="popular-header">
        <div className="popular-header--title">
          POPULAR
        </div>
        <button className="popular-header--viewall">
          VIEW ALL
          <BsChevronRight />
        </button>
      </div>
      <div className="popular-body">
        <div className="row">
          {display.map((movie) => {
            return <div key={movie.id} className='col-3 p-2'>
              <MovieCard {...movie} />
            </div>
          })}
        </div>
      </div>
      <div className="popular-footer">
      {page === 1 ? null : <div className='pre' onClick={()=>setPage(page=>page-1)}>Prev</div>}
        <div className="pagination">
          {pagination.map((num) => {
            return <p key={num} className={num === page ? 'page-number current-page' : 'page-number'} onClick={() => setPage(num)}>{num}</p>
          })}
        </div>
        {page === pagination.length ? null : <div className='next' onClick={()=>setPage(page=>page+1)}>Next</div>}
      </div>
    </section>
  )
}

export default Popular