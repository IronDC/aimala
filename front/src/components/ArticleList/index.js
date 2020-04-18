import React from "react";
import { Link } from "react-router-dom";

const ArticleList = ({ article,index}) => {
  return (
    <>
      <li key={index}>
        <Link to={`/article/${article?.id}`}>
          <div>
            <img src={article?.image} alt={article?.title} width="150px" />
          </div>
          <div>
            <h2>{article?.title}</h2>
          </div>
        </Link>
      </li>
    </>
  );
};

export default ArticleList;
