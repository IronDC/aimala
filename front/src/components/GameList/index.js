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

const GameList = ({ game: { id, cover, title, publisher }, i }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root} key={i}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={title}
          height="250"
          image={cover}
          title={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography gutterBottom variant="h6" component="h6">
            {publisher}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link to={`/game/${id}`}>See Game</Link>
      </CardActions>
    </Card>
  );
};

export default GameList;
