import React from "react";
import { NavLink } from "react-router-dom";
import './header.css'

const Header = () => {
    return(
            <div className="header">
                {/* Logo */}
                <p>MyShop</p>
            <nav>
                <NavLink to="/ecommerce" id="navlink">Home</NavLink>
                <NavLink to="/productcategories" id="navlink">Products</NavLink>
                <NavLink to="" id="navlink">About Us</NavLink>
                <NavLink to="" id="navlink">Contact</NavLink>
            </nav>
            </div>
    )
}

export default Header;