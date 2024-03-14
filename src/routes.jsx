import React from "react";
import { Switch, Route } from "react-router";

import Home from "./pages/home";
import Sample from "./pages/sample";
import Consultas from "./pages/consultas";
import Horarios from "./pages/horarios";
import Login from "./pages/login";

const NotFound = () => (
  <div className="text-center">
    Oops, what you are looking for, does not exist.
  </div>
);

const Routes = () => (
  <Switch>
    <Route path="/home" exact component={Home} />
    <Route path="/sample" exact component={Sample} />
    <Route path="/consultas" exact component={Consultas}/>
    <Route path="/horarios" exact component={Horarios}/>
    <Route path="/login" exact component={Login}/>
    {/* ELSE */}
    <Route path="*" exact component={NotFound} />
  </Switch>
);

export default Routes;
