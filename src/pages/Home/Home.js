import React, { useEffect } from 'react'
import { Banner, MainContent, Popup } from "../../components"
import { useDispatch, useSelector } from 'react-redux'
import { getGenres } from '../../features/movieSlice'
import YouTube from 'react-youtube'

const Home = () => {
  const dispatch = useDispatch()
  const isPopupShow = useSelector(store => store.movie.isPopupShow)
  const trailerKey  = useSelector(store => store.movie.trailerKey)
  
  useEffect(() => {
    dispatch(getGenres())
  }, [dispatch])
  
  const YoutubePopup = () => {
    return <YouTube
      className='youtube'
      videoId={trailerKey}
    />
  }
  return (
    <div className='home'>
      <Banner />
      <MainContent />
      {isPopupShow && trailerKey !== "" && <Popup children={ <YoutubePopup/> } />}
    </div>
  )
}

export default Home