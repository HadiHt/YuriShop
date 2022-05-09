import React from "react";
import { useContext } from "react";
import { userContext } from "../../contexts/userContext";
import "./EditBiosInfo.css";
import UserProfile from "../UserProfile/UserProfile";
import BiosEdit from "../../components/BiosEdit/BiosEdit";

const EditBiosInfo = () => {
  const { user, setUser } = useContext(userContext);
  return (
    <div className="EditBiosInfoPageContainer">
      <BiosEdit user={user} />
    </div>
  );
};

export default EditBiosInfo;
