import React, { useState } from "react";
import "./EmployeeForm.css";

const EmployeeForm = () => {
  const [employeeName, setEmployeeName] = useState("");
  const [employeeId, setEmployeeId] = useState("");
  const [employeePhone, setEmployeePhone] = useState("");
  const [employeeAddress, setEmployeeAddress] = useState("");
  const [employeeEmail, setEmployeeEmail] = useState("");
  const [employeePassword, setEmployeePassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <main className="employeeContainer">
      <form className="employeeFields">
        <h2 className="heading-animate">Add Employee</h2>
        <br />
        <div>
          <label htmlFor="name">Employee Name</label>
          <input id="name" type="text" placeholder="Employee Name..." onChange={(e) => setEmployeeName(e.target.value)} value={employeeName} required/>
        </div>
        <div>
          <label htmlFor="id">Employee Id</label>
          <input id="id" type="number" placeholder="Employee Id..." onChange={(e) => setEmployeeId(e.target.value)} value={employeeId} required/>
        </div>
        <div>
          <label htmlFor="phone">Employee Phone</label>
          <input id="phone" type="number" placeholder="Employee Phone no...." onChange={(e) => setEmployeePhone(e.target.value)} value={employeePhone} required/>
        </div>
        <div>
          <label htmlFor="address">Employee Address</label>
          <input id="address" type="text" placeholder="Employee Address..." onChange={(e) => setEmployeeAddress(e.target.value)} value={employeeAddress} required/>
        </div>
        <div>
          <label htmlFor="email">Employee Email</label>
          <input id="email" type="email" placeholder="Employee Email..." onChange={(e) => setEmployeeEmail(e.target.value)} value={employeeEmail} required/>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input id="password" type="password" placeholder="Enter Password..." onChange={(e) => setEmployeePassword(e.target.value)} value={employeePassword} required/>
        </div>
        <button onClick={handleSubmit} className="btn-submit">
          SUBMIT
        </button>
      </form>
      <img src="https://blog.vantagecircle.com/content/images/2021/01/Employee-Management-Meaning-Importance-Tips-Tools---More.png" className="hrms-image" />
    </main>
  );
};

export default EmployeeForm;
