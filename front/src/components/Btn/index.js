import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

const Btn = () => {
  const classes = useStyles();
  return (
    <Button variant="contained" color="default" className={classes.button}>
      {children}
    </Button>
  );
};

export default Btn;
