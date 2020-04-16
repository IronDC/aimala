import React from "react";
import { Link } from "react-router-dom";

const GameList = ( {game:{id,cover,title}},i ) => {
  return (
    <>
      <li key={i}>
        <Link to={`/game/${id}`}>
          <div>
            <img src={cover} alt={title} width="150px" />
          </div>
          <div>
            <h2>{title}</h2>
          </div>
        </Link>
      </li>
    </>
  );
};

export default GameList;
