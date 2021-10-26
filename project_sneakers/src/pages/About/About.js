import React, { useEffect, useState, useRef } from "react";
import Navbar from "../../components/Navbar/Navbar";
import sneakersTeam from "../../assets/sneakers-team-small.webp";
import AutoplayCarrousel from "../../components/AutoplayCarrousel/AutoplayCarrousel";
import CounterUpStats from "../../components/CounterUpStats/CounterUpStats";
import Footer from "../../components/Footer/Footer";
import Loader from "../../components/Loader/Loader";
import { motion } from "framer-motion";

const About = () => {
  const position = [
    "Founder & CEO",
    "Co-Founder",
    "Business Development",
    "Creative Director",
    "Human Resources",
    "Product Strategy",
  ];

  const [users, setUsers] = useState("");
  const [counterHeight, setCounterHeight] = useState(false);
  const [loading, setLoading] = useState(true);

  const element = useRef(),
    title = useRef(),
    aboutInfo = useRef(),
    aboutInfoWomen = useRef(),
    aboutInfoMen = useRef(),
    aboutInfoTeam = useRef(),
    main = useRef(),
    border = useRef(),
    womenAbout = useRef(),
    menAbout = useRef(),
    aboutInfoTeamArticle = useRef(),
    aboutInfoTeamImages = useRef(),
    womenSneakersImg = useRef(),
    menSneakersImg = useRef(),
    womenAboutBg = useRef(),
    menAboutBg = useRef();

  const animations = () => {
    if (element.current == null) {
      return;
    }

    let scroll = window.pageYOffset;
    let headerHeight = element.current.offsetHeight;
    let aboutInfoHeight = aboutInfo.current.offsetHeight;
    let aboutInfoWomenHeight = aboutInfoWomen.current.offsetHeight;
    let aboutInfoMenHeight = aboutInfoMen.current.offsetHeight;
    let aboutInfoTeamHeight = aboutInfoTeam.current.offsetHeight;
    let mainHeight = main.current.offsetHeight;

    const height1 = headerHeight + aboutInfoHeight;
    const height2 = height1 + aboutInfoWomenHeight;
    const height3 = height2 + aboutInfoMenHeight;
    const height4 = height3 + aboutInfoTeamHeight;

    element.current.style.backgroundPosition = `center top ${scroll * -0.5}px`;
    title.current.style.opacity = 1 - scroll / (headerHeight / 2);
    aboutInfo.current.style.opacity = scroll / (headerHeight / 1.4);
    border.current.style.width = `${scroll / 25}%`;
    womenAbout.current.style.opacity = scroll / (headerHeight / 0.65);
    womenSneakersImg.current.style.transform = `rotate(${scroll * 0.012}deg)`;
    womenAboutBg.current.style.backgroundPosition = `center top ${
      (scroll - height4 / 4) * -0.6
    }px`;
    menAbout.current.style.opacity = scroll / (height3 / 1.1);
    menSneakersImg.current.style.transform = `rotate3d(${
      scroll / 10000
    },1,0,180deg)`;
    menAboutBg.current.style.backgroundPosition = `center top ${
      ((scroll - height2) / 4) * -0.8
    }px`;
    if (scroll > height2 + aboutInfoMenHeight / 3) {
      aboutInfoTeamArticle.current.style.animation = `scroll-reveal 2s ease-in forwards`;
      aboutInfoTeamImages.current.style.animation = `scroll-reveal 2s ease-in forwards`;
    }

    if (scroll > mainHeight) {
      setCounterHeight(true);
    }
  };

  //FETCH API
  const randomUserApi = async () => {
    const response = await fetch(
      "https://randomuser.me/api/?results=6&&inc=name,email,phone,picture,nat&&nat=au,br,ca,ch,de,dk,es,fi,fr,gb,ie,no,nl,nz,tr,us"
    );
    const responseJSON = await response.json();
    setUsers(responseJSON.results);
    setLoading(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", animations);
    randomUserApi();
    return () => {
      window.removeEventListener("scroll", animations);
    };
  }, []);

  return (
    <>
      {loading ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Loader />
        </motion.div>
      ) : (
        <motion.div
          className="about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          <header>
            <Navbar />
            <div className="about-header" ref={element}>
              <div className="wrap-text-about" ref={title}>
                <h2>We make your move</h2>
              </div>
            </div>
          </header>
          <main ref={main}>
            <div className="about-info" ref={aboutInfo}>
              <div className="about-title-description">
                <h2>
                  About Us
                  <div className="border" ref={border}></div>
                </h2>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Pariatur iste voluptas distinctio corporis rem vero, harum
                  nulla, doloremque, sed voluptatum ullam! Tempore ut quam
                  expedita nam in pariatur nemo aliquid doloremque unde
                  molestiae nihil quasi ad atque, saepe minus placeat
                  perferendis quis sit nesciunt facilis! Aliquid praesentium
                  facere iure repellat. <br />
                  <br />
                  Pariatur nemo aliquid doloremque unde molestiae nihil quasi ad
                  atque, saepe minus placeat perferendis quis sit nesciunt
                  facilis! Aliquid praesentium facere iure repellat.
                </p>
              </div>
              <img
                className="about-team-img"
                src={sneakersTeam}
                alt="sneakers-team"
              />
            </div>
            <div className="about-info-women" ref={aboutInfoWomen}>
              <div className="about-info-bg" ref={womenAboutBg}></div>
              <section>
                <div className="sneaker-women-img" ref={womenSneakersImg}></div>
                <article ref={womenAbout}>
                  <h2>Women</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nisi neque, soluta, veniam nihil aut, repellendus hic vitae
                    quas minus nesciunt inventore corrupti eaque. Eos, porro
                    blanditiis soluta quas reiciendis voluptatem hic possimus
                    incidunt officiis exercitationem. Accusamus.
                  </p>
                </article>
              </section>
            </div>
            <div className="about-info-men" ref={aboutInfoMen}>
              <div className="about-info-bg" ref={menAboutBg}></div>
              <section>
                <article ref={menAbout}>
                  <h2>Men</h2>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Corrupti tempore illo id nisi, voluptate culpa dolor, enim
                    minima sint quidem veritatis atque. Voluptatum nemo
                    inventore obcaecati Corrupti tempore illo id nisi quas
                    cupiditate eaque quisquam,enim minima sint quidem veritatis.
                  </p>
                </article>
                <div className="sneaker-men-img" ref={menSneakersImg}></div>
              </section>
            </div>
            <div className="about-info-team" ref={aboutInfoTeam}>
              <article ref={aboutInfoTeamArticle}>
                <h2>Meet Our Team</h2>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde
                  minima quas aspernatur incidunt corrupti delectus voluptates
                  molestiae vitae cumque? Cum, voluptates quae voluptas
                  molestias nam veniam iure tempore earum accusamus, esse
                  molestiae aliquam dolores. Facilis libero voluptatem quisquam
                  nam explicabo, veniam iure saepe nisi error aliquid commodi
                  hic debitis quidem.
                </p>
              </article>
              <div className="team-info" ref={aboutInfoTeamImages}>
                {!users
                  ? "Charging..."
                  : users.map((user, index) => {
                      return (
                        <div key={index} className={`team-member-${index + 1}`}>
                          <img src={user.picture.large} alt="" />
                          <h2>
                            {user.name.first}&nbsp;{user.name.last}
                          </h2>
                          <p>{position[index]}</p>
                          <p>
                            <i className="far fa-envelope"></i>
                            &nbsp;&nbsp;{user.email}
                          </p>
                          <p>
                            <i className="fas fa-phone"></i>&nbsp;{user.phone}
                          </p>
                        </div>
                      );
                    })}
              </div>
            </div>
            <AutoplayCarrousel />
            <CounterUpStats counterHeight={counterHeight} />
          </main>
          <Footer />
        </motion.div>
      )}
    </>
  );
};

export default About;
