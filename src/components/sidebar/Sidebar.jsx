import React from "react";
import "./sidebar.css";
import logo from "../../Primary.png";
import home from "../../home 1.png";
import service from "../../clipboard 1.png";
import transaction from "../../credit-card (2) 1.png";
import wallet from "../../wallet 1.png";
import { NavLink } from "react-router-dom";
import account from "../../user (8) 2.png";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <img src={logo} alt="" className="logo" />
      <div className="sidebar-btn">
        <NavLink
          to="/home"
          className={`${"home"} ${({ isActive }) =>
            isActive ? "active" : ""}`}
        >
          <img src={home} alt="" className="home-img" />
          <p className="home-paragraph">Home</p>
        </NavLink>

        <NavLink
          to="/services"
          className={`${"home"} ${({ isActive }) =>
            isActive ? "active" : ""}`}
        >
          <img src={service} alt="" className="home-img" />
          <p className="home-paragraph">Services</p>
        </NavLink>
        <NavLink
          to="/transactions"
          className={`${"home"} ${({ isActive }) =>
            isActive ? "active" : ""}`}
        >
          <img src={transaction} alt="" className="home-img" />
          <p className="home-paragraph">Transactions</p>
        </NavLink>
        <NavLink
          to="/wallet"
          className={`${"home"} ${({ isActive }) =>
            isActive ? "active" : ""}`}
        >
          <img src={wallet} alt="" className="home-img" />
          <p className="home-paragraph">Wallet</p>
        </NavLink>
        <NavLink
          to="/account"
          className={`${"home"} ${({ isActive }) =>
            isActive ? "active" : ""}`}
        >
          <img src={account} alt="" className="home-img" />
          <p className="home-paragraph">Account Settings</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
