import React from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import { userContext } from "../../contexts/userContext";
import { shopContext } from "../../contexts/shopContext";
import { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "./BiosEdit.css";

const BiosEdit = (props) => {
  const location = window.location.href;
  const arr = location.split("/");
  const { user, setUser } = useContext(userContext);
  const { shop, setShop } = useContext(shopContext);
  const [tempUser, SetTempUser] = useState(user);
  const [tempShop, SetTempShop] = useState();
  let navigate = useNavigate();
  const params = useParams();

  console.log(tempUser);
  useEffect(() => {
    if (arr[3] === "UserProfile") {
      if (user.userId !== params.id) {
        Axios.get("http://localhost:5000/api/users/" + params.id)
          .then((res) => {
            SetTempUser((prevUser) => (prevUser = res.data));
          })
          .catch((err) => {
            console.log(err);
          });
      }
    } else {
      Axios.get("http://localhost:5000/api/shops/" + params.id)
        .then((res) => {
          SetTempShop((prevShop) => (prevShop = res.data));
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [params.id, window.location.href]);

  const routeChange = () => {
    var client = window.location.href;
    var arr = client.split("/");
    let path = "/" + arr[3] + "/" + params.id;
    navigate(path);
  };
  const updateUser = () => {
    if (arr[3] === "UserProfile") {
      if (user.userId == params.id) {
        setUser(tempUser);
      }
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
    } else {
      if (shop.shopId == params.id) {
        setShop(tempShop);
      }

      Axios.put(
        "http://localhost:5000/api/Shops/" + params.id + "/shop",
        tempShop
      )
        .then((res) => {
          console.log(res.data);
          routeChange();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  return (
    <div className="BottomBiosEditContainer">
      <div className="BiosEditDetails">
        {arr[3] == "UserProfile" && (
          <div className="FirstEditFlex">
            <p>First Name:</p>
            <input
              onChange={(e) => (tempUser.firstName = e.target.value)}
              className="EditBiosInput"
            ></input>
          </div>
        )}
        {arr[3] == "UserProfile" && (
          <div className="SecondEditFlex">
            <p>Last Name:</p>
            <input
              onChange={(e) => (tempUser.lastName = e.target.value)}
              className="EditBiosInput"
            ></input>
          </div>
        )}
        <div className="ThirdEditFlex">
          <p>Username:</p>
          <input
            onChange={(e) => {
              if (arr[3] === "UserProfile") {
                tempUser.username = e.target.value;
              } else {
                tempShop.username = e.target.value;
              }
            }}
            className="EditBiosInput"
          ></input>
        </div>
        <div className="ForthEditFlex">
          <p>Phone Number:</p>
          <input
            onChange={(e) => {
              if (arr[3] === "UserProfile") {
                tempUser.phoneNumber = e.target.value;
              } else {
                tempShop.phoneNumber = e.target.value;
              }
            }}
            className="EditBiosInput"
          ></input>
        </div>
      </div>
      <button onClick={() => updateUser()} className="SaveProfileButton">
        Save Changes
      </button>
    </div>
  );
};

export default BiosEdit;
