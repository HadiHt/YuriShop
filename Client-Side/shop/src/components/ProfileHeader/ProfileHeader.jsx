import React, { useState } from "react";
import Axios from "axios";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { shopContext } from "../../contexts/shopContext";
import { userContext } from "../../contexts/userContext";
import "./ProfileHeader.css";
import { imageContext } from "../../contexts/imageContext";

const ProfileHeader = (props) => {
  const params = useParams();
  let navigate = useNavigate();
  const [User, setUser] = useState(props.user);
  const { shop } = useContext(shopContext);
  const { user } = useContext(userContext);
  const [UserImage, SetUserImage] = useState();
  const [ImageExist, SetImageExist] = useState(["none", "block-inline"]);
  const [displayedUsername, SetDisplayedUsername] = useState("");
  const [imgChange, SetImageChange] = useState(false);
  const {image,setPfp} = useContext(imageContext)

  var base64String = "";
  var tempUser;
  if (shop === "") {
    tempUser = {
      email: props.user.email,
      userId: props.user.userId,
      username: props.user.username,
    };
  } else if (user === "") {
    tempUser = {
      email: props.user.email,
      userId: props.user.shopId,
      username: props.user.username,
    };
  }

  let splitEmail = tempUser?.email?.split("@");

  useEffect(() => {
    const location = window.location.href;
    const arr = location.split("/");
    if (arr[3] === "UserProfile") {
      const checkParams = async () => {
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
          splitEmail = tempUser.email.split("@");
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
      GetUserImage();
    } else if (arr[3] === "ShopProfile") {
      const checkParams = async () => {
        if (props.user.shopId != params.id) {
          Axios.get("http://localhost:5000/api/Shops/" + params.id)
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
          splitEmail = tempUser.email.split("@");
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
          "http://localhost:5000/api/images/ShopProfile/ShopId" + params.id
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
    }
  }, [params.id, imgChange, displayedUsername, shop, user]);

  const importD = () => {
    let input = document.createElement("input");
    input.type = "file";
    input.onchange = (_this) => {
      let files = Array.from(input.files);
      var reader = new FileReader();
      reader.onload = function () {
        var client = window.location.href;
        var arr = client.split("/");
        if (arr[3] == "UserProfile") {
          base64String = "userId";
        } else if (arr[3] == "ShopProfile") {
          base64String = "shopId";
        }
        var finishedBase = base64String.concat(
          params.id,
          ":",
          reader.result.replace("data:", "").replace(/^.+,/, "")
        );
        Axios.post("http://localhost:5000/api/images/" + arr[3], finishedBase)
          .then((res) => {
            SetImageChange((prevValue) => (prevValue = !prevValue));
            setPfp(user,shop)
          })
          .catch((err) => {
            console.log(err);
          });
      };
      reader.readAsDataURL(files[0]);
    };
    input.click();
  };
  const ChangeRoute = () => {
    navigate("/admin");
  };

  return (
    <div className="ProfileHeaderContainer">
      <div className="ProfileImage" onClick={() => importD()}>
        <img
          style={{ display: ImageExist[1] }}
          className="UserImage"
          src={"data:image/png;base64," + UserImage}
          alt=""
        ></img>
        <i className="fa fa-camera"></i>
      </div>
      <div className="TopBiosContainer">
        <h3>{displayedUsername}</h3>
      </div>
      {props.user.isAdmin && props.user.userId == params.id && (
        <button className="GoToAdminPage" onClick={() => ChangeRoute()}>
          Go To Admin Page
        </button>
      )}
    </div>
  );
};

export default ProfileHeader;
