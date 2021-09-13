import React from "react";
import Footer from "../../components/Footer/Footer";
import Loader from "../../components/Loader/Loader";
import Navbar from "../../components/Navbar/Navbar";
import ProductCard from "../../components/ProductCard/ProductCard";
import { useFetch } from "../../hooks/useFetch";

const Sneakers = () => {
  let url = "http://localhost:3004/db";

  // let url = "https://the-sneaker-database.p.rapidapi.com/sneakers?limit=100";

  let { data, isPending, error } = useFetch(url);

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
              <div className="filters"></div>
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
