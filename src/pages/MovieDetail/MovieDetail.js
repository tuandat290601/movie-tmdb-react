import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import api_BASE from '../../common/api_BASE'
import API_KEY from '../../common/api_KEY'
import { BsPlayCircle } from "react-icons/bs";
import { BiLinkExternal } from "react-icons/bi";
import Flickity from 'flickity'
import { setIsPopupShow, getMovieTrailer } from '../../features/movieSlice';
import { Popup } from '../../components';
import YouTube from 'react-youtube'

import "./MovieDetail.sass"
import MovieCard from '../../components/MovieCard/MovieCard';
import { useDispatch, useSelector } from 'react-redux';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const MovieDetail = () => {
  const { movie_id } = useParams()
  const dispatch = useDispatch()
  const isPopupShow = useSelector(store => store.movie.isPopupShow)
  const trailerKey = useSelector(store => store.movie.trailerKey)
  const [detail, setDetail] = useState(null)
  const [review, setReview] = useState([])
  const [relate, setRelate] = useState([])
  const [casts, setCasts] = useState([])
  const [keyword, setKeyword] = useState([])


  useEffect(() => {
    const getMovieDetail = async () => {
      api_BASE.get(`/movie/${movie_id}?api_key=${API_KEY}&language=en-US`)
        .then(res => setDetail(res.data))
      api_BASE.get(`/movie/${movie_id}/reviews?api_key=${API_KEY}&language=en-US&page=1`)
        .then(res => setReview(res.data.results))
      api_BASE.get(`/movie/${movie_id}/similar?api_key=${API_KEY}&language=en-US&page=1`)
        .then(res => setRelate(res.data.results))
      api_BASE.get(`/movie/${movie_id}/credits?api_key=${API_KEY}&language=en-US`)
        .then(res => setCasts(res.data.cast))
      api_BASE.get(`/movie/${movie_id}//keywords?api_key=${API_KEY}`)
        .then(res => setKeyword(res.data.keywords)
        )
    }
    getMovieDetail()
  }, [movie_id])
  const flickityOptions = {
    initialIndex: 0,
    autoPlay: false,
    pageDots: false,
    prevNextButtons: false,
    contain: true,
    groupCells: 6,
    imagesLoaded: true,
    lazyLoad: true
  }

  const YoutubePopup = () => {
    return <YouTube
      className='youtube'
      videoId={trailerKey}
    />
  }

  return (
    <div className='movie-detail'>
      <div className="movie-detail-header">
        {detail && <div className='container'>
          <div className="row">
            <div className="col-3">
              <div className="movie-detail-thumb">
                <img src={`https://image.tmdb.org/t/p/original/${detail.poster_path}`} alt="" />
              </div>
            </div>
            <div className="col-9">
              <div className="movie-detail-content">
                <div className="movie-detail-genres">
                  {detail.genres.map((genre, index) => {
                    return <div key={index} className={index % 2 === 0 ? 'genre genre-orange' : 'genre genre-red'}>
                      {genre.name}
                    </div>
                  })}
                </div>
                <div className="movie-detail-title">
                  <p className='main-title'>{detail.title}</p>
                  {detail.title !== detail.original_title &&
                    <p className='sub-title'>{detail.original_title}</p>
                  }
                </div>
                <div className="movie-detail-status">
                  {detail.status}
                </div>
                <div className="movie-detail-desc">
                  {detail.overview}
                </div>
                <div className="movie-detail-btn">
                  <button className="watch-trailer" onClick={() => {
                    dispatch(getMovieTrailer(movie_id))
                    dispatch(setIsPopupShow(true))
                  }}>
                    WATCH TRAILER
                    <BsPlayCircle />
                  </button>
                  {
                    detail.homepage &&
                    <a href={detail.homepage} className='home-page'>
                      See homepage
                      <BiLinkExternal />
                    </a>
                  }
                </div>
                <div className="release-date">
                  Release Date:   {new Date(detail.release_date).toLocaleDateString()}
                </div>
                <div className="vote">
                  Voting: {detail.vote_average.toFixed()}/10
                </div>
                <div className="keyword">
                  Keywords:
                  {keyword.map(key => {
                    return <div className='key' key={key.id}>
                      #{key.name}
                    </div>
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>}
      </div>
      <div className="movie-detail-body">
        <div className="container">
          <div className="movie-casts">
            <div className="title">
              <h1>Casts</h1>
            </div>
            <div className='cast-list'>
              <Flickity
                className={'carousel'}
                elementType={'div'}
                options={flickityOptions}
                disableImagesLoaded={false}
              >
                {casts.map(cast => {
                  if (cast.profile_path === null) {
                    return null
                  }
                  return (
                    <div className='cast-card' key={cast.id}>
                      <div className="cast-thumb">
                        <LazyLoadImage
                          img src={`https://image.tmdb.org/t/p/original/${cast.profile_path}`}
                          alt={cast.name}
                        />
                      </div>
                      <div className="cast-name">
                        {cast.name}
                      </div>
                    </div>
                  )
                })}
              </Flickity>
            </div>
          </div>
          <div className="movie-relate">
            <div className="title">
              <h1>Something you might interesting</h1>
            </div>
            <div className="relate-list">
              <Flickity
                className={'carousel'}
                elementType={'div'}
                options={flickityOptions}
                disableImagesLoaded={false}>
                {relate.map(movie => {
                  return <MovieCard {...movie} key={movie.id} />
                })}
              </Flickity>
            </div>
          </div>
        </div>
      </div>
      <div className="movie-detail-footer">
        <div className="movie-detail-review">
          <div className="container">
            <div className="title">
              <h1>Review</h1>
            </div>
            <div className="review-list">
              {review.length > 0 &&
                review.map((cmt) => {
                  return <div className='comment' key={cmt.id}>
                    <div className="comment-thumb">
                      {
                        cmt.author_details.avatar_path ?
                          <>
                            {cmt.author_details.avatar_path.indexOf("http") !== -1
                              ?
                              <img src={cmt.author_details.avatar_path.substring(1)} alt={cmt.author_details.username} />
                              :
                              <img src={`https://image.tmdb.org/t/p/original${cmt.author_details.avatar_path}`} alt={cmt.author_details.username} />}
                          </>
                          :
                          <img src="https://www.freeiconspng.com/thumbs/male-icon/male-icon-4.jpg" alt="" />
                      }
                    </div>
                    <div className="comment-content">
                      <div className="name">
                        {cmt.author}
                      </div>
                      <div className="content">
                        {cmt.content}
                      </div>
                      <div className="info">
                        <div className="rating">
                          Rating: {cmt.author_details.rating}/10
                        </div>
                        <div className="created-at">
                          Post on: {new Date(cmt.updated_at).toLocaleDateString()}
                        </div>
                      </div>
                    </div>
                  </div>
                })
              }
            </div>
          </div>
        </div>
      </div>
      {isPopupShow && trailerKey !== "" && <Popup children={<YoutubePopup />} />}

    </div>
  )
}

export default MovieDetail