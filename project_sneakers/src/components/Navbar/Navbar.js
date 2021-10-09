import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/trainers.webp";
import Hamburger from "../Hamburger/Hamburger";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const refNavbar = useRef();

  const animations = () => {
    let scroll = window.scrollY;
    if (scroll > 500) {
      setNavbar(true);
    } else if (scroll > 0 && scroll < 20) {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", animations);
    return () => {
      window.removeEventListener("scroll", animations);
    };
  }, []);

  return (
    <nav className={navbar ? "navbar active" : "navbar"} ref={refNavbar}>
      <div className="logo">
        <img src={logo} alt="logo" />
        <h2>
          <Link to="/" className="logo-text">
            SNEAKERS
          </Link>
        </h2>
      </div>
      <Hamburger />
      <ul className="items">
        <li>
          <Link to="/" className="item" data-text="Home">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="item">
            About
          </Link>
        </li>
        <li>
          <Link to="/sneakers" className="item">
            Sneakers
          </Link>
        </li>
        <li>
          <Link to="/contact" className="item">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
