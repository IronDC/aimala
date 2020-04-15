import React, { createContext, useState, useEffect } from "react";
import { articlesFromApi } from "../../lib/apiService";

export const ArticleContext = createContext();
const ArticleContextProvider = props => {
  const [articles, setArticles] = useState([]);


  // ARTICLE CONTEXT
  useEffect(() => {
    articlesFromApi().then(articles => setArticles(articles));
  }, []);

  const findOneArticle = id => {
    return articles.find(articles => articles.id === id);
  };

  return (
    <ArticleContext.Provider
      value={{
        articles,
        setArticles,
        findOneArticle,
      }}
    >
      {props.children}
    </ArticleContext.Provider>
  );
};

export default ArticleContextProvider;