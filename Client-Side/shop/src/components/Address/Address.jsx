import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { addressContext } from "../../contexts/addressContext";
import { Axios } from "axios";
import "./Address.css";

const Address = () => {
  const { address, setaddress, setAddress } = useContext(addressContext);
  address.state != null ? void 0 : (address.state = "Not Specified");
  address.city != null ? void 0 : (address.city = "Not Specified");
  address.area != null ? void 0 : (address.area = "Not Specified");
  address.street != null ? void 0 : (address.street = "Not Specified");
  address.building != null ? void 0 : (address.building = "Not Specified");
  address.details != null ? void 0 : (address.details = "Not Specified");
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/UserProfile/EditAddress`;
    navigate(path);
  };
  return (
    <div className="AddressContainer">
      <div className="BottomAddressContainer">
        <span className="AddressDetails">
          <p>State: {address.state}</p>
          <p>City: {address.city}</p>
          <p>Area: {address.area}</p>
          <p>Street: {address.street}</p>
          <p>Building: {address.building}</p>
          <p>More Details: {address.details}</p>
        </span>
        <button onClick={routeChange} className="EditAddressButton">
          Edit Address Details
        </button>
      </div>
    </div>
  );
};

export default Address;
