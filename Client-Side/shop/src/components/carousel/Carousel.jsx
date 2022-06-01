import axios from "axios";
import React, { useEffect, useState } from "react";
import CaouselItem from "./CaouselItem";
import "./Carousel.css";

const Carousel = ({ Data1, img, title }) => {
  //console.log(Data1)
  const [currentIndex, setCurrentIndex] = useState(0);
  const next = () => {
    if (currentIndex + 1 != 3) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
    console.log(currentIndex);
  };
  setTimeout(next, 3000);
  var id;
  // if (Data1.length != 0) {
  //   id = Data1[currentIndex].productId;
  // }
  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(3 - 1);
    }
  };
  const moveDot = (e) => {
    console.log(e.target.id);
    setCurrentIndex(parseInt(e.target.id));
    console.log(currentIndex);
  };
  return (
    <div className="inner-container">
      <div className="title">
        <h4>{title}</h4>
      </div>
      <div className="carousel">
        <ul className="detaillist">
          <li>
            <strong>Name:</strong> {Data1[currentIndex]?.name}
          </li>
          <li>
            <strong>Color:</strong> {Data1[currentIndex]?.color}
          </li>
          <li>
            <strong>size:</strong> {Data1[currentIndex]?.size}
          </li>
        </ul>
        <CaouselItem
          id={Data1[currentIndex]?.productId}
          slide={img[currentIndex]}
        />
        <ul className="detaillist">
          <li>
            <strong>Price:</strong> {Data1[currentIndex]?.price}
          </li>
          <li>
            <strong>sale:</strong> {Data1[currentIndex]?.sale}
          </li>
        </ul>
      </div>
      <div className="container-dots">
        {Array.from({ length: 3 }).map((item, index) => (
          <div
            key={index}
            id={index}
            onClick={moveDot}
            className={currentIndex === index ? "dot active" : "dot"}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
