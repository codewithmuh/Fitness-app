import React from "react";
import red_logo from "../../Screens/Images/red-logo.png";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div>
      <div className="navbar">
        <div className="navbar-inner">
          <div className="menu-icon">
            <i class="fas fa-bars"></i>
          </div>
          <div className="nav-logo">
            <img className="nav-logo-img" src={red_logo} />
          </div>
        </div>
      </div>
    </div>
  );
}
