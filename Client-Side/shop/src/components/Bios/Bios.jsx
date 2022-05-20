import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Bios.css";
import { userContext } from "../../contexts/userContext";
import { useContext } from "react";

const Bios = (props) => {
  const [user, setUser] = useState(props.user1);
  const tempUsername = user.email.split("@");
  user.phoneNumber != null
    ? user.phoneNumber.toString().length == 7
      ? (user.phoneNumber = "0" + user.phoneNumber)
      : void 0
    : void 0;
  user.firstName != null ? void 0 : (user.firstName = "Not Specified");
  user.lastName != null ? void 0 : (user.lastName = "Not Specified");
  user.username != null ? void 0 : (user.username = tempUsername[0]);
  user.phoneNumber != null && user.phoneNumber != 0
    ? void 0
    : (user.phoneNumber = "Not Specified");

  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/UserProfile/EditBiosInfo`;
    navigate(path);
  };
  return (
    <div className="BottomBiosContainer">
      <span className="BiosDetails">
        <p>First Name: {user.firstName}</p>
        <p>Last Name: {user.lastName}</p>
        <p>Email Address: {user.email}</p>
        <p>Username: {user.username}</p>
        <p>Phone Number: {user.phoneNumber}</p>
      </span>
      <button onClick={routeChange} className="EditProfileButton">
        Edit Profile
      </button>
    </div>
  );
};

export default Bios;
