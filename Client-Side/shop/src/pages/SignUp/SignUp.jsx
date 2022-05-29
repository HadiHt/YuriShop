import React, { useState, useContext } from "react";
import "./SignUp.css";
import { Link, useNavigate } from "react-router-dom";
import { userContext } from "../../contexts/userContext";
import Axios from "axios";
import EmailAlreadyTakenSnackbar from "../../components/SnackBars/ErrorSnackBar/EmailAlreadyTakenSnackBar";
import UserAccountCreated from "../../components/SnackBars/SuccessSnackBar/UserAccountCreated";

const SignUp = () => {
  const [userEmail, setUserEmail] = useState("");
  const [UserPassword, setUserPassword] = useState("");
  const [EmailError, setEmailError] = useState(false);
  const [passError, setpassError] = useState(false);
  const [conPassError, setconPError] = useState(false);
  const [EmailNotFound, SetEmailNotFound] = useState(false);
  const [EmailCreated, SetEmailCreated] = useState(false);
  const { setUser } = useContext(userContext);
  const navigate = useNavigate();

  const SignUp = () => {
    if (EmailError === false && passError === false && conPassError === false) {
      Axios.post("http://localhost:5000/api/users/Validation/" + userEmail)
        .then((res) => {
          Axios.post("http://localhost:5000/api/Users/SignUp", {
            email: userEmail,
            password: UserPassword,
          })
            .then(function (response) {
              SetEmailCreated(true);
              Axios.post(
                "http://localhost:5000/api/Users/" +
                  response.data.userId +
                  "/address",
                {
                  state: "Not Specified",
                  street: "Not Specified",
                  city: "Not Specified",
                  area: "Not Specified",
                  building: "Not Specified",
                  details: "Not Specified",
                  userRefId: response.data.userId,
                  shopRefId: null,
                }
              ).then(function (response) {
                console.log(response.data);
              });
              setTimeout(function () {
                navigate("/");
              }, 3000);
            })
            .catch(function (error) {
              console.log(error);
            });
        })
        .catch((err) => {
          SetEmailNotFound(true);
        });
    } else {
      console.log("incomplete");
    }
  };

  const ValidateEmail = (e) => {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (e.target.value.match(mailformat)) {
      setUserEmail(e.target.value);
      setEmailError(false);
    } else {
      setEmailError(true);
    }
  };
  const ValidatePassword = (e) => {
    var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    if (e.target.value.match(passw)) {
      setUserPassword(e.target.value);
      setpassError(false);
    } else {
      setpassError(true);
    }
  };
  const ConPassword = (e) => {
    if (e.target.value === UserPassword) {
      setconPError(false);
    } else {
      setconPError(true);
    }
  };

  return (
    <div className="page signup">
      <Link to="/">
        <div className="signup__logo">
          <h2>
            logo <i className="fa fa-instagram"></i>
          </h2>
        </div>
      </Link>
      <div className="signup__container">
        <h1>Sign-Up</h1>
        <div>
          <h5>E-mail</h5>
          <input type="text" onChange={ValidateEmail} />
          {EmailError && (
            <p className="error__message">
              Invalid e-mail address (example@example.com)
            </p>
          )}
          <h5>Password</h5>
          <input type="password" onChange={ValidatePassword} />
          {passError && (
            <p className="error__message">
              a password should be between 6 to 20 characters which contain at
              least one numeric digit, one uppercase and one lowercase letter
            </p>
          )}
          <h5>Confirm Password</h5>
          <input type="password" onChange={ConPassword} />
          {conPassError && (
            <p className="error__message">passwords does not match</p>
          )}
          <button onClick={SignUp} className="signup__registerButton">
            Create your Yuri Account
          </button>
        </div>
        <EmailAlreadyTakenSnackbar
          open={EmailNotFound}
          setOpen={SetEmailNotFound}
        />
        <UserAccountCreated open={EmailCreated} setOpen={SetEmailCreated} />
        <p>
          By signing-up you agree to the Yuri Shop Conditions of Use & Sale.
        </p>
      </div>
    </div>
  );
};

export default SignUp;
