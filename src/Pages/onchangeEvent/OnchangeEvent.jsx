import React, { useState } from "react";
import "./onchange.css";

const OnchangeEvent = () => {
  const [firstName, setFirstname] = useState("");
  const [lastName, setLastname] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmpassword] = useState("");
  const[department, setDepartment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // always use this for a better experience on your form (to prevent refreshing)
    const payload = {
      first_name: firstName,
      last_name: lastName,
      password: password,
      confirm_password: confirmPassword,
      department,
    };
    console.log("payload", payload);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">First Name</label>
        <input
          type="text"
          name="firstname"
          value={firstName}
          onChange={(e) => setFirstname(e.target.value)}
        />
        <label htmlFor="">Last Name</label>
        <input
          type="text"
          name="lastname"
          value={lastName}
          onChange={(e) => setLastname(e.target.value)}
        />
        <label htmlFor="">Password</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label htmlFor="">Confirm Password</label>
        <input
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmpassword(e.target.value)}
        />
        <select type="select" name="department" value={department}  onChange={(e) => setDepartment(e.target.value)}>
            <option value="frontend">Frontend</option>
            <option value="backend">Backend</option>
            <option value="devops">Devops</option>
            Select Department
        </select>
        <button id="button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default OnchangeEvent;
