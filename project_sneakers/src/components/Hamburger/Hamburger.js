import React, { useState } from "react";

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
          <li className="hamburger-menu-list">Home</li>
          <li className="hamburger-menu-list">About</li>
          <li className="hamburger-menu-list">Sneakers</li>
          <li className="hamburger-menu-list">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Hamburger;
