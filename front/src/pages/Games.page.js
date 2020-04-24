import React, { useContext } from "react";
import { GameContext } from "../contexts/GameContext";
import { ButtonBack } from "../components/ButtonBack";
import GameList from "../components/GameList";
import Input from "../components/Input";
import TextContainer from "../components/TextContainer";
import Box from "@material-ui/core/Box";
import styled from "styled-components";
import SportsEsportsIcon from "@material-ui/icons/SportsEsports";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import Container from "../components/Container";
import H1 from "../components/H1Item";
import { Link } from "react-router-dom";
import AddCircleIcon from "@material-ui/icons/AddCircle";

function ListItemLink(props) {
  return <ListItem button component="a" {...props} style={{ width: 345 }} />;
}

const AllGames = () => {
  const { games, filter, setFilter } = useContext(GameContext);
  const renderGameList = () =>
    games.map(
      (game) =>
        game.title.toLowerCase().includes(filter.toLowerCase()) && (
          <GameList game={game} key={game.id} />
        )
    );

  const AddButton = {
    backgroundColor: "white",
  };

  return (
    <>
      <ButtonBack />
      <Container>
        <H1>Search Games</H1>
        <TextContainer>
          <Box
            textAlign="center"
            fontSize="1rem"
            fontFamily="Roboto, Helvetica"
          >
            Search and add Games to your DB here
          </Box>
        </TextContainer>
        <Input setFilter={setFilter} />
        {renderGameList()}
        <TextContainer>
          <Box
            textAlign="center"
            fontSize="1rem"
            fontFamily="Roboto, Helvetica"
          >
            ¿Game not found?
          </Box>
        </TextContainer>
        <List component="nav" aria-label="main user sections">
          <Divider />
          <Link to="/newgame">
            <ListItem button style={AddButton}>
              <ListItemIcon>
                <AddCircleIcon className="icon-img" />
              </ListItemIcon>
              <ListItemText primary="Create New Game" />
            </ListItem>
          </Link>
          <Divider />
        </List>
      </Container>
    </>
  );
};

export default AllGames;
