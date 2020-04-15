import React, { useContext } from "react";
import { GameContext } from "../contexts/GameContext";
import { GameOwnedContext } from "../contexts/GameOwnedContext";
import { Link } from "react-router-dom";
import { ButtonBack } from "../components/ButtonBack";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const OneGame = (props) => {
  const { findOneGame } = useContext(GameContext);
  const { findOneOwnedGame } = useContext(GameOwnedContext);
  const id = props.match.params.id;
  console.log(`this is the one game ${id}`);
  const game = findOneGame(id);
  const gameOwned = findOneOwnedGame(id);
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
      {!gameOwned && (
        <Button variant="contained" color="primary" onSubmit>
          Add to My Games Library
        </Button>
      )}
    </>
  );
};

export default OneGame;
