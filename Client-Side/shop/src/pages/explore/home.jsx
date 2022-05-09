import React from "react";
import "./home.css";
import { useNavigate } from "react-router-dom";
import Slider from "../../components/elements/Slider/Slider";
import Product from "../../components/content/product-view/product";
import { useEffect, useState, useContext } from "react";
import Axios from "axios";
import Category from "../../components/content/category/Category";
import { userContext } from "../../contexts/userContext";
import { cartContext } from "../../contexts/cartContext";
const Home = () => {
  const [Data, setData] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:5000/api/Products")
      .then((res) => {
        //console.log(res.data);
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  const { cart, setCart } = useContext(cartContext);
  const arr = cart.map((data, index) => {
    return (
      <div key={index}>
        {/* <Product
            category={data.category}
            title={data.name}
            price={data.price}
            image={'data:image/png;base64,'+data.image}
          /> */}
        {data.id}
      </div>
    );
  });
  const clickToAdd = () => {
    setCart([
      ...cart,
      {
        id: "3",
        url: "Spseaker",
      },
    ]);
    //console.log(cart);
  };
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/UserProfile`;
    navigate(path);
  };
  // Define the string
  var decodedStringBtoA = "123";

  // Encode the String
  var encodedStringBtoA = btoa(decodedStringBtoA);
  // console.log(encodedStringBtoA);
  return (
    <div className="home">
      <div className="home__container">
        <Slider />
        <button onClick={clickToAdd}>click to Add</button>
        <button onClick={routeChange}>move</button>
        <div className="home__row">
          <Category ID={"furniture"} Category={"furniture"} />
          <Category ID={"electronics"} Category={"electronics"} />
          <Category ID={"clothing"} Category={"clothing"} />
          <Category ID={"accessories"} Category={"accessories"} />
          <Category ID={"books"} Category={"books"} />
          <Category ID={"art"} Category={"art"} />
        </div>
      </div>
    </div>
  );
};

export default Home;
