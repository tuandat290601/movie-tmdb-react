import React from 'react'
import { useDispatch } from 'react-redux'
import { setIsPopupShow } from '../../features/movieSlice'
import "./Popup.sass"

const Popup = ({ children }) => {
    const dispatch = useDispatch()

    return (
        <div className='popup'>
            <div className="popup-container">
                <div className="blur" onClick={() => dispatch(setIsPopupShow(false))}></div>
                <div className="content" onClick={(e) => {
                    if (e.target.className === "content") {
                        dispatch(setIsPopupShow(false))
                    }
                }}>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Popup