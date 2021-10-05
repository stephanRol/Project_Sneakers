import React, { useState, useEffect } from "react";
import Filters from "../../components/Filters/Filters";
import Footer from "../../components/Footer/Footer";
import Loader from "../../components/Loader/Loader";
import Navbar from "../../components/Navbar/Navbar";
import ProductCard from "../../components/ProductCard/ProductCard";
import Error404 from "../Error404/Error404";

//import { useFetch } from "../../hooks/useFetch";

const Sneakers = () => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  let url = "http://localhost:3004/db";
  // let url = "https://the-sneaker-database.p.rapidapi.com/sneakers?limit=100";
  const [filteredValues, setFilteredValues] = useState("");

  //let { data } = useFetch(url);

  useEffect(() => {
    // const options = {};
    // const controller = new AbortController();
    // options.signal = controller.signal;
    // console.log(controller);
    // setTimeout(() => controller.abort(), 1000);

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
        let res = await fetch(url);

        if (!res.ok) {
          let objError = {
            err: true,
            status: res.status,
            statusText: res.statusText ? res.statusText : "Error occured",
          };
          throw objError;
        }
        let data = await res.json();

        let result = data.results.filter(
          (el) =>
            el.image.original !== "" || el.image.original.slice(-4) === ".png"
        );

        setIsPending(false);
        setData(result);
        setError({ err: false });
      } catch (err) {
        setIsPending(true);
        setError(err);
      }
    };
    getData(url);
  }, []);

  useEffect(() => {
    if (data !== null) {
      setFilteredValues(data);
    }
  }, [data]);

  return (
    <>
      {data === null || filteredValues === "" ? (
        error ? (
          <Error404 />
        ) : (
          <Loader />
        )
      ) : (
        <div className="sneakers">
          <header>
            <Navbar />
          </header>
          <main>
            <aside>
              <Filters
                data={data}
                filteredValues={filteredValues}
                setFilteredValues={setFilteredValues}
              />
            </aside>
            <section>
              {filteredValues.length === 0 ? (
                <div className="noResults">
                  <p>Sorry, we couldn't find any results</p>
                  <i className="fas fa-search"></i>
                </div>
              ) : (
                ""
              )}
              {(filteredValues === "" ? data : filteredValues).map(
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
