import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { userContext } from "../../contexts/userContext";
import { useEffect } from "react";
import Axios from "axios";
import "./LatestOrder.css";
import { Style } from "@material-ui/icons";

const Order = () => {
  const { user, setUser } = useContext(userContext);
  const [OrderExist, SetOrderExist] = useState(["none", "inline-block"]);
  const [Purchases, SetPurchases] = useState([]);
  const [Products, SetProducts] = useState([]);
  const [LatestProductsImages, SetLatestProductsImages] = useState([]);
  var productsid = [];
  var imgproductsid = [];
  var AllPurchases;
  useEffect(() => {
    const GetOrder = async () => {
      const orderCall = await Axios.get(
        "http://localhost:5000/api/orders/" + user.userId + "/user"
      )
        .then((res) => {
          //console.log(res.data);
          if (res.data != null && res.data.length != 0) {
            AllPurchases = res.data[res.data.length - 1].purchases;
            SetPurchases((p) => (p = AllPurchases));
            SetOrderExist(
              (prevOrder) => (prevOrder = ["none", "inline-block"])
            );
          } else {
            SetOrderExist(
              (prevOrder) => (prevOrder = ["inline-block", "none"])
            );
          }
        })
        .catch((err) => console.log(err));
      AllPurchases == null
        ? void 0
        : AllPurchases.forEach((p) => {
            productsid.push(p.productRefId);
            imgproductsid.push('productid'+p.productRefId);
          });
      const productCall = await Axios.post(
        "http://localhost:5000/api/Products/list/products",
        productsid
      )
        .then((res) => {
          SetProducts((prevProducts) => (prevProducts = res.data));
        })
        .catch((err) => console.log(err));

      const imageCall = await Axios.post(
        "http://localhost:5000/api/images/Products",
        imgproductsid.toString()
      )
        .then((res) => {
          SetLatestProductsImages(res.data);
        })
        .catch((err) => console.log(err));
    };
    GetOrder();
  }, []);
  return (
    <div className="LatestOrderContainer">
      <div style={{ display: OrderExist[0] }}>No Orders Yet!</div>
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
      <a
        className="OrdersPageRedirectLink"
        style={{ display: OrderExist[1] }}
        href="http://localhost:3000/user/order/id"
      >
        See All Orders...
      </a>
    </div>
  );
};

export default Order;
