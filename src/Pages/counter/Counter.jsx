import React, { useState } from "react";

const Counter = ({count, data}) => {
    
const[item, setItem] = useState(count);
console.log(item);
 const increment = () => {
    setItem(item + 1);
 }

 return(
    <div>
         <button onClick={increment}>Increase</button> 

    </div>
   
 )
}


export default Counter;