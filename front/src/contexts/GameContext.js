import React, {createContext, useState, useEffect} from 'react';
import { gamesFromApi,platformsFromApi } from "../../lib/gamesService";


export const GameContext = createContext();
const GameContextProvider = (props) => {
  const [games, setGames] = useState([]);
  const [platforms, setPlatforms] = useState([]);

const findOneGame = id => {
  return games.find(game => game.id === id);
};

useEffect(() => {
  gamesFromApi().then((games)=> setGames(games));
}, []);

useEffect(() => {
  platformsFromApi().then((platforms)=> setPlatforms(platforms));
}, []);

  return(
    <GameContext.Provider value={{games, setGames,findOneGame,platforms, setPlatforms}}>
      {props.children}
    </GameContext.Provider>
  );
}

export default GameContextProvider;