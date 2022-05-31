import React, { useState, useEffect } from "react";
import "./Slider.css";
import SlideClick from "./SlideClick";
import Axios from "axios";

const Slider = () => {
  const [images, setimg] = useState("");
  const [Data1,setData1] = useState([]);
  const [slideIndex,setSlideIndex] = useState()
useEffect(() => {
  var s = [];
  Axios
    .get("http://localhost:5000/api/Products")
    .then((res) => {
      let HighestToLowest = res.data.sort((a, b) => b.soldQuantity - a.soldQuantity);
      //  console.log(HighestToLowest)
      console.log(HighestToLowest);
      setData1(HighestToLowest);
      Data1.map((data)=>{
          Axios.get('http://localhost:5000/api/Images/Product/productid' + data.productId)
          .then(res => {
              console.log(res.data);
              s.push(
                "data:image/png;base64,"+res.data
              )
              if(s.length===3){
                setimg(s)
                console.log(s);
              }
          }).catch(err => console.log(err))
      })
    })
    .catch((err) => console.log(err));
}, []);

useEffect(()=>{

},[slideIndex])

  const nextSlide = () => {
    if (slideIndex !== Data1.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === Data1.length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(Data1.length);
    }
  };

  const moveDot = (index) => {
  };
  console.log(images)
  return (
    <div className="slider-container">
      <div className="picContainer">
        <SlideClick direction="prev" moveSlide={prevSlide} />
        <div
          id="sliding"
          className={
            slideIndex === slideIndex + 1 ? "slide active-anim" : "slide"
          }
        >
          <img src={images[slideIndex]} />
        </div>
        <SlideClick direction="next" moveSlide={nextSlide} />
      </div>
      <div className="container-dots">
        {Array.from({ length: 4 }).map((item, index) => (
          <div
            key={index}
            onClick={() => moveDot(index + 1)}
            className={slideIndex === index + 1 ? "dot active" : "dot"}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
