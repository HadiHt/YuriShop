import React, { useState } from "react";
import { useContext } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import Dashboard from "../../components/Dashboard/Dashboard";
import Bios from "../../components/Bios/Bios";
import Address from "../../components/Address/Address";
import ProfileHeader from "../../components/ProfileHeader/ProfileHeader";
import "../UserProfile/UserProfile.css";
import { shopContext } from "../../contexts/shopContext";
import ShopProducts from "../../components/ShopProducts/ShopProducts";
import { useNavigate } from "react-router-dom";
import './ShopProfile.css'
import { imageContext } from "../../contexts/imageContext";
import ShopOrderView from "../../components/ShopOrderView/ShopOrderView";

const ShopProfile = () => {
  const {setImage}=useContext(imageContext);
  const navigate = useNavigate();
  const [height, setHeight] = useState([]);
  const inputRef = useRef();
  const inputRef1 = useRef();
  const inputRef2 = useRef();
  const { shop, setUser } = useContext(shopContext);
  setImage('');

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
          {/* <Order user3={shop} /> */}
          <ShopOrderView/>
        </div>
        <div className="Wishlist">
          <p className="WishlistTitle">PRODUCTS <button className="AddProductButton" onClick={()=>navigate('AddAProduct')}>Add A Product</button></p>
          <ShopProducts/>
        </div>
      </div>
    </div>
  );
};

export default ShopProfile;
