import React, { useEffect, useState, useContext } from "react";
import SearchBar from "./Search";
import { useNavigate } from "react-router-dom";
import { userContext } from "../../contexts/userContext";
import Axios from "axios";
import "./navbar.css";
import { cartContext } from "../../contexts/cartContext";
import { shopContext } from "../../contexts/shopContext";
import { imageContext } from "../../contexts/imageContext";

const Navbar = () => {
  const navigate = useNavigate();
  const [toogle, setData] = useState(true);
  const show = () => {
    console.log(toogle);
    setData(!toogle);
  };
  var isGuest = true;
  const { cart, setcart } = useContext(cartContext);
  let navClass = toogle ? "hide" : "show";
  const [Data, setDataa] = useState([]);
  const { user, setUser } = useContext(userContext);
  const { shop, setShop } = useContext(shopContext);
  const {image} = useContext(imageContext);
  useEffect(()=>{if (user !== "") {
    Axios.get(
      "http://localhost:5000/api/Images/UserProfile/userId" + user.userId
    )
      .then((res) => {
        //    console.log(res.data);
        setDataa(res.data);
      })
      .catch((err) => console.log(err));
  }
  if (shop !== "") {
    Axios.get(
      "http://localhost:5000/api/Images/ShopProfile/shopId" + shop.shopId
    )
      .then((res) => {
        //    console.log(res.data);
        setDataa(res.data);
      })
      .catch((err) => console.log(err));
  }},[image])
  if (user === "" && shop === "") {
    isGuest = true;
  } else {
    isGuest = false;
  }

  const order = () => {
    if (user === "" && shop === "") {
      navigate("/logIn");
    } else {
      navigate("/order");
    }
  };
  const dotocart = () => {
    if (user === "") {
      navigate("/logIn");
    } else {
      navigate("/cart");
    }
  };
  return (
    <nav className="navbar">
      <div className="co">
        <div className="logo_And_Search">
          <li className="navbar__logo">
            {" "}
            <img
              onClick={() => navigate("/")}
              alt=""
              src={process.env.PUBLIC_URL + "/YS_Logo.png"}
            ></img>
          </li>
          <SearchBar />
          <li className="navbar__toogle">
            <button onClick={show} className="but">
              <i className="fa fa-bars"></i>
            </button>
          </li>
          {user !== "" || shop !== "" ? (
            <li className="coll userProfile">
              <img src={"data:image/png;base64," + Data} alt=""></img>
            </li>
          ) : (
            ""
          )}
        </div>
        <div className={"menu__options " + navClass}>
          <li className="navbar__link">
            {!isGuest && (
              <button
                className="but"
                onClick={() => {
                  navigate("/");
                  setTimeout(function () {
                    window.localStorage.clear();
                    window.location.reload();
                  }, 500);
                }}
              >
                Log Out
              </button>
            )}
          </li>
          <li className="navbar__link">
            {isGuest && (
              <button onClick={() => navigate("/logIn")} className="but">
                Hello Guest! Sign in
              </button>
            )}
            {user !== "" && (
              <button
                className="but"
                onClick={() => {
                  navigate("/UserProfile/" + user.userId);
                }}
              >
                hello {user.firstName}
              </button>
            )}
            {shop !== "" && (
              <button
                className="but"
                onClick={() => {
                  navigate("/ShopProfile/" + shop.shopId);
                }}
              >
                hello {shop.userName}
              </button>
            )}
          </li>
          {shop == "" && (
            <li className="navbar__link">
              <button onClick={order} className="but">
                Orders
              </button>
            </li>
          )}
          {shop == "" && (
            <li className="navbar__link">
              <button onClick={dotocart} className="but">
                <i className="fa fa-shopping-cart"> {cart.length}</i>
              </button>
            </li>
          )}
        </div>
        {user !== "" || shop !== "" ? (
          <li className="normal userProfile">
            <img src={"data:image/png;base64," + Data} alt=""></img>
          </li>
        ) : (
          ""
        )}
      </div>
    </nav>
  );
};

export default Navbar;
