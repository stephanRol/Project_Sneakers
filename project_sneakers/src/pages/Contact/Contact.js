import React from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import { useForm } from "../../hooks/useForm";

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
      </header>
      <main>
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
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Contact;
