import React, { useState } from "react";
import { useContext } from "react";
import { useRef } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Dashboard from "../../components/Dashboard/Dashboard";
import Bios from "../../components/Bios/Bios";
import Address from "../../components/Address/Address";
import Order from "../../components/LatestOrder/LatestOrder";
import Wishlist from "../../components/Wishlist/Wishlist";
import ProfileHeader from "../../components/ProfileHeader/ProfileHeader";
import { userContext } from "../../contexts/userContext";
import { shopContext } from "../../contexts/shopContext";
import "./UserProfile.css";
import { ContactSupport } from "@material-ui/icons";

const UserProfile = () => {
  const params = useParams();
  let navigate = useNavigate();
  const [height, setHeight] = useState([]);
  const { user, setUser } = useContext(userContext);
  const { shop } = useContext(shopContext);
  const inputRef = useRef(0);
  const inputRef1 = useRef(0);
  const inputRef2 = useRef(0);

  useEffect(() => {
    setHeight([
      inputRef.current.clientHeight,
      inputRef1.current.clientHeight,
      inputRef2.current.clientHeight,
    ]);
  }, []);
  const navigateToPage = () => {
    navigate("Application");
  };
  return (
    <div className="UserProfileContainer">
      <div className="Dashboard">
        <div className="DashboardContainer">
          <ProfileHeader user={user} />
          <Dashboard className="DashboardComponentInPage" value={height} />
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
        {user != "" && user.userId == params.id && (
          <div
            className="ApplyForShop"
            onClick={() => {
              navigateToPage();
            }}
          >
            <a className="ApplyForShop">Want To Apply For A Shop?</a>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
