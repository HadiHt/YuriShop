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
  const { user } = useContext(userContext);
  const { shop } = useContext(shopContext);
  let tempUser = {
    email: props.user1.email,
    firstName: props.user1.firstName,
    lastName: props.user1.lastName,
    password: props.user1.password,
    phoneNumber: props.user1.phoneNumber,
    userId: props.user1.userId,
    username: props.user1.username,
  };
  let navigate = useNavigate();
  const location = window.location.href;
  const arr = location.split("/");
  useEffect(() => {
    if (arr[3] === "UserProfile") {
      if (props.user1.userId !== params.id) {
        Axios.get("http://localhost:5000/api/users/" + params.id)
          .then((res) => {
            tempUser = res.data;
            setUser((prevUser) => (prevUser = tempUser));
          })
          .catch((err) => {
            console.log(err);
          });
      }
    } else {
      if (params.id) {
        Axios.get("http://localhost:5000/api/Shops/" + params.id)
          .then((res) => {
            tempUser = res.data;
            setUser((prevUser) => (prevUser = tempUser));
          })
          .catch((err) => {
            console.log(err);
          });
      }
    }
    const tempUsername = tempUser?.email?.split("@");
    tempUser.phoneNumber != null
      ? tempUser.phoneNumber.toString().length == 7
        ? (tempUser.phoneNumber = "0" + tempUser.phoneNumber)
        : void 0
      : void 0;
    tempUser.firstName != null
      ? void 0
      : (tempUser.firstName = "Not Specified");
    tempUser.lastName != null ? void 0 : (tempUser.lastName = "Not Specified");
    // tempUser.username != null ? void 0 : (tempUser.username = tempUsername[0]);
    tempUser.phoneNumber != null && tempUser.phoneNumber != 0
      ? void 0
      : (tempUser.phoneNumber = "Not Specified");
    setUser((prevUser) => (prevUser = tempUser));
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
        {arr[3] === "UserProfile" && <p>First Name: {User?.firstName}</p>}
        {arr[3] === "UserProfile" && <p>Last Name: {User?.lastName}</p>}
        <p>Email Address: {User?.email}</p>
        <p>Username: {User?.username}</p>
        <p>Phone Number: {User?.phoneNumber}</p>
      </span>
      {(tempUser.userId == params.id ||
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
