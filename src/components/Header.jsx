import React from "react";
import logo from "../assets/lion_logo.png";
import './Header.css'

function Header() {
  return (
    <div className="header">
      <img className="logo" src={logo} alt="" srcSet="" />
      <span className="header-name">Car Booking</span>
    </div>
  );
}

export default Header;
