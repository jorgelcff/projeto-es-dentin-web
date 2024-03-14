import React, { Fragment } from "react";
// import { NavLink } from "react-router-dom";
import { NavLink } from "react-router-dom";

export default () => (
  <Fragment>
    <ol className="breadcrumb">
      <li className="breadcrumb-item active">
        <NavLink to="/home">Home</NavLink>
      </li>
      <li className="breadcrumb-item active">Consultas</li>
    </ol>
    <div>This is a Consultas page.</div>
  </Fragment>
);
