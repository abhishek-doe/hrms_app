import React, { useEffect, useState } from 'react'
import { FaUserCircle, FaSearch } from "react-icons/fa"
import "./EmployeeUi.css"
import axios from 'axios'
import { Link } from 'react-router-dom'

const EmployeeUi = () => {
    const [data, setData] = useState([])
    const [search, setSearch] = useState("")

    useEffect(() => {
        axios.get("https://hrms-shadowwalker1025.vercel.app/api/employees")
            .then(res => setData(res.data))
    }, [])
    const employeeuiElement = data.filter((item) => {
        return search.toLowerCase() === "" ? item : item.fullName.toLowerCase().includes(search)
    }).map((data, i) => {
        return (
            <div className='employeecard' key={i}>
                <FaUserCircle className='userIcon' />
                <p>Name: <span style={{ color: "#119acc" }}>{data?.fullName}</span></p>
                <p>Email: <span style={{ color: "#119acc" }}>{data?.emailId}</span></p>
                <p>Department: <span style={{ color: "#119acc" }}>{data?.department}</span></p>
                <p>Position: <span style={{ color: "#119acc" }}>{data?.position}</span></p>
                <p>Shift: <span style={{ color: "#119acc" }}>{data?.shift}</span></p>
                <p>Salary: <span style={{ color: "#119acc" }}>{data?.salary}</span></p>
            </div>
        )
    }) || "No Employee"
    return (
        <main className='employeeui'>
            <div className="input-container">
                <FaSearch className="icon" />
                <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="input-field"
                    placeholder="Search Employee by Name"
                />
                <Link to="/employeeform">
                    <button className='addemployee'>Add Employees</button>
                </Link>
            </div>
            <div className='container'>
                <div className='cardDiv'>

                    {employeeuiElement}
                </div>

            </div>
        </main>
    )
}

export default EmployeeUi
