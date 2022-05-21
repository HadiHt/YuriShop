import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { userContext } from "../../contexts/userContext";
import { useEffect } from "react";
import Axios from "axios";
import "./LatestOrder.css";
import { Style } from "@material-ui/icons";
import { useNavigate } from 'react-router-dom'

const Order = () => {
  // const navigate = useNavigate()
  const { user, setUser } = useContext(userContext);
  const [OrderExist, SetOrderExist] = useState(["hidden", "visible"]);
  const [Purchases, SetPurchases] = useState([]);
  const [Products, SetProducts] = useState([]);
  const [LatestProductsImages, SetLatestProductsImages] = useState([]);
  var productsid = [];
  var AllPurchases;
  var imagesNoQuotes = [];
  var y;
  useEffect(() => {
    const GetOrder = async () => {
      const orderCall = await Axios.get(
        "http://localhost:5000/api/orders/" + user.userId + "/user"
      )
        .then((res) => {
          //console.log(res.data);
          if (res.data != null) {
            AllPurchases = res.data[res.data.length - 1].purchases;
            SetPurchases((p) => (p = AllPurchases));
            SetOrderExist((prevOrder) => (prevOrder = ["hidden", "visible"]));
          }
        })
        .catch(
          (err) => console.log(err),
          SetOrderExist((prevOrder) => (prevOrder = ["visible", "hidden"]))
        );
      AllPurchases.forEach((p) => {
        productsid.push("productid"+p.productRefId);
      });
      const productCall = await Axios.post(
        "http://localhost:5000/api/Products/list/products",
        productsid
      )
        .then((res) => {
          SetProducts((prevProducts) => (prevProducts = res.data));
        })
        .catch((err) => console.log(err));
        console.log(productsid)
      const imageCall = await Axios.post(
        "http://localhost:5000/api/images/Products",
        productsid.toString()
      )
        .then((res) => {
          y = res.data;
          SetLatestProductsImages(res.data);
        })
        .catch((err) => console.log(err));
    };
    GetOrder();
  }, []);
  return (
    <div className="LatestOrderContainer">
      <div style={{ visibility: OrderExist[0] }}>No Orders Yet!</div>
      <div className="LatestProductsContainer">
        {Products?.map((product, index) => (
          <div className="LatestProduct">
            <img
              className="LatestOrdersImages"
              src={
                "data:image/png;base64," +
                LatestProductsImages[index]?.replace(/['"]+/g, "")
              }
              alt=""
            ></img>
            <ol className="LatestOrdersDetails">
              <li>Name :{product.name}</li>
              <li>Category :{product.category}</li>
              <li>Color :{product.color}</li>
              <li>Quantity :{Purchases[index].quantity}</li>
              <li>Total Price : {product.price * Purchases[index].quantity}</li>
            </ol>
          </div>
        ))}
      </div>
      <div
        className="OrdersPageRedirect"
        style={{ visibility: OrderExist[1] }}
        // onClick={navigate(-1+'/order')}
      >
        See All Orders...
      </div>
    </div>
  );
};

export default Order;