import React, { useContext } from "react";
import { ArticleContext } from "../contexts/ArticleContext";
// import { Link } from "react-router-dom";
import { ButtonBack } from "../components/ButtonBack";

const OneArticle = (props) => {
  const { findOneArticle } = useContext(ArticleContext);
  const id = props.match.params.id;
  console.log(`this is the article ${id}`);
  const article = findOneArticle(id);

  return (
    <>
      <ButtonBack />
      <p>ONE ARTICLE</p>
      <h1>{article?.title}</h1>
      <p>{article?.gameRelated}</p>
      <div>
        <img src={article?.image} alt={article?.title} width="150px" />
      </div>
      <div>{article?.text}</div>
      <p>{article?.platformRelated}</p>
    </>
  );
};

export default OneArticle;
