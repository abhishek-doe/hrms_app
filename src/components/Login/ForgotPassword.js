import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { Link } from "react-router-dom";
import "./ForgotPassword.css";

const LoginPage = () => {
    const [employeeId, setEmployeeId] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        // Perform login validation or authentication logic here
        console.log("Login submitted!");
    };

    return (
        <main className="forgotPassword">
            <div className="container">
                <h2>Forgot Password</h2>
                <form onSubmit={handleSubmit}>
                    <div className="input-container">
                        <label htmlFor="id">Employee Id</label>
                        <FaUser className="icon" />
                        <input
                            htmlFor="id"
                            type="text"
                            name="employeeId"
                            value={employeeId}
                            onChange={(e) => setEmployeeId(e.target.value)}
                            className="input-field"
                            placeholder="Employee Id"
                        />
                    </div>
                    <div className="input-container">
                        <label htmlFor="password">Email</label>
                        <GrMail className="icon" />
                        <input
                            id="password"
                            type="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="input-field"
                            placeholder="Email"
                        />
                    </div>
                    <button type="submit" className="btn">
                        Send Email
                    </button>
                </form>
                <Link to="/login" style={{textDecoration: "none"}}>
                    <p style={{ color: "#119acc", fontSize: "1rem", margin: "12px 0", fontWeight: "300" }}>Back</p>
                </Link>
            </div>
        </main>
    );
};

export default LoginPage;
