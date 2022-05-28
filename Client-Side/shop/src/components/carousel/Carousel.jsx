import axios from "axios";
import React, { useEffect, useState } from "react";
import CaouselItem from "./CaouselItem";
import "./Carousel.css";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [Data1, setData1] = useState([]);
  const [img, setimg] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/Products")
      .then((res) => {
        let HighestToLowest = res.data.sort(
          (a, b) => b.soldQuantity - a.soldQuantity
        );
        //  console.log(HighestToLowest)
        console.log(HighestToLowest);
        setData1(HighestToLowest);
      })
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    var s = [];
    Data1.map((data) => {
      console.log("beh");
      axios
        .get(
          "http://localhost:5000/api/Images/Product/productid" + data.productId
        )
        .then((res) => {
          console.log(res.data);
          s.push("data:image/png;base64," + res.data);
          if (s.length == 3) {
            setimg(s);
            console.log(s);
          }
        })
        .catch((err) => console.log(err));
    });
  }, [Data1]);

  const next = () => {
    if (currentIndex + 1 != Data1.length) {
      setCurrentIndex(currentIndex + 1);
    } else {
      {
        setCurrentIndex(Data1.length - 1);
      }
    }
  };
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
        <CaouselItem slide={img[currentIndex]} />
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
