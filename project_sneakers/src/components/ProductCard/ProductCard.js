import React from "react";

const ProductCard = ({ brand, name, gender, price, image }) => {
  console.log(name);
  console.log(gender);
  console.log(image);
  return (
    <>
      <div className="product-card">
        <p className="title">{name}</p>
        <p className="brand">{brand}</p>
        <img src={image} alt="" />
        <p className="price">${price}</p>
        <button>See More</button>
      </div>
    </>
  );
};

export default ProductCard;
