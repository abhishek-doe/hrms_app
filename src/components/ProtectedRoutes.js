import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import Login from "./Login/Login"
import React from "react";

const ProtectedRoutes = () => {
    const isAuth = useSelector(state => state.login.isAuth)
  return (
    isAuth ? <Outlet /> : <Login />
    )
}

export default ProtectedRoutes
