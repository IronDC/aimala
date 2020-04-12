import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { GameDetails } from "../../lib/gamesService";

const OneGame = (props) => {
  const id = props.match.params.id;
  const [game, setGame] = useState({});
  // // const [search, setSearch] = useState("");

  useEffect(() => {
    GameDetails(props).then((game) => setGame(game));
    console.log(game);
  }, [id]);

  // GameDetails(props);

  return (
    <>
      <p>HOLA</p>
      <h1>{game.title}</h1>
      <div>
        <img src={game.cover} alt={game.title} width="150px" />
      </div>
    </>
  );
};

export default OneGame;
