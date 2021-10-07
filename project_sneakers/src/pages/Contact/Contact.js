import React from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import { useForm } from "../../hooks/useForm";
import Loader from "../../components/Loader/Loader";

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
  return (
    <div className="contact">
      <header>
        <Navbar />
        <div className="contact-header">
          <div className="wrap-text-contact">
            <h2>Get in Touch</h2>
          </div>
        </div>
      </header>
      <main>
        <section>
          <div className="info-contact">
            <div className="info-icons">
              <div className="info-icon">
                <i class="fas fa-map-marker-alt"></i>
                <div className="container">Location</div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea,
                  allorem dolorum ab:
                  <br />
                  <br />
                  <h3>Sneakerstrasse 34</h3>
                  <h3>22565 Hamburg</h3>
                  <br />
                  molestiae quas iure voluptate atque non magnam nihil.
                </p>
              </div>
              <div className="info-icon">
                <i class="fas fa-phone-alt"></i>
                <div className="container">Phone</div>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Rerum totam aspernatur:
                  <br />
                  <br />
                  <h3>+41-213-7689</h3>
                  <br />
                  autem consectetur rem, maiores velit quam. Quia repellat
                  praesentium veniam quaerat ut? Architecto, nam nostrum.
                </p>
              </div>
              <div className="info-icon">
                <i class="far fa-envelope"></i>
                <div className="container">Email</div>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Similique aliquid iste placeat voluptate eos quos minus:
                  <br />
                  <br />
                  <h3>info@sneakers.com</h3>
                  <br />
                  blanditiis sint, ut ipsam deleniti molestiae quo accusantium,
                  illo nemo eum at facer.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <h2>Contact Form</h2>
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
            {errors.name && <p>{errors.name}</p>}
            <input
              type="email"
              name="email"
              placeholder="Email"
              onBlur={handleBlur}
              onChange={handleChange}
              value={form.email}
              required
            />
            {errors.email && <p>{errors.email}</p>}

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              onBlur={handleBlur}
              onChange={handleChange}
              value={form.subject}
              required
            />
            {errors.subject && <p>{errors.subject}</p>}

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
            {errors.comments && <p>{errors.comments}</p>}

            <input type="submit" value="Send" />
          </form>
          {loading && <Loader />}
          {response && <p>Form successfully submitted</p>}
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Contact;
