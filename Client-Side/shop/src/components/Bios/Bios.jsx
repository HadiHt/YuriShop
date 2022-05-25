import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams, Link } from "react-router-dom";
import "./Bios.css";
import Axios from "axios";
import { userContext } from "../../contexts/userContext";
import { useContext } from "react";

const Bios = (props) => {
  const params = useParams();
  const [user, setUser] = useState(props.user1);
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
  useEffect(() => {
    if (props.user1.userId != params.id) {
      Axios.get("http://localhost:5000/api/users/" + params.id)
        .then((res) => {
          tempUser = res.data;
          setUser((prevUser) => (prevUser = tempUser));
        })
        .catch((err) => {
          console.log(err);
        });
    }
    const tempUsername = tempUser.email.split("@");
    tempUser.phoneNumber != null
      ? tempUser.phoneNumber.toString().length == 7
        ? (tempUser.phoneNumber = "0" + tempUser.phoneNumber)
        : void 0
      : void 0;
    tempUser.firstName != null
      ? void 0
      : (tempUser.firstName = "Not Specified");
    tempUser.lastName != null ? void 0 : (tempUser.lastName = "Not Specified");
    tempUser.username != null ? void 0 : (tempUser.username = tempUsername[0]);
    tempUser.phoneNumber != null && tempUser.phoneNumber != 0
      ? void 0
      : (tempUser.phoneNumber = "Not Specified");
    setUser((prevUser) => (prevUser = tempUser));
  }, [params.id]);
  const routeChange = () => {
    let path = `/UserProfile/EditBiosInfo`;
    navigate(path);
  };
  return (
    <div className="BottomBiosContainer">
      <span className="BiosDetails">
        <p>First Name: {user?.firstName}</p>
        <p>Last Name: {user?.lastName}</p>
        <p>Email Address: {user?.email}</p>
        <p>Username: {user?.username}</p>
        <p>Phone Number: {user?.phoneNumber}</p>
      </span>
      <button onClick={routeChange} className="EditProfileButton">
        Edit Profile
      </button>
    </div>
  );
};

export default Bios;
