import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

export const ButtonBack = () => {
  let history = useHistory();
  const classes = useStyles();
  return (
    <Button
      variant="contained"
      color="default"
      className={classes.button}
      startIcon={<ArrowBackIosIcon />}
      onClick={() => history.goBack()}
    >
      Back
    </Button>
  );
};
