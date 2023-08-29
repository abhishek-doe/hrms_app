import React, { useRef, useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { FaTimes, FaUserCircle } from "react-icons/fa";
import gtmlogo1 from "../images/hrms_logo.png";
import { useEffect } from "react";

const Navbar = (props) => {
  const { isSideMenu, setIsSideMenu } = props
  const [activeMenu, setActiveMenu] = useState(0)

  let menuRef = useRef()
  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setIsSideMenu(false)
      }
    }
    document.addEventListener("mousedown", handler)

    return () => {
      document.removeEventListener("mousedown", handler)
    }
  })

  return (
    <div className="navbar">
      <div className="container">
        <div style={{ display: "flex", alignItems: "center", gap: "2rem", flex: "1", }}>
          <AiOutlineMenu
            style={{ border: "1px solid black", borderRadius: "5px", padding: "5px", fontSize: "20px", marginLeft: "20px", cursor: "pointer" }}
            onClick={() => setIsSideMenu(!isSideMenu)}
          />

          <Link to="/">
            <img src={gtmlogo1} alt="G.T.M." style={{ height: "50px", borderRadius: "30%" }} className="gtm-logo" />
          </Link>
        </div>
        <ul className="navbar-ul">
          <>
            <Link to="/employeeui">
              <li>Employees</li>
            </Link>
            <Link to="holidayui">
              <li>&nbsp;Holidays</li>
            </Link>
          </>
          <Link to="login">
            <li>Login</li>
          </Link>
        </ul>
      </div>
      <div ref={menuRef} className={isSideMenu ? "side-menu_active" : "side-menu"}>
        <ul className="side-menu-list-div">
          <div className="menu-logo-div">
            <Link to="/" style={{ flex: "1" }}>
              <img src={gtmlogo1} alt="G.T.M." style={{ height: "50px", borderRadius: "30%" }} className="gtm-logo" />
            </Link>
            <FaTimes
              style={{ border: "1px solid black", borderRadius: "5px", fontSize: "20px", padding: "5px", cursor: "pointer" }}
              onClick={() => setIsSideMenu(!isSideMenu)}
            />
          </div>
          <Link className="sidemenu-link" to="/dashboard" onClick={() => setActiveMenu(0)}>
            <li>Dashboard</li>
          </Link>
          <Link className="sidemenu-link" to="/taskboard" onClick={() => setActiveMenu(1)}>
            <li>Task Board</li>
          </Link>
          <Link className="sidemenu-link" to="/professionaldetail" onClick={() => setActiveMenu(2)}>
            <li>Professional Details</li>
          </Link>
          <Link className="sidemenu-link" to="/jobdetail" onClick={() => setActiveMenu(3)}>
            <li>Job Details</li>
          </Link>
          <Link className="sidemenu-link" to="/documentdetail" onClick={() => setActiveMenu(4)}>
            <li>Document Details</li>
          </Link>
          <Link className="sidemenu-link" to="/healthhistory" onClick={() => setActiveMenu(5)}>
            <li>Health History</li>
          </Link>
          <Link className="sidemenu-link" to="/essleave" onClick={() => setActiveMenu(6)}>
            <li>Leave Management</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
