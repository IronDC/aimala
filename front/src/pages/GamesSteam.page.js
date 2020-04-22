import React, { useState, useEffect } from "react";
import { ButtonBack } from "../components/ButtonBack";
import { useUser } from "./../../lib/authService";
import { gamesFromSteamApi } from "../../lib/steamApiService";
import SteamList from "../components/SteamList";

const GamesSteam = () => {
  const user = useUser();
  console.log("me cago en toda la puta cache del mundo");
  console.log(user);
  const steamid = user.steamid;
  const [steamGames, setSteamGames] = useState([]);

  useEffect(() => {
    gamesFromSteamApi().then((steamGames) => {
      setSteamGames(steamGames.data.response.games);
      // console.log(steamGames.data.response.games);
    });
  }, []);

  // console.log(steamGames);
  // const steamURLicon = `http://media.steampowered.com/steamcommunity/public/images/apps/${steamGames[0]?.appid}/${steamGames[0]?.img_icon_url}.jpg`;
  // const steamURLimage = `http://media.steampowered.com/steamcommunity/public/images/apps/${steamGames[0]?.appid}/${steamGames[0]?.img_logo_url}.jpg`;

  const renderSteamList = () =>
    steamGames.map((game) => <SteamList game={game} key={game.appid} />);

  return (
    <>
      <ButtonBack />
      <h1>Steam Games</h1>
      {renderSteamList()}
    </>
  );
};

export default GamesSteam;
