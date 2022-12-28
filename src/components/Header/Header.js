import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { BsChevronDown } from "react-icons/bs";

import "./Header.sass";
import { useDispatch } from "react-redux";
import { setMovieListKey } from "../../features/movieSlice";
import Search from "./Search/Search";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleHeader = (e) => {
    dispatch(setMovieListKey(e.target.innerHTML));
    navigate("/movies");
  };

  return (
    <nav className="header">
      <div className="header-container">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-2">
              <Link to="/" className="header-logo">
                <img
                  src="http://buster.mbkip3ms9u-e92498n216kr.p.temp-site.link/wp-content/uploads/2018/02/logo.png"
                  alt="logo.img"
                />
              </Link>
            </div>
            <div className="col-4">
              <div className="header-nav">
                <ul className="header-navlist">
                  <li className="header-navitem">
                    <Link to="/">home</Link>
                  </li>
                  <li className="header-navitem">
                    <Link
                      to="/movies"
                      onClick={() => dispatch(setMovieListKey("All"))}
                    >
                      movies
                    </Link>
                    <BsChevronDown />
                    <ul className="header-sublist" onClick={handleHeader}>
                      <li className="header-subitem">All</li>
                      <li className="header-subitem">popular</li>
                      <li className="header-subitem">top rate</li>
                      <li className="header-subitem">now playing</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-4">
              <Search />
            </div>
            <div className="col-2">
              <div className="header-account">
                <div className="header-account--info">MY ACCOUNT</div>
                <button className="header-account--login-btn">LOG IN</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
