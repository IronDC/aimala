import React, { useContext } from "react";
import { ArticleContext } from "../contexts/ArticleContext";
import { ButtonBack } from "../components/ButtonBack";
import Container from "../components/Container";
import H1 from "../components/H1Item";
import ImgContainer from "../components/ImgContainer";
import ImgItem from "../components/ImgItem";
import TextContainer from "../components/TextContainer";

const OneArticle = (props) => {
  const { findOneArticle } = useContext(ArticleContext);
  const id = props.match.params.id;
  const article = findOneArticle(id);

  return (
    <>
      <ButtonBack />
      <Container>
        <H1>{article?.title}</H1>
        <ImgContainer>
          <ImgItem src={article?.image} alt={article?.title} />
        </ImgContainer>
        <TextContainer>{article?.text}</TextContainer>
      </Container>
    </>
  );
};

export default OneArticle;
