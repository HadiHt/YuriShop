import React, { useState, useContext } from 'react';
import './Login.css'
import { Link, useNavigate } from "react-router-dom";
import { userContext } from '../../userContext';
import Axios from 'axios';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { user, setUser } = useContext(userContext);
    const [Data, setData] = useState([]);
    const navigate = useNavigate();

    const s = () => {

    }

    const Auth = () => {
        Axios.get('http://localhost:5000/api/Users/' + email + '/Email')
            .then(res => {
                console.log(res.data);
                setData(res.data);
            }
            ).catch(err => console.log(err));
            console.log(Data.email);
            if (Data.email === email && Data.password === password) {
                setUser(Data.userId);
                navigate('/');
            }
            else {
                console.log('invalid');
            }
    }

    return (
        <div className='page login'>
            <Link to='/'>
                <div className="login__logo">
                    <h2>logo <i className='fa fa-instagram'></i></h2>
                </div>
            </Link>
            <div className='login__container'>
                <h1>Sign-in</h1>
                <div>{user}</div>
                <div>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)} />
                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} />
                    <button onClick={Auth} className='login__signInButton'>Sign In</button>
                </div>
                <p>By signing-in you agree to the Yuri Shop Conditions of Use & Sale.</p>
                <button className='login__registerButton'>Create your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login