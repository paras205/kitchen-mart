import React from "react";
import { Link } from "react-router-dom";

import MainLogo from "../assets/images/logo.png";

const Header = () => {
  return (
    <nav className="navbar navbar-bg navbar-expand-md navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand text-uppercase" to="/">
          <img src={MainLogo} alt="logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarsExample04"
          aria-controls="navbarsExample04"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarsExample04">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item  active">
              <Link className="nav-link text-uppercase" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item  active">
              <Link className="nav-link text-uppercase" to="/about-us">
                About Us
              </Link>
            </li>
            <li className="nav-item  active">
              <Link className="nav-link text-uppercase" to="/products">
                Products
              </Link>
            </li>
            <li className="nav-item  active">
              <Link className="nav-link text-uppercase" to="/services">
                Services
              </Link>
            </li>
            <li className="nav-item  active">
              <Link className="nav-link text-uppercase" to="/contact-us">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
