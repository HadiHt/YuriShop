import axios from "axios";
import React, { useEffect, useState } from "react";
import Carousel from "./Carousel";
import "./Carousel.css";

const CarouselContainer = () => {
  const [Data1, setData1] = useState([]);
  const [Data2, setData2] = useState([]);
  const [img, setimg] = useState([]);
  const [img2, setimg2] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/Products")
      .then((res) => {
        let latest = res.data.sort((a, b) => {
          var b1 = b.timeCreated.substring(0, 10);
          var bb = b1.split("-");
          var a1 = a.timeCreated.substring(0, 10);
          var aa = a1.split("-");
          return bb[0] - aa[0] || bb[1] - aa[1] || bb[2] - aa[2];
        });
        console.log(latest);
        setData2(latest);
      })
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/Products")
      .then((res) => {
        let HighestToLowest = res.data.sort((a, b) => {
          return b.soldQuantity - a.soldQuantity;
        });
        console.log(HighestToLowest);
        setData1(HighestToLowest);
      })
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    //   console.log("beh");
    if (Data1.length != 0) {
      var pids =
        "productid" +
        Data1[0]?.productId +
        ",productid" +
        Data1[1]?.productId +
        ",productid" +
        Data1[2]?.productId;
      axios
        .post("http://localhost:5000/api/images/Products", pids)
        .then((res) => {
          console.log(res.data);
          setimg(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, [Data1]);
  useEffect(() => {
    //   console.log("beh");
    if (Data2.length != 0) {
      var pids =
        "productid" +
        Data2[0]?.productId +
        ",productid" +
        Data2[1]?.productId +
        ",productid" +
        Data2[2]?.productId;
      axios
        .post("http://localhost:5000/api/images/Products", pids)
        .then((res) => {
          console.log(res.data);
          setimg2(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, [Data2]);

  return (
    <div className="carousels-container">
      <div className="carousel-container">
        <Carousel Data1={Data1} img={img} title={"Best Sellers"}/>
      </div>
      <div className="carousel-container">
        <Carousel Data1={Data2} img={img2} title={"Latest Products"}/>
      </div>
    </div>
  );
};

export default CarouselContainer;
