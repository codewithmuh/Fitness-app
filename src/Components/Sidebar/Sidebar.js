import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

export default function Sidebar() {
  return (
    <div>
      <div className="port-left-sidebar">
        <div className="profile-box">
          <div className="profile-img"></div>
          <h2>James Smith</h2>
          <p>Public</p>
        </div>
        <div className="sidebar-menu">
          <ul>
            <li className="active">
              <Link to="/home">
                <i class="fas fa-home"></i> Home
              </Link>
            </li>
            <li>
              <Link to="/profile">
                <i class="fas fa-user-alt"></i> Profile
              </Link>
            </li>
            <li>
              <Link to="/">
                <i class="fas fa-bell"></i> Notification
              </Link>
            </li>
            <li>
              <Link to="/">
                <i class="fas fa-sign-in-alt"></i> Logout
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
