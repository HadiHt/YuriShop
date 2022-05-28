import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams, Link } from "react-router-dom";
import "./Bios.css";
import Axios from "axios";
import { userContext } from "../../contexts/userContext";
import { useContext } from "react";
import { shopContext } from "../../contexts/shopContext";

const Bios = (props) => {
  const params = useParams();
  const [User, setUser] = useState(props.user1);
  const [visitedUser, setVisistedUser] = useState(null);
  const { user } = useContext(userContext);
  const { shop } = useContext(shopContext);
  let tempUser = {};
  let navigate = useNavigate();
  const location = window.location.href;
  const arr = location.split("/");

  useEffect(() => {
    if (arr[3] == "UserProfile") {
      if (props.user1.userId != params.id) {
        Axios.get("http://localhost:5000/api/users/" + params.id)
          .then((res) => {
            tempUser = res.data;
            setVisistedUser((prevUser) => (prevUser = tempUser));
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        setVisistedUser((prevUser) => (prevUser = User));
      }
    } else if (arr[3] === "ShopProfile") {
      if (props.user1.shopId != params.id) {
        Axios.get("http://localhost:5000/api/Shops/" + params.id)
          .then((res) => {
            tempUser = res.data;
            setVisistedUser((prevUser) => (prevUser = tempUser));
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        setVisistedUser((prevUser) => (prevUser = User));
      }
    }
    const tempUsername = tempUser?.email?.split("@");
  }, [params.id]);

  const routeChange = () => {
    var client = window.location.href;
    var arr = client.split("/");
    let path = "/" + arr[3] + "/" + params.id + "/EditBiosInfo";
    navigate(path);
  };
  return (
    <div className="BottomBiosContainer">
      <span className="BiosDetails">
        {arr[3] === "UserProfile" && (
          <p>
            First Name:{" "}
            {visitedUser?.firstName == null
              ? " Not Specified"
              : visitedUser?.firstName}
          </p>
        )}
        {arr[3] === "UserProfile" && (
          <p>
            Last Name:{" "}
            {visitedUser?.lastName == null
              ? " Not Specified"
              : visitedUser?.lastName}
          </p>
        )}
        <p>Email Address: {visitedUser?.email}</p>
        <p>
          Username:{" "}
          {visitedUser?.username == null
            ? "Not Specified"
            : visitedUser?.username}
        </p>
        <p>
          Phone Number:{" "}
          {visitedUser?.phoneNumber == null
            ? "Not Specified"
            : visitedUser?.phoneNumber}
        </p>
      </span>
      {(visitedUser?.userId == params.id ||
        user.isAdmin == true ||
        shop.shopId == params.id) && (
        <button onClick={routeChange} className="EditProfileButton">
          Edit Profile
        </button>
      )}
    </div>
  );
};

export default Bios;
