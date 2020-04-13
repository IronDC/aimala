import React, {createContext, useState, useEffect} from 'react';
import { gamesFromApi } from "../../lib/gamesService";

export const GameContext = createContext();
const GameContextProvider = (props) => {
  const [games, setGames] = useState([]);

const findOneGame = id => {
  return games.find(game => game.id === id);
};

useEffect(() => {
  gamesFromApi().then((games)=> setGames(games));
}, []);

  return(
    <GameContext.Provider value={{games, setGames,findOneGame}}>
      {props.children}
    </GameContext.Provider>
  );
}

export default GameContextProvider;