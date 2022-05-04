import React, { useState } from "react";
import { useContext } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import Dashboard from "../../components/Dashboard/Dashboard";
import Bios from "../../components/Bios/Bios";
import Address from "../../components/Address/Address";
import Order from "../../components/Order/Order";
import Wishlist from "../../components/Wishlist/Wishlist";
import ProfileHeader from "../../components/ProfileHeader/ProfileHeader";
import { userContext } from "../../contexts/userContext";
import "./UserProfile.css";
import { ContactSupport } from "@material-ui/icons";

const UserProfile = () => {
  const [height, setHeight] = useState([]);
  const { user, setUser } = useContext(userContext);
  const inputRef = useRef();
  const inputRef1 = useRef();
  const inputRef2 = useRef();

  useEffect(() => {
    setHeight([
      inputRef.current.clientHeight,
      inputRef1.current.clientHeight,
      inputRef2.current.clientHeight,
    ]);
  }, []);
  return (
    <div className="UserProfileContainer">
      <div className="Dashboard">
        <div className="t">
          <ProfileHeader user={user} />
          <Dashboard value={height} />
        </div>
      </div>
      <div className="ProfilePageContentContainer">
        <div className="Bios" ref={inputRef}>
          <p className="BiosTitle">BIOS INFO</p>
          <Bios user1={user} />
        </div>
        <div className="Address" ref={inputRef1}>
          <p className="AddressTitle">ADDRESS</p>
          <Address user2={user} />
        </div>
        <div className="Order" ref={inputRef2}>
          <p className="OrderTitle">ORDERS</p>
          <Order user3={user} />
        </div>
        <div className="Wishlist">
          <p className="WishlistTitle">WISHLIST</p>
          <Wishlist user4={user} />
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
