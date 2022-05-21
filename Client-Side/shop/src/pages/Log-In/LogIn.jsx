import React, { useState, useContext } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { userContext } from '../../contexts/userContext';
import Axios from 'axios';
import { cardContext } from '../../contexts/cardContext';
import { set } from '../../contexts/cardContext';
import { addressContext } from '../../contexts/addressContext';
import { shopContext } from '../../contexts/shopContext';
import { orderListContext } from '../../contexts/orderListContext';
import { allProductContext } from '../../contexts/allProductsContext';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { setUser } = useContext(userContext);
    const { setShop } = useContext(shopContext);
    const { setOrders } = useContext(orderListContext);
    const { setProductss } = useContext(allProductContext);
    const { setCard } = useContext(cardContext);
    const [wrongCredentials, setWrongCredentials] = useState(false);
    const navigate = useNavigate();
=======
import { userContext } from "../../contexts/userContext";
import Axios from "axios";
import { cardContext } from "../../contexts/cardContext";
import { set } from "../../contexts/cardContext";
import { addressContext } from "../../contexts/addressContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, setUser } = useContext(userContext);
  const [wrongCredentials, setWrongCredentials] = useState(false);
  const navigate = useNavigate();
>>>>>>> d8d94adfeb3748a60ccbeb26c24810953efe4451

  const s = () => {};

<<<<<<< HEAD
    }

    const Auth = () => {
        Axios.post('http://localhost:5000/api/Users/login', {
            "email": email,
            "password": password,
        })
            .then(res => {
                console.log(res.data);
                if (res.data === "") {
                    console.log("Bad Credentials");
                    setWrongCredentials(true);
                } else {
                    if (res.data.hasOwnProperty('isAdmin')) {
                        setUser(res.data);
                    }else{
                        setShop(res.data);
                    }
                    setProductss();
                    setCard(res.data);
                    setAddress(res.data);
                    setOrders(res.data);
                    setWrongCredentials(false)
                    navigate('/');
                }
            }
            ).catch(err => console.log(err));
    }
    const { setAddress } = useContext(addressContext);
    return (
        <div className='page login'>
            <div className='navbar__logo'> <img onClick={() => navigate('/')} alt="" src={process.env.PUBLIC_URL + '/YS_Logo.png'}></img></div>
            <div className='login__container'>
                <h1>Sign-in</h1>
                <div>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)} />
                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} />
                    {wrongCredentials && <p className='error__message'>Wrong Log in credentials, please try again or Sign-Up</p>}
                    <button onClick={Auth} className='login__signInButton'>Sign In</button>
                </div>
                <p>By signing-in you agree to the Yuri Shop Conditions of Use & Sale.</p>
                <button onClick={() => { navigate('/signUp') }} className='login__registerButton'>Create your Yuri Account</button>
            </div>
=======
=======
import { userContext } from "../../contexts/userContext";
import Axios from "axios";
import { cardContext } from "../../contexts/cardContext";
import { set } from "../../contexts/cardContext";
import { addressContext } from "../../contexts/addressContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, setUser } = useContext(userContext);
  const [wrongCredentials, setWrongCredentials] = useState(false);
  const navigate = useNavigate();

  const s = () => {};

>>>>>>> origin
  const Auth = () => {
    Axios.post("http://localhost:5000/api/Users/login", {
      email: email,
      password: password,
    })
      .then((res) => {
        if (res.data === "") {
          console.log("Bad Credentials");
          setWrongCredentials(true);
        } else {
          setUser(res.data);
          setCard(res.data.userId);
          setAddress(res.data.userId);
          setWrongCredentials(false);
          navigate("/");
        }
      })
      .catch((err) => console.log(err));
  };
  const { setCard } = useContext(cardContext);
  const { setAddress } = useContext(addressContext);
  return (
    <div className="page login">
      <div className="navbar__logo">
        {" "}
        <img
          onClick={() => navigate("/")}
          alt=""
          src={process.env.PUBLIC_URL + "/YS_Logo.png"}
        ></img>
      </div>
      <div className="login__container">
        <h1>Sign-in</h1>
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
<<<<<<< HEAD
>>>>>>> d8d94adfeb3748a60ccbeb26c24810953efe4451
=======
>>>>>>> origin
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
          Create your Yuri Account
        </button>
      </div>
    </div>
  );
};

=======
import { userContext } from "../../contexts/userContext";
import Axios from "axios";
import { cardContext } from "../../contexts/cardContext";
import { set } from "../../contexts/cardContext";
import { addressContext } from "../../contexts/addressContext";

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
        if (res.data === "") {
          console.log("Bad Credentials");
          setWrongCredentials(true);
        } else {
          setUser(res.data);
          setCard(res.data.userId);
          setAddress(res.data.userId);
          setWrongCredentials(false);
          navigate("/");
        }
      })
      .catch((err) => console.log(err));
  };
  const { setCard } = useContext(cardContext);
  const { setAddress } = useContext(addressContext);
  return (
    <div className="page login">
      <div className="navbar__logo">
        {" "}
        <img
          onClick={() => navigate("/")}
          alt=""
          src={process.env.PUBLIC_URL + "/YS_Logo.png"}
        ></img>
      </div>
      <div className="login__container">
        <h1>Sign-in</h1>
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
          Create your Yuri Account
        </button>
      </div>
    </div>
  );
};

>>>>>>> d8d94adfeb3748a60ccbeb26c24810953efe4451
export default Login;
