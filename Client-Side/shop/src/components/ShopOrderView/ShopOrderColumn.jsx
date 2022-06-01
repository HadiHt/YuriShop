import React, { useEffect, useState } from "react";
import "./ShopOrderColumn.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ShopOrderColumn = ({ product, purchase }) => {
  const navigate = useNavigate();
  const [ImgData, setImgData] = useState([]);
  // console.log('hi')
  // console.log(purchase);
  // console.log(product);
  //  console.log(product);
  useEffect(() => {
    axios
      .get(
        "http://localhost:5000/api/Images/Product/productid" + product.productId
      )
      .then((res) => {
        //   console.log(res.data);
        setImgData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  const imge = "data:image/png;base64," + ImgData;
  return (
    <div className="ShopOrderColumnContainer">
      <div className="ShopOrderColumnInfo">
        <img className=" pimage" src={imge}></img>
      </div>
      <div className="ShopOrderColumnInfo">{product.name}</div>
      <div className="ShopOrderColumnInfo">{purchase.quantity}</div>
      <div className="ShopOrderdiv">
        <button
          className="ShopOrderColumnbutn"
          id={purchase.purchaseId}
          onClick={(e) => {
            navigate("EditPurchase/" + e.target.id + "/" + purchase.orderRefId);
          }}
        >
          see more
        </button>
      </div>
    </div>
  );
};

export default ShopOrderColumn;
