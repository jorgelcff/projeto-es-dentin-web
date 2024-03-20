import React, { Fragment } from "react";
// import { NavLink } from "react-router-dom";
import { NavLink } from "react-router-dom";

export default () => (
  <Fragment>
    <ol className="breadcrumb">
      <li className="breadcrumb-item">
        <NavLink to="/home">Home</NavLink>
      </li>
      <li className="breadcrumb-item">Horarios</li>
    </ol>
    <div>This is a Horarios page.</div>
  </Fragment>
);
