import React from "react";
import Box from "@material-ui/core/Box";
import marioluigi from "../../public/images/mario-luigi.gif";
import Container from "../components/Container";
import ImgContainer from "../components/ImgContainer";
import TextContainer from "../components/TextContainer";
import Btn from "../components/Btn";
import LinkText from "../components/LinkText";

const HomePage = () => {
  return (
    <Container>
      <Box
        textAlign="center"
        fontSize="2rem"
        fontFamily="Roboto, Helvetica"
        fontWeight="fontWeightBold"
        color="#595959"
      >
        Aimala
      </Box>
      <TextContainer>
        <Box textAlign="center" fontSize="1rem" fontFamily="Roboto, Helvetica">
          Welcome to the best videogame library on this planet. Developed by the
          handsome duo David and Carballo.
        </Box>
      </TextContainer>
      <TextContainer>
        <Box textAlign="center" fontSize="1rem" fontFamily="Roboto, Helvetica">
          Please
        </Box>
      </TextContainer>
      <Btn>
        <LinkText to="/login">Login</LinkText>
      </Btn>
      <TextContainer>
        <Box textAlign="center" fontSize="1rem" fontFamily="Roboto, Helvetica">
          or
        </Box>
      </TextContainer>
      <Btn>
        <LinkText to="/signup">Signup</LinkText>
      </Btn>
      <ImgContainer>
        <img src={marioluigi} alt="Mario" width="350px" />
      </ImgContainer>
      <TextContainer>
        <Box
          textAlign="center"
          fontSize="0.7rem"
          fontFamily="Roboto, Helvetica"
        >
          This was an IronHack MERN Final Project for Web Dev Bootcamp 10-2019
          by David García and Joan Carballo.
        </Box>
      </TextContainer>
    </Container>
  );
};

export default HomePage;
