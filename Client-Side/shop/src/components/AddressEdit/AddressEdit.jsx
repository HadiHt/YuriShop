import React from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { userContext } from "../../contexts/userContext";
import { useState } from "react";
import { useEffect } from "react";
import { addressContext } from "../../contexts/addressContext";
import { useParams, Link } from "react-router-dom";
import Axios from "axios";
import "./AddressEdit.css";

const AddressEdit = () => {
  var client = window.location.href;
  var arr = client.split("/");
  const { user, setUser } = useContext(userContext);
  const { address, setaddress, setAddress } = useContext(addressContext);
  const [tempAddress, SetTempAddress] = useState({
    state: "",
    street: "",
    city: "",
    area: "",
    building: "",
    details: "",
    userRefId: null,
    shopRefId: null,
  });
  const params = useParams();
  let navigate = useNavigate();

  const updateAddress = async () => {
    if (arr[3] == "UserProfile") {
      console.log(address);
      Axios.put("http://localhost:5000/api/users/" + params.id + "/address", {
        state: tempAddress.state,
        street: tempAddress.street,
        city: tempAddress.city,
        area: tempAddress.area,
        building: tempAddress.building,
        details: tempAddress.details,
        userRefId: params.id,
        shopRefId: null,
      })
        .then((res) => {})
        .catch((err) => {
          console.log(err);
        });

      if (user.userId == params.id) {
        console.log("setting address");
        setaddress({
          state: tempAddress.state,
          street: tempAddress.street,
          city: tempAddress.city,
          area: tempAddress.area,
          building: tempAddress.building,
          details: tempAddress.details,
          userRefId: params.id,
          shopRefId: null,
        });
      }
    } else {
      console.log("inside else");
      Axios.put("http://localhost:5000/api/shops/" + params.id + "/address", {
        state: tempAddress.state,
        street: tempAddress.street,
        city: tempAddress.city,
        area: tempAddress.area,
        building: tempAddress.building,
        details: tempAddress.details,
        userRefId: null,
        shopRefId: params.id,
      })
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    console.log(address);
    routeChange();
  };

  const routeChange = () => {
    let path = "/" + arr[3] + "/" + params.id;
    navigate(path);
  };
  return (
    <div className="BottomAddressEditContainer">
      <span className="AddressEditDetails">
        <div className="FirstAddressFlex">
          <div className="StateContainerEdit">
            <p>State:</p>
            <input
              onChange={(e) => (tempAddress.state = e.target.value)}
              className="EditAddressInput"
            ></input>
          </div>
          <div className="CityContainerEdit">
            <p>City:</p>
            <input
              onChange={(e) => (tempAddress.city = e.target.value)}
              className="EditAddressInput"
            ></input>
          </div>
          <div className="AreaContainerEdit">
            <p>Area:</p>
            <input
              onChange={(e) => (tempAddress.area = e.target.value)}
              className="EditAddressInput"
            ></input>
          </div>
        </div>
        <div className="SecondAddressFlex">
          <div className="StreetContainerEdit">
            <p>Street:</p>
            <input
              onChange={(e) => (tempAddress.street = e.target.value)}
              className="EditAddressInput"
            ></input>
          </div>
          <div className="BuildingContainerEdit">
            <p>Building:</p>
            <input
              onChange={(e) => (tempAddress.building = e.target.value)}
              className="EditAddressInput"
            ></input>
          </div>
        </div>
        <div className="ThirdAddressFlex">
          <div className="MoreDetailsContainerEdit">
            <p>More Details:</p>
            <textarea
              onChange={(e) => (tempAddress.details = e.target.value)}
              className="EditAddressTextArea"
            ></textarea>
          </div>
        </div>
      </span>
      <button onClick={updateAddress} className="SaveProfileButton">
        Save Changes
      </button>
    </div>
  );
};

export default AddressEdit;
