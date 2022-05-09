import React from "react";
import { useNavigate } from "react-router-dom";
import "./AddressEdit.css";

const AddressEdit = () => {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/UserProfile/:id`;
    navigate(path);
  };
  return (
    <div className="BottomAddressEditContainer">
      <span className="AddressEditDetails">
        <div className="FirstFlex">
          <p>Country:</p>
          <input className="EditAddressInput"></input>

          <p>State:</p>
          <input className="EditAddressInput"></input>
          <p>City:</p>
          <input className="EditAddressInput"></input>
        </div>
        <div className="SecondFlex">
          <p>Area:</p>
          <input className="EditAddressInput"></input>

          <p>Street:</p>
          <input className="EditAddressInput"></input>
          <p>Building:</p>
          <input className="EditAddressInput"></input>
        </div>
      </span>
      <p>More Details:</p>
      <textarea className="EditAddressTextArea"></textarea>
      <button onClick={routeChange} className="SaveProfileButton">
        Save Changes
      </button>
    </div>
  );
};

export default AddressEdit;
