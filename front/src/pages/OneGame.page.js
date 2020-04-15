import React, { useContext, useState } from "react";
import { GameContext } from "../contexts/GameContext";
import { GameOwnedContext } from "../contexts/GameOwnedContext";
import { useUserSetter } from "./../../lib/authService";
import { Link } from "react-router-dom";
import { ButtonBack } from "../components/ButtonBack";
import { addGametoUserFromApi } from "../../lib/apiService";
import Button from "@material-ui/core/Button";

const OneGame = (props) => {
  const { findOneGame } = useContext(GameContext);
  const { findOneOwnedGame, setGames } = useContext(GameOwnedContext);
  const setUser = useUserSetter();
  const id = props.match.params.id;
  console.log(`this is the one game ${id}`);
  const game = findOneGame(id);
  const gameOwned = findOneOwnedGame(id);
  console.log(game, id);

  const handleSubmit = (e) => {
    console.log("pulsado el boton");
    e.preventDefault();
    addGametoUserFromApi(id).then((data) => {
      setGames(data.user.gamesOwned);
      setUser(data.user);
    });
  };

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
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Add to my Library
        </Button>
      )}
    </>
  );
};

export default OneGame;
