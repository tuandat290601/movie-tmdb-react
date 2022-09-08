import React, { useEffect, useState } from 'react'
import { BsChevronRight } from "react-icons/bs";
import { useDispatch, useSelector } from 'react-redux';
import MovieCard from '../../MovieCard/MovieCard';
import { getToprate } from '../../../features/movieSlice';
import "./TopRate.sass"

const TopRate = () => {
  const dispatch = useDispatch()
  const { toprate } = useSelector(store => store.movie)
  const [display, setDisplay] = useState([])
  const [pagination, setPagination] = useState([])
  const [page, setPage] = useState(1)

  useEffect(()=>{
    dispatch(getToprate())
  },[dispatch])
  useEffect(() => {
    let initDisplay = toprate.slice(0, 4)
    let max = toprate.length % 4 !== 0 ? toprate.length / 4 + 1 : toprate.length / 4
    let pages = Array.from(Array(max).keys()).filter(num => num !== 0)
    setDisplay(initDisplay)
    setPagination(pages)
  }, [toprate])

  useEffect(() => {
    let newDisplay = toprate.slice((page - 1) * 4, (page - 1) * 4 + 4)
    setDisplay(newDisplay)
  }, [page, toprate])

  return (
    <section className='toprate'>
      <div className="toprate-header">
        <div className="toprate-header--title">
          TOP RATE
        </div>
        <button className="toprate-header--viewall">
          VIEW ALL
          <BsChevronRight />
        </button>
      </div>
      <div className="toprate-body">
        <div className="row">
          {display.map((movie) => {
            return <div key={movie.id} className='col-3 p-2'>
              <MovieCard {...movie} />
            </div>
          })}
        </div>
      </div>
      <div className="toprate-footer">
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

export default TopRate