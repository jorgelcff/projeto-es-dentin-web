import React from "react";
import { NavLink } from "react-router-dom";
import LoginService from "../services/LoginService";
import toast from 'react-hot-toast';


export default ({ toggleMenu }) => {
  const user = sessionStorage.getItem("user") ? JSON.parse(sessionStorage.getItem("user")) : "";
  const logOut= async() =>{
    const loginService = LoginService;

    toggleMenu
    loginService.logout();
    toast.success("Logout realizado com sucesso!");
    window.location.href = "/";
  }
  return (
  
  <div className="sidemenu">
    <div className="card profile-card">
      <div className="card-body">

        
        <h5 className="card-title">{user.firstName} {user.lastName}</h5>
        <h6 className="card-subtitle mb-3 text-muted">{user.gender}</h6>
        <NavLink to="/" onClick={toggleMenu} className="card-link">
          Profile
        </NavLink>
        <a onClick={logOut} className="card-link">
          Logout
        </a>
      </div>
    </div>
    <NavLink className="link" to="/home" onClick={toggleMenu}>
      Home
    </NavLink>
    <NavLink className="link" to="/consultas" onClick={toggleMenu}>
      Consultas
    </NavLink>
  </div>
)};
