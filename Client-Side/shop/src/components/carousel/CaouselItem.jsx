import React from "react";
import { useNavigate } from "react-router-dom";
import "./Carousel.css";

const CaouselItem = ({ id, slide }) => {
  const nav = useNavigate();
  return (
    <img
      onClick={() => nav("/product-details/" + id)}
      className="carousel-img"
      src={"data:image/png;base64," + slide}
    ></img>
  );
};

export default CaouselItem;
