import React, { useContext } from "react";
import { GameOwnedContext } from "../contexts/GameOwnedContext";
import { Link } from "react-router-dom";
import { ButtonBack } from "../components/ButtonBack";
import GameList from "../components/GameList";

const UserGames = () => {
  const { games } = useContext(GameOwnedContext);
  console.log(`this is the games ${games}`);
  const renderGameList = () => games.map((game) => <GameList game={game} key={game.id} />);

  return (
    <>
      <ButtonBack />
      <h1>MY GAMES</h1>
      <ul>{renderGameList()}</ul>
    </>
  );
};

export default UserGames;
