import React, { useContext } from "react";
import { PlatformContext } from "../contexts/PlatformContext";
import { Link } from "react-router-dom";
import { ButtonBack } from "../components/ButtonBack";
import PlatformList from "../components/PlatformList";
import Input from "../components/Input";
import { useUser } from "../../lib/authService";
import styled from "styled-components";
import SteamIcon from "./../../public/images/steam-icon.png";
import XboxIcon from "./../../public/images/xbox-icon.png";
import PsnIcon from "./../../public/images/psn-icon.png";
import Container from "../components/Container";
import TextContainer from "../components/TextContainer";
import Box from "@material-ui/core/Box";
import withProtected from "../../lib/protectRoute.hoc";


const VirtualPlatformContainer = styled.div`
  margin: 10px;
`;

const VirtualPlatSection = styled.div`
  display: flex;
  padding: 10px;
  margin: 0 auto;
`;

const H1 = styled.h1`
  font-family: "Roboto";
  font-size: 1.5em;
  margin: 0 auto;
`;

const AllPlatforms = () => {
  const { platforms, filter, setFilter } = useContext(PlatformContext);
  const user = useUser();
  const renderPlatformList = () =>
    platforms.map((platform) => {
      return (
        (platform.name.toLowerCase().includes(filter.toLowerCase()) ||
          platform.description
            .toLowerCase()
            .includes(filter.toLowerCase())) && (
          <PlatformList platform={platform} key={platform.id} />
        )
      );
    });

  return (
    <>
      <ButtonBack />
      <Container>
        <H1>Search Platform</H1>
        <TextContainer>
          <Box
            textAlign="center"
            fontSize="1rem"
            fontFamily="Roboto, Helvetica"
          >
            Search and add platforms to your DB here
          </Box>
        </TextContainer>
        <TextContainer>
          <Box
            textAlign="center"
            fontSize="1rem"
            fontFamily="Roboto, Helvetica"
          >
            Digital Platforms
          </Box>
        </TextContainer>
        {user?.steamid === "" ? (
          <VirtualPlatSection>
            <VirtualPlatformContainer>
              <Link to="/newplatform/steam">
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
        <TextContainer>
          <Box
            textAlign="center"
            fontSize="1rem"
            fontFamily="Roboto, Helvetica"
          >
            Regular Platforms
          </Box>
        </TextContainer>
        <Input setFilter={setFilter} />
        {renderPlatformList()}
      </Container>
    </>
  );
};

export default AllPlatforms;