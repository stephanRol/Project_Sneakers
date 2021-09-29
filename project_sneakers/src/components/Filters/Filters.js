import React, { useState, useEffect } from "react";

const Filters = ({ data, setFilteredValues }) => {
  const [form, setForm] = useState("");
  const brand = [
    "Nike",
    "Adidas",
    "Air Jordan",
    "Jordan",
    "Reebok",
    "Vans",
    "Puma",
    "Converse",
    "New Balance",
    "Saucony",
    "Asics",
    "Under Armour",
  ];
  const gender = [
    "Men",
    "Women",
    "Child",
    "Preschool",
    "Toddler",
    "Unisex",
    "Youth",
    "Infant",
  ];

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

  //-----------------------------------------------
  const setFilters = (e) => {
    let finalResult;
    let brand = false;
    let gender = false;
    let search = false;
    let filtered;
    let result = "";
    let result2 = "";

    Object.entries(e).forEach((element) => {
      if (element[1] === "brand") {
        brand = true;
      } else if (element[1] === "gender") {
        gender = true;
      } else if (element[0] === "search") {
        search = true;
      }
    });

    if (brand === true && gender === false) {
      Object.entries(e).forEach((element) => {
        filtered = data.results.filter(
          (el) => el.brand.toLowerCase() === element[0].toLowerCase()
        );
        result = [...result, ...filtered];
      });
      finalResult = result;
    } else if (brand === false && gender === true) {
      Object.entries(e).forEach((element) => {
        filtered = data.results.filter(
          (el) => el.gender.toLowerCase() === element[0].toLowerCase()
        );
        result = [...result, ...filtered];
      });
      finalResult = result;
    } else if (brand === true && gender === true) {
      Object.entries(e).forEach((element) => {
        filtered = data.results.filter(
          (el) => el.brand.toLowerCase() === element[0].toLowerCase()
        );
        result = [...result, ...filtered];
      });

      Object.entries(e).forEach((element) => {
        filtered = result.filter(
          (el) => el.gender.toLowerCase() === element[0].toLowerCase()
        );
        result2 = [...result2, ...filtered];
      });
      finalResult = result2;
    } else if (search === true) {
      Object.entries(e).forEach((element) => {
        filtered = data.results.filter((el) =>
          el.name.toLowerCase().includes(element[1].toLowerCase())
        );
        result = [...result, ...filtered];
      });
      finalResult = result;
    } else if (brand === false && gender === false) {
      setFilteredValues("");
    }

    if (finalResult !== undefined) setFilteredValues(finalResult);
  };

  //-----------------------------------------------

  useEffect(() => {
    if (form !== "") {
      setFilters(form);
    }
  }, [form]);

  return (
    <>
      <div className="filters">
        <form>
          <input
            type="search"
            placeholder="Search by name"
            name="search"
            onChange={handleChange}
          />
          <br />
          <h3>Brand</h3>
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
          <h3>Gender</h3>
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
