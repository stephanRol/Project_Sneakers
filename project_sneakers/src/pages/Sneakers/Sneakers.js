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

  console.log("Valores Filtrados desde Sneakers:");
  console.log(filteredValues);

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
  }, []);

  useEffect(() => {
    if (data !== null) {
      setFilteredValues([...data.results]);
    }
  }, [data]);

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
            <SortList
              filteredValues={filteredValues}
              setFilteredValues={setFilteredValues}
            />
          </div>
          <main>
            <aside>
              <Filters
                data={data}
                filteredValues={filteredValues}
                setFilteredValues={setFilteredValues}
              />
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
