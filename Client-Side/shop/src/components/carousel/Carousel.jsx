import axios from "axios";
import React, { useEffect, useState } from "react";
import CaouselItem from "./CaouselItem";
import "./Carousel.css";

const Carousel = ({Data1,img}) => {
  //console.log(Data1)
  const [currentIndex, setCurrentIndex] = useState(0);
  const next  = () => {
    if (currentIndex + 1 != Data1.length) {
      setCurrentIndex(currentIndex + 1);
    } else {
      {
        setCurrentIndex(Data1.length - 1);
      }
    }
  };
  var id
  if(Data1.length!=0){
    id=Data1[currentIndex].productId
  }
  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
        setCurrentIndex(0);
    }
  };
  const moveDot=(e)=>{
    console.log(e.target.id)
    setCurrentIndex(parseInt(e.target.id));
    console.log(currentIndex)
  }
  return (
    <div>
      <div className="carousel">
        <button className="carousel-control left" onClick={prev}>
          <i className="fa fa-arrow-left"></i>
        </button>
        <CaouselItem id={id} slide={img[currentIndex]} />
        <button className="carousel-control right" onClick={next}>
          <i className="fa fa-arrow-right"></i>
        </button>
      </div>
      <div className="container-dots">
        {Array.from({ length: 3 }).map((item, index) => (
          <div
            key={index}
            id={index}
            onClick={moveDot}
            className={currentIndex === index? "dot active" : "dot"}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
