import React from "react";
import { NavLink } from "react-router-dom";
import "../style/navBar.css";

function NavBar() {
  return (
    <div>
      <ul>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/about"
          >
            about
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/home"
          >
            home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/users"
          >
            Users
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/dashboard"
          >
            Dashboard
          </NavLink>
          <ul>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "")}
                to="/dashboard/welcome"
              >
                Welcome
              </NavLink>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
