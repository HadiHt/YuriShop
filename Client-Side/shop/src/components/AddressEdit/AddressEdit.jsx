import React from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { userContext } from "../../contexts/userContext";
import { addressContext } from "../../contexts/addressContext";
import Axios from "axios";
import "./AddressEdit.css";

const AddressEdit = () => {
  const { user, setUser } = useContext(userContext);
  const { address, setaddress, setAddress } = useContext(addressContext);
  const updateAddress = () => {
    Axios.put(
      "http://localhost:5000/api/users/" + user.userId + "/address",
      address
    )
      .then((res) => {
        console.log(res.data);
        routeChange();
      })
      .catch((err) => {
        console.log(err);
      });
    routeChange();
  };

  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/UserProfile`;
    navigate(path);
  };
  return (
    <div className="BottomAddressEditContainer">
      <span className="AddressEditDetails">
        <div className="FirstAddressFlex">
          <div className="StateContainerEdit">
            <p>State:</p>
            <input
              onChange={(e) => (address.state = e.target.value)}
              className="EditAddressInput"
            ></input>
          </div>
          <div className="CityContainerEdit">
            <p>City:</p>
            <input
              onChange={(e) => (address.city = e.target.value)}
              className="EditAddressInput"
            ></input>
          </div>
          <div className="AreaContainerEdit">
            <p>Area:</p>
            <input
              onChange={(e) => (address.area = e.target.value)}
              className="EditAddressInput"
            ></input>
          </div>
        </div>
        <div className="SecondAddressFlex">
          <div className="StreetContainerEdit">
            <p>Street:</p>
            <input
              onChange={(e) => (address.street = e.target.value)}
              className="EditAddressInput"
            ></input>
          </div>
          <div className="BuildingContainerEdit">
            <p>Building:</p>
            <input
              onChange={(e) => (address.building = e.target.value)}
              className="EditAddressInput"
            ></input>
          </div>
        </div>
        <div className="ThirdAddressFlex">
          <div className="MoreDetailsContainerEdit">
            <p>More Details:</p>
            <textarea
              onChange={(e) => (address.details = e.target.value)}
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
