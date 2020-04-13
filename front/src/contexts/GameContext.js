import React, {createContext, useState, useEffect} from 'react';
import { gamesFromApi } from "../../lib/gamesService";

export const GameContext = createContext();
const GameContextProvider = (props) => {
  const [games, setGames] = useState([]);
  useEffect(() => {
  gamesFromApi().then((games)=> setGames(games));
}, []);

const findOneGame = id => {
  return games.find(game => game.id === id);
};

  return(
    <GameContext.Provider value={{games, setGames,findOneGame}}>
      {props.children}
    </GameContext.Provider>
  );
}

export default GameContextProvider;