import React, { useState } from 'react'
import SearchBar from './Search'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import './navbar.css'

const Navbar = () => {
    const navigate = useNavigate()
    const [toogle, setData] = useState(true);
    const show = () => {
        console.log(toogle);
        setData(!toogle);
    }
    let navClass = toogle ? 'hide':'show'
    return (
        <nav className='navbar'>
            <ul>
                <div className='logo_And_Search'>
                    <li className='navbar__logo'> <img onClick={() => navigate('/')} alt="" src={process.env.PUBLIC_URL + '/YS_Logo.png'}></img></li>
                    <SearchBar />
                    <li className='navbar__toogle'><button onClick={show} className='but'><i className='fa fa-bars'></i></button></li>
                </div>
                 <div className={'menu__options '+navClass}>
                    <li className='navbar__link'>
                        <a href='/logIn'>
                            <button className='but'>
                                Hello Guest!
                                Sign in
                            </button>
                        </a>
                    </li>
                    <li className='navbar__link'><a href='/order'><button className='but'>Orders</button></a></li>
                    <li onClick={()=>navigate('/cart')} className='navbar__link'>
                        <i className='fa fa-shopping-cart'><strong> 0</strong></i>
                    </li>
                </div>
            </ul>
        </nav>
    )
}

export default Navbar