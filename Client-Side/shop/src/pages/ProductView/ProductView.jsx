import React, { useContext, useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import AddToCart from "../../components/elements/Button/Button";
import Axios from "axios";
import "./ProductView.css";

function ProductView() {
  const params = useParams();
  const [Data, setData] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:5000/api/Products/" + params.id)
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  const [ImgData, setImgData] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:5000/api/Images/Product/productid" + params.id)
      .then((res) => {
        console.log(res.data);
        setImgData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  const imge = "data:image/png;base64," + Data.image;
  return (
    <div className="page">
      <div className="detail">
        <img src={"data:image/png;base64," + ImgData} alt="" />
        <div className="box-detail">
          <div className="row">
            <h2>{Data.name}</h2>
          </div>
          <span>{Data.price}K L.L</span>
          <form>
            <label>Quantity (Max:{Data.quantity}):</label>
            <input
              type="number"
              id={"quantity-" + Data.productId}
              name="quantity"
              min={0}
              max={Data.quantity}
            />
          </form>

          <AddToCart id={Data.productId} />
        </div>
      </div>
    </div>
  );
}

export default ProductView;
