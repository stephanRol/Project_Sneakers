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
    let brand = false;
    let gender = false;
    let filtrado;
    let resultado = "";
    let resultado2 = "";

    console.log(e);
    console.log(Object.entries(e));

    Object.entries(e).forEach((element) => {
      if (element[1] === "brand") {
        brand = true;
      } else if (element[1] === "gender") {
        gender = true;
      }
    });

    console.log(brand);
    console.log(gender);

    if (brand === true && gender === false) {
      Object.entries(e).forEach((element) => {
        filtrado = data.results.filter(
          (el) => el.brand.toLowerCase() === element[0].toLowerCase()
        );
        resultado = [...resultado, ...filtrado];
      });
      resultado2 = resultado;
    } else if (brand === false && gender === true) {
      Object.entries(e).forEach((element) => {
        filtrado = data.results.filter(
          (el) => el.gender.toLowerCase() === element[0].toLowerCase()
        );
        resultado = [...resultado, ...filtrado];
      });
      resultado2 = resultado;
    } else if (brand === true && gender === true) {
      Object.entries(e).forEach((element) => {
        filtrado = data.results.filter(
          (el) => el.brand.toLowerCase() === element[0].toLowerCase()
        );
        resultado = [...resultado, ...filtrado];
      });

      Object.entries(e).forEach((element) => {
        filtrado = resultado.filter(
          (el) => el.gender.toLowerCase() === element[0].toLowerCase()
        );
        resultado2 = [...resultado2, ...filtrado];
      });
    }

    // console.log(resultado);
    console.log(resultado2);
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
