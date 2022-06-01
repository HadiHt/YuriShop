import React, { useState, useContext } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { userContext } from "../../contexts/userContext";
import Axios from "axios";
import { useEffect } from "react";
import { cardContext } from "../../contexts/cardContext";
import { set } from "../../contexts/cardContext";
import { addressContext } from "../../contexts/addressContext";
import { shopContext } from "../../contexts/shopContext";
import { orderListContext } from "../../contexts/orderListContext";
import { allProductContext } from "../../contexts/allProductsContext";
import EmailOrPasswordIsUncorrect from "../../components/SnackBars/ErrorSnackBar/EmailOrPasswordIsUncorrect";
import { localStorage } from "../../LocalStorage";
import { imageContext } from "../../contexts/imageContext";

const Login = () => {
  const { image, setPfp } = useContext(imageContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, setUser } = useContext(userContext);
  const { shop, setShop } = useContext(shopContext);
  const { orderList, setOrders } = useContext(orderListContext);
  const { allProducts, setProductss } = useContext(allProductContext);
  const { setCard } = useContext(cardContext);
  const [EmailNotFound, SetEmailNotFound] = useState(false);
  const [wrongCredentials, setWrongCredentials] = useState(false);
  const navigate = useNavigate();

  const Auth = () => {
    Axios.post("http://localhost:5000/api/Users/login", {
      email: email,
      password: password,
    })
      .then((res) => {
        console.log(res.data);
        if (res.data === "") {
          console.log("Bad Credentials");
          SetEmailNotFound(true);
          setWrongCredentials(true);
        } else {
          if (res.data.hasOwnProperty("isAdmin")) {
            setUser(res.data);
            res.data.isAdmin == true ? navigate("/admin") : navigate("/");
          } else {
            setShop(res.data);
            navigate("/");
          }
          setProductss();
          setCard(res.data);
          setAddress(res.data);
          setOrders(res.data);
          setWrongCredentials(false);
        }
      })
      .catch((err) => SetEmailNotFound(true));
  };
  useEffect(() => {
    setPfp(user, shop);
    console.log(image);
  }, [user, shop]);
  const { setAddress } = useContext(addressContext);
  return (
    <div className="page login">
      <div className="login__container">
        <h1>Sign-in</h1>
        <div>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {wrongCredentials && (
            <p className="error__message">
              Wrong Log in credentials, please try again or Sign-Up
            </p>
          )}
          <button onClick={Auth} className="login__signInButton">
            Sign In
          </button>
        </div>
        <EmailOrPasswordIsUncorrect
          open={EmailNotFound}
          setOpen={SetEmailNotFound}
        />
        <p className="AgreeText">
          By signing-in you agree to the Yuri Shop Conditions of Use & Sale.
        </p>
        <button
          onClick={() => {
            navigate("/signUp");
          }}
          className="login__registerButton"
        >
          Create your Yuri Account
        </button>
      </div>
    </div>
  );
};

export default Login;
