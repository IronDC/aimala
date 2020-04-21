import React, { createContext, useState, useEffect } from "react";
// import { gamesFromApi } from "../../lib/apiService";
import { gamesFromSteamApi } from "../../lib/steamApiService";

export const SteamContext = createContext();
const SteamContextProvider = (props) => {
  const [steamGames, setSteamGames] = useState([]);
  // const [filter, setFilter] = useState("");

  // GAMES CONTEXT
  useEffect(() => {
    gamesFromApi().then((steamGames) => setSteamGames(steamGames));
  }, []);

  // const findOneGame = (id) => {
  //   return games.find((game) => game.id === id);
  // };

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

export default SteamContextProvider;
