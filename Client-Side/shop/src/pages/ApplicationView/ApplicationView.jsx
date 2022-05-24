import React from "react";
import "./ApplicationView.css";
import { useParams, Link } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import Axios from "axios";

const Admin = () => {
  const params = useParams();
  const [Application, SetApplication] = useState([]);

  useEffect(() => {
    const getApplication = () => {
      Axios.get("http://localhost:5000/api/users/" + params.id + "/application")
        .then((res) => {
          SetApplication((prevApplication) => (prevApplication = res.data));
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getApplication();
  }, []);

  return (
    <div className="ApplicationVewPageContainer">
      <div className="ApplicationViewPageInnerContainer">
        <h2 style={{ borderBottom: "1px solid grey", padding: "5px" }}>
          Application
        </h2>
        <div className="SingleApplicationView">
          <table className="ApplicationTable">
            <tr className="ApplicationRow">
              <td>Application ID: </td>
              <td>{Application.applicationId}</td>
            </tr>
            <tr className="ApplicationRow">
              <td>Username: </td>
              <td>{Application.username}</td>
            </tr>
            <tr className="ApplicationRow">
              <td>City: </td>
              <td>{Application.city}</td>
            </tr>
            <tr className="ApplicationRow">
              <td>Area: </td>
              <td>{Application.area}</td>
            </tr>
            <tr className="ApplicationRow">
              <td>Street: </td>
              <td>{Application.street}</td>
            </tr>
            <tr className="ApplicationRow">
              <td>Building: </td>
              <td>{Application.building}</td>
            </tr>
            <tr className="ApplicationRow">
              <td>More Details: </td>
              <td>{Application.details}</td>
            </tr>
            <tr className="ApplicationRow">
              <td>Shop Type: </td>
              <td>{Application.shopType}</td>
            </tr>
            <tr className="ApplicationRow">
              <td>Products To Sell: </td>
              <td>{Application.productsToSell}</td>
            </tr>
            <tr className="ApplicationRow">
              <td>Validation Number: </td>
              <td>{Application.validationNumber}</td>
            </tr>
            <tr className="ApplicationRow">
              <td>User: </td>
              <td>{Application.userRefId}</td>
            </tr>
          </table>
          <div className="ApplicationsButtons">
            <button className="ApplicationAcceptButton">
              Accept Application
            </button>
            <button className="ApplicationDenyButton">Deny Application</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
