import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import YouTube from 'react-youtube'
import { getMovieTrailer, getUpcoming } from '../../../features/movieSlice'
import { BsChevronRight } from "react-icons/bs";


import "./UpComing.sass"

const UpComing = () => {
    const dispatch = useDispatch()
    const { upcoming, trailerKey } = useSelector(store => store.movie)
    const [displayList, setDisplayList] = useState([])
    const [currentDisplay, setCurrentDisplay] = useState()
    useEffect(() => {
        dispatch(getUpcoming())
    }, [dispatch])
    useEffect(() => {
        setDisplayList(upcoming)
        setCurrentDisplay(upcoming[0])
    }, [upcoming])
    useEffect(() => {
        if (currentDisplay !== undefined) {
            dispatch(getMovieTrailer(currentDisplay.id))
        }
    }, [currentDisplay, dispatch])
    return (
        <section className='upcoming'>
            <div className="row">
                <div className="col-9">
                    <div className="upcoming-header pe-5 mb-5">
                        <div className='upcoming-title'>UPCOMING</div>
                        <button>
                            VIEW ALL
                            <BsChevronRight />
                        </button>
                    </div>
                </div>
            </div>
            <div className="upcoming-body">
                <div className="row d-flex flex-column flex-md-row">
                    <div className="col-9 pe-5">
                        <div className="upcoming-trailer">
                            {trailerKey !== "" &&
                                <YouTube
                                    className='youtube'
                                    videoId={trailerKey}
                                />
                            }
                        </div>
                    </div>
                    <div className="col-3 ps-4">
                        <div className="upcoming-list">
                            {displayList.length > 0 && displayList.map((movie) => {
                                const { id, title, release_date, poster_path } = movie
                                const formatedDate = new Date(release_date).toLocaleDateString()

                                return <div key={id} className='pt-3 pb-3'>
                                    <div className="upcoming-card" onClick={() => { dispatch(getMovieTrailer(id)) }}>
                                        <div className="row">
                                            <div className="col-4">
                                                <div className="upcoming-thumb">
                                                    <img src={`https://image.tmdb.org/t/p/original${poster_path}`} alt={title} />
                                                </div>
                                            </div>
                                            <div className="col-8">
                                                <div className="upcoming-info">
                                                    <div className="upcoming-name">
                                                        {title}
                                                    </div>
                                                    <div className="upcoming-release-date">
                                                        Release Date: {formatedDate}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default UpComing