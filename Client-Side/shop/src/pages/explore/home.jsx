import React from "react";
import "./home.css";
import Slider from "../../components/elements/Slider/Slider";
import { useEffect, useState, useContext } from "react";
import Axios from "axios";
import Category from "../../components/content/category/Category";
import { cardContext } from "../../contexts/cardContext";
import { userContext } from "../../contexts/userContext";
import { addressContext } from "../../contexts/addressContext";
import CarouselContainer from "../../components/carousel/CarouselContainer";
import { shopContext } from "../../contexts/shopContext";
import { orderListContext } from "../../contexts/orderListContext";
import { allProductContext } from "../../contexts/allProductsContext";
import EmailOrPasswordIsUncorrect from "../../components/SnackBars/ErrorSnackBar/EmailOrPasswordIsUncorrect";

const Home = () => {
  const [Data, setData] = useState([]);
  const { user, setUser } = useContext(userContext);
  const { shop, setShop } = useContext(shopContext);
  const { address } = useContext(addressContext);
  const { orderList, setOrders } = useContext(orderListContext);
  const { allProducts, setProductss } = useContext(allProductContext);

  useEffect(() => {
    Axios.get("http://localhost:5000/api/Images/Category")
      .then((res) => {
        //    console.log(res.data);
        setData(res.data);
      })
      .catch((err) => console.log(err));

    // console.log(user);
    // console.log(shop);
    // console.log(orderList);
    // console.log(allProducts);
    // console.log(address);
 //   window.localStorage.clear();
    //localStorage(user, address, allProducts);
    //console.log(user);
  }, []);

  const arr = Data.map((data, index) => {
    const category = data.split(":");
    return <Category Category={category} />;
  });

  return (
    <div className="home page">
      <div className="home__container">
        {/* <Slider /> */}
        {/* <TestSlider /> */}
        <CarouselContainer/>
        <div className="home__row">
          {arr}
        </div>
      </div>
    </div>
  );
};

export default Home;
