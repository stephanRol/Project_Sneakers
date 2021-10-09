import React, { useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { motion } from "framer-motion";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      className="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ y: "-100vh" }}
      transition={{ duration: 0.4 }}
    >
      <Navbar />
      <main className="main-home">
        <div className="main-title">
          <h3 className="main-title-1">New</h3>
          <h3 className="main-title-2">Spring</h3>
          <h3 className="main-title-3">Collection</h3>
        </div>

        <div className="glassmorphism-box">
          <div className="glassmorphism">
            <div className="sneaker-home-img"></div>
          </div>
        </div>
      </main>
      <div className="social-media-icons">
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
    </motion.div>
  );
};

export default Home;
