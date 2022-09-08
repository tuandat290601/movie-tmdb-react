import React from 'react'
import { Link } from 'react-router-dom'
import {BsChevronDown, BsSearch} from "react-icons/bs";

import "./Header.sass"

const Header = () => {
  return (
    <nav className="header">
      <div className="header-container">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-2">
              <div className="header-logo">
                <img src="http://zoa.mbkip3ms9u-e92498n216kr.p.temp-site.link/wp-content/uploads/2018/02/logo.png" alt="logo.img" />
              </div>
            </div>
            <div className="col-4">
              <div className="header-nav">
                <ul className="header-navlist">
                  <li className="header-navitem">
                    <Link to = "/">home</Link>
                    <BsChevronDown/>
                    <ul className="header-sublist">
                      <li className='header-subitem'>genres</li>
                      <li className='header-subitem'>collections</li>
                      <li className='header-subitem'>spotlight celebrities</li>
                    </ul>
                  </li>
                  <li className="header-navitem">
                    <Link to = "/">movies</Link>
                    <BsChevronDown/>
                    <ul className="header-sublist">
                      <li className='header-subitem'>genres</li>
                      <li className='header-subitem'>collections</li>
                      <li className='header-subitem'>spotlight celebrities</li>
                    </ul>
                  </li>
                  <li className="header-navitem">
                    <Link to = "/">celebrities</Link>
                    <BsChevronDown/>
                    <ul className="header-sublist">
                      <li className='header-subitem'>genres</li>
                      <li className='header-subitem'>collections</li>
                      <li className='header-subitem'>spotlight celebrities</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-4">
              <div className="header-search">
                <input type="text" placeholder='Search a movie ...'/>
                <button>
                  <BsSearch/>
                </button>
              </div>
            </div>
            <div className="col-2">
              <div className="header-account">
                <div className="header-account--info">
                  MY ACCOUNT
                </div>
                <button className="header-account--login-btn">
                  LOG IN
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header