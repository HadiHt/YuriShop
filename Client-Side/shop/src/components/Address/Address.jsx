import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { addressContext } from "../../contexts/addressContext";
import { userContext } from "../../contexts/userContext";
import Axios from "axios";
import "./Address.css";
import { shopContext } from "../../contexts/shopContext";

const Address = () => {
  const { address, setaddress, setAddress } = useContext(addressContext);
  const { user, setUser } = useContext(userContext);
  const { shop } = useContext(shopContext);
  const [tempAddress, SetTempAddress] = useState(address);
  let navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    const location = window.location.href;
    const arr = location.split("/");
    if (shop == "") {
      // console.log(arr)
      if (arr[3] == "ShopProfile") {
        Axios.get("http://localhost:5000/api/Shops/" + params.id + "/address")
          .then((res) => {
            SetTempAddress((prevAddress) => (prevAddress = res.data));
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        if (user.userId != params.id) {
          Axios.get("http://localhost:5000/api/users/" + params.id + "/address")
            .then((res) => {
              SetTempAddress((prevAddress) => (prevAddress = res.data));
            })
            .catch((err) => {
              console.log(err);
            });
        } else {
          SetTempAddress((prevAddress) => (prevAddress = address));
          console.log(address);
        }
      }
    } else if (user == "") {
      if (shop.shopId != params.id) {
        Axios.get("http://localhost:5000/api/Shops/" + params.id + "/address")
          .then((res) => {
            SetTempAddress((prevAddress) => (prevAddress = res.data));
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        SetTempAddress((prevAddress) => (prevAddress = address));
      }
    }
  }, [params.id, shop, user, window.location.href, address]);

  const routeChange = () => {
    var client = window.location.href;
    var arr = client.split("/");
    let path = "/" + arr[3] + "/" + params.id + "/EditAddress";
    navigate(path);
  };
  return (
    <div className="AddressContainer">
      <div className="BottomAddressContainer">
        <span className="AddressDetails">
          <p>State: {tempAddress.state}</p>
          <p>City: {tempAddress.city}</p>
          <p>Area: {tempAddress.area}</p>
          <p>Street: {tempAddress.street}</p>
          <p>Building: {tempAddress.building}</p>
          <p>More Details: {tempAddress.details}</p>
        </span>
        {(user.userId == params.id ||
          user.isAdmin == true ||
          shop.shopId == params.id) && (
          <button onClick={routeChange} className="EditAddressButton">
            Edit Address Details
          </button>
        )}
      </div>
    </div>
  );
};

export default Address;
