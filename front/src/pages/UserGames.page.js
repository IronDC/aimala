import React, { useContext } from "react";
import { GameContext } from "../contexts/GameContext";
import { Link } from "react-router-dom";
import { ButtonBack } from "../components/ButtonBack";

const UserGames = () => {
  const { games } = useContext(GameContext);
  console.log(`this is the games ${games}`);

  return (
    <>
      <ButtonBack />
      <h1>MY GAMES</h1>
      <ul>
        {games.map((game) => (
          <li key={game._id}>
            <Link to={`/game/${game._id}`}>
              <div>
                <img src={game.cover} alt={game.title} width="150px" />
              </div>
              <div>
                <h2>{game.title}</h2>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default UserGames;
