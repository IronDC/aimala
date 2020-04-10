import React from "react";
import MenuAppBar from "./components/Navbar";
import HomePage from "./pages/Home.page";
import SignUp from "./pages/Signup.page"
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
        </Switch>
      </Router>
    </>
  );
});
