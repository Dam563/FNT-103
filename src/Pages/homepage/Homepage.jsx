import React from "react";
import Navbar from "../../components/navbar/Navbar";
import './homepage.css'

const Homepage = () => {
return(
    <div>
        <Navbar />
        <div id="hero-section">
        <h2>Welcome to my page!</h2>
        <p>This page contains everything I have learnt so far in my React JS class.</p>
        <p>Sit back and enjoy as you check through.</p>
        </div>
    </div>
)


}


export default Homepage;