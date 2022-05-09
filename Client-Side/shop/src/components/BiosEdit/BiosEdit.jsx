import React from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import { userContext } from "../../contexts/userContext";
import { useContext } from "react";
import "./BiosEdit.css";

const BiosEdit = (props) => {
  const { user, setUser } = useContext(userContext);
  let navigate = useNavigate();

  const routeChange = () => {
    let path = `/UserProfile`;
    navigate(path);
  };

  const updateUser = () => {
    Axios.put("http://localhost:5000/api/Users/" + user.userId + "/user", user)
      .then((res) => {
        console.log(res.data);
        routeChange();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="BottomBiosEditContainer">
      <div className="BiosEditDetails">
        <div className="FirstEditFlex">
          <p>First Name:</p>
          <input
            onChange={(e) => (user.firstName = e.target.value)}
            className="EditBiosInput"
          ></input>
        </div>
        <div className="SecondEditFlex">
          <p>Last Name:</p>
          <input
            onChange={(e) => (user.lastName = e.target.value)}
            className="EditBiosInput"
          ></input>
        </div>
        <div className="ThirdEditFlex">
          <p>Username:</p>
          <input
            onChange={(e) => (user.username = e.target.value)}
            className="EditBiosInput"
          ></input>
        </div>
        <div className="ForthEditFlex">
          <p>Phone Number:</p>
          <input
            onChange={(e) => (user.phoneNumber = e.target.value)}
            className="EditBiosInput"
          ></input>
        </div>
      </div>
      <button onClick={updateUser} className="SaveProfileButton">
        Save Changes
      </button>
    </div>
  );
};

export default BiosEdit;
