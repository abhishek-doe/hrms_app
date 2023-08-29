import React, { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import "./Login.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import {login} from "../../featured/login"
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
    const [employeeId, setEmployeeId] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate()


    const handleSubmit = (event) => {
        event.preventDefault();
        
        // axios.post("https://hrms-shadowwalker1025.vercel.app/api/login", {
        //     email: employeeId,
        //     password: password
        // }).then(res => dispatch(login(res.data)))
        console.log("Login submitted!");
        navigate("/")
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
                            type="email"
                            name="employeeId"
                            value={employeeId}
                            onChange={(e) => setEmployeeId(e.target.value)}
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
                            onChange={(e) => setPassword(e.target.value)}
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
