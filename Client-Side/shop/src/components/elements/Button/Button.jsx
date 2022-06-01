import React, { useState, useContext } from "react";
import { cartContext } from "../../../contexts/cartContext";
import Axios from "axios";
import { userContext } from "../../../contexts/userContext";
import "./Button.css";
import { useNavigate } from "react-router-dom";

const AddToCart = ({ id }) => {
  const { cart, setCart } = useContext(cartContext);
  const [ObjectToAdd, setObject] = useState([]);
  const { user, setUser } = useContext(userContext);
  const navigate = useNavigate();
  const Save = (e) => {
    console.log(e.target.id);
    if (user !== "") {
      Axios.get("http://localhost:5000/api/Products/" + e.target.id)
        .then((res) => {
          // console.log(res.data);
          var valuee = document.getElementById("quantity-" + e.target.id).value;
          res.data.quantity = valuee == "" ? 1 : valuee;
          // res.data.quantity = document.getElementById(
          //   "quantity-" + e.target.id
          // ).value;
          setObject(res.data);
          setCart([...cart, res.data]);
          console.log(cart);
        })
        .catch((err) => console.log(err));
    } else {
      navigate("/logIn");
    }
    // console.log(cart)
  };

  return (
    <button onClick={Save} id={id} className="CartButton">
      <i className="fa fa-cart"></i>Add to Cart
    </button>
  );
};
export const RemoveButton = () => {};

export default AddToCart;
