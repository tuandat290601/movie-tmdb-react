import React, {useEffect} from 'react'
import {Banner, Header, MainContent} from "../../components"
import { useDispatch } from 'react-redux'
import { getGenres } from '../../features/movieSlice'

const Home = () => {
  const dispatch = useDispatch()
  useEffect(()=>{ 
    dispatch(getGenres())
  },[dispatch])
  return (
    <div className='home'>
      <Header/>
      <Banner/>
      <MainContent/>
    </div>
  )
}

export default Home