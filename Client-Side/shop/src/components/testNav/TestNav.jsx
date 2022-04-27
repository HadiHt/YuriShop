import React, { useState } from "react";
import "./Header.css";
import options from "./option";
import { Link } from 'react-router-dom';
import SearchBar from "./Search";

const Nav = options.map((option, index) => {
  return (
    <div key={index} className="header__option">
      <Link to={option.url}>
        <button className="but">
          <span className="header__optionLineOne">{option.firstLine}</span>
          <span className="header__optionLineTwo">{option.secondLline}</span>
        </button>
      </Link>
    </div>
  )
});
const collab = options.map((option, index) => {
  return (
    <div key={index} className="header__option">
      <Link to={option.url}>
        <button className="but collapsed-but">
          <span className="header__optionLineOne">{option.firstLine}</span>
          <span className="header__optionLineTwo">{option.secondLline}</span>
        </button>
      </Link>
      <hr />
    </div>
  )
});

const Header = () => {
  const [toogle, setData] = useState(false);
  const show = () => {
    console.log(toogle);
    setData(!toogle);
  }
  var s = window.innerWidth;
  if (s < 500) {
    console.log(s)
  }
  return (
    <div className="container">
      <div className="header">
        <div className="header__logo">
          <h2>logo <i className='fa fa-instagram'></i></h2>
        </div>
        {/* <Search /> */}
        <SearchBar />
        <div className="header__nav">
          <div className="displayedContent">
            {Nav}
          </div>
          <button className='but bars' onClick={show}>
            <i className={toogle ? 'fa fa-ban icon' : 'fa fa-bars icon'}></i>
          </button>
          <div className="header__optionBasket">
            <i className="fa fa-shopping-basket"></i>
            <span className="header__optionLineTwo header__basketCount">
              0
            </span>
          </div>
        </div>
      </div>
      {toogle && <div className="collapse-container">
        <div className='header_collaped_options'>
          {collab}
        </div>
      </div>}
    </div>
  );
}

export default Header;