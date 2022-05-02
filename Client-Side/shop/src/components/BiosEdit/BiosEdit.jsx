import React from "react";
import { useNavigate } from "react-router-dom";
import "./BiosEdit.css";

const BiosEdit = () => {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/UserProfile/:id`;
    navigate(path);
  };
  return (
    <div className="BottomBiosEditContainer">
      <span className="BiosEditDetails">
        <div className="FirstFlex">
          <p>First Name:</p>
          <input className="EditBiosInput"></input>

          <p>Last Name:</p>
          <input className="EditBiosInput"></input>
        </div>
        <div className="SecondFlex">
          <p>Email Address:</p>
          <input className="EditBiosInput"></input>

          <p>Phone Number:</p>
          <input className="EditBiosInput"></input>
        </div>
      </span>
      <p>About:</p>
      <textarea className="EditBiosTextArea"></textarea>
      <button onClick={routeChange} className="SaveProfileButton">
        Save Changes
      </button>
    </div>
  );
};

export default BiosEdit;
