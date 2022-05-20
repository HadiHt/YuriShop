import React, { useState } from "react";
import Axios from "axios";
import { useEffect } from "react";
import "./ProfileHeader.css";

const ProfileHeader = (props) => {
  const [user, setUser] = useState(props.user);
  const [UserImage, SetUserImage] = useState();
  const [ImageExist, SetImageExist] = useState(["none", "block-inline"]);
  var displayedUsername = "";
  var userImage;

  var splitEmail = user.email.split("@");
  user.username
    ? (displayedUsername = user.username)
    : (displayedUsername = splitEmail[0]);

  useEffect(() => {
    const GetUserImage = async () => {
      const orderCall = await Axios.get(
        "http://localhost:5000/api/images/UserProfile/" + user.userId
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
    GetUserImage();
  }, []);
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
