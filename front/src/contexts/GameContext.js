import React, { createContext, useState, useEffect } from "react";
import { gamesFromApi } from "../../lib/apiService";

export const GameContext = createContext();
const GameContextProvider = (props) => {
  const [games, setGames] = useState([]);
  const [filter, setFilter] = useState("");

  // GAMES CONTEXT
  useEffect(() => {
    gamesFromApi().then((games) => setGames(games));
  }, []);

  const findOneGame = (id) => {
    return games.find((game) => game.id === id);
  };

  return (
    <GameContext.Provider
      value={{
        games,
        setGames,
        filter,
        setFilter,
        findOneGame,
      }}
    >
      {props.children}
    </GameContext.Provider>
  );
};

export default GameContextProvider;
