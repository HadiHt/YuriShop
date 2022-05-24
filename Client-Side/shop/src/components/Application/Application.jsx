import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { useEffect } from "react";
import Axios from "axios";
import { Navigate } from "react-router-dom";
import "./Application.css";

const Application = () => {
  const [Applications, SetApplications] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    const getApplication = () => {
      Axios.get("http://localhost:5000/api/users/applications")
        .then((res) => {
          SetApplications((prevApplication) => (prevApplication = res.data));
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getApplication();
  }, []);
  const PageeNavigate = (url) => {
    navigate("/ApplicationView/" + url);
  };
  return (
    <div className="ApplicationContainer">
      <h2>Applications</h2>
      {Applications?.map((application, index) => (
        <div className="InnerApplicationContainer">
          <ul className="ApplicationUnorderedList">
            <li>Application ID: {application.applicationId}</li>
            <li>Username: {application.username}</li>
            <li>Shop Type: {application.shopType}</li>
          </ul>
          <button
            onClick={() => PageeNavigate(application.applicationId)}
            className="ApplicationViewButton"
          >
            View More
          </button>
        </div>
      ))}
    </div>
  );
};

export default Application;
