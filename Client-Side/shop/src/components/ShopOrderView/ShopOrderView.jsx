import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { shopContext } from "../../contexts/shopContext";
import { userContext } from "../../contexts/userContext";
import ShopOrderColumn from "./ShopOrderColumn";
import "./ShopOrderView.css";

const ShopOrderView = () => {
  const [Data, setData] = useState([]);
  const params = useParams();
  const { user } = useContext(userContext);
  const [products, setProducts] = useState([]);
  const [purchases, setPurchases] = useState([]);
  const [checkuser, setCheckUser] = useState(false);
  const { shop } = useContext(shopContext);
  useEffect(() => {
    var Dta = [];
    console.log("hi");
    axios
      .get("http://localhost:5000/api/Orders/purchases")
      .then((res) => {
        setPurchases(res.data);
        axios
          .get("http://localhost:5000/api/Products/" + shop.shopId + "/shop")
          .then((res) => {
            console.log("hey");
            setProducts(res.data);
            // console.log
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
    if (user === "") {
      if (shop.shopId != params.id) {
        setCheckUser(false);
      } else {
        setCheckUser(true);
      }
    } else if (shop === "") {
      setCheckUser(false);
    }
  }, [params.id]);
  var Dta = [];
  const arr = products.map((product, i) => {
    return purchases.map((purchase, index) => {
      if (product.productId === purchase.productRefId) {
        return (
          <div key={index}>
            {console.log(i)}
            <ShopOrderColumn product={product} purchase={purchase} />
            <hr />
          </div>
        );
      }
    });
  });
  return (
    <div className="ShopOrderContainer">
      <div className="OrderColumnContainer">
        <div className="OrderColumnInfo">Picture</div>
        <div className="OrderColumnInfo">Name</div>
        <div className="OrderColumnInfo">Quantity</div>
        <div className="OrderColumnInfo">Click Here To See More Info</div>
      </div>
      <hr />
      {checkuser && <div>{arr}</div>}
      {!checkuser && <p>Not Authorized To View This Content</p>}
    </div>
  );
};

export default ShopOrderView;
