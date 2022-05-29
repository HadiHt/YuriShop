import React, { useState, useEffect, useContext } from "react";
import { cartContext } from "../../contexts/cartContext";
import Axios from "axios";
import "./CheckOut.css";
import OrderSummary from "./subComponents/OrderSummary";
import { cardContext } from "../../contexts/cardContext";
import { userContext } from "../../contexts/userContext";

const CheckOut = () => {
  const { card, setCard } = useContext(cardContext);
  const { user } = useContext(userContext);
  useEffect(() => {
    setCard(user);
  }, []);
  return (
    <div className="Chekout">
      <img src={process.env.PUBLIC_URL + "/YS_Logo.png"}></img>
      <h3>Summary</h3>
      <OrderSummary Data={card} AddOrder={AddOrderPurchase} />
    </div>
  );
};

export const AddOrderPurchase = (orderId, data) => {
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
};

export default CheckOut;
