import React from "react";
import navImage from '../../assets/Logo/header-logo.svg';
import profileImage from '../../assets/Images/Mohan-muruge.jpg';
import './Header.scss';
import { Link } from 'react-router-dom';


function Header(props) {
  return (
    <>
      <nav className="header">
        <div className="logo">
          <Link to="/">
            <img className="logo__image" src={navImage} alt="Hero Logo" />
          </Link>
        </div>
        <div className="header__holder">
          <div className="box">
            {/* <label for="search"></label> */}
            <input type="search" id="search" className="box__search" name="search" placeholder="🔍 Search"></input>
          </div>
          <div className="input">
            <Link to="/upload">
              <button className="input__button">Upload</button>
              </Link>
            <img className="input__image" src={profileImage} alt="Profile pic"></img>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;

