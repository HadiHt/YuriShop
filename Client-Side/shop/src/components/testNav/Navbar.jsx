import React, { useEffect, useState, useContext } from 'react'
import SearchBar from './Search'
import { useNavigate } from 'react-router-dom'
import { userContext } from '../../contexts/userContext'
import Axios from 'axios'
import './navbar.css'
import { cartContext } from '../../contexts/cartContext'

const Navbar = () => {
    const navigate = useNavigate()
    const [toogle, setData] = useState(true);
    const show = () => {
        console.log(toogle);
        setData(!toogle);
    }
    const {cart,setcart}= useContext(cartContext);
    let navClass = toogle ? 'hide' : 'show'
    const [Data,setDataa] = useState([]);
    const { user, setUser } = useContext(userContext);
        if (user !== "") {
            Axios.get('http://localhost:5000/api/Images/UserProfile/userId'+user.userId)
                .then(res => {
                //    console.log(res.data);
                    setDataa(res.data);
                }).catch(err => console.log(err));
        }

    const order = () => {
        if (user === ""){
            navigate("/logIn")
        }else{
            navigate('/user/order/id')
        }
    }
    const dotocart = () => {
        if (user === ""){
            navigate("/logIn")
        }else{
            navigate('/cart')
        }
    }
    return (
        <nav className='navbar'>
            <div className='co'>
                <div className='logo_And_Search'>
                    <li className='navbar__logo'> <img onClick={() => navigate('/')} alt="" src={process.env.PUBLIC_URL + '/YS_Logo.png'}></img></li>
                    <SearchBar />
                    <li className='navbar__toogle'><button onClick={show} className='but'><i className='fa fa-bars'></i></button></li>
                    {user !== "" ? <li className='coll userProfile'><img src={'data:image/png;base64,'+Data} alt=""></img></li> : ""}
                </div>
                <div className={'menu__options ' + navClass}>
                    <li className='navbar__link'>
                        {user === "" &&
                            <button className='but'>
                                Hello Guest! Sign in
                            </button>
                        }
                        {user !== "" && <button className='but' onClick={()=>{navigate('/profile/id')}}>hello {user.firstName}</button>}
                    </li>
                    <li className='navbar__link'><button onClick={order} className='but'>Orders</button></li>
                    <li className='navbar__link'>
                        <button onClick={dotocart} className='but'><i className='fa fa-shopping-cart'>  {cart.length}</i></button>
                    </li>
                </div>
                {user !== "" ? <li className='normal userProfile'><img src={'data:image/png;base64,'+Data} alt=""></img></li> : ""}
            </div>
        </nav>
    )
}

export default Navbar