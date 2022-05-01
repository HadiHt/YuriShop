import React from "react";
import "./Bios.css";

const Bios = () => {
  return (
    <div className="BottomBiosContainer">
      <span className="BiosDetails">
        <p>Name: Hadi Hoteit</p>
        <p>Email Address: hadi.hoteit@gmail.com</p>
        <p>Phone Number: 03095494</p>
        <p>About: bla bla bla blas</p>
      </span>
      <button className="EditProfileButton">Edit Profile</button>
    </div>
  );
};

export default Bios;
