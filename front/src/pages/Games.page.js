import React, { useContext } from "react";
import { GameContext } from "../contexts/GameContext";
import { Link } from "react-router-dom";
import { ButtonBack } from "../components/ButtonBack";
import GameList from "../components/GameList";

const AllGames = () => {
  const { games } = useContext(GameContext);
  console.log(`this is the games ${games}`);
  const renderGameList = () => games.map((game) => <GameList game={game} key={game.id} />);

  return (
    <>
      <ButtonBack />
      <h1>ALL GAMES</h1>
      <ul>{renderGameList()}</ul>
    </>
  );
};

export default AllGames;