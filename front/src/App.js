import React from "react";
import MenuAppBar from "./components/Navbar";
import HomePage from "./pages/Home.page";
import SignUp from "./pages/Signup.page";
import Login from "./pages/Login.page";
import UserHome from "./pages/UserHome.page";
import UserGames from "./pages/UserGames.page";
import UserPlatforms from "./pages/UserPlatforms.page";
import OneGame from "./pages/OneGame.page";
import OnePlatform from "./pages/OnePlatform.page";
import OneArticle from "./pages/OneArticle.page";
import AllGames from "./pages/Games.page";
import AllPlatforms from "./pages/Platforms.page";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { withAuthentication } from "../lib/withAuthentication";
import { useUser, useUserLogout } from "../lib/authService";
import GameOwnedContextProvider from "./contexts/GameOwnedContext";
import PlatformOwnedContextProvider from "./contexts/PlatformOwnedContext";
import ArticleContextProvider from "./contexts/ArticleContext";
import GameContextProvider from "./contexts/GameContext";
import PlatformContextProvider from "./contexts/PlatformContext";

export const App = withAuthentication(() => {
  const user = useUser();
  return (
    <>
      <Router>
        <MenuAppBar />
        <Switch>
          <Route path="/signup" exact component={SignUp} />
          <Route path="/login" exact component={Login} />
          {!user && <Route path="/" exact component={HomePage} />}
          <ArticleContextProvider>
            <PlatformContextProvider>
              <PlatformOwnedContextProvider>
                <GameContextProvider>
                  <GameOwnedContextProvider>
                    {user && <Route path="/" exact component={UserHome} />}
                    <Route path="/article/:id" exact component={OneArticle} />
                    <Route path="/usergames" exact component={UserGames} />
                    <Route path="/game/:id" exact component={OneGame} />
                    <Route path="/games" exact component={AllGames} />
                  </GameOwnedContextProvider>
                </GameContextProvider>
                <Route path="/userplatforms" exact component={UserPlatforms} />
                <Route path="/platform/:id" exact component={OnePlatform} />
                <Route path="/platforms" exact component={AllPlatforms} />
              </PlatformOwnedContextProvider>
            </PlatformContextProvider>
          </ArticleContextProvider>
        </Switch>
      </Router>
    </>
  );
});
