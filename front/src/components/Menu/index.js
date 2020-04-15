import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import SportsEsportsIcon from "@material-ui/icons/SportsEsports";
import VideogameAssetIcon from "@material-ui/icons/VideogameAsset";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  list: {
    width: 250
  },
  fullList: {
    width: "auto"
  }
});

export default function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false
  });

  const toggleDrawer = (anchor, open) => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = anchor => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom"
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {[
          { name: "Home", link: "/", text: "Homepage", icon: <SportsEsportsIcon /> },
          { name: "Games", link: "/games", text: "Games Page", icon: <VideogameAssetIcon /> },
          { name: "my Games", link: "/usergames", text: "My Games", icon: <VideogameAssetIcon /> },
          { name: "my Platforms", link: "/platforms", text: "My Platforms", icon: <VideogameAssetIcon /> },
        ].map((text,index) => (
          <ListItem button key={index}>
            <ListItemIcon>
              {text.icon}
            </ListItemIcon>
              <Link to={text.link}><ListItemText primary={text.text}></ListItemText></Link>
          </ListItem>
        ))}
      </List>
    </div>
  );
  return (
    <div>
      {["left"].map(anchor => (
        <React.Fragment key={anchor}>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(anchor, true)}
          >
            <MenuIcon />
          </IconButton>
          {/* <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button> */}
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
