import React, { useContext } from "react";
import { PlatformOwnedContext } from "../contexts/PlatformOwnedContext";
import { ButtonBack } from "../components/ButtonBack";
import PlatformList from "../components/PlatformList";
import Input from "../components/Input";
import withProtected from "../../lib/protectRoute.hoc";
import H1 from "./../components/H1Item";
import Container from "../components/Container";
import styled from "styled-components";

const SearchText = styled.p`
  font-family: "Roboto";
  font-size: 1em;
  margin: 0 auto;
  color: #adadad;
  padding-top: 30px;
`;

const UserPlatforms = () => {
  const { platforms, filter, setFilter } = useContext(PlatformOwnedContext);
  const renderPlatformList = () =>
    platforms.map(
      (platform) =>
        (platform.name.toLowerCase().includes(filter.toLowerCase()) ||
          platform.description
            .toLowerCase()
            .includes(filter.toLowerCase())) && (
          <PlatformList platform={platform} key={platform.id} />
        )
    );

  return (
    <>
      <ButtonBack />
      <Container>
        <H1>My Platforms</H1>
        <SearchText>Search</SearchText>
        <Input setFilter={setFilter} />
        {renderPlatformList()}
      </Container>
    </>
  );
};

export default withProtected(UserPlatforms);
