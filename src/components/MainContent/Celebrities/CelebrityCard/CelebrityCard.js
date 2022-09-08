import React from 'react'
import "./CelebrityCard.sass"
const CelebrityCard = (celebrity) => {
    const {id, name, profile_path} = celebrity
  return (
    <div className='celebrity'>
        <div className="row">
            <div className="col-4">
                <div className="celebrity-thumb">
                    <img src={`https://image.tmdb.org/t/p/original${profile_path}`} alt={name} />
                </div>
            </div>
            <div className="col-8">
                <div className="celebrity-info">
                    <div className="name">
                        {name}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CelebrityCard