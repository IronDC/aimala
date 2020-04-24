import React, { useContext } from "react";
import { PlatformOwnedContext } from "../contexts/PlatformOwnedContext";
import { PlatformContext } from "../contexts/PlatformContext";
import { useUserSetter } from "./../../lib/authService";
import { ButtonBack } from "../components/ButtonBack";
import Button from "@material-ui/core/Button";
import { addPlatformtoUserFromApi } from "../../lib/apiService";
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
    margin: "0 auto",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
}));

const OnePlatform = (props) => {
  const { findOnePlatform } = useContext(PlatformContext);
  const { findOneOwnedPlatform, setPlatforms } = useContext(
    PlatformOwnedContext
  );
  const setUser = useUserSetter();
  const id = props.match.params.id;
  const platform = findOnePlatform(id);
  const platformOwned = findOneOwnedPlatform(id);
  const classes = useStyles();

  const handleSubmit = (e) => {
    e.preventDefault();
    addPlatformtoUserFromApi(id).then((data) => {
      setPlatforms(data.user.platformsOwned);
      setUser(data.user);
    });
  };

  return (
    <>
      <ButtonBack />
      {!platformOwned && (
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Add to my Library
        </Button>
      )}
      <Card className={classes.root}>
        <CardHeader title={platform?.name} subheader={platform?.year} />
        <CardMedia
          className={classes.media}
          image={platform?.image.url}
          title={platform?.name}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {platform?.description}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default OnePlatform;
