import React, { useState, useEffect } from "react";
import Filters from "../../components/Filters/Filters";
import Footer from "../../components/Footer/Footer";
import Loader from "../../components/Loader/Loader";
import Navbar from "../../components/Navbar/Navbar";
import ProductCard from "../../components/ProductCard/ProductCard";
import Error404 from "../Error404/Error404";
import { motion } from "framer-motion";
import Modal from "../../components/Modal/Modal";
import { useModal } from "../../hooks/useModal";
import { usePagination } from "../../hooks/usePagination";
import { memo } from "react";

//import { useFetch } from "../../hooks/useFetch";

const Sneakers = () => {
  const [data, setData] = useState(null);
  // const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  let url = "http://localhost:3004/db";
  // let url = "https://the-sneaker-database.p.rapidapi.com/sneakers?limit=100";

  const [filteredValues, setFilteredValues] = useState("");
  const [isOpen, openModal, closeModal, modalKey] = useModal();

  //let { data } = useFetch(url);

  let { start, end, LIMIT, handlePrev, handleNext, handleBegin, handleFinal } =
    usePagination(filteredValues);

  useEffect(() => {
    const getData = async (url) => {
      try {
        // let res = await fetch(url, {
        //   method: "GET",
        //   headers: {
        //     "x-rapidapi-host": "the-sneaker-database.p.rapidapi.com",
        //     "x-rapidapi-key":
        //       "e68a",
        //   },
        // });

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
            el.image.original !== "" && el.image.original.slice(-4) === ".png"
        );

        // setIsPending(false);
        setData(result);
        setError({ err: false });
      } catch (err) {
        // setIsPending(true);
        setError(err);
      }
    };
    getData(url);
  }, [url]);

  useEffect(() => {
    if (data !== null) {
      setFilteredValues(data);
    }
  }, [data]);

  return (
    <>
      {data === null || filteredValues === "" ? (
        error ? (
          <Error404 error={error} />
        ) : (
          <Loader />
        )
      ) : (
        <motion.div
          className="sneakers"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          <header>
            <Navbar />
          </header>
          <main>
            <aside>
              <Filters
                data={data}
                filteredValues={filteredValues}
                setFilteredValues={setFilteredValues}
                LIMIT={LIMIT}
              />
            </aside>
            <section>
              <div className="cards">
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
                    ) : index >= start - 1 && index <= end - 1 ? (
                      <ProductCard
                        openModal={openModal}
                        key={index}
                        id={el.id}
                        brand={el.brand}
                        name={el.name}
                        gender={el.gender}
                        price={el.retailPrice}
                        image={el.image.small}
                      />
                    ) : (
                      ""
                    )
                )}
                {(filteredValues === "" ? data : filteredValues).map(
                  (el, index) =>
                    el.id === modalKey ? (
                      <Modal
                        key={index}
                        isOpen={isOpen}
                        closeModal={closeModal}
                        id={el.id}
                        brand={el.brand}
                        colorway={el.colorway}
                        gender={el.gender}
                        name={el.name}
                        releaseYear={el.releaseYear}
                        sku={el.sku}
                        price={el.retailPrice}
                        image={el.image.small}
                      />
                    ) : (
                      ""
                    )
                )}
              </div>
              {filteredValues.length !== 0 && filteredValues.length > LIMIT && (
                <div className="pagination">
                  <div className="paginationContainer">
                    <p>
                      Showing from <b>{start}</b> to <b>{end}</b>.
                    </p>
                    <div className="buttonsPagination">
                      <button onClick={handleBegin}>
                        <i className="fas fa-angle-double-left"></i>
                      </button>
                      {start > LIMIT && (
                        <button onClick={handlePrev}>
                          <i className="fas fa-chevron-left"></i>
                        </button>
                      )}
                      {filteredValues.length > end && (
                        <button onClick={handleNext}>
                          <i className="fas fa-chevron-right"></i>
                        </button>
                      )}
                      <button onClick={handleFinal}>
                        <i className="fas fa-angle-double-right"></i>
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </section>
          </main>
          <footer>
            <Footer />
          </footer>
        </motion.div>
      )}
    </>
  );
};

export default memo(Sneakers);
