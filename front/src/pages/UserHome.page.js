import React from "react";
import styled from "styled-components";
import SportsEsportsIcon from "@material-ui/icons/SportsEsports";
import VideogameAssetIcon from "@material-ui/icons/VideogameAsset";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 0 auto;
  width: 100vw;
  height: 100vh;
`;

const Section = styled.section`
  width: 100vw;
  height: 33%;
  background-color: white;
`;
const Col2 = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  > h2 {
    font-size: 2em;
    width: 55%;
    margin-top: 40px;
  }
  .icon-img {
    font-size: 3em;
    width: 25%;
    margin-top: 40px;
  }
`;

const LinkText = styled(Link)`
  color: black;
  text-decoration: none;
  &:hover {
    color: blue;
  }
`;

const UserHome = () => {
  return (
    <Container>
      <Section>
        <Col2>
          <SportsEsportsIcon className="icon-img" />
          <h2>
            <LinkText to="/usergames">My Games</LinkText>
          </h2>
        </Col2>
      </Section>
      <Section>
        <Col2>
          <VideogameAssetIcon className="icon-img" />
          <h2>
            <LinkText to="/myplatforms">MyPlatforms</LinkText>
          </h2>
        </Col2>
      </Section>
      <Section>
        <Col2>
          <MenuBookIcon className="icon-img" />
          <h2>
            <LinkText to="/articles">Articles</LinkText>
          </h2>
        </Col2>
      </Section>
    </Container>
  );
};

export default UserHome;
