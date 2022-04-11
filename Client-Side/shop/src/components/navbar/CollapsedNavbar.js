import React from 'react'
import Button from '../elements/Button/Button'
import './CollapsedNav.css'
import './Navbar.css'
import prof from '../elements/prof.png'
import { useEffect, useState } from 'react'
import options from './Options'

const CollapsedNavbar = () => {
    const [toogle, setData] = useState(true);
    const show=() => {
        console.log(toogle);
        setData(!toogle);
    }
    return (
        <div className='collapsed'>
            <nav className='nav topnav'>
                <h1 className='logo'>logo <i className='fa fa-instagram icon'></i></h1>
                <div className='input-icons'>
                    <i className='fa fa-search search-ion'></i>
                    <input type="text" placeholder="Search.." className='search'></input>
                </div>
                <Button style={'but option'} icon={toogle ? 'fa fa-ban' : 'fa fa-bars'} func={show}></Button>
                <img className='prof' alt='profile pic' src={prof}></img>
            </nav>
            {toogle && <ul className='collapsed-Menu'>
                {
                    options.map((option, index) => {
                        return (
                            <li key={index} className='option'>
                                <a href={option.link}><i className={option.icon}></i>{option.name}</a>
                            </li>
                        )
                    }
                    )
                }
            </ul>}
        </div>
    )
}

export default CollapsedNavbar