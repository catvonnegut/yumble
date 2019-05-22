import React from "react";
import "./Header.css";
import logo from "../Home/yumble_logo.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <div className="header">
      <Link to="/">
	      <img src={logo} className="home-logo" alt="" />
      </Link>
      <Link to="/cart">
		    <i class="fas fa-shopping-cart fa-5x"></i>
      </Link>
      </div>
    </div>
  );
}

export default Header;
