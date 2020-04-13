import React from "react";
import MenuAppBar from "./components/Navbar";
import HomePage from "./pages/Home.page";
import SignUp from "./pages/Signup.page";
import Login from "./pages/Login.page";
import UserHome from "./pages/UserHome.page";
import UserGames from "./pages/UserGames.page";
import OneGame from "./pages/OneGame.page";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { withAuthentication } from "../lib/withAuthentication";
import { useUser, useUserLogout } from "../lib/authService";

export const App = withAuthentication(() => {
  const user = useUser();
  return (
    <>
      <Router>
        <MenuAppBar />
        <Switch>
          {!user && <Route path="/" exact component={HomePage} />}
          {user && <Route path="/" exact component={UserHome} />}
          <Route path="/signup" exact component={SignUp} />
          <Route path="/login" exact component={Login} />
          <Route path="/usergames" exact component={UserGames} />
          <Route path="/:id" exact component={OneGame} />
        </Switch>
      </Router>
    </>
  );
});
