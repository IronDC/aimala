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
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import { withTheme } from "@material-ui/core";
import H1 from "../components/H1Item";

const VirtualPlatformContainer = styled.div`
  margin: 10px;
`;

const VirtualPlatSection = styled.div`
  display: flex;
  padding: 10px;
  margin: 0 auto;
`;

const AddButton = {
  backgroundColor: "white",
};

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
              <Link to="/notfound">
                <img src={XboxIcon} alt="Steam" width="80px" />
              </Link>
            </VirtualPlatformContainer>
            <VirtualPlatformContainer>
              <Link to="/notfound">
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
              <Link to="/notfound">
                <img src={XboxIcon} alt="Steam" width="80px" />
              </Link>
            </VirtualPlatformContainer>
            <VirtualPlatformContainer>
              <Link to="/notfound">
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
        <TextContainer>
          <Box
            textAlign="center"
            fontSize="1rem"
            fontFamily="Roboto, Helvetica"
          >
            ¿Platform not found?
          </Box>
        </TextContainer>
        <List component="nav" aria-label="main user sections">
          <Divider />
          <Link to="/newplatform">
            <ListItem button style={AddButton}>
              <ListItemIcon>
                <AddCircleIcon className="icon-img" />
              </ListItemIcon>
              <ListItemText primary="Create New Platform" />
            </ListItem>
          </Link>
          <Divider />
        </List>
      </Container>
    </>
  );
};

export default AllPlatforms;
