import React, { useState, useRef } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { FaTimes, FaUserCircle } from "react-icons/fa";
import gtmlogo1 from "../images/gtmlogo1.png";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const Navbar = (props) => {
  const {isSideMenu, setIsSideMenu} = props
  const isAuth = useSelector((state) => state.login.isAuth);

  let menuRef = useRef()
  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setIsSideMenu(false)
        console.log(menuRef.current)
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
            <img src={gtmlogo1} alt="G.T.M." style={{ height: "60px", borderRadius: "30%" }} className="gtm-logo" />
          </Link>
        </div>
        <ul className="navbar-ul">
          {/* {isAuth && ( */}
          <>
            <Link to="/employeeui">
              <li>Employees</li>
            </Link>
            <Link to="holidayui">
              <li>&nbsp;Holidays</li>
            </Link>
          </>
          {/* )} */}
          {/* {isAuth ? ( */}
          {/* <FaUserCircle /> */}
          {/* ) : ( */}
          <Link to="login">
            <li>Login</li>
          </Link>
          {/* )} */}
        </ul>
      </div>
      {/* {isAuth && ( */}
      <div ref={menuRef} className={isSideMenu ? "side-menu_active" : "side-menu"}>
        <ul className="side-menu-list-div">
        <div className="menu-logo-div">
          <Link to="/" style={{flex: "1"}}>
            <img src={gtmlogo1} alt="G.T.M." style={{ height: "60px", borderRadius: "30%" }} className="gtm-logo" />
          </Link>
          <FaTimes
            style={{ border: "1px solid black", borderRadius: "5px", fontSize: "25px", marginLeft: "20px", padding: "5px", fontSize: "20px", cursor: "pointer" }}
            onClick={() => setIsSideMenu(!isSideMenu)}
          />
        </div>
          <Link className="sidemenu-link" to="/dashboard">
            <li>Dashboard</li>
          </Link>
          <Link className="sidemenu-link" to="/taskboard">
            <li>Task Board</li>
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
          <Link className="sidemenu-link" to="/essleave">
            <li>Leave Management</li>
          </Link>
          <Link className="sidemenu-link" to="/dashboard">
            <li>Help & Support</li>
          </Link>
        </ul>
      </div>
      {/* )} */}
    </div>
  );
};

export default Navbar;
