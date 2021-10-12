import React from "react";

const ProductCard = ({ brand, name, gender, price, image }) => {
  return (
    <>
      <div className="product-card">
        <div className="name-brand">
          <p className="title">{name}</p>
          <p className="brand">{brand}</p>
        </div>
        <div className="image">
          <img src={image} alt="" />
        </div>
        <div className="value-btn">
          <p className="price">${price}</p>
          <button>See More</button>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
