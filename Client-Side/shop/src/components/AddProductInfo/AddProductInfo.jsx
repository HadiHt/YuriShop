import React, { useContext, useState } from "react";
import { imageContext } from "../../contexts/imageContext";
import "./AddProductInfo.css";
import Axios from "axios";
import { shopContext } from "../../contexts/shopContext";
import { useNavigate } from "react-router-dom";

const AddProductInfo = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Art");
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const [Quantity, setQuantity] = useState(0);
  const [show, setShow] = useState(false);
  const [price, setPrice] = useState(0.0);
  const { image } = useContext(imageContext);
  const { shop } = useContext(shopContext);

  const Add = () => {
    var data;
    if (
      image !== "" &&
      name !== "" &&
      category !== "" &&
      color !== "" &&
      size !== "" &&
      price !== 0 &&
      Quantity !== 0
    ) {
      Axios.post("http://localhost:5000/api/Products/product", {
        name: name,
        category: category,
        color: color,
        size: size,
        price: parseFloat(price),
        quantity: Quantity,
        shopRefId: shop.shopId,
      })
        .then(function (response) {
          console.log(response.data);
          data = "productid" + response.data.productId + ":" + image;
          Axios.post("http://localhost:5000/api/Images/Product", data)
            .then(function (response) {
              //console.log(response.data);
              navigate(-1);
            })
            .catch(function (error) {
              console.log(error);
            });
          console.log(data);
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      setShow(true);
    }
  };

  return (
    <div className="AddProductInfoContainer">
      <span className="ProductInfoContainer">
        <div className="InfoRow">
          <div className="ProductInfo">
            <p>Name</p>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
            ></input>
          </div>
          <div className="ProductInfo">
            <p>Category</p>
            <select
              onChange={(e) => setCategory(e.target.value)}
              className="ProductInfo"
            >
              <option value="Art">Art</option>
              <option value="Books">Books</option>
              <option value="Fashion">Fashion</option>
              <option value="electronics">Electronics</option>
              <option value="Furniture">Furniture</option>
              <option value="Toys">Toys</option>
              <option value="Beauty">Beauty</option>
              <option value="Accessories">Accessories</option>
            </select>
          </div>
        </div>
        <div className="InfoRow">
          <div className="ProductInfo">
            <p>color</p>
            <input
              value={color}
              onChange={(e) => setColor(e.target.value)}
              type="text"
            ></input>
          </div>
          <div className="ProductInfo">
            <p>Quantity</p>
            <input
              value={Quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value))}
              type="number"
              name="quantity"
              min={0}
              max={100}
            />
          </div>
        </div>
        <div className="InfoRow">
          <div className="ProductInfo">
            <p>size</p>
            <input
              value={size}
              onChange={(e) => setSize(e.target.value)}
              type="text"
            ></input>
          </div>
          <div className="ProductInfo">
            <p>price {"(in K L.L)"}</p>
            <input
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              type="text"
              name="quantity"
              min={0}
            />
          </div>
        </div>
      </span>
      <button onClick={Add} className="AddProductButton">
        Add Product to your shop
      </button>
      {show && (
        <p className="error_message">please fill all the required fields</p>
      )}
    </div>
  );
};

export default AddProductInfo;
