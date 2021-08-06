import React, { useState } from "react";
import { Link } from "react-router-dom";

const Hamburger = () => {
  const [isActive, setIsActive] = useState("false");

  let menuHamburger = () => {
    setIsActive(!isActive);
  };

  return (
    <div>
      <button
        className={
          isActive
            ? "hamburger hamburger--squeeze "
            : "is-active hamburger hamburger--squeeze "
        }
        onClick={menuHamburger}
        type="button"
      >
        <span className="hamburger-box">
          <span className="hamburger-inner"></span>
        </span>
      </button>
      <div className={isActive ? "black-bg" : "is-active black-bg"}>
        <ul>
          <li className="hamburger-menu-list">
            <Link to="/" className="hamburger-menu-list">
              Home
            </Link>
          </li>
          <li className="hamburger-menu-list">
            <Link to="/about" className="hamburger-menu-list">
              About
            </Link>
          </li>
          <li className="hamburger-menu-list">
            <Link to="/sneakers" className="hamburger-menu-list">
              Sneakers
            </Link>
          </li>
          <li className="hamburger-menu-list">
            <Link to="/contact" className="hamburger-menu-list">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Hamburger;
