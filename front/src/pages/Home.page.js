import React from "react";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import marioluigi from "../../public/images/mario-luigi.gif";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 0 auto;
  width: 100vw;
  height: 100vh;
  padding-top: 30px;
`;
const ImgContainer = styled.div`
  flex-direction: column;
  margin: 0 auto;
  width: 100vw;
  padding-top: 50px;
`;

const TextContainer = styled.div`
  padding: 20px;
  color: grey;
`;

const ButtonContainer = styled.div`
  padding-right: 50px;
  padding-left: 50px;
  margin: 0 auto;
`;

const HomePage = () => {
  return (
    <Container>
      <Box
        textAlign="center"
        fontSize="2rem"
        fontFamily="Roboto, Helvetica"
        fontWeight="fontWeightBold"
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
      <ButtonContainer>
        <Link to="/login">Login</Link>
        {/* <Button variant="contained" color="primary" href="/login">
          Login
        </Button> */}
      </ButtonContainer>
      <TextContainer>
        <Box textAlign="center" fontSize="1rem" fontFamily="Roboto, Helvetica">
          or
        </Box>
      </TextContainer>
      <ButtonContainer>
        <Link to="/signup">Signup</Link>
        {/* <Button variant="outlined" color="primary" href="/signup">
          Signup
        </Button> */}
      </ButtonContainer>
      <ImgContainer>
        <img src={marioluigi} alt="Mario" width="350px" />
      </ImgContainer>
      <TextContainer>
        <Box
          textAlign="center"
          fontSize="0.7rem"
          fontFamily="Roboto, Helvetica"
        >
          This whas an IronHack MERN Final Project for Web Dev Bootcamp 10-2019.
        </Box>
      </TextContainer>
    </Container>
  );
};

export default HomePage;
