import React from "react";
import "./ApplicationView.css";
import { useParams, Link } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const params = useParams();
  const [Application, SetApplication] = useState([]);
  let navigate = useNavigate();

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

  const acceptApplication = () => {
    Axios.post("http://localhost:5000/api/shops/create", {
      Username: Application.username,
      Email: Application.email,
      Password: Application.password,
      PhoneNumber: Application.phoneNumber,
    })
      .then((res) => {
        Axios.post(
          "http://localhost:5000/api/shops/" + res.data.shopId + "/address",
          {
            state: Application.state,
            street: Application.street,
            city: Application.city,
            area: Application.area,
            building: Application.building,
            details: Application.details,
            userRefId: null,
            shopRefId: res.data.shopId,
          }
        )
          .then((res) => {
            Axios.delete(
              "http://localhost:5000/api/users/" +
                Application.applicationId +
                "/application"
            )
              .then((res) => {
                console.log("Application Accepted");
                navigate("/admin");
              })
              .catch((err) => {
                console.log(err);
              });
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const denyApplication = () => {
    Axios.delete(
      "http://localhost:5000/api/users/" +
        Application.applicationId +
        "/application"
    )
      .then((res) => {
        console.log("Application Denied");
        navigate("/admin");
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
              <td>Email: </td>
              <td>{Application.email}</td>
            </tr>
            <tr className="ApplicationRow">
              <td>Password: </td>
              <td>{Application.password}</td>
            </tr>
            <tr className="ApplicationRow">
              <td>Phone number: </td>
              <td>{Application.phoneNumber}</td>
            </tr>
            <tr className="ApplicationRow">
              <td>City: </td>
              <td>{Application.state}</td>
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
              <td>
                <button
                  onClick={() =>
                    navigate("/UserProfile/" + Application.userRefId)
                  }
                >
                  Go To User
                </button>
              </td>
            </tr>
          </table>
          <div className="ApplicationsButtons">
            <button
              className="ApplicationAcceptButton"
              onClick={() => acceptApplication()}
            >
              Accept Application
            </button>
            <button
              className="ApplicationDenyButton"
              onClick={() => denyApplication()}
            >
              Deny Application
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
