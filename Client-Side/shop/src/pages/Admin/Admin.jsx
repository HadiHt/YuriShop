import React from "react";
import "./Admin.css";
import { useEffect, useState, useContext } from "react";
import Axios from "axios";
import Application from "../../components/Application/Application";

const Admin = () => {
  return (
    <div className="AdminPageContainer">
      <Application />
    </div>
  );
};

export default Admin;
