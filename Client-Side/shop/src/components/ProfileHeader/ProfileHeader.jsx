import React, { useState } from "react";
import "./ProfileHeader.css";

const ProfileHeader = (props) => {
  const [user, setUser] = useState(props.user);
  var displayedUsername = "";
  var splitEmail = user.email.split("@");
  user.username
    ? (displayedUsername = user.username)
    : (displayedUsername = splitEmail[0]);

  return (
    <div className="ProfileHeaderContainer">
      <div className="ProfileImage"></div>
      <div className="TopBiosContainer">
        <h3>{displayedUsername}</h3>
      </div>
    </div>
  );
};

export default ProfileHeader;
