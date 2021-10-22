import React, { useEffect, useRef } from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import { useForm } from "../../hooks/useForm";
import logoImg from "../../assets/trainers.webp";
import { motion } from "framer-motion";

const initialForm = {
  name: "",
  email: "",
  subject: "",
  comments: "",
};

const validationsForm = (form) => {
  let errors = {};
  let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
  let regexComments = /^.{1,255}$/;

  if (!form.name.trim()) {
    errors.name = "'Name' field is required";
  } else if (!regexName.test(form.name.trim())) {
    errors.name = "The name field accepts only letters and blanks.";
  }

  if (!form.email.trim()) {
    errors.email = "'Email' field is required";
  } else if (!regexEmail.test(form.email.trim())) {
    errors.email = "The email field is incorrect.";
  }

  if (!form.subject.trim()) {
    errors.subject = "'Subject' field is required";
  }

  if (!form.comments.trim()) {
    errors.comments = "'Comments' field is required";
  } else if (!regexComments.test(form.comments.trim())) {
    errors.comments = "The comments field must not exceed 255 characters.";
  }

  return errors;
};

const Contact = () => {
  const {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useForm(initialForm, validationsForm);

  const refheader = useRef();
  const title = useRef();
  const infoContact = useRef();
  const messageUs = useRef();

  const animations = () => {
    if (refheader.current == null) return;

    let scroll = window.scrollY;
    let headerHeight = refheader.current.offsetHeight;

    refheader.current.style.backgroundPosition = `center top ${
      scroll * -0.5
    }px`;
    title.current.style.opacity = 1 - scroll / (headerHeight / 2);
    infoContact.current.style.opacity = scroll / (headerHeight / 2.5) - 1;
    messageUs.current.style.opacity = scroll / (headerHeight / 2) - 1;
  };

  useEffect(() => {
    window.addEventListener("scroll", animations);
    return () => {
      window.removeEventListener("scroll", animations);
    };
  }, []);

  return (
    <motion.div
      className="contact"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <header>
        <Navbar />
        <div className="contact-header" ref={refheader}>
          <div className="wrap-text-contact" ref={title}>
            <h2>Get in Touch</h2>
          </div>
        </div>
      </header>
      <main>
        <section>
          <div className="info-contact" ref={infoContact}>
            <div className="info-icons">
              <div className="info-icon">
                <i className="fas fa-map-marker-alt"></i>
                <div className="container">Location</div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea,
                  allorem dolorum ab:
                  <br />
                  <br />
                  Sneakerstrasse 34 22565 Hamburg
                  <br />
                  <br />
                  molestiae quas iure voluptate atque non magnam nihil.
                </p>
              </div>
              <div className="info-icon">
                <i className="fas fa-phone-alt"></i>
                <div className="container">Phone</div>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Rerum totam aspernatur:
                  <br />
                  <br />
                  +41-213-7689
                  <br />
                  <br />
                  autem consectetur rem, maiores velit quam. Quia repellat
                  praesentium veniam quaerat ut? Architecto, nam nostrum.
                </p>
              </div>
              <div className="info-icon">
                <i className="far fa-envelope"></i>
                <div className="container">Email</div>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Similique psam deleniti molestiae aliquid eos quos minus:
                  <br />
                  <br />
                  info@sneakers.com
                  <br />
                  <br />
                  blanditiis sint, ut ipsam deleniti molestiae quo accusantium,
                  illo nemo eum at facer.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="messageUs-container" ref={messageUs}>
            <div className="messageUs">
              <h2>Message Us</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Incidunt eos cum earum et in. Maiores, cumque! Possimus minus
                dolores exercitationem cum. Vel expedita iste necessitatibus?
                Ipsa sint autem aliquid aspernatur, officiis dolore recusandae
                alias amet earum ducimus natus doloribus maxime sapiente tenetur
                est consequatur nulla exercitationem, voluptas, aut asperiores
                eveniet.
                <br />
                <br />
                Vel expedita iste necessitatibus? Ipsa sint autem aliquid
                aspernatur, officiis dolore recusandae alias amet earum ducimus
                natus doloribu.
              </p>
              <div className="logo">
                <img src={logoImg} alt="sneakers" />
                <h3>SNEAKERS</h3>
              </div>
            </div>
          </div>
          <div className="form-container">
            {loading ? (
              // {true ? (
              <div className="loader-form">
                <h2>&nbsp;&nbsp;Sending...</h2>
                <i className="fas fa-circle-notch fa-spin"></i>
              </div>
            ) : (
              <div className="form">
                <form onSubmit={handleSubmit}>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={form.name}
                    required
                  />
                  {errors.name && <p className="inputError">{errors.name}</p>}
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={form.email}
                    required
                  />
                  {errors.email && <p className="inputError">{errors.email}</p>}

                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={form.subject}
                    required
                  />
                  {errors.subject && (
                    <p className="inputError">{errors.subject}</p>
                  )}

                  <textarea
                    name="comments"
                    cols="50"
                    rows="5"
                    placeholder="Comments"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={form.comments}
                    required
                  ></textarea>
                  {errors.comments && (
                    <p className="inputError">{errors.comments}</p>
                  )}

                  <input type="submit" value="Send Message" />
                </form>
                {response && (
                  <p className="inputSuccess">Form successfully submitted</p>
                )}
              </div>
            )}
          </div>
        </section>
        <section>
          <iframe
            className="google-map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2369.4690840092626!2d9.912588215982918!3d53.56724436584297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b185c0264d9f37%3A0xa52f570cde364927!2sBoschstra%C3%9Fe%2C%2022761%20Hamburg!5e0!3m2!1ses!2sde!4v1633680336144!5m2!1ses!2sde"
            allowFullScreen=""
            loading="lazy"
            title="map"
          ></iframe>
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </motion.div>
  );
};

export default Contact;
