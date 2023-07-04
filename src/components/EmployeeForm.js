import React, { useState } from "react";
import "./EmployeeForm.css";
import hrms1 from "../images/hrms1.png";
import axios from "axios"
import { useNavigate } from "react-router-dom";

const EmployeeForm = () => {
  const [employeeId, setEmployeeId] = useState(0);
  const [employeeEmail, setEmployeeEmail] = useState("");
  const [employeeName, setEmployeeName] = useState("");
  const [employeePosition, setEmployeePosition] = useState("");
  const [employeeDepartment, setEmployeeDepartment] = useState("");
  const [employeeSalary, setEmployeeSalary] = useState(0);
  const [employeePassword, setEmployeePassword] = useState("");
  const [shift, setShift] = useState("");
  const [image, setImage] = useState('');

  const handleFileChange = (event) => {
    console.log(event.target.files)
    setImage(event.target.files[0]);
  };
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('image', image);

    try {
      const response = await axios.post("https://hrms-shadowwalker1025.vercel.app/api/employees/add", {
        employeeId: employeeId,
        emailId: employeeEmail,
        fullName: employeeName,
        position: employeePosition,
        department: employeeDepartment,
        password: employeePassword,
        salary: employeeSalary,
        shift: shift,
        formData: formData
      });

      console.log(response.data); // Do something with the response

      // Reset form values
      setEmployeeName("");
      setEmployeeId(0);
      setEmployeePosition("");
      setEmployeeSalary(0);
      setEmployeeDepartment("");
      setEmployeeEmail("");
      setEmployeePassword("");
      setShift("")
      alert("Employee Created Successfully");
      navigate("/employeeui")
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <main className="employeeContainer">
      <form className="employeeFields">
        <h2 className="heading-animate">Add Employee</h2>
        <br />
        <div className="form-div">
          <label htmlFor="id">Employee Id</label>
          <input id="id" type="number" placeholder="Employee Id..." onChange={(e) => setEmployeeId(e.target.value)} value={employeeId} required />
        </div>
        <div className="form-div">
          <label htmlFor="name">Employee Name</label>
          <input id="name" type="text" placeholder="Employee Name..." onChange={(e) => setEmployeeName(e.target.value)} value={employeeName} required />
        </div>
        <div className="form-div">
          <label htmlFor="email">Employee Email</label>
          <input id="email" type="email" placeholder="Employee Email..." onChange={(e) => setEmployeeEmail(e.target.value)} value={employeeEmail} required />
        </div>
        <div className="form-div">
          <label htmlFor="position">Employee Position</label>
          <input id="position" type="text" placeholder="Employee Position..." onChange={(e) => setEmployeePosition(e.target.value)} value={employeePosition} required />
        </div>
        <div className="form-div">
          <label htmlFor="department">Employee Department</label>
          <input id="department" type="text" placeholder="Employee Department..." onChange={(e) => setEmployeeDepartment(e.target.value)} value={employeeDepartment} required />
        </div>
        <div style={{display: "flex", flexDirection: "column"}}>
          <label htmlFor="shift">Select a Shift:</label>
          <select name="shift" id="shift" onChange={e => setShift(e.target.value)} style={{width: "80%", padding: "10px", borderRadius: "10px"}}>
            <option value="morning">Morning Shift</option>
            <option value="afternoon">Afternoon Shift</option>
            <option value="night">Night Shift</option>
          </select>
        </div>
        <div className="form-div">
          <label htmlFor="salary">Employee Salary</label>
          <input id="salary" type="number" placeholder="Employee Salary..." onChange={(e) => setEmployeeSalary(e.target.value)} value={employeeSalary} required />
        </div>
        <div className="form-div">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" placeholder="Enter Password..." onChange={(e) => setEmployeePassword(e.target.value)} value={employeePassword} required />
        </div>
        {/* <input type="file" name="image" onChange={handleFileChange} /> */}
        <button type="submit" className="btn-submit" onClick={handleSubmit}>SUBMIT</button>
      </form>
      <img src={hrms1} className="hrms-image" />
    </main>
  );
};

export default EmployeeForm;
