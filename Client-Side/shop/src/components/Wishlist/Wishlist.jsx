import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { userContext } from "../../contexts/userContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import { Link } from "react-router-dom";
import "./Wishlist.css";

const Wishlist = () => {
  const { user, setUser } = useContext(userContext);
  const [Wishlist, SetWishlist] = useState([]);
  const [Products, SetProducts] = useState([]);
  const [WishlistExist, SetWishlistExist] = useState(["none", "block"]);
  const [ProductImages, SetProductImages] = useState([]);
  const navigate = useNavigate();
  var ids = [];
  useEffect(() => {
    const GetWishlist = async () => {
      const orderCall = await Axios.get(
        "http://localhost:5000/api/users/" + user.userId + "/wishlist"
      )
        .then((res) => {
          if (res.data != null && res.data.length != 0) {
            SetWishlist((prevWishlist) => (prevWishlist = res.data));
            res.data.forEach((p) => {
              ids.push(p.productRefId);
            });
            SetWishlistExist((prevOrder) => (prevOrder = ["none", "block"]));
          } else {
            SetWishlistExist((prevOrder) => (prevOrder = ["block", "none"]));
          }
        })
        .catch((err) => console.log(err));

      const productCall = await Axios.post(
        "http://localhost:5000/api/Products/list/products",
        ids
      )
        .then((res) => {
          SetProducts((prevProducts) => (prevProducts = res.data));
        })
        .catch((err) => console.log(err));
      const imageCall = await Axios.post(
        "http://localhost:5000/api/images/Products",
        ids.toString()
      )
        .then((res) => {
          SetProductImages(res.data);
        })
        .catch((err) => console.log(err));
    };
    GetWishlist();
  }, []);

  const changeRoute = (url) => {
    navigate("/product-details/:" + url);
  };
  return (
    <div className="WishlistContainer">
      <div style={{ display: WishlistExist[0] }}>No Wishlist Yet!</div>
      {Products?.map((Product, index) => (
        <div className="wishlist">
          <img
            onClick={() => changeRoute(Product.productId)}
            className="wishlistImages"
            src={
              "data:image/png;base64," +
              ProductImages[index]?.replace(/['"]+/g, "")
            }
            alt=""
          ></img>

          <ol className="WishListDetails">
            <li key={Product.name.toString() + index.toString()}>
              Name :{Product.name}
            </li>
            <li key={Product.category.toString() + index.toString()}>
              Category :{Product.category}
            </li>
            <li key={Product.color.toString() + index.toString()}>
              Color :{Product.color}
            </li>
            <li key={Product.price.toString() + index.toString()}>
              Price : {Product.price}
            </li>
          </ol>
          <button
            onClick={() => changeRoute(Product.productId)}
            className="redirectToProduct"
          >
            Go To Product
          </button>
        </div>
      ))}
    </div>
  );
};

export default Wishlist;
