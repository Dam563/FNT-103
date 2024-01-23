import React from "react";
import {NavLink } from "react-router-dom";
import './navbar.css';

const Navbar = ({increment , decrement}) => {
//     const Navbar = (props) => { another way to write line 5
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

      {/* <button onClick={() =>increment()}>Increment</button> */}
      {/* <button onClick={props.increment}>Increment</button> Another way to do line 38 */}
      {/* <button onClick={() =>decrement()}>Decrement</button> */}
    </nav>
  );
};

export default Navbar;
