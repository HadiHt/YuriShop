import React from "react";
import "./product.css";

const Product = ({ category, title, image, price, rating })=> {
 
  return (
    <div className="product">
      <div className="product__info">
        <h6>{category}</h6>
        <p>{title}</p>
        <p className="product__price">
          <strong>{price}</strong>
          <small>K L.L</small>
        </p>
      </div>

      <img src={image} alt="" />

      <button className="but">Add to Cart</button>
    </div>
  );
}

export default Product;