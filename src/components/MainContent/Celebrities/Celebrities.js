import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CelebrityCard from './CelebrityCard/CelebrityCard'
import { BsChevronRight } from "react-icons/bs";
import { getCelebrities } from '../../../features/movieSlice';
import "./Celebrities.sass"

const Celebrities = () => {
  const dispatch = useDispatch()
  const { celebrities } = useSelector(store => store.movie)
  useEffect(()=>{
    dispatch(getCelebrities())
  },[dispatch])
  return (
    <div className='celebrities mt-5'>
      <div className="celebrities-header mb-5">
        <h3>SPOTLIGHT CELEBRITIES</h3>
      </div>
      <div className="celebrities-body">
        {celebrities.slice(0, 5).map((celeb) => {
          return <div className='pt-2 pb-2' key={celeb.id}>
            <CelebrityCard  {...celeb} />
          </div>
        })}
      </div>
      <div className="celebrities-footer mt-3">
        <button>
          VIEW ALL
          <BsChevronRight />
        </button>
      </div>
    </div>
  )
}

export default Celebrities