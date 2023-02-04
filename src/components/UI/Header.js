import React from "react";
import { Link, NavLink } from "react-router-dom";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            <NavLink
              end
              className={({ isActive }) => {
                return isActive ? classes.active : undefined;
              }}
              to={"/"}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => {
                return isActive ? classes.active : undefined;
              }}
              to={"/products"}
            >
              Product
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
