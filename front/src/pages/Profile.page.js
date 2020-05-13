import React from "react";
import { useUser } from "../../lib/authService";
import { ButtonBack } from "../components/ButtonBack";
import Container from "../components/Container";
import H1 from "../components/H1Item";
import ImgContainer from "../components/ImgContainer";
import ImgItem from "../components/ImgItem";
import TextContainer from "../components/TextContainer";
import styled from "styled-components";

const Img = styled(ImgItem)`
    border-radius:50%;
    width:200px;
`;

const Profile = () => {
  const user = useUser();
  console.log(user);
  return (
    <>
      <ButtonBack />
      <Container>
        <H1>{user?.username}</H1>
        <ImgContainer>
        <Img src={user?.image.url} alt={user?.username} />
        </ImgContainer>
        <TextContainer>
          <p>Esta es la página del usuario {user?.username}</p>
        </TextContainer>
        <TextContainer>
          <p>Tu email es {user?.email}</p>
        </TextContainer>
      </Container>
    </>
  );
};

export default Profile;
