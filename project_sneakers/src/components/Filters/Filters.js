import React, { useState, useEffect } from "react";

const Filters = ({ data, filteredValues, setFilteredValues }) => {
  const [form, setForm] = useState("");
  const [selected, setSelected] = useState("");
  const [sortActive, setSortActive] = useState(false);

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
  //FILTERS
  //-----------------------------------------------
  const setFilters = (e) => {
    let box = data.results;
    let brand = false;
    let gender = false;
    let search = false;
    let results = [];
    let filtered = [];

    Object.entries(e).forEach((element) => {
      if (element[1] === "brand") brand = true;
      if (element[1] === "gender") gender = true;
      if (element[0] === "search") search = true;
    });

    if (brand) {
      results = "";
      Object.entries(e).forEach((element) => {
        filtered = box.filter(
          (el) => el.brand.toLowerCase() === element[0].toLowerCase()
        );
        results = [...results, ...filtered];
      });
      box = results;
    }
    if (gender) {
      results = "";
      Object.entries(e).forEach((element) => {
        filtered = box.filter(
          (el) => el.gender.toLowerCase() === element[0].toLowerCase()
        );
        results = [...results, ...filtered];
      });
      box = results;
    }
    if (search) {
      results = "";
      filtered = box.filter((el) =>
        el.name.toLowerCase().includes(e.search.toLowerCase())
      );
      results = [...filtered];
    }

    setFilteredValues(results);

    if (brand === false && gender === false && search === false) {
      results = data.results;
      setFilteredValues([...data.results]);
    }

    if (sortActive) {
      setSortList(selected, results);
    }
  };

  //-----------------------------------------------
  // SORT LIST
  //-----------------------------------------------
  const setSortList = (e, results) => {
    let items;

    if (results !== undefined) {
      items = results;
    } else {
      items = [...filteredValues];
    }

    if (e === "high") {
      items.sort((a, b) => {
        return b.retailPrice - a.retailPrice;
      });
    } else if (e === "low") {
      items.sort((a, b) => {
        return a.retailPrice - b.retailPrice;
      });
    } else if (e === "newest") {
      items.sort((a, b) => {
        let dateA = new Date(a.releaseDate);
        let dateB = new Date(b.releaseDate);
        return dateB - dateA;
      });
    } else if (e === "oldest") {
      items.sort((a, b) => {
        let dateA = new Date(a.releaseDate);
        let dateB = new Date(b.releaseDate);
        return dateA - dateB;
      });
    }
    setFilteredValues([...items]);
  };

  //-----------------------------------------------
  useEffect(() => {
    if (form !== "") {
      setFilters(form);
    }
  }, [form]);

  useEffect(() => {
    if (selected !== "") {
      setSortList(selected);
      setSortActive(true);
    }
  }, [selected]);
  //-----------------------------------------------

  return (
    <>
      <div className="filters">
        <div className="sortList">
          <select
            name="sortList"
            defaultValue="sort by"
            onChange={(e) => {
              setSelected(e.target.value);
            }}
          >
            <option value="sort by" hidden>
              Sort by
            </option>
            <option value="high">Price: High-Low</option>
            <option value="low">Price: Low-High</option>
            <option value="newest">Date: Newest</option>
            <option value="oldest">Date: Oldest</option>
          </select>
        </div>
        <br />
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
