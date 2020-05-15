import React from "react";
import { Route, Switch } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../dashboard/Dashboard";
import Register from "../auth/Register";
import Login from "../auth/Login";
import CreateProfile from "../profile-forms/CreateProfile";
import EditProfile from "../profile-forms/EditProfile";
import AddExperience from "../profile-forms/AddExperience";
import AddEducation from "../profile-forms/AddEducation";
import Profiles from "../profiles/Profiles";
import Alert from "../layout/Alert";

export default function Routes() {
  return (
    <section className="container">
      <Alert />
      <Switch>
        <Route exact path="/register">
          <Register />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/profiles">
          <Profiles />
        </Route>
        <PrivateRoute exact component={Dashboard} path="/dashboard" />
        <PrivateRoute exact component={CreateProfile} path="/create-profile" />
        <PrivateRoute exact component={EditProfile} path="/edit-profile" />
        <PrivateRoute exact component={AddExperience} path="/add-experience" />
        <PrivateRoute exact component={AddEducation} path="/add-education" />
      </Switch>
    </section>
  );
}
