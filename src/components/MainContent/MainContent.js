import React from 'react'
import Advertisement from './Advertisement/Advertisement'
import Celebrities from './Celebrities/Celebrities'
import "./MainContent.sass"
import Popular from './Popular/Popular'
import TopRate from './TopRate/TopRate'
import UpComing from './UpComing/UpComing'

const MainContent = () => {
  console.log("Main render")
  return (
    <main className='main'>
      <div className="first-block">
        <div className="container">
          <div className="row">
            <div className="col-9 pe-5">
              <Popular />
              <TopRate />
            </div>
            <div className="col-3">
              <Advertisement/>
              <Celebrities />
            </div>
          </div>
        </div>
      </div>
      <div className="second-block">
        <div className="container">
          <UpComing />
        </div>
      </div>
    </main>
  )
}

export default MainContent