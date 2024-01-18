import React, { useState } from "react";
import Navbar from "../navbar/Navbar";
import './props.css'

const Props = () => {

 const[count, setCount] = useState(0)
 const increment = () => {
    setCount(count + 1)
 }
 console.log(count, "count");

 const decrement = () => {
    setCount(count - 1)
 }



    return(
        <div>
            {/* <Navbar increment={increment} decrement={decrement}/> */}
            {/* <p>{count}</p> */}
        </div>
    )
}


export default Props;