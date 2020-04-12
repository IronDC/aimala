import React, { useEffect, useState } from "react";
import styled from "styled-components";
import SportsEsportsIcon from "@material-ui/icons/SportsEsports";
import { Link } from "react-router-dom";
import { Games } from "../../lib/gamesService";

const UserGames = () => {
  const [games, setGames] = useState([]);
  // // const [search, setSearch] = useState("");

  useEffect(() => {
    Games().then((games) => setGames(games));
  }, []);

  return (
    <>
      <h1>MY GAMES</h1>
      {/* <form onSubmit={e => e.preventDefault()}>
        <Input
          name="search"
          placeholder="Search a beer"
          value={search}
          onChange={handleSearch}
        />
      </form> */}

      <ul>
        {games.map((game) => (
          <li key={game._id}>
            <Link to={`/game/${game._id}`}>
              <div>
                <img src={game.cover} alt={game.title} width="150px" />
              </div>
              <div>
                <h2>{game.title}</h2>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
  // const handleSearch = e => {
  //   const query = e.target.value;
  //   searchBeers(query).then(beers => setBeers(beers));
  //   setSearch(query);
  // };
};

export default UserGames;
