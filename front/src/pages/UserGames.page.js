import React, { useContext } from "react";
import { useUser } from "../../lib/authService";
import { GameOwnedContext } from "../contexts/GameOwnedContext";
import { ButtonBack } from "../components/ButtonBack";
import GameList from "../components/GameList";
import Input from "../components/Input";
import Container from "../components/Container";
import styled from "styled-components";
import { Link } from "react-router-dom";
import SteamIcon from "./../../public/images/steam-icon.png";
import XboxIcon from "./../../public/images/xbox-icon.png";
import PsnIcon from "./../../public/images/psn-icon.png";

const H1 = styled.h1`
  font-family: "Roboto";
  font-size: 1.5em;
  margin: 0 auto;
`;

const SearchText = styled.p`
  font-family: "Roboto";
  font-size: 1em;
  margin: 0 auto;
  color: #adadad;
  padding-top: 30px;
`;

const VirtualPlatformContainer = styled.div`
  margin: 10px;
`;

const VirtualPlatSection = styled.div`
  margin: 0 auto;
  display: flex;
  padding: 5px;
`;

const UserGames = () => {
  const { games, filter, setFilter } = useContext(GameOwnedContext);
  const user = useUser();
  console.log(user);
  const renderGameList = () =>
    games.map(
      (game) =>
        game.title.toLowerCase().includes(filter.toLowerCase()) && (
          <GameList game={game} key={game.id} />
        )
    );

  return (
    <>
      <ButtonBack />
      <Container>
        <H1>My Games</H1>
        <SearchText>Search</SearchText>
        <Input setFilter={setFilter} />
        {user?.steamid === "" ? (
          <VirtualPlatSection>
            <VirtualPlatformContainer>
              <Link to="/gamessteam">
                <img src={SteamIcon} alt="Steam" width="80px" />
              </Link>
            </VirtualPlatformContainer>
            <VirtualPlatformContainer>
              <Link to="/usergames">
                <img src={XboxIcon} alt="Steam" width="80px" />
              </Link>
            </VirtualPlatformContainer>
            <VirtualPlatformContainer>
              <Link to="/usergames">
                <img src={PsnIcon} alt="Steam" width="80px" />
              </Link>
            </VirtualPlatformContainer>
          </VirtualPlatSection>
        ) : (
          <VirtualPlatSection>
            <VirtualPlatformContainer>
              <Link to="/gamessteam">
                <img src={SteamIcon} alt="Steam" width="80px" />
              </Link>
            </VirtualPlatformContainer>
            <VirtualPlatformContainer>
              <Link to="/usergames">
                <img src={XboxIcon} alt="Steam" width="80px" />
              </Link>
            </VirtualPlatformContainer>
            <VirtualPlatformContainer>
              <Link to="/usergames">
                <img src={PsnIcon} alt="Steam" width="80px" />
              </Link>
            </VirtualPlatformContainer>
          </VirtualPlatSection>
        )}
        {renderGameList()}
      </Container>
    </>
  );
};

export default UserGames;
