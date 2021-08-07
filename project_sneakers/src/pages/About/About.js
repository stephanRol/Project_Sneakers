import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import sneakersTeam from "../../assets/sneakers-team-small.webp";

const About = () => {
  const animations = () => {
    const element = document.querySelector(".about-header");
    const title = document.querySelector(".wrap-text-about");
    const aboutInfo = document.querySelector(".about-info");
    const aboutInfoWomen = document.querySelector(".about-info-women");
    const aboutInfoMen = document.querySelector(".about-info-men");
    const main = document.querySelector("main");
    const border = document.querySelector(".border");
    const womenAbout = document.querySelector(
      ".about-info-women section article"
    );
    const menAbout = document.querySelector(".about-info-men section article");
    const womenSneakersImg = document.querySelector(".sneaker-women-img");
    const menSneakersImg = document.querySelector(".sneaker-men-img");
    const womenAboutBg = document.querySelector(
      ".about-info-women .about-info-bg"
    );
    const menAboutBg = document.querySelector(".about-info-men .about-info-bg");

    let scroll = window.pageYOffset;
    let headerHeight = element.offsetHeight;
    let aboutInfoHeight = aboutInfo.offsetHeight;
    let aboutInfoWomenHeight = aboutInfoWomen.offsetHeight;
    let aboutInfoMenHeight = aboutInfoMen.offsetHeight;
    let mainHeight = main.offsetHeight;

    // console.log("-------------------------------------------");
    // console.log("scroll: " + scroll);
    // console.log("headerHeight" + headerHeight);
    // console.log("aboutInfoHeight" + aboutInfoHeight);
    // console.log("aboutInfoWomenHeight" + aboutInfoWomenHeight);

    // element.style.transform = `translateY(${scroll * -0.5}px)`;
    element.style.backgroundPosition = `center top ${scroll * -0.5}px`;
    title.style.opacity = 1 - scroll / (headerHeight / 2);
    aboutInfo.style.opacity = scroll / (headerHeight / 1.4);
    border.style.width = `${scroll / 25}%`;
    womenAbout.style.opacity = scroll / (headerHeight / 0.65);
    womenSneakersImg.style.transform = `rotate(${scroll * 0.012}deg)`;
    womenAboutBg.style.backgroundPosition = `center top ${
      (scroll - (headerHeight + aboutInfoHeight / 3)) * -0.6
    }px`;

    menAbout.style.opacity =
      scroll /
      ((headerHeight +
        aboutInfoHeight +
        aboutInfoWomenHeight +
        aboutInfoMenHeight) /
        1.1);
    menSneakersImg.style.transform = `rotate3d(${scroll / 10000},1,0,180deg)`;
    menAboutBg.style.backgroundPosition = `center top ${
      ((scroll - (headerHeight + aboutInfoHeight + aboutInfoWomenHeight)) / 4) *
      -0.8
    }px`;
  };

  useEffect(() => {
    window.addEventListener("scroll", animations);
    return () => {
      window.removeEventListener("scroll", animations);
    };
  }, []);

  return (
    <div className="about">
      <header>
        <div className="about-header">
          <Navbar />
          <div className="wrap-text-about">
            <h2>We make your move</h2>
          </div>
        </div>
      </header>
      <main>
        <div className="about-info">
          <div className="about-title-description">
            <h2>
              About Us
              <div className="border"></div>
            </h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur
              iste voluptas distinctio corporis rem vero, harum nulla,
              doloremque, sed voluptatum ullam! Tempore ut quam expedita nam in
              pariatur nemo aliquid doloremque unde molestiae nihil quasi ad
              atque, saepe minus placeat perferendis quis sit nesciunt facilis!
              Aliquid praesentium facere iure repellat. <br />
              <br />
              Pariatur nemo aliquid doloremque unde molestiae nihil quasi ad
              atque, saepe minus placeat perferendis quis sit nesciunt facilis!
              Aliquid praesentium facere iure repellat.
            </p>
          </div>
          <img
            className="about-team-img"
            src={sneakersTeam}
            alt="sneakers-team"
          />
        </div>
        <div className="about-info-women">
          <div className="about-info-bg"></div>
          <section>
            <div className="sneaker-women-img"></div>
            <article>
              <h2>Women</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                neque, soluta, veniam nihil aut, repellendus hic vitae quas
                minus nesciunt inventore corrupti eaque. Eos, porro blanditiis
                soluta quas reiciendis voluptatem hic possimus incidunt officiis
                exercitationem. Accusamus.
              </p>
            </article>
          </section>
        </div>
        <div className="about-info-men">
          <div className="about-info-bg"></div>
          <section>
            <article>
              <h2>Men</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti tempore illo id nisi, voluptate culpa dolor, enim
                minima sint quidem veritatis atque. Voluptatum nemo inventore
                obcaecati Corrupti tempore illo id nisi quas cupiditate eaque
                quisquam,enim minima sint quidem veritatis.
              </p>
            </article>
            <div className="sneaker-men-img"></div>
          </section>
        </div>
      </main>
      <footer></footer>
    </div>
  );
};

export default About;
