import React from "react";
import MenuAppBar from "./components/Navbar";
import HomePage from "./pages/Home.page";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export const App = () => {
  return (
    <>
      <Router>
        <MenuAppBar />
        <Switch>
        <Route path="/" exact component={HomePage} />
        </Switch>
      </Router>
    </>
  );
};
