import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Bios.css";
import { userContext } from "../../contexts/userContext";
import { useContext } from "react";

const Bios = (props) => {
  const [user, setUser] = useState(props.user1);

  user.firstName != null && user.lastName != null
    ? void 0
    : (user.firstName = "Not Specified");
  user.firstName != null && user.lastName != null
    ? void 0
    : (user.lastName = "");

  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/UserProfile/EditBiosInfo`;
    navigate(path);
  };
  return (
    <div className="BottomBiosContainer">
      <span className="BiosDetails">
        <p>
          Name: {user.firstName} {user.lastName}{" "}
        </p>
        <p>Email Address: {user.email}</p>
        <p>Phone Number: 03095494</p>
        <p>About: bla bla bla blas</p>
      </span>
      <button onClick={routeChange} className="EditProfileButton">
        Edit Profile
      </button>
    </div>
  );
};

export default Bios;
