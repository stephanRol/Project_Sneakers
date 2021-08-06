import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/trainers.webp";
import Hamburger from "../Hamburger/Hamburger";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <img className="navbar__logo-img" src={logo} alt="" />
        <h2>
          <Link to="/" className="navbar__logo-text">
            SNEAKERS
          </Link>
        </h2>
      </div>
      <Hamburger />
      <ul className="navbar__items">
        <li>
          <Link to="/" className="navbar__item" data-text="Home">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="navbar__item">
            About
          </Link>
        </li>
        <li>
          <Link to="/sneakers" className="navbar__item">
            Sneakers
          </Link>
        </li>
        <li>
          <Link to="/contact" className="navbar__item">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
