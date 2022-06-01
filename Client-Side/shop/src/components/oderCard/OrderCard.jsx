import React, { useState, useContext, useEffect } from "react";
import { orderListContext } from "../../contexts/orderListContext";
import { userContext } from "../../contexts/userContext";
import Axios from "axios";
import "./OrderCard.css";

const OrderCard = ({ order, index }) => {
  console.log(order);
  const { setIndex } = useContext(orderListContext);
  const { user } = useContext(userContext);
  const [onWayProducts, setOnWayProducts] = useState([]);

  useEffect(() => {
    console.log(order.purchases);
    const onWay = order.purchases.filter((data) => {
      return data.productState === "on way";
    });
    setOnWayProducts(onWay);
  }, []);
  // setCOrderList(order.order.timeCreated);
  return (
    <div className="order_card">
      <img src={process.env.PUBLIC_URL + "/Order_Common_Photo.jpg"} alt="" />
      <div className="order_box">
        <div className="order_header">
          <h2> orders made in : {order.timeCreated.substring(0, 10)}</h2>
        </div>
        <p>Number of products : {order.purchases.length} </p>
        <p>
          on way products: {onWayProducts.length}/{order.purchases.length}{" "}
        </p>
      </div>
      <div className="overlay">
        <div className="iconnnn">
          <i
            id={index}
            onClick={(e) => setIndex(e.target.id)}
            className="fa fa-shopping-bag"
          ></i>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
