import React from "react";
import { useNavigate } from "react-router-dom";
import "./Bios.css";

const Bios = () => {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/UserProfile/:id/EditBiosInfo`;
    navigate(path);
  };
  return (
    <div className="BottomBiosContainer">
      <span className="BiosDetails">
        <p>Name: Hadi Hoteit</p>
        <p>Email Address: hadi.hoteit@gmail.com</p>
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
