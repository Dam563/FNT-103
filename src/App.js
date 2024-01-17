
import React from "react";
import { Routes, Route } from "react-router-dom";
import Counter from "./Pages/counter/Counter"
import FormikForm from "./Pages/eventHandling/formikForm/FormikForm";
import OnchangeEvent from "./Pages/onchangeEvent/OnchangeEvent";
import Homepage from "./Pages/homepage/Homepage";
import Learnhooks from "./Pages/learnhooks/Learnhooks";
import Learnstate from "./Pages/learnstate/Learnstate";
import Person from "./Pages/person/Person";
import Productcategories from "./Pages/productcategories/Productcategories";
import Worldrank from "./Pages/worldRank/Worldrank";
import './App.css';


const App = () =>{
let count = 5;


  return(

    <div>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/learnstate" element={<Learnstate />} />
      <Route path="/counter" element={<Counter count={count} data="Hello" />} />
      <Route path="/person" element={<Person />} />
      <Route path="/learnhooks" element={<Learnhooks />} />
      <Route path="/formikform" element={<FormikForm />} />
      <Route path="/onchangeevent" element={<OnchangeEvent />} />
      <Route path="/productcategories" element={<Productcategories />} />
      <Route path="/worldrank" element={<Worldrank />} />
      </Routes>
      </div>
  )

}

export default App;