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
import "../UserProfile/UserProfile.css";
import { ContactSupport } from "@material-ui/icons";
import { shopContext } from "../../contexts/shopContext";
import ShopProducts from "../../components/ShopProducts/ShopProducts";

const ShopProfile = () => {
  const [height, setHeight] = useState([]);
  const inputRef = useRef();
  const inputRef1 = useRef();
  const inputRef2 = useRef();
  const { shop, setUser } = useContext(shopContext);

  useEffect(() => {
    setHeight([
      inputRef.current.clientHeight,
      inputRef1.current.clientHeight,
      inputRef2.current.clientHeight,
    ]);
  }, []);
  console.log(shop);
  return (
    <div className="UserProfileContainer">
      <div className="Dashboard">
        <div className="DashboardContainer">
          <ProfileHeader user={shop} />
          <Dashboard value={height} />
        </div>
      </div>
      <div className="ProfilePageContentContainer">
        <div className="Bios" ref={inputRef}>
          <p className="BiosTitle">BIOS INFO</p>
          <Bios user1={shop} />
        </div>
        <div className="Address" ref={inputRef1}>
          <p className="AddressTitle">ADDRESS</p>
          <Address user2={shop} />
        </div>
        <div className="Order" ref={inputRef2}>
          <p className="OrderTitle">ORDERS</p>
          <Order user3={shop} />
        </div>
        <div className="Wishlist">
          <p className="WishlistTitle">PRODUCTS</p>
          <ShopProducts/>
        </div>
      </div>
    </div>
  );
};

export default ShopProfile;
