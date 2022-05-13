import React, { useState, useContext } from 'react';
import './Login.css'
import { Link, useNavigate } from "react-router-dom";
import { userContext } from '../../contexts/userContext';
import Axios from 'axios';
import { cardContext } from '../../contexts/cardContext';
import { set } from '../../contexts/cardContext';
import { addressContext } from '../../contexts/addressContext';
import { shopContext } from '../../contexts/shopContext';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { setUser } = useContext(userContext);
    const { setShop } = useContext(shopContext);
    const [wrongCredentials, setWrongCredentials] = useState(false);
    const navigate = useNavigate();

    const s = () => {

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
                    setCard(res.data);
                    setAddress(res.data);
                    setWrongCredentials(false)
                    navigate('/');
                }
            }
            ).catch(err => console.log(err));
    }
    const { setCard } = useContext(cardContext);
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
        </div>
    )
}

export default Login
