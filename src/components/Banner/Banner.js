import React, { useEffect } from 'react'
import BannerCard from "./BannerCard/BannerCard"
import "./Banner.sass"
import { useDispatch, useSelector } from 'react-redux'
import { getNowPlaying } from '../../features/movieSlice'
import Flickity from 'react-flickity-component'

const flickityOptions = {
  initialIndex: 0,
  autoPlay: 3000,
  pageDots: false,
  prevNextButtons: false,
  pauseAutoPlayOnHover: true,
  wrapAround: true
}
const Banner = () => {
  const  nowPlaying  = useSelector(store => store.movie.nowPlaying)
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getNowPlaying(1))
  },[dispatch])
  return (
    <section className='banner'>
      <div className="banner-container">
        <Flickity
          className={'carousel'} 
          elementType={'div'} 
          options={flickityOptions} 
          disableImagesLoaded={false} 
          reloadOnUpdate
          static
        >
          {nowPlaying.map((movie) => {
              return <BannerCard key = {movie.id} {...movie}/>
            })}
        </Flickity>

      </div>
      <div className="banner-blur">
      </div>
    </section>
  )
}

export default Banner