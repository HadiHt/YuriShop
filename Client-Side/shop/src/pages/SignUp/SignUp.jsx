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
  const [defaultPfp, setDefaultPfp] = useState(
    "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"
  );

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
              const finishedBase = "userId"+response.data.userId+":"+defaultPfp;
              console.log(finishedBase)
              Axios.post(
                "http://localhost:5000/api/images/UserProfile",
                finishedBase
              )
                .then((res) => {console.log("done")})
                .catch((err) => {
                  console.log("error");
                });
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
