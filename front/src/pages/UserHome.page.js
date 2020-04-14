import React, { useContext } from "react";
import styled from "styled-components";
import SportsEsportsIcon from "@material-ui/icons/SportsEsports";
import VideogameAssetIcon from "@material-ui/icons/VideogameAsset";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import { Link } from "react-router-dom";
import { GameContext } from "../contexts/GameContext";

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

const List = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  > h2 {
    font-size: 2em;
    width: 55%;
    margin-top: 20px;
  }
  .icon-img {
    font-size: 3em;
    width: 25%;
    margin-top: 20px;
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
  const { article } = useContext(GameContext);
  console.log(`Articles Receivend on UserHome:  ${article}`);
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
        {/* ESTA SECCIÓN DEBERÍA SER UN COMPONENTE */}
        <Col2>
          <VideogameAssetIcon className="icon-img" />
          <h2>
            <LinkText to="/platforms">MyPlatforms</LinkText>
          </h2>
        </Col2>
      </Section>
      <Section>
        <Col2>
          <MenuBookIcon className="icon-img" />
          <h2>Articles</h2>
        </Col2>
        <List>
          <ul>
            {article.map((article) => (
              <li key={article.id}>
                <Link to={`/article/${article.id}`}>
                  <div>
                    <img
                      src={article.image}
                      alt={article.title}
                      width="150px"
                    />
                  </div>
                  <div>
                    <h2>{article.title}</h2>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </List>
      </Section>
    </Container>
  );
};

export default UserHome;
