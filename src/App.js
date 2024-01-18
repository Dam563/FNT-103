
import React from "react";
import { Routes, Route, Router } from "react-router-dom";
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
import Props from "./components/props/Props";
import Dashboard from "./Pages/dashboard/Dashboard";
import Home from "./Pages/home/Home";
import Services from "./Pages/service/Services";
import Transactions from "./Pages/transactions/Transactions";
import Wallet from "./Pages/wallet/Wallet";
import Account from "./Pages/account/Account";


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
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/home" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/transactions" element={<Transactions />} />
      <Route path="/wallet" element={<Wallet />} />
      <Route path="/account" element={<Account />} />
      
      {/* <Route path="/props" element{<Props />} /> */}
      </Routes>
      <Props />
      </div>
  )

}

export default App;