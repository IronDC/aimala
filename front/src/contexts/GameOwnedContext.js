import React, { createContext, useState, useEffect } from "react";
import { gamesOwnedFromApi } from "../../lib/apiService";

export const GameOwnedContext = createContext();
const GameOwnedContextProvider = props => {
  const [games, setGames] = useState([]);

  // GAMES CONTEXT
  useEffect(() => {
    gamesOwnedFromApi().then(games => setGames(games));
  }, []);

  const findOneOwnedGame = id => {
    return games.find(game => game.id === id);
  };

  return (
    <GameOwnedContext.Provider
      value={{
        games,
        setGames,
        findOneOwnedGame
      }}
    >
      {props.children}
    </GameOwnedContext.Provider>
  );
};

export default GameOwnedContextProvider;
