import React, { useState } from "react";
import Filters from "../../components/Filters/Filters";
import Footer from "../../components/Footer/Footer";
import Loader from "../../components/Loader/Loader";
import Navbar from "../../components/Navbar/Navbar";
import ProductCard from "../../components/ProductCard/ProductCard";
import { useFetch } from "../../hooks/useFetch";

const Sneakers = () => {
  const [url, setUrl] = useState("http://localhost:3004/db");
  // let url = "https://the-sneaker-database.p.rapidapi.com/sneakers?limit=100";

  let { data } = useFetch(url);

  const setFilters = (e) => {
    let filtrado;
    let resultado = "";
    console.log(Object.keys(e));
    Object.keys(e).forEach((brand) => {
      filtrado = data.results.filter(
        (el) => el.brand.toLowerCase() === brand.toLowerCase()
      );
      resultado = [...resultado, ...filtrado];
    });

    console.log(resultado);
    console.log("-----------------------------FIN---------------------------");

    //const brands = Object.entries(e);
    // console.log(brands);
    // const filtrado = brands.filter((el) => el[1] === true);
    // console.log(filtrado);
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
          <main>
            <aside>
              <Filters setFilters={setFilters} />
            </aside>
            <section>
              {data.results.map((el, index) =>
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
