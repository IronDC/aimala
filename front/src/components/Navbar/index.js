import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormGroup from "@material-ui/core/FormGroup";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import TemporaryDrawer from "../Menu";
import { Link } from "react-router-dom";
import { useUser, useUserLogout } from "../../../lib/authService";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  colorPrimary: {
    backgroundColor: "#ffa600",
  },
}));

export default function MenuAppBar() {
  const classes = useStyles();
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const user = useUser();
  const handleLogout = useUserLogout();
  const open = Boolean(anchorEl);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.colorPrimary}>
        <Toolbar>
          <TemporaryDrawer />
          <Typography variant="h6" className={classes.title}>
            Aimala
          </Typography>
          {auth && (
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                {user && (
                  <Typography variant="body2" className={classes.title}>
                    {user.username}
                  </Typography>
                )}
                <AccountCircle />
              </IconButton>

              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={open}
                onClose={handleClose}
              >
                {!user && (
                  <>
                    <MenuItem>
                      <Link to="/signup">Sign Up</Link>
                    </MenuItem>
                    <MenuItem>
                      <Link to="/login">LogIn</Link>
                    </MenuItem>
                  </>
                )}
                {user && (
                  <>
                    <MenuItem>
                      <Link to="/login" onClick={handleLogout}>
                        Logout
                      </Link>
                    </MenuItem>
                    <MenuItem>
                      <Link to="/login" onClick={handleLogout}>
                        User Profile
                      </Link>
                    </MenuItem>
                  </>
                )}
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
