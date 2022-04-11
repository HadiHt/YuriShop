import React from 'react'
import Button from '../elements/Button/Button'
import './Navbar.css'
import options from './Options'
import prof from '../elements/prof.png'

const Navbar = () => {
  return (
    <di className='navbar'>
      <nav className='nav'>
        <h1 className='logo'>logo <i className='fa fa-instagram icon'></i></h1>
        <div className='input-icons'>
          <i className='fa fa-search search-ion'></i>
          <input type="text" placeholder="Search.." className='search'></input>
        </div>
        <ul className='optionList'>
          {
            options.map((option, index) => {
              return (
                <li key={index} className='option'>
                  <Button style={option.style} text={option.name} url={option.url} icon={option.icon} />
                </li>
              )
            }
            )
          }
          <li className='option'><img className='prof' alt='profile pic' src={prof}></img></li>
        </ul>
      </nav>
    </di>
  )
}

export default Navbar