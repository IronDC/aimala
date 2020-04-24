import React, { useContext, useState } from "react";
import { GameContext } from "../contexts/GameContext";
import { GameOwnedContext } from "../contexts/GameOwnedContext";
import { useUserSetter } from "./../../lib/authService";
import { Link } from "react-router-dom";
import { ButtonBack } from "../components/ButtonBack";
import { addGametoUserFromApi } from "../../lib/apiService";
import Button from "@material-ui/core/Button";

import Container from "../components/Container";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
}));

const OneGame = (props) => {
  const { findOneGame } = useContext(GameContext);
  const { findOneOwnedGame, setGames } = useContext(GameOwnedContext);
  const setUser = useUserSetter();
  const id = props.match.params.id;
  const game = findOneGame(id);
  const gameOwned = findOneOwnedGame(id);
  let trailerURL = `https://www.youtube.com/embed/${game?.trailer}`;

  const classes = useStyles();

  const handleSubmit = (e) => {
    e.preventDefault();
    addGametoUserFromApi(id).then((data) => {
      setGames(data.user.gamesOwned);
      setUser(data.user);
    });
  };

  return (
    <>
      <ButtonBack />
      {!gameOwned && (
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Add to my Library
        </Button>
      )}
      <Container>
        <Card className={classes.root}>
          <CardHeader title={game?.title} subheader={game?.publisher} />
          <CardMedia
            className={classes.media}
            image={game?.cover.url}
            title={game?.title}
          />
          <CardContent>
            <Typography variant="body1" color="textSecondary" component="p">
              Year: {game?.year}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {game?.description}
            </Typography>
          </CardContent>
        </Card>
      </Container>
    </>
  );
};

export default OneGame;
