import React, { useContext } from "react";
import { ButtonBack } from "../components/ButtonBack";
import Container from "../components/Container";
import H1 from "../components/H1Item";
import ImgContainer from "../components/ImgContainer";
import ImgItem from "../components/ImgItem";
import TextContainer from "../components/TextContainer";
import MineImg from "./../../public/images/minecraft-inconstruction.jpg";

const NotFound = () => {

  return (
    <>
      <ButtonBack />
      <Container>
        <H1>Page in construction</H1>
        <ImgContainer>
          <ImgItem src={MineImg} alt={MineImg} />
        </ImgContainer>
      </Container>
    </>
  );
};

export default NotFound;