import React, { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom';
import { BsSearch } from "react-icons/bs";
import { useDispatch, useSelector } from 'react-redux';
import { getMovieByKeyWord } from '../../../features/movieSlice';

import { LazyLoadImage } from 'react-lazy-load-image-component';


const Search = () => {
    const dispatch = useDispatch()
    const searchList = useSelector(store => store.movie.searchList)

    const [searchKey, setSearchKey] = useState("")
    const [isSearching, setIsSearching] = useState(false)

    useEffect(() => {
        if (isSearching) {
            const timeout = setTimeout(() => {
                dispatch(getMovieByKeyWord(searchKey))
            }, 1500)
            return () => {
                clearTimeout(timeout)
            }
        }
    }, [searchKey, isSearching, dispatch])

    const onChangeInput = useCallback((e) => {
        setSearchKey(e.target.value);
        setIsSearching(true)
    }, []);

    return (
        <div className="header-search">
            <input type="text" value={searchKey} placeholder='Search a movie ...'
                onChange={onChangeInput}
            />
            <button>
                <BsSearch />
            </button>
            {searchList.length > 0 && isSearching && <div className='header-search-result'>
                {searchList.map((movie) => {
                    return <div className='abc'>
                        <Link to={`/movie_detail/${movie.id}`} className='result' key={movie.id} onClick={() => {
                            setSearchKey("")
                            setIsSearching(false)
                        }}>
                            <div className="result-thumb">
                                <LazyLoadImage
                                effect='opacity'
                                    src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                                    alt={movie.name}
                                />
                            </div>
                            <div className="result-name">
                                {movie.title}
                            </div>
                        </Link>
                    </div>
                })}
            </div>}
        </div>
    )
}

export default Search