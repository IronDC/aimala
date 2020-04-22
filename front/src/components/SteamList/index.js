import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import defaultGameIcon from "../../../public/images/default-game-icon.jpg";

const useStyles = makeStyles({
  root: {
    display: "flex",
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 20,
    justifyContent: "space-between",
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
  },
  image: {
    width: 75,
    height: 100,
    backgroundSize: "cover",
  },
  link: {
    display: "flex",
    width: "100vw",
    justifyContent: "space-between",
  },
});

const SteamList = ({ game, appid }) => {
  const classes = useStyles();
  console.log(game);
  let steamURLicon;
  if (game.img_icon_url == "") {
    steamURLicon = defaultGameIcon;
  } else {
    steamURLicon = `http://media.steampowered.com/steamcommunity/public/images/apps/${game.appid}/${game.img_icon_url}.jpg`;
  }

  const steamURLimage = `http://media.steampowered.com/steamcommunity/public/images/apps/${game.appid}/${game.img_logo_url}.jpg`;

  return (
    <Card className={classes.root} key={appid}>
      {/* <Link to={`/game/${appid}`} className={classes.link}> */}
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            {game.name}
          </Typography>
        </CardContent>
      </div>

      <CardMedia
        className={classes.image}
        alt={game.name}
        image={steamURLicon}
        title={game.name}
        height="100px"
      />
      {/* </Link> */}
    </Card>
  );
};

export default SteamList;
