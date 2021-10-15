import React from "react";

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
  const handleColor = (e) => {
    const nodo = document.querySelector(".test");
    if (e.target.id === "none") {
      nodo.style.boxShadow = `${e.target.id}`;
    } else {
      nodo.style.boxShadow = `0 0 0 1500px ${e.target.id}`;
    }
  };

  return (
    <div className={isOpen ? "modal is-open" : "modal"} onClick={closeModal}>
      <div className="container" onClick={(e) => e.stopPropagation()}>
        <div className="image">
          <img src={image} alt={name} />
          <div className="test"></div>
        </div>
        <div className="data">
          <button className="modal-close" onClick={closeModal}>
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
          <button className="addChart" id={id}>
            Add to Cart <i className="fas fa-cart-plus"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
