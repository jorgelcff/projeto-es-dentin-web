import React, { Component } from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import Layout from "./components/layout";
import Routes from "./routes";
import Login from "./pages/login";
import { Toaster } from "react-hot-toast";
import store from "./store";

import "./assets/styles/bootstrap.css";
import "./assets/styles/bootstrap.overrides.css";
import "./assets/styles/main.scss";

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  userInSession = localStorage.getItem("usuario");

  render() {
    const userInSession = localStorage.getItem("access_token");

    return (
      <Provider store={store}>
        <Toaster position="top-right" />
        <BrowserRouter>
          {userInSession ? (
            <Layout>
              <Routes />
            </Layout>
          ) : (
            <Login />
          )}
        </BrowserRouter>
      </Provider>
    );
  }
}

render(<App />, document.getElementById("root"));
