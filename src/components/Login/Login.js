import React, { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import "./Login.css";
import { Link } from "react-router-dom";

const LoginPage = () => {
    const [employeeId, setEmployeeId] = useState("");
    const [password, setPassword] = useState("");

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        if (name === "employeeId") {
            setEmployeeId(value);
        } else if (name === "password") {
            setPassword(value);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Perform login validation or authentication logic here
        console.log("Login submitted!");
    };

    return (
        <main className="login">
            <div className="container">
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="input-container">
                        <label htmlFor="id">Employee Id</label>
                        <FaUser className="icon" />
                        <input
                            htmlFor="id"
                            type="text"
                            name="employeeId"
                            value={employeeId}
                            onChange={handleInputChange}
                            className="input-field"
                            placeholder="Employee Id"
                        />
                    </div>
                    <div className="input-container">
                        <label htmlFor="password">Password</label>
                        <FaLock className="icon" />
                        <input
                            id="password"
                            type="password"
                            name="password"
                            value={password}
                            onChange={handleInputChange}
                            className="input-field"
                            placeholder="Password"
                        />
                    </div>
                    <button type="submit" className="btn">
                        Login
                    </button>
                </form>
                <Link to="/forgotPassword" style={{textDecoration: "none"}}>
                    <p style={{ color: "#119acc", fontSize: "1rem", margin: "12px 0" }}>Forgot Password?</p>
                </Link>
            </div>
        </main>
    );
};

export default LoginPage;
