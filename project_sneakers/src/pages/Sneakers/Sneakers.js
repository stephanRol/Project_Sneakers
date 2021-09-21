import React, { useState, useEffect } from "react";
import Filters from "../../components/Filters/Filters";
import Footer from "../../components/Footer/Footer";
import Loader from "../../components/Loader/Loader";
import Navbar from "../../components/Navbar/Navbar";
import ProductCard from "../../components/ProductCard/ProductCard";
import SortList from "../../components/SortList/SortList";
//import { useFetch } from "../../hooks/useFetch";

const Sneakers = () => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  const [url, setUrl] = useState("http://localhost:3004/db");
  // let url = "https://the-sneaker-database.p.rapidapi.com/sneakers?limit=100";
  const [filteredValues, setFilteredValues] = useState("");
  let finalResult = "";

  //let { data } = useFetch(url);

  useEffect(() => {
    const getData = async (url) => {
      try {
        // fetch(url, {
        //   method: "GET",
        //   headers: {
        //     "x-rapidapi-host": "the-sneaker-database.p.rapidapi.com",
        //     "x-rapidapi-key":
        //       "ea",
        //   },
        // })
        fetch(url)
          .then((res) => {
            if (!res.ok) {
              const errObj = {
                err: true,
                status: res.status,
                statusText: res.statusText
                  ? res.statusText
                  : "Ocurrio un error",
              };
              throw errObj;
            }
            return res.json();
          })
          .then((result) => {
            setIsPending(false);
            setData(result);
            setError({ err: false });
          });
      } catch (err) {
        setIsPending(true);
        //setData(null); Optional
        setError(err);
      }
    };

    getData(url);
    console.log("me ejecuto una vez");
  }, []);

  const setFilters = (e) => {
    let brand = false;
    let gender = false;
    let search = false;
    let filtered;
    let result = "";
    let result2 = "";

    console.log(e);
    console.log(Object.entries(e));

    Object.entries(e).forEach((element) => {
      if (element[1] === "brand") {
        brand = true;
      } else if (element[1] === "gender") {
        gender = true;
      } else if (element[0] === "search") {
        search = true;
      }
    });

    console.log(brand);
    console.log(gender);

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
    }

    console.log(finalResult);
    setFilteredValues(finalResult);
    console.log(filteredValues);
    console.log("-----------------------------FIN---------------------------");
  };

  return (
    <>
      {data === null ? (
        <Loader />
      ) : (
        <div className="sneakers">
          <header>
            <Navbar />
          </header>
          <div className="sort">
            <SortList />
          </div>
          <main>
            <aside>
              <Filters setFilters={setFilters} />
            </aside>
            <section>
              {(filteredValues === "" ? data.results : filteredValues).map(
                (el, index) =>
                  el.image.original === "" ||
                  el.image.original.slice(-4) !== ".png" ? (
                    ""
                  ) : (
                    <ProductCard
                      key={index}
                      brand={el.brand}
                      name={el.name}
                      gender={el.gender}
                      price={el.retailPrice}
                      image={el.image.small}
                    />
                  )
              )}
            </section>
          </main>
          <footer>
            <Footer />
          </footer>
        </div>
      )}
    </>
  );
};

export default Sneakers;
