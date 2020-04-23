import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./components/layout/Landing";
import Navbar from "./components/layout/Navbar";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import "./App.css";

function App() {
  return (
    <Router>
      <Fragment>
        <Navbar />
        <Route exact path="/">
          <Landing />
        </Route>
        <section className="container">
          <Switch>
            <Route exact path="/register">
              <Register />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
          </Switch>
        </section>
      </Fragment>
    </Router>
  );
}

export default App;
