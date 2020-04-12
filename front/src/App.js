import React from "react";
import MenuAppBar from "./components/Navbar";
import HomePage from "./pages/Home.page";
import SignUp from "./pages/Signup.page"
import Login from "./pages/Login.page";
import HomeUser from "./pages/HomeUser.page";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { withAuthentication } from "../lib/withAuthentication";

export const App = withAuthentication(() => {
  return (
    <>
      <Router>
        <MenuAppBar />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/signup" exact component={SignUp} />
          <Route path="/login" exact component={Login} />
          <Route path="/homeuser" exact component={HomeUser}/>
        </Switch>
      </Router>
    </>
  );
});
