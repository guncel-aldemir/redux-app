import React from "react";
import { NavLink } from "react-router-dom";
import Logo from  "../../assets/images/icons8-breaking-bad.svg"
import "./Navbar.scss"
const Navbar = () => {
  return <div className="navbar">
  <div className="logo">
      <img src={Logo} alt=""/>
  </div>
  <div className="navLinks">
      <NavLink to="/" className="navLink">
          Home
      </NavLink>
     
      <NavLink to="/quotes" className="navLink">
          Quotes
      </NavLink>
  </div>
</div>;
};

export default Navbar;
