import React, { useState, useEffect } from "react";

const Filters = ({ data, filteredValues, setFilteredValues }) => {
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
    console.log(e.target.value);
    if (e.target.value !== "") {
      setForm({
        ...form,
        [e.target.name]: e.target.value,
      });
    } else {
      delete form[e.target.name];
      setForm({ ...form });
    }
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
    let box = data.results;
    let extern = data.results;
    let brand = false;
    let gender = false;
    let search = false;
    let results = [];
    let filtered = [];
    let counter = 0;

    Object.entries(e).forEach((element) => {
      if (element[1] === "brand") {
        brand = true;
        counter = counter + 1;
      }
      if (element[1] === "gender") {
        gender = true;
        counter = counter + 1;
      }
      if (element[0] === "search") {
        search = true;
        counter = counter + 1;
      }
    });

    if (brand) {
      results = "";
      if (counter > 1) box = [...extern];

      Object.entries(e).forEach((element) => {
        filtered = box.filter(
          (el) => el.brand.toLowerCase() === element[0].toLowerCase()
        );
        results = [...results, ...filtered];
      });
      extern = results;
      setFilteredValues(results);
    }

    if (gender) {
      results = "";
      if (counter > 1) box = [...extern];

      Object.entries(e).forEach((element) => {
        filtered = box.filter(
          (el) => el.gender.toLowerCase() === element[0].toLowerCase()
        );
        results = [...results, ...filtered];
      });
      extern = results;
      setFilteredValues(results);
    }

    if (search) {
      results = "";
      if (counter > 1) box = [...extern];

      filtered = box.filter((el) =>
        el.name.toLowerCase().includes(e.search.toLowerCase())
      );
      results = [...filtered];
      setFilteredValues(results);
    }

    if (brand === false && gender === false && search === false) {
      setFilteredValues([...data.results]);
    }
  };

  //-----------------------------------------------

  useEffect(() => {
    if (form !== "") {
      setFilters(form);
    }
  }, [form]);

  //-----------------------------------------------

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
