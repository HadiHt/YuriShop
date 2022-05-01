import React, { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import Dashboard from "../../components/Dashboard/Dashboard";
import Bios from "../../components/Bios/Bios";
import Address from "../../components/Address/Address";
import Order from "../../components/Order/Order";
import Wishlist from "../../components/Wishlist/Wishlist";
import ProfileHeader from "../../components/ProfileHeader/ProfileHeader";
import "./UserProfile.css";

const UserProfile = () => {
  const [height, setHeight] = useState([]);
  const inputRef = useRef();
  const inputRef1 = useRef();

  useEffect(() => {
    setHeight([inputRef.current.clientHeight, inputRef1.current.clientHeight]);
  }, []);
  return (
    <div className="UserProfileContainer">
      <div className="Dashboard">
        <div className="t">
          <ProfileHeader />
          <Dashboard value={height} />
        </div>
      </div>
      <div className="ProfilePageContentContainer">
        <div className="Bios">
          <p className="BiosTitle">BIOS INFO</p>
          <Bios />
        </div>
        <div className="Address" ref={inputRef}>
          <p className="AddressTitle">ADDRESS</p>
          <Address />
        </div>
        <div className="Order" ref={inputRef1}>
          <p className="OrderTitle">ORDERS</p>
          <Order />
        </div>
        <div className="Wishlist">
          <p className="WishlistTitle">WISHLIST</p>
          <Wishlist />
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
