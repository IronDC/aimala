import React, { useContext } from "react";
import styled from "styled-components";
import GamepadIcon from "@material-ui/icons/Gamepad";
import SportsEsportsIcon from "@material-ui/icons/SportsEsports";
import { ArticleContext } from "../contexts/ArticleContext";
import ArticleList from "../components/ArticleList";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import { makeStyles } from "@material-ui/core/styles";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import withProtected from "../../lib/protectRoute.hoc";
import {Link} from "react-router-dom";

const Section = styled.section`
  width: 100vw;
  height: 33%;
`;

const ArticlesList = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 30px;
  > h2 {
    font-size: 2em;
    width: 55%;
    margin-top: 20px;
    text-decoration: none;
  }
  > a {
    text-decoration: none;
  }
`;

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
}));

function ListItemLink(props) {
  return <ListItem button component="a" {...props} style={{ width: 345 }} />;
}

const UserHome = () => {
  const { articles } = useContext(ArticleContext);
  const classes = useStyles();
  const renderArticlesList = () =>
    articles.map((article, index) => (
      <ArticleList article={article} key={index} />
    ));
  return (
    <>
      <div className={classes.root}>
        <List component="nav" aria-label="main user sections">
          <Link to="/usergames">
            <ListItem button>
              <ListItemIcon>
                <SportsEsportsIcon className="icon-img" />
              </ListItemIcon>
              <ListItemText primary="My Games" />
            </ListItem>
          </Link>
          <Divider />
          <Link to="/userplatforms">
            <ListItem button>
              <ListItemIcon>
                <GamepadIcon className="icon-img" />
              </ListItemIcon>
              <ListItemText primary="My Platforms" />
            </ListItem>
          </Link>
        </List>
        <Divider />
      </div>
      <Section>
        <ArticlesList>{renderArticlesList()}</ArticlesList>
      </Section>
    </>
  );
};

export default withProtected(UserHome);