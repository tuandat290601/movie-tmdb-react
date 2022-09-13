import React, {useEffect} from 'react'
import {Banner, MainContent} from "../../components"
import { useDispatch } from 'react-redux'
import { getGenres } from '../../features/movieSlice'

const Home = () => {
  const dispatch = useDispatch()
  useEffect(()=>{ 
    dispatch(getGenres())
  },[dispatch])
  return (
    <div className='home'>
      <Banner/>
      <MainContent/>
    </div>
  )
}

export default Home