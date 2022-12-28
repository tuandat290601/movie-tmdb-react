import React from "react";
import { Link } from "react-router-dom";
import { BsChevronRight } from "react-icons/bs";
import { AiOutlineMail, AiOutlineArrowUp } from "react-icons/ai";
import "./Footer.sass";

import logoIMG from "../../assets/img/logo.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-container">
          <div className="row">
            <div className="col-3">
              <div className="footer-info">
                <div className="footer-info-thumb">
                  <img src={logoIMG} alt="logo" />
                </div>
                <div className="footer-info-content">
                  <div className="address">
                    5th Avenue st, manhattan
                    <br />
                    New York, NY 10001
                  </div>
                  <div className="phone">
                    Call us:
                    <span>(+01) 202 342 6789</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="footer-extra">
                <div className="row">
                  <div className="col-4">
                    <div className="footer-title">Resources</div>
                    <div className="footer-list">
                      <Link to="/">About Block Buster</Link>
                      <Link to="/">Contact Us</Link>
                      <Link to="/">Forums</Link>
                      <Link to="/">Blog</Link>
                      <Link to="/">Help Center</Link>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="footer-title">Account</div>
                    <div className="footer-list">
                      <Link to="/">My Account</Link>
                      <Link to="/">Watchlist</Link>
                      <Link to="/">Collections</Link>
                      <Link to="/">User Guide</Link>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="footer-title">Legal</div>
                    <div className="footer-list">
                      <Link to="/">Terms of Use</Link>
                      <Link to="/">Privacy Policy</Link>
                      <Link to="/">Security</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="footer-title">Newsletter</div>
              <div className="footer-contact">
                <p>
                  Subscribe to our newsletter system now to get latest news from
                  us
                </p>
                <form className="footer-email">
                  <input type="text" placeholder="Enter your email" />
                  <button type="submit">
                    <AiOutlineMail />
                  </button>
                </form>
                <button type="button">
                  SUBSCRIBE NOW
                  <BsChevronRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="copy-right">
          © 2018 Blockter. All Rights Reserved. Designed by{" "}
          <span>BoostifyThemes</span>.
        </div>
        <div className="back-to-top">
          Back to top
          <AiOutlineArrowUp />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
