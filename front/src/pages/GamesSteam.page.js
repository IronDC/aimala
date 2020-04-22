import React, { useState,useEffect } from "react";
import { ButtonBack } from "../components/ButtonBack";
import { useUser } from "./../../lib/authService";
import { gamesFromSteamApi } from "../../lib/steamApiService";

const GamesSteam = () => {
  const user = useUser();
  console.log("me cago en toda la puta cache del mundo");
  console.log(user);
  const steamid = user.steamid;
  const [steamGames, setSteamGames] = useState([]);

  useEffect(() => {
    gamesFromSteamApi().then((steamGames) => {
      setSteamGames(steamGames);
      console.log(steamGames.data.response.games);
    })
  }, []);
  // const renderGameList = () =>
  //   steamGames.map(
  //     (game) => <GameList game={game} key={game.id} />
  //   );

  return (
    <>
      <ButtonBack />
      <h1>Steam Games</h1>
      {/* {renderGameList()} */}
    </>
  );
};

export default GamesSteam;
