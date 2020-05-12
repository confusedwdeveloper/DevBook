import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./components/layout/Landing";
import Navbar from "./components/layout/Navbar";
import Routes from "./components/routing/Routes";
import { loadUser } from "./actions/auth";
import setAuthToken from "./utils/setAuthToken";

import { Provider } from "react-redux";
import store from "./store";

import "./App.css";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Landing />
            </Route>
            <Route>
              <Routes />
            </Route>
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  );
}

export default App;
