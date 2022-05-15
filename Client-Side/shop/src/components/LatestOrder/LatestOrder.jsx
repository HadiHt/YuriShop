import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { userContext } from "../../contexts/userContext";
import { useEffect } from "react";
import Axios from "axios";
import "./LatestOrder.css";

const Order = () => {
  const { user, setUser } = useContext(userContext);
  const [Order, SetOrder] = useState([]);
  const [Purchases, SetPurchases] = useState([]);
  const [Products, SetProducts] = useState([]);
  const PurchasesComponent = Products.map((product) => (
    <div className="LastOrderPurchases">{product.name}</div>
  ));
  useEffect(() => {
    Axios.get("http://localhost:5000/api/Orders/" + user.userId + "/user")
      .then((res) => {
        if (res.data != null) {
          SetOrder(res.data);
          Axios.get(
            "http://localhost:5000/api/Orders/purchases/order/" +
              Order[Order.length - 1].orderId
          ).then((res2) => {
            if (res2.data != null) {
              SetPurchases(res2.data);
              Purchases.forEach((purchase) => {
                console.log(purchase);
                Axios.get(
                  "http://localhost:5000/api/Products/" + purchase.productRefId
                ).then((res3) => {
                  if (res3.data != null) {
                    SetProducts(res3.data);
                    console.log(res3.data);
                  }
                });
              });
            }
          });
        }
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="LatestOrderContainer">
      <div className="PurchaseContainer">{PurchasesComponent}</div>
    </div>
  );
};

export default Order;
