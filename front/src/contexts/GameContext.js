import React, { createContext, useState, useEffect } from "react";
import {
  gamesFromApi,
  platformsFromApi,
  articlesFromApi,
} from "../../lib/gamesService";

export const GameContext = createContext();
const GameContextProvider = (props) => {
  const [games, setGames] = useState([]);
  const [platforms, setPlatforms] = useState([]);
  const [articles, setArticles] = useState([]);

  // GAMES CONTEXT
  useEffect(() => {
    gamesFromApi().then((games) => setGames(games));
  }, []);

  const findOneGame = (id) => {
    return games.find((game) => game.id === id);
  };

  // PLATFORMS CONTEXT
  useEffect(() => {
    platformsFromApi().then((platforms) => setPlatforms(platforms));
  }, []);

  const findOnePlatform = (id) => {
    return platforms.find((platforms) => platforms.id === id);
  };

  // ARTICLES CONTEXT
  useEffect(() => {
    articlesFromApi().then((articles) => setPlatforms(articles));
  }, []);

  return (
    <GameContext.Provider
      value={{
        games,
        setGames,
        findOneGame,
        platforms,
        setPlatforms,
        findOnePlatform,
        articles,
        setArticles,
      }}
    >
      {props.children}
    </GameContext.Provider>
  );
};

export default GameContextProvider;
