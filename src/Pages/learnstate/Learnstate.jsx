import React from 'react';
import { useState } from 'react';
import './learnstate.css';

function Learnstate() {
  const[age, setAge] = useState(7);
  const[car, setCar] = useState({make:"504", year:1998});
  const[title,setTitle] = useState("");
  const[show, setShow] = useState(false);
  const[bankName, setBankName] = useState("");
  const[loading, setLoading] = useState(false);

  const increment = () =>{
    setAge(age + 1);
    // alert("Hello!");
    setTitle("Learning React in three weeks");
  }
const decrement = () =>{
  setAge(age - 1);
  setTitle("")
}

let update = "Dami is a senior software engineer";

const showUpdate = () => {
  setShow(true)
}

function myFunction() {
  console.log("Timeout completed!");
}

// Set a timeout to call myFunction after 2000 milliseconds (2 seconds)

const isLoading = () => {
  setLoading(true);
  setBankName("")

  setTimeout(() => {
    // After the timeout, set loading back to false
    setLoading(false);
    setBankName("Wema Bank");
  }, 2000); // Change 2000 to the desired delay in milliseconds
};



  return (
    <div className="learnstate">
      <button onClick={increment}>Increment</button>
      <p>{age}</p>
      <p>Michael loves cars like {car.make} made in {car.year}</p>
      <p>{title}</p>
      <button onClick={decrement}>Decrement</button>
      {/* <p>{show && update}</p> */}
      <p>{show === false ? "No data available" : update}</p>
      <p>{loading === false ? " " : "Loading"}</p>
      <p>{bankName ? bankName : ""}</p>
      <button onClick={showUpdate}>Show Update</button> 
      <button onClick={isLoading}>Load page</button>
      
    </div>
  );
}

export default Learnstate;
