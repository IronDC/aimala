import React, { useContext } from "react";
import { GameOwnedContext } from "../contexts/GameOwnedContext";
import { Link } from "react-router-dom";
import { ButtonBack } from "../components/ButtonBack";
import GameList from "../components/GameList";
import Input from "../components/Input";

const UserGames = () => {
  const { games, filter, setFilter } = useContext(GameOwnedContext);
  console.log(`this is the games ${games}`);
  const renderGameList = () =>
    games.map(
      (game) =>
        game.title.toLowerCase().includes(filter.toLowerCase()) && (
          <GameList game={game} key={game.id} />
        )
    );

  return (
    <>
      <ButtonBack />
      <Input setFilter={setFilter} />
      <h1>MY GAMES</h1>
      <ul>{renderGameList()}</ul>
    </>
  );
};

export default UserGames;
