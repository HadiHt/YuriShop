import React, { useState, useEffect, useContext } from "react";
import { cartContext } from "../../contexts/cartContext";
import Axios from "axios";
import "./CheckOut.css";
import OrderSummary from "./subComponents/OrderSummary";
import { cardContext } from "../../contexts/cardContext";

const CheckOut = () => {
  const { card } = useContext(cardContext);
  return (
    <div className="Chekout">
      <img src={process.env.PUBLIC_URL + "/YS_Logo.png"}></img>
      <h3>Summary</h3>
      <OrderSummary Data={card} AddOrder={AddOrderPurchase} />
    </div>
  );
};

export const AddOrderPurchase = (orderId, data) => {
  console.log("h");
  var object = JSON.stringify({
    productState: "pending",
    quantity: data.quantity,
    productRefId: data.productId,
    orderRefId: orderId,
  });
  var config = {
    method: "post",
    url: "http://localhost:5000/api/Orders/purchase",
    headers: {
      "Content-Type": "application/json",
    },
    data: object,
  };
  Axios(config)
    .then(function (response) {})
    .catch(function (error) {
      console.log(error);
    });
  console.log(data.productId);
  Axios.get("http://localhost:5000/api/Products/" + data.productId)
    .then((res) => {
      console.log(res.data);
      Axios(config)
        .then(function (response) {})
        .catch(function (error) {
          console.log(error);
        });
      var object2 = JSON.stringify({
        name: data.name,
        category: data.category,
        color: data.color,
        size: data.size,
        price: data.price,
        quantity: res.data.quantity - parseInt(data.quantity),
      });
      var config2 = {
        method: "put",
        url: "http://localhost:5000/api/Products/"+data.productId+"/product",
        headers: {
          "Content-Type": "application/json",
        },
        data: object2,
      };
      Axios(config2)
        .then(function (response) {})
        .catch(function (error) {
          console.log(error);
        });
    })
    .catch((err) => console.log(err));
};

export default CheckOut;
