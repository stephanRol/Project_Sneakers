import React, { useState } from "react";

const Filters = ({ setFilters }) => {
  const [form, setForm] = useState("");
  const brand = ["Nike", "Adidas", "Air Jordan", "Jordan", "Reebok"];
  const gender = ["Men", "Women", "Youth", "Infant"];

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleChecked = (e) => {
    if (e.target.checked === true) {
      setForm({
        ...form,
        // [e.target.name]: e.target.checked,
        [e.target.name]: e.target.dataset.sort,
      });
    } else {
      delete form[e.target.name];
      setForm({ ...form });
    }
  };

  setFilters(form);

  return (
    <>
      <div className="filters">
        <form>
          <input
            type="search"
            placeholder="Search"
            name="search"
            onChange={handleChange}
          />
          <br />
          <br />
          {brand.map((el, index) => {
            return (
              <div key={index}>
                <input
                  type="checkbox"
                  data-sort="brand"
                  id={el}
                  name={el}
                  onChange={handleChecked}
                />
                <label htmlFor={el}>{el}</label>
              </div>
            );
          })}
          <br />
          <br />
          {gender.map((el, index) => {
            return (
              <div key={index}>
                <input
                  type="checkbox"
                  data-sort="gender"
                  id={el}
                  name={el}
                  onChange={handleChecked}
                />
                <label htmlFor={el}>{el}</label>
              </div>
            );
          })}
        </form>
      </div>
    </>
  );
};

export default Filters;
