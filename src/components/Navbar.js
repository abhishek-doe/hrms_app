import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { FaTimes } from "react-icons/fa";
import gtmlogo1 from "../images/gtmlogo1.png";

const Navbar = () => {
  const [isSideMenu, setIsSideMenu] = useState(false);

  return (
    <div className="navbar">
      <div className="container">
        <div style={{ display: "flex", alignItems: "center", gap: "2rem", flex: "1" }}>
          {isSideMenu ? (
            <FaTimes
              style={{ border: "1px solid black", borderRadius: "5px", fontSize: "25px", marginLeft: "20px", padding: "5px", fontSize: "20px", cursor: "pointer" }}
              onClick={() => setIsSideMenu((prev) => !prev)}
            />
          ) : (
            <AiOutlineMenu
              style={{ border: "1px solid black", borderRadius: "5px", padding: "5px", fontSize: "20px", marginLeft: "20px", cursor: "pointer" }}
              onClick={() => setIsSideMenu((prev) => !prev)}
            />
          )}
          <Link to="/">
            <img src={gtmlogo1} alt="G.T.M." style={{ height: "80px", borderRadius: "50%" }} className="gtm-logo" />
          </Link>
        </div>
        <ul className="navbar-ul">
          <Link to="/employeeui">
            <li>Employees</li>
          </Link>
          <Link to="holidayui">
            <li>&nbsp;Holidays</li>
          </Link>
          <Link to="login">
            <li>Login</li>
          </Link>
        </ul>
      </div>
      <div className={isSideMenu ? "side-menu_active" : "side-menu"}>
        <ul className="side-menu-list-div">
          <Link className="sidemenu-link" to="/">
            <li>Dashboard</li>
          </Link>
          <Link className="sidemenu-link" to="/taskboard">
            <li>Task Board</li>
          </Link>
          <Link className="sidemenu-link" to="/personaldetail">
            <li>Personal Details</li>
          </Link>
          <Link className="sidemenu-link" to="/professionaldetail">
            <li>Professional Details</li>
          </Link>
          <Link className="sidemenu-link" to="/jobdetail">
            <li>Job Details</li>
          </Link>
          <Link className="sidemenu-link" to="/documentdetail">
            <li>Document Details</li>
          </Link>
          <Link className="sidemenu-link" to="/healthhistory">
            <li>Health History</li>
          </Link>
          <Link className="sidemenu-link" to="/dashboard">
            <li>Help & Support</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
