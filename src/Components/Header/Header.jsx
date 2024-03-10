import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <nav>
      <NavLink to="/home" className="logo">
        <img src={require("./logo.jpeg")} alt="logo" />
        <h1>Technoocean</h1>
      </NavLink>
      <div className="midlinks">
        <NavLink to="/home">home</NavLink>
        <NavLink to="/prices">prices</NavLink>
        <NavLink to="/events">events</NavLink>
      </div>
      <div className="rightlinks">
        <button className="signup">Signup</button>
        <button className="login">Login</button>
      </div>
    </nav>
  );
};

export default Header;
