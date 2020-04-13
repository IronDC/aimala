import React, { useContext } from "react";
import { GameContext } from "../contexts/GameContext";
import { Link } from "react-router-dom";

const OneGame = (props) => {
  const { findOneGame } = useContext(GameContext);
  const id = props.match.params.id;
  const game = findOneGame(id);
  console.log(`this is the One Game ${game}`);
  console.log(props);

  return (
    <>
      <p>ONE GAME</p>
      <h1>{game.title}</h1>
      <div>
        <img src={game.cover} alt={game.title} width="150px" />
      </div>
      <div>{game.description}</div>
    </>
  );
};

export default OneGame;
