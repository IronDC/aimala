import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    display: "flex",
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 20,
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
  },
  image: {
    width: 120,
    height: 135,
    backgroundSize: "cover",
  },
  link: {
    display: "flex",
    width: "100vw",
    justifyContent: "space-between",
  },
});

const GameList = ({ game, i }) => {
  const classes = useStyles();
  console.log(game);
  return (
    <Card className={classes.root} key={i}>
      <Link to={`/game/${game.id}`} className={classes.link}>
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography component="h5" variant="h5">
              {game.title}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              {game.publisher}
            </Typography>
          </CardContent>
        </div>

        <CardMedia
          className={classes.image}
          alt={game.title}
          image={game.cover.url}
          title={game.title}
          height="100px"
        />
      </Link>
    </Card>
  );
};

export default GameList;
