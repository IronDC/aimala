import React from "react";
import { useUser } from "../../lib/authService";
// import withProtected from "../../lib/protectRoute.hoc";

import { ButtonBack } from "../components/ButtonBack";
import Container from "../components/Container";
import H1 from "../components/H1Item";
import ImgContainer from "../components/ImgContainer";
import ImgItem from "../components/ImgItem";
import TextContainer from "../components/TextContainer";

const Profile = () => {
  const user = useUser();
  console.log(user);
  return (
    <>
      <ButtonBack />
      <Container>
        <H1>{user?.username}</H1>
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
