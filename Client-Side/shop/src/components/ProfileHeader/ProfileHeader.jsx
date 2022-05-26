import React, { useState } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "./ProfileHeader.css";

const ProfileHeader = (props) => {
  const params = useParams();
  const [user, setUser] = useState(props.user);
  const [UserImage, SetUserImage] = useState();
  const [ImageExist, SetImageExist] = useState(["none", "block-inline"]);
  const [displayedUsername, SetDisplayedUsername] = useState("");
  console.log(props.user)
  let tempUser = {
    email: props.user.email,
    userId: props.user.userId,
    username: props.user.username,
  };
  console.log(tempUser.email);
  let splitEmail = tempUser?.email?.split("@");
  let navigate = useNavigate();
  useEffect(() => {
    const location = window.location.href;
    const arr = location.split('/');
    if(arr[3]==="UserProfile"){const checkParams = async () => {
      if (props.user.userId != params.id) {
        Axios.get("http://localhost:5000/api/users/" + params.id)
          .then((res) => {
            tempUser = res.data;
            setUser((prevUser) => (prevUser = tempUser));
            splitEmail = tempUser.email.split("@");
            tempUser.username != null
              ? SetDisplayedUsername(
                  (prevUsername) => (prevUsername = tempUser.username)
                )
              : SetDisplayedUsername(
                  (prevUsername) => (prevUsername = splitEmail[0])
                );
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        tempUser.username != null
          ? SetDisplayedUsername(
              (prevUsername) => (prevUsername = props.user.username)
            )
          : SetDisplayedUsername(
              (prevUsername) => (prevUsername = splitEmail[0])
            );
      }
    };
    checkParams();
    const GetUserImage = async () => {
      const orderCall = await Axios.get(
        "http://localhost:5000/api/images/UserProfile/userId" + params.id
      )
        .then((res) => {
          if (res.data != null && res.data.length !== 0) {
            SetUserImage(res.data);
            SetImageExist((prevImg) => (prevImg = ["none", "block-inline"]));
          } else {
            SetImageExist((prevImg) => (prevImg = ["block-inline", "none"]));
          }
        })
        .catch((err) => console.log(err));
    };
    GetUserImage();}
    else if(arr[3]==="ShopProfile"){const checkParams = async () => {
      if (params.sid) {
        Axios.get("http://localhost:5000/api/Shops/" + params.sid)
          .then((res) => {
            tempUser = res.data;
            setUser((prevUser) => (prevUser = tempUser));
            splitEmail = tempUser.email.split("@");
            tempUser.username != null
              ? SetDisplayedUsername(
                  (prevUsername) => (prevUsername = tempUser.username)
                )
              : SetDisplayedUsername(
                  (prevUsername) => (prevUsername = splitEmail[0])
                );
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        tempUser.username == undefined
          ? SetDisplayedUsername(
              (prevUsername) => (prevUsername = props.user.username)
            )
          : SetDisplayedUsername(
              (prevUsername) => (prevUsername = splitEmail[0])
            );
      }
    };
    checkParams();
    const GetUserImage = async () => {
      const orderCall = await Axios.get(
        "http://localhost:5000/api/images/ShopProfile/ShopId" + params.sid
      )
        .then((res) => {
          if (res.data != null && res.data.length !== 0) {
            SetUserImage(res.data);
            SetImageExist((prevImg) => (prevImg = ["none", "block-inline"]));
          } else {
            SetImageExist((prevImg) => (prevImg = ["block-inline", "none"]));
          }
        })
        .catch((err) => console.log(err));
    };
    GetUserImage();}
  }, [params.sid || params.id]);
  return (
    <div className="ProfileHeaderContainer">
      <div className="ProfileImage">
        <img
          style={{ display: ImageExist[1] }}
          className="UserImage"
          src={"data:image/png;base64," + UserImage}
          alt=""
        ></img>
      </div>
      <div className="TopBiosContainer">
        <h3>{displayedUsername}</h3>
      </div>
    </div>
  );
};

export default ProfileHeader;