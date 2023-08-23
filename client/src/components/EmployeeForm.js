import React, { useState } from "react";
import "./EmployeeForm.css";
import hrms1 from "../images/hrms1.png";
import axios from "axios"
import { useNavigate } from "react-router-dom";

const EmployeeForm = () => {
  const [formdata, setFormdata] = useState({
    id: 0,
    name: "",
    email: "",
    position: "",
    password: "",
    department: "",
    shift: "morning",
    salary: 0,
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormdata((prev) => ({
      ...prev,
      [name]: value
    }))
  }
  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault();

console.log(formdata)
    try {
      const response = await axios.post("http://localhost:2030/employee/", { ...formdata });

      console.log(response.data); // Do something with the response
      navigate("/employeeui")
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <main className="employeeContainer">
      <form className="employeeFields" onSubmit={handleSubmit}>
        <h2 className="heading">Add Employee</h2>
        <br />
          <div className="form-div">
            <label htmlFor="id">Employee Id</label>
            <input id="id" type="number" name="id" placeholder="Enter ID..." onChange={handleInputChange} value={formdata.id === 0 ? "" : formdata.id} required />
          </div>
          <div className="form-div">
            <label htmlFor="name">Employee Name</label>
            <input id="name" type="text" name="name" placeholder="Employee Name..." onChange={handleInputChange} value={formdata.name} required />
          </div>
          <div className="form-div">
            <label htmlFor="email">Employee Email</label>
            <input id="email" type="email" name="email" placeholder="Employee Email..." onChange={handleInputChange} value={formdata.email} required />
          </div>
          <div className="form-div">
            <label htmlFor="position">Employee Position</label>
            <input id="position" type="text" name="position" placeholder="Employee Position..." onChange={handleInputChange} value={formdata.position} required />
          </div>
          <div className="form-div">
            <label htmlFor="department">Employee Department</label>
            <input id="department" type="text" name="department" placeholder="Employee Department..." onChange={handleInputChange} value={formdata.department} required />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label htmlFor="shift">Select a Shift:</label>
            <select name="shift" id="shift" onChange={handleInputChange} value={formdata.shift} style={{ width: "80%", padding: "10px", borderRadius: "10px" }}>
              <option value="morning">Morning Shift</option>
              <option value="afternoon">Afternoon Shift</option>
              <option value="night">Night Shift</option>
            </select>
          </div>
          <div className="form-div">
            <label htmlFor="salary">Employee Salary</label>
            <input id="salary" type="number" name="salary" placeholder="Employee Salary..." onChange={handleInputChange} value={formdata.salary === 0 ? "" : formdata.salary} required />
          </div>
          <div className="form-div">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" placeholder="Enter Password..." onChange={handleInputChange} value={formdata.password} required/>
        </div>
          <button type="submit" className="btn-submit">SUBMIT</button>
      </form>
      <img src={hrms1} alt="logo" className="hrms-image" />
    </main>
  );
};

export default EmployeeForm;
