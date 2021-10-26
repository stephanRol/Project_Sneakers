import React, { useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { useContext, useState } from "react";
import CartContext from "../../helpers/CartContext";
import Footer from "../../components/Footer/Footer";
import { motion } from "framer-motion";

const ShoppingCart = () => {
  const [storagedData, setStoragedData] = useState([]);
  const { setProducts } = useContext(CartContext);

  useEffect(() => {
    const myArray = localStorage.getItem("products");
    setStoragedData(JSON.parse(myArray));
  }, []);

  let initalValue = 0;
  let sum = [];
  if (storagedData !== null) {
    sum = storagedData.reduce(
      (accu, curr) => accu + parseInt(curr.price) * parseInt(curr.amount),
      initalValue
    );
  }

  const handleDelete = (e) => {
    const filtered = storagedData.filter(
      (el, index) => index.toString() !== e.target.id.toString()
    );
    setStoragedData(filtered);
    setProducts(filtered);
    localStorage.setItem("products", JSON.stringify(filtered));
  };

  return (
    <motion.div
      className="shoppingCart"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <header>
        <Navbar />
      </header>
      <main>
        {storagedData === null || storagedData.length === 0 ? (
          <div className="cart-empty">
            <p>Your Shopping Cart is Empty</p>
            <i className="fas fa-shopping-cart"></i>
          </div>
        ) : (
          <section className="summary-payment">
            <p>Order Summary</p>
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Brand</th>
                  <th>Color</th>
                  <th>Amount</th>
                  <th>Unit Preis</th>
                  <th>Preis</th>
                </tr>
              </thead>
              <tbody>
                {storagedData.map((el, index) => {
                  return (
                    <tr key={index}>
                      <td>
                        <button
                          className="remove"
                          id={index}
                          onClick={handleDelete}
                        >
                          Remove
                        </button>
                      </td>
                      <td>
                        <img src={el.image} alt={el.name} />
                        <div
                          className="blend"
                          style={{
                            boxShadow: `0 0 0 1500px ${el.color}`,
                          }}
                        ></div>
                      </td>
                      <td>{el.name}</td>
                      <td>{el.brand[0].toUpperCase() + el.brand.slice(1)}</td>
                      <td>{el.color[0].toUpperCase() + el.color.slice(1)}</td>
                      <td>{el.amount}</td>
                      <td>${el.price}</td>
                      <td>${el.price * el.amount}</td>
                    </tr>
                  );
                })}
                <tr>
                  <td colSpan="7">
                    <b>Total</b>
                  </td>
                  <td className="total">
                    <b>${sum}</b>
                  </td>
                </tr>
              </tbody>
            </table>
            <p>Payment Method</p>
            <div className="payment-methods">
              <input type="radio" name="payment" />
              <i className="fab fa-cc-amex"></i>
              <input type="radio" name="payment" />
              <i className="fab fa-cc-diners-club"></i>
              <input type="radio" name="payment" />
              <i className="fab fa-cc-mastercard"></i>
              <input type="radio" name="payment" />
              <i className="fab fa-cc-visa"></i>
              <input type="radio" name="payment" />
              <i className="fab fa-cc-paypal"></i>
              <input type="radio" name="payment" />
              <i className="fab fa-cc-amazon-pay"></i>
              <input type="radio" name="payment" />
              <i className="fab fa-cc-apple-pay"></i>
            </div>
            <button className="purchase-btn">NEXT STEP</button>
          </section>
        )}
      </main>
      <footer>
        <Footer />
      </footer>
    </motion.div>
  );
};

export default ShoppingCart;
