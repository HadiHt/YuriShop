import React, { useState, useContext } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { userContext } from "../../contexts/userContext";
import Axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, setUser } = useContext(userContext);
  const [wrongCredentials, setWrongCredentials] = useState(false);
  const navigate = useNavigate();

  const s = () => {};

  const Auth = () => {
    Axios.post("http://localhost:5000/api/Users/login", {
      email: email,
      password: password,
    })
      .then((res) => {
        //console.log(res.data);
        if (res.data === "") {
          console.log("Bad Credentials");
          setWrongCredentials(true);
        } else {
          setUser(res.data);
          setWrongCredentials(false);
          navigate("/");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="page login">
      <Link to="/">
        <div className="login__logo">
          <h2>
            logo <i className="fa fa-instagram"></i>
          </h2>
        </div>
      </Link>
      <div className="login__container">
        <h1>Sign-in</h1>
        {/* <div>{console.log(user)}</div> */}
        <div>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {wrongCredentials && (
            <p className="error__message">
              Wrong Log in credentials, please try again or Sign-Up
            </p>
          )}
          <button onClick={Auth} className="login__signInButton">
            Sign In
          </button>
        </div>
        <p>
          By signing-in you agree to the Yuri Shop Conditions of Use & Sale.
        </p>
        <button
          onClick={() => {
            navigate("/signUp");
          }}
          className="login__registerButton"
        >
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
};

export default Login;
