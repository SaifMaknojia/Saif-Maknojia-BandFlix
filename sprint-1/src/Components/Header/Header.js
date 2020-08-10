import React from "react";
import navImage from '../../assets/Logo/header-logo.svg';
import profileImage from '../../assets/Images/Mohan-muruge.jpg';
import './Header.scss';


function Header(props) {
  return (
    <>
    <nav className="header">
      <div className="logo">
        <img className="logo__image" src={navImage} alt="Hero Logo" />
      </div>
      <div className="header__holder">
        <div className="box">
          {/* <label for="search"></label> */}
          <input type="search" id="search" className="box__search" name="search" placeholder="🔍 Search"></input>
        </div>
        <div className="input">
          <button className="input__button">Upload</button>
          <img className="input__image" src={profileImage} alt="Profile pic"></img>
        </div>
      </div>
    </nav>
    </>
  );
}

export default Header;

