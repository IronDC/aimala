import React, { useContext } from "react";
import { GameContext } from "../contexts/GameContext";
import { Link } from "react-router-dom";
import { ButtonBack } from "../components/ButtonBack";

const OneGame = (props) => {
  const { findOneGame } = useContext(GameContext);
  const id = props.match.params.id;
  console.log(`this is the one game ${id}`);
  const game = findOneGame(id);
  console.log(game, id);

  return (
    <>
      <ButtonBack />
      <p>ONE GAME</p>
      <h1>{game?.title}</h1>
      <div>
        <img src={game?.cover} alt={game?.title} width="150px" />
      </div>
      <div>{game?.description}</div>
    </>
  );
};

export default OneGame;
