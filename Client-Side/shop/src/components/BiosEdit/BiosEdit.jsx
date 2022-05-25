import React from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import { userContext } from "../../contexts/userContext";
import { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "./BiosEdit.css";

const BiosEdit = (props) => {
  const { user, setUser } = useContext(userContext);
  const [tempUser, SetTempUser] = useState(user);
  let navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    if (user.userId !== params.id) {
      Axios.get("http://localhost:5000/api/users/" + params.id)
        .then((res) => {
          SetTempUser((prevUser) => (prevUser = res.data));
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [params.id]);
  const routeChange = () => {
    let path = `/UserProfile/` + params.id;
    navigate(path);
  };

  const updateUser = () => {
    Axios.put(
      "http://localhost:5000/api/Users/" + params.id + "/user",
      tempUser
    )
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
            onChange={(e) => (tempUser.firstName = e.target.value)}
            className="EditBiosInput"
          ></input>
        </div>
        <div className="SecondEditFlex">
          <p>Last Name:</p>
          <input
            onChange={(e) => (tempUser.lastName = e.target.value)}
            className="EditBiosInput"
          ></input>
        </div>
        <div className="ThirdEditFlex">
          <p>Username:</p>
          <input
            onChange={(e) => (tempUser.username = e.target.value)}
            className="EditBiosInput"
          ></input>
        </div>
        <div className="ForthEditFlex">
          <p>Phone Number:</p>
          <input
            onChange={(e) => (tempUser.phoneNumber = e.target.value)}
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
