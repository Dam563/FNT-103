import React from "react";
import {NavLink } from "react-router-dom";
import './navbar.css';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/" id="list-item">Home Page</NavLink>
        </li>
        <li>
          <NavLink to="/counter" id="list-item">Counter</NavLink>
        </li>
        <li>
          <NavLink to="eventhandling" id="list-item">Event Handling</NavLink>
        </li>
        <li>
          <NavLink to="/learnhooks" id="list-item">Learn Hooks</NavLink>
        </li>
        <li>
          <NavLink to="/learnstate" id="list-item">Learn State</NavLink>
        </li>
        <li>
          <NavLink to="/onchangeevent" id="list-item">Onchange Event</NavLink>
        </li>
        <li>
          <NavLink to="/Person" id="list-item">Person</NavLink>
        </li>
        <li>
          <NavLink to="/productcategories" id="list-item">Product Categories</NavLink>
        </li>
        <li>
          <NavLink to="/worldrank" id="list-item">World Rank</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
