import React, { createContext, useState, useEffect } from "react";
// import { gamesFromApi } from "../../lib/apiService";
import { gamesFromSteamApi } from "../../lib/steamApiService";
import { useUser } from "../../lib/authService";

export const SteamContext = createContext();
const SteamContextProvider = (props) => {
  const [steamGames, setSteamGames] = useState([]);
  const user = useUser();
  const id = user.steamid;

  // GAMES CONTEXT
  useEffect(() => {
    gamesFromSteamApi(id).then((steamGames) => setSteamGames(steamGames));
  }, []);

  // const findOneGame = (id) => {
  //   return games.find((game) => game.id === id);
  // };

  return (
    <SteamContext.Provider
      value={{
        steamGames,
        setSteamGames,
      }}
    >
      {props.children}
    </SteamContext.Provider>
  );
};

export default SteamContextProvider;
