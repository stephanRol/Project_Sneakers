import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const initial = localStorage.getItem("products");
  const storagedData = JSON.parse(initial);
  const [products, setProducts] = useState(storagedData || []);

  const handleAddProduct = (e) => {
    const myArray = [
      ...products,
      {
        name: e.target.name,
        brand: e.target.dataset.brand,
        price: e.target.dataset.price,
        image: e.target.dataset.image,
        amount: e.target.dataset.amount,
        color: e.target.dataset.color,
      },
    ];
    setProducts(myArray);
    localStorage.setItem("products", JSON.stringify(myArray));
  };

  const data = { handleAddProduct, products, setProducts };
  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export { CartProvider };
export default CartContext;
