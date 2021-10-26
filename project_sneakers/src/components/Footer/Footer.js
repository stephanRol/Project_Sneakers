import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/trainers.webp";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container-above">
          <div className="container-1">
            <div className="logo">
              <img className="logo-img" src={logo} alt="" />
              <h2>
                <Link to="/" className="logo-text">
                  SNEAKERS
                </Link>
              </h2>
            </div>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod,
              saepe nihil ducimus quo sint quas praesentium laborum, adipisci
              possimus incidunt error qui dolorem, exercitationem reprehenderit
              eos. Alias tempore esse ad!
            </p>
          </div>
          <div className="container-2">
            <p>Product</p>
            <Link className="footer-link" to="/">
              <span>Terms & Conditions</span>
            </Link>
            <Link className="footer-link" to="/">
              Privacy Policy
            </Link>
            <Link className="footer-link" to="/">
              Project Protection
            </Link>
            <Link className="footer-link" to="/">
              FAQ's
            </Link>
          </div>
          <div className="container-3">
            <p>About</p>
            <Link className="footer-link" to="/">
              Team
            </Link>
            <Link className="footer-link" to="/">
              Blog
            </Link>
            <Link className="footer-link" to="/">
              Contact
            </Link>
            <Link className="footer-link" to="/">
              Store
            </Link>
          </div>
          <div className="container-4">
            <form>
              <h2>Sign up to our Newsletter</h2>
              <input placeholder="Email" type="email" />
              <button>SUBSCRIBE</button>
              <div className="social-media">
                <a
                  className="icons"
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-facebook"></i>
                </a>
                <a
                  className="icons"
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a
                  className="icons"
                  href="https://www.twitter.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  className="icons"
                  href="https://www.pinterest.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-pinterest"></i>
                </a>
              </div>
            </form>
          </div>
        </div>
        <div className="border-footer"></div>
        <div className="container-below">
          <p>
            Copyright &copy; 2021 Sneakers GmbH Created by{" "}
            <a
              href="https://github.com/stephanRol"
              target="_blank"
              rel="noreferrer"
            >
              StepDevs
            </a>{" "}
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
