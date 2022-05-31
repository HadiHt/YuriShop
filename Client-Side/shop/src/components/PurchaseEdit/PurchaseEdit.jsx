import React, { useEffect, useState } from "react";
import "./PurchaseEdit.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Edit } from "@material-ui/icons";

const PurchaseEdit = () => {
  const [user, setUser] = useState([]);
  const [add, setAdd] = useState([]);
  const [pur, setPur] = useState();
  const [state, setState] = useState();
  const params = useParams();
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/Orders/" + params.orderId)
      .then((res) => {
        //   console.log(res.data);
        const i = res.data.userRefId;
        // setImgData(res.data);
        axios
          .get("http://localhost:5000/api/Users/" + i)
          .then((res) => {
            //     console.log(res.data);
            setUser(res.data);
            axios
              .get("http://localhost:5000/api/Users/" + i + "/address")
              .then((res) => {
                console.log(res.data);
                setAdd(res.data);
              })
              .catch((err) => console.log(err));
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
    axios
      .get("http://localhost:5000/api/Orders/" + params.id + "/purchase")
      .then((res) => {
        setPur(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const UpdatePurchase = () => {
    axios
      .put("http://localhost:5000/api/Orders/" + params.id + "/purchase",{
        "orderRefId": pur.orderRefId,
        "productRefId": pur.productRefId,
        "productState": state,
        "quantity": pur.quantity})
      .then((res) => {
       // console.log(res.data);
        setPur(res.data);
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="AddProductInfoContainer">
      <span className="ProductInfoContainer">
        <div className="InfoRow">
          <div className="ProductInfo">
            <h4>Name of customer</h4>
            <p>
              {user.firstName} {user.lastName}
            </p>
          </div>
        </div>
        <div className="InfoRow">
          <div className="ProductInfo">
            <h4>Street</h4>
            <p>{add.street}</p>
          </div>
          <div className="ProductInfo">
            <h4>area</h4>
            <p>{add.area}</p>
          </div>
        </div>
        <div className="InfoRow">
          <div className="ProductInfo">
            <h4>state/city</h4>
            <p>
              {add.state}/{add.city}
            </p>
          </div>
          <div className="ProductInfo">
            <h4>building</h4>
            <p>1</p>
          </div>
        </div>
        <div className="InfoRow">
          <div className="ProductInfo">
            <h4>Product State</h4>
            <select onChange={e => setState(e.target.value)} className="ProductInfo">
              <option value="pending">pending</option>
              <option value="on way">on Way</option>
              <option value="delivered">delevired</option>
            </select>
          </div>
        </div>
      </span>
      <button onClick={UpdatePurchase} className="AddProductButton">Change state</button>
    </div>
  );
};

export default PurchaseEdit;
