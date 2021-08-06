import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import sneakersTeam from "../../assets/sneakers-team-small.webp";

const About = () => {
  useEffect(() => {
    const element = document.querySelector(".about-header");
    const title = document.querySelector(".wrap-text-about");
    const aboutInfo = document.querySelector(".about-info");
    const border = document.querySelector(".border");
    const womenAbout = document.querySelector(".about-info-2 section article");
    const womenSneakersImg = document.querySelector(".sneaker-women-img");
    const womenAboutBg = document.querySelector(".about-info-bg");

    window.addEventListener("scroll", () => {
      let scroll = window.pageYOffset;
      let headerHeight = element.offsetHeight;

      console.log(scroll);
      // element.style.transform = `translateY(${scroll * -0.5}px)`;
      element.style.backgroundPosition = `center top ${scroll * -0.5}px`;
      title.style.opacity = 1 - scroll / (headerHeight / 2);
      aboutInfo.style.opacity = scroll / (headerHeight / 1.4);
      border.style.width = `${scroll / 25}%`;
      womenAbout.style.opacity = scroll / (headerHeight / 0.65);
      womenSneakersImg.style.transform = `rotate(${scroll * 0.012}deg)`;
      womenAboutBg.style.backgroundPosition = `center top ${
        (scroll - headerHeight) * -0.5
      }px`;
    });
    // return () => {
    //   cleanup
    // };
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
        <div className="about-info-2">
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
      </main>
      <footer></footer>
    </div>
  );
};

export default About;
