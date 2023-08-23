import React, { useEffect, useState } from "react";
import { FaUserCircle, FaSearch } from "react-icons/fa";
import "./EmployeeUi.css";
import axios from "axios";
import { Link } from "react-router-dom";

const EmployeeUi = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios.get("http://localhost:2030/employee/").then((res) => setData(res.data));
    setLoading(false);
  }, [data]);

  const deleteEmployee = (id) => {
    axios.delete(`http://localhost:2030/employee/${id}`).then(res => console.log(res))
  }
  const employeeuiElement =
    data
      .filter((item) => {
        return item.name.toLowerCase() == "" ? item : item.name.toLowerCase().includes(search);
      })
      .map((data, i) => {
        return (
          <div className="employeecard" key={i}>
            <FaUserCircle className="userIcon" />
            <p>
              Name: <span style={{ color: "#119acc" }}>{data?.id}</span>
            </p>
            <p>
              Email: <span style={{ color: "#119acc" }}>{data?.email}</span>
            </p>
            <p>
              Department: <span style={{ color: "#119acc" }}>{data?.department}</span>
            </p>
            <p>
              Position: <span style={{ color: "#119acc" }}>{data?.position}</span>
            </p>
            <p>
              Shift: <span style={{ color: "#119acc" }}>{data?.shift}</span>
            </p>
            <p>
              Salary: <span style={{ color: "#119acc" }}>{data?.salary}</span>
            </p>
            <button style={{border: "none", borderRadius: "10px", background: "#da3633", margin: "10px 0px", color: "white", padding: "12px"}} onClick={() => deleteEmployee(data?._id)}>Delete</button>
          </div>
        );
      }) || "No Employee";
  return (
    <main className="employeeui">
      <div className="input-container">
        <FaSearch className="icon" />
        <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} className="input-field" placeholder="Search Employee by Name" />
        <Link to="/employeeform">
          <button className="addemployee">Add Employees</button>
        </Link>
      </div>
      <div className="container">
        {loading ? (
          <div>
            <p>please wait</p>
          </div>
        ) : (
          <div className="cardDiv">{employeeuiElement}</div>
        )}
      </div>
    </main>
  );
};

export default EmployeeUi;
