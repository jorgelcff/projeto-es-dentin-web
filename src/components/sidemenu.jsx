import React from "react";
import { NavLink } from "react-router-dom";
import LoginService from "../services/LoginService";
import Typography from "@mui/material/Typography";
import toast from "react-hot-toast";

export default ({ toggleMenu }) => {
  const usuario = localStorage.getItem("usuario")
    ? JSON.parse(localStorage.getItem("usuario"))
    : "";
  const logOut = async () => {
    const loginService = new LoginService();

    toggleMenu;
    loginService.logout();
    toast
      .success("Logout realizado com sucesso!")
      .then((window.location.href = "/"));
  };
  return (
    <div className="sidemenu">
      <div className="card profile-card">
        <div className="card-body">
          <h5 className="card-title">{usuario.nome}</h5>
          <h6 className="card-subtitle mb-3 text-muted">CRO: {usuario.cro}</h6>
          <NavLink to="/" onClick={toggleMenu} className="card-link">
            Profile
          </NavLink>
          <a onClick={logOut} className="card-link">
            Logout
          </a>
        </div>
      </div>
      <NavLink className="link" to="/home" onClick={toggleMenu}>
        <Typography
          variant="h4"
          sx={{
            marginLeft: 2,
            fontSize: 14,
          }}
        >
          Home
        </Typography>
      </NavLink>
      <NavLink className="link" to="/consultas" onClick={toggleMenu}>
        <Typography
          variant="h4"
          sx={{
            marginLeft: 2,
            fontSize: 14,
          }}
        >
          Consultas
        </Typography>
      </NavLink>
    </div>
  );
};
