import React from "react";
import "./Slider.css";

const SlideClick = ({ direction, moveSlide }) => {
  console.log(direction, moveSlide);
  return (
    <button
      onClick={moveSlide}
      className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
    >
      <i className={direction === "next" ? "fa fa-right-arrow" : 'fa fa-left-arrow'}></i>
    </button>
  );
}

export default SlideClick;