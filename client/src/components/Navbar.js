import React, { useRef } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { FaTimes } from "react-icons/fa";
import gtmlogo1 from "../images/hrms_logo.png";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Navbar = (props) => {
  const { isSideMenu, setIsSideMenu } = props

  let location = useLocation()
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
        <div style={{ display: "flex", alignItems: "center", gap: "2rem", flex: "50%" }}>
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
          <Link className="sidemenu-link" to="/dashboard">
            <li className={location.pathname === "/dashboard" ? "menuActive" : "menuDisable"}>Dashboard</li>
          </Link>
          <Link className="sidemenu-link" to="/taskboard">
            <li className={location.pathname === "/taskboard" ? "menuActive" : "menuDisable"}>Task Board</li>
          </Link>
          <Link className="sidemenu-link" to="/professionaldetail">
            <li className={location.pathname === "/professionaldetail" ? "menuActive" : "menuDisable"}>Professional Details</li>
          </Link>
          <Link className="sidemenu-link" to="/jobdetail">
            <li className={location.pathname === "/jobdetail"? "menuActive" : "menuDisable"}>Job Details</li>
          </Link>
          <Link className="sidemenu-link" to="/documentdetail">
            <li className={location.pathname === "/documentdetail" ? "menuActive" : "menuDisable"}>Document Details</li>
          </Link>
          <Link className="sidemenu-link" to="/healthhistory">
            <li className={location.pathname === "/healthhistory" ? "menuActive" : "menuDisable"}>Health History</li>
          </Link>
          <Link className="sidemenu-link" to="/essleave">
            <li className={location.pathname === "/essleave" ? "menuActive" : "menuDisable"}>Leave Management</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
