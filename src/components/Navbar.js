import React from 'react'
import "./Navbar.css"
import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <div className='navbar'>
            <img src="https://goodtechmind.com/static/images/logo-small.png" height="80px"/>
            <ul className='navbar-ul'>
                <Link to='/'>
                    <li>Add Employee</li>
                </Link>
                <Link to='holiday'>
                    <li>Add Holiday</li>
                </Link>
                <Link to='holidayui'>
                    <li>Holidays</li>
                </Link>
            </ul>
        </div>
    )
}

export default Navbar
