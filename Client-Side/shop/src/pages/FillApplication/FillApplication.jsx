import React, { useState, forwardRef } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Snackbar, Alert, Alertprops } from "@mui/material";
import Axios from "axios";
import "./FillApplication.css";

const FillApplication = () => {
  // const SnackbarAlert = forwardRef<HTMLDivElement, Alertprops>(
  //   function SnackbarAlert(props, ref){
  //     return <Alert elevation={6} ref={ref} {...props} />
  //   }
  // )
  const params = useParams();
  let navigate = useNavigate();
  const [error, SetError] = useState(false);
  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    SetError((prevError) => (prevError = false));
  };
  const [Application, SetApplication] = useState({
    Email: "",
    Password: "",
    Username: "",
    State: "",
    Street: "",
    City: "",
    Area: "",
    Building: "",
    Details: "",
    ShopType: "",
    ProductsToSell: "",
    ValidationNumber: 0,
    PhoneNumber: 0,
    UserRefId: params.id,
  });
  const SendApplication = () => {
    SetError((prevError) => (prevError = true));
    // Axios.post("http://localhost:5000/api/Users/Application", Application)
    //   .then((res) => {
    //     navigate("/UserProfile/" + params.id);
    //   })
    //   .catch((err) => {
    //     SetError((prevError) => (prevError = true));
    //     console.log(err);
    //   });
  };
  return (
    <div className="FillApplicationPageContainer">
      <span className="FillApplicationDetails">
        <div className="FirstApplicationFlex">
          <div className="EmailApplication">
            <p>Email:</p>
            <input
              onChange={(e) => (Application.Email = e.target.value)}
              className="EmailApplicationInput"
            ></input>
          </div>
          <div className="PasswordApplication">
            <p>Password:</p>
            <input
              onChange={(e) => (Application.Password = e.target.value)}
              className="PasswordApplicationInput"
            ></input>
          </div>
        </div>
        <div className="SecondApplicationFlex">
          <div className="UsernameApplication">
            <p>Username:</p>
            <input
              onChange={(e) => (Application.Username = e.target.value)}
              className="UsernameApplicationInput"
            ></input>
          </div>
          <div className="NumberApplication">
            <p>Phone Number:</p>
            <input
              onChange={(e) => (Application.PhoneNumber = e.target.value)}
              className="NumberApplicationInput"
            ></input>
          </div>
        </div>
        <div className="ThirdApplicationFlex">
          <div className="ShopTypeApplication">
            <p>Shop Type:</p>
            <input
              onChange={(e) => (Application.ShopType = e.target.value)}
              className="ShopTypeApplicationInput"
            ></input>
          </div>
          <div className="ProductsToSellApplication">
            <p>Products To Sell:</p>
            <input
              onChange={(e) => (Application.ProductsToSell = e.target.value)}
              className="ProductsToSellApplicationInput"
            ></input>
          </div>
        </div>
        <div className="FourthApplicationFlex">
          <div className="ValidationNumberApplication">
            <p>Validation Number:</p>
            <input
              onChange={(e) => (Application.ValidationNumber = e.target.value)}
              className="ValidationNumberApplicationInput"
            ></input>
          </div>
          <div className="StateApplication">
            <p>State:</p>
            <input
              onChange={(e) => (Application.State = e.target.value)}
              className="StateApplicationInput"
            ></input>
          </div>
        </div>
        <div className="FithApplicationFlex">
          <div className="CityApplication">
            <p>City:</p>
            <input
              onChange={(e) => (Application.City = e.target.value)}
              className="CityApplicationInput"
            ></input>
          </div>
          <div className="AreaApplication">
            <p>Area:</p>
            <input
              onChange={(e) => (Application.Area = e.target.value)}
              className="AreaApplicationInput"
            ></input>
          </div>
        </div>
        <div className="SixthApplicationFlex">
          <div className="StreetApplication">
            <p>Street:</p>
            <input
              onChange={(e) => (Application.Street = e.target.value)}
              className="StreetApplicationInput"
            ></input>
          </div>
          <div className="BuildingApplication">
            <p>Building:</p>
            <input
              onChange={(e) => (Application.Building = e.target.value)}
              className="BuildingApplicationInput"
            ></input>
          </div>
        </div>

        <div className="SeventhApplicationFlex">
          <div className="MoreDetailsApplication">
            <p>More Details:</p>
            <textarea
              onChange={(e) => (Application.Details = e.target.value)}
              className="MoreDetailsApplicationTextArea"
            ></textarea>
          </div>
        </div>
      </span>
      <button onClick={() => SendApplication()} className="SubmitApplication">
        Submit Application
      </button>
      {/* <Snackbar
        open={error}
        autoHideDuration={3000}
        onClose={handleClose}
        message="error"
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      ></Snackbar> */}
      <Snackbar open={error} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error">
          This is an error message!
        </Alert>
      </Snackbar>
    </div>
  );
};

export default FillApplication;
