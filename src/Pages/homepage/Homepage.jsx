import React from "react";
import Navbar from "../../components/navbar/Navbar";
import './homepage.css'
import { Link } from "react-router-dom";

const Homepage = () => {
return(
    <div>
        <Navbar />
        <div id="hero-section">
        <h2 id="hero-head">Welcome to my page!</h2>
        <p id="hero-paragraph">This page contains everything I have learnt so far in my React JS class.</p>
        <p id="hero-paragraph">Sit back and enjoy as you check through.</p>
        <Link to="/home">Take me to Dashboard</Link> <br />
        <Link to="/ecommerce">Take me to E-commerce store</Link> <br />
        <Link to="/todo">Take me to ToDo</Link>
        </div>
    </div>
)


}


export default Homepage;