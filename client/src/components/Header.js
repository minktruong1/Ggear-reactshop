import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
  return (
    <>
      {/* <nav className="navbar navbar-expand-lg sticky-top bg-white">
        <div className="container">
          <link className="navbar-brand" to="/" />
          Ggear
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/category" className="nav-link">
                  Category
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/register" className="nav-link">
                  Signup
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/login" className="nav-link">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/cart" className="nav-link">
                  <FaShoppingCart />
                  (0)
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav> */}

      <nav className="navbar navbar-expand-lg sticky-top bg-body-tertiary">
        <div className="container-fluid container">
          <Link to="/" className="navbar-brand">
            🛒 Ecommerce App
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink to="/" className="nav-link ">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/category" className="nav-link ">
                  Category
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/register" className="nav-link">
                  Register
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/login" className="nav-link">
                  Login
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/cart" className="nav-link">
                  <FaShoppingCart /> (0)
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
