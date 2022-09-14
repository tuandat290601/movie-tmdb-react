import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { BsFillPlayFill, BsFillShareFill } from "react-icons/bs";
import { CgDetailsMore } from "react-icons/cg";

import "./BannerCard.sass"
import { Link } from 'react-router-dom';
import { setIsPopupShow, getMovieTrailer } from '../../../features/movieSlice';

const BannerCard = (movie) => {
    const { genres } = useSelector(store => store.movie)
    const { id, genre_ids, overview, poster_path, release_date, title, vote_average } = movie
    const dispatch = useDispatch()
    const formatedDate = new Date(release_date).toLocaleDateString()
    return (
        <div className="banner-card">
            <div className="container">
                <div className="row">
                    <div className="col-6 col-md-9">
                        <div className="card-info">
                            <div className="card-info--genres">
                                {genres.length > 0 && genre_ids.map((genre, index) => {
                                    return <div key={genre} className={index % 2 === 0 ? 'genre genre-orange' : 'genre genre-red'}>
                                        {genres.find(gen => gen.id === genre).name}
                                    </div>
                                })}
                            </div>
                            <div className="card-info--title">
                                {title}
                            </div>
                            <div className="card-info--desc d-none d-md-block">
                                {overview}
                            </div>
                            <div className="card-info--navigate d-flex flex-column flex-md-row">
                                <button className="navigate watch" onClick={() => {
                                    dispatch(getMovieTrailer(id))
                                    dispatch(setIsPopupShow(true))
                                }}>
                                    <div className="icon">
                                        <BsFillPlayFill />
                                    </div>
                                    WATCH TRAILER
                                </button>
                                <button className="navigate share">
                                    <div className="icon">
                                        <BsFillShareFill />
                                    </div>
                                    SHARE
                                </button>
                                <Link to={`/movie/${id}`} className="more-detail">
                                    <CgDetailsMore />
                                    MORE DETAIL
                                </Link>
                            </div>
                            <div className="card-info--bottom">
                                <div className="detail"><span>Rating:</span> {vote_average}/10</div>
                                <div className="detail"><span>Release Date:</span> {formatedDate}</div>
                            </div>
                        </div>
                    </div>

                    <div className="col-6 col-md-3">
                        <div className="card-thumbnail">
                            <img src={`https://image.tmdb.org/t/p/original${poster_path}`} alt={title} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BannerCard