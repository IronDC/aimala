import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
// import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Btn from "../Btn";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    maxWidth: 250,
    margin: 35,
  },
});

const GameList = ({game, i }) => {
  const classes = useStyles();
  console.log(game);
  return (
    <Card className={classes.root} key={i}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={game.title}
          height="250"
          image={game.cover.url}
          title={game.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {game.title}
          </Typography>
          <Typography gutterBottom variant="h6" component="h6">
            {game.publisher}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link to={`/game/${game.id}`}>See Game</Link>
      </CardActions>
    </Card>
  );
};

export default GameList;
