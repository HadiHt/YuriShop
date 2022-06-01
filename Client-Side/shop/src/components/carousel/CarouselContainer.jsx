import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import Carousel from "./Carousel";
import "./Carousel.css";
import { userContext } from "../../contexts/userContext";

const CarouselContainer = () => {
  const { user } = useContext(userContext);
  const [Data1, setData1] = useState([]);
  const [Data3, setData3] = useState([]);
  const [Data2, setData2] = useState([]);
  const [img, setimg] = useState([]);
  const [img2, setimg2] = useState([]);
  const [img3, setimg3] = useState([]);

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
      .get("http://localhost:5000/api/Products/Recommended/" + user.userId)
      .then((res) => {
        var rpids = Object.keys(res.data);
        var products = [];
        rpids.map((rpid) => {
          axios
            .get("http://localhost:5000/api/Products/" + rpid)
            .then((res) => {
              products.push(res.data);
              //console.log(latest);
              //setData2(latest);
            });
          console.log(products);
          setData3(products);
        });
        //   setData2(latest);
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
  useEffect(() => {
    //   console.log("beh");
    if (Data3.length != 0) {
      var pids =
        "productid" +
        Data3[0]?.productId +
        ",productid" +
        Data3[1]?.productId +
        ",productid" +
        Data3[2]?.productId;
      axios
        .post("http://localhost:5000/api/images/Products", pids)
        .then((res) => {
          console.log(res.data);
          setimg3(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, [Data3]);

  return (
    <div className="carousels-container">
      <div className="carousel-container">
        <Carousel Data1={Data1} img={img} title={"Best Sellers"} />
      </div>
      <div className="carousel-container">
        {Data3.length == 0 && (
          <Carousel Data1={Data2} img={img2} title={"Latest Products"} />
        )}
        {/* <Carousel Data1={Data2} img={img2} title={"Latest Products"}/> */}
        {Data3.length != 0 && (
          <Carousel Data1={Data3} img={img3} title={"Yuri Recommendations"} />
        )}
      </div>
    </div>
  );
};

export default CarouselContainer;
