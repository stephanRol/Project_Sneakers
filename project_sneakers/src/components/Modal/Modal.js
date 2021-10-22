import { useRef, useState } from "react";
import { useContext } from "react";
import CartContext from "../../helpers/CartContext";

const Modal = ({
  isOpen,
  closeModal,
  id,
  brand,
  colorway,
  gender,
  name,
  releaseYear,
  sku,
  price,
  image,
}) => {
  const refNode = useRef();
  const { handleAddProduct } = useContext(CartContext);
  const [added, setAdded] = useState(false);
  const [counter, setCounter] = useState(1);
  const [color, setColor] = useState("normal");

  const handleClose = () => {
    closeModal();
    setAdded(false);
  };

  const handleColor = (e) => {
    if (e.target.id === "none") {
      refNode.current.style.boxShadow = `${e.target.id}`;
      setColor(e.target.className);
    } else {
      refNode.current.style.boxShadow = `0 0 0 1500px ${e.target.id}`;
      setColor(e.target.className);
    }
  };

  const handleAdding = (e) => {
    handleAddProduct(e);
    setAdded(true);
  };

  const amount = (e) => {
    if (e.target.innerText === "-") {
      if (counter === 1) return;
      setCounter((prev) => prev - 1);
    } else {
      setCounter((prev) => prev + 1);
    }
  };

  return (
    <div className={isOpen ? "modal is-open" : "modal"} onClick={handleClose}>
      <div className="container" onClick={(e) => e.stopPropagation()}>
        <div className="image">
          <img src={image} alt={name} />
          <div className="test" ref={refNode}></div>
        </div>
        <div className="data">
          <button className="modal-close" onClick={handleClose}>
            <i className="far fa-times-circle"></i>
          </button>
          <h1>{name}</h1>
          <div className="brand">Brand: {brand}</div>
          <div className="colorway">
            <span>Color:&nbsp;&nbsp;</span>
            <span>
              <div className="normal" id="none" onClick={handleColor}></div>
              <div className="blue" id="#0044d6" onClick={handleColor}></div>
              <div className="brown" id="#FF5500" onClick={handleColor}></div>
              <div
                className="turquoise"
                id="#00B3B3"
                onClick={handleColor}
              ></div>
              <div className="green" id="#44CC00" onClick={handleColor}></div>
              <div className="pink" id="#E645A0" onClick={handleColor}></div>
              <div className="red" id="#e64545" onClick={handleColor}></div>
              <div className="purple" id="#8400ff" onClick={handleColor}></div>
            </span>
          </div>
          <div className="gender">Gender: {gender}</div>
          <div className="releaseYear">Release Year: {releaseYear}</div>
          <div className="sku">SKU: {sku}</div>
          <div className="price">Price: ${price}</div>
          <div className="price">
            Amount: &nbsp;
            <button className="counter" onClick={amount}>
              -
            </button>
            &nbsp;&nbsp;{counter}&nbsp;&nbsp;
            <button className="counter" onClick={amount}>
              +
            </button>
          </div>
          <button
            className={added ? "addedToCart" : "addChart"}
            id={id}
            name={name}
            data-brand={brand}
            data-price={price}
            data-image={image}
            data-amount={counter}
            data-color={color}
            onClick={handleAdding}
            disabled={added ? "disabled" : ""}
          >
            {added ? "Added" : "Add to Cart"}{" "}
            <i className="fas fa-cart-plus"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
