import React from "react";
import TemporaryDrawer from "./components/Menu";
import MenuAppBar from "./components/Navbar";
import HomePage from "./pages/Home.page";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export const App = () => {
  return (
    <>
      <Router>
        <TemporaryDrawer />
        <MenuAppBar />
        <Switch>
          <Route path="/" exact component={HomePage} />
        </Switch>
      </Router>
    </>
  );
};
