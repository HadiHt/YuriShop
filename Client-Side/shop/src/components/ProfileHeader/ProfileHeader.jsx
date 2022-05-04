import React, { useState } from "react";
import "./ProfileHeader.css";

const ProfileHeader = (props) => {
  const [user, setUser] = useState(props.user);
  var username = user.email.split("@");
  return (
    <div className="ProfileHeaderContainer">
      <div className="ProfileImage"></div>
      <div className="TopBiosContainer">
        <h3>{username[0]}</h3>
      </div>
    </div>
  );
};

export default ProfileHeader;
