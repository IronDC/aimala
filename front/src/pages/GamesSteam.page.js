import React, { useState, useEffect } from "react";
import { ButtonBack } from "../components/ButtonBack";
import { useUser } from "./../../lib/authService";
import { gamesFromSteamApi } from "../../lib/steamApiService";
import SteamList from "../components/SteamList";
import Input from "../components/Input";

const GamesSteam = () => {
  const user = useUser();
  const steamid = user.steamid;
  const [steamGames, setSteamGames] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    gamesFromSteamApi().then((steamGames) => {
      setSteamGames(steamGames.data.response.games);
    });
  }, []);

  const renderSteamList = () =>
    steamGames.map(
      (game) =>
        game.name.toLowerCase().includes(filter.toLowerCase()) && (
          <SteamList game={game} key={game.appid} />
        )
    );

  return (
    <>
      <ButtonBack />
      <Input setFilter={setFilter} />
      <h1>Steam Games</h1>
      {renderSteamList()}
    </>
  );
};

export default GamesSteam;
