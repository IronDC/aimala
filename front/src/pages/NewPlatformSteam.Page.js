import React, { useContext } from "react";
// import { GameOwnedContext } from "../contexts/GameOwnedContext";
import { Link } from "react-router-dom";
import { ButtonBack } from "../components/ButtonBack";
// import GameList from "../components/GameList";
import InputContainer from "../components/Input/style";
import { useForm } from "react-hook-form";
import styled from "styled-components";
// import { GameContext } from "../contexts/GameContext";
import { addSteamidFromApi } from "../../lib/apiService";
import { useHistory } from "react-router-dom";

const hasError = (errors, name) => {
  if (name in errors) return "error";
  return "";
};

export const NewPlatformSteam = () => {
  // const { games, setGames } = useContext(GameContext);

  const { register, handleSubmit, errors } = useForm({ mode: "onBlur" });
  const history = useHistory();

  const onSubmit = (data) => {
    console.log("Steamid to add: ", data);
    addSteamidFromApi(data.steamid).then((data) => {
      // setGames([...games, data.newGame]);
      history.push("/userplatforms");
    });
  };
  console.log(`Errores de validacion ${errors}`);
  return (
    <>
      <h1>ADD STEAM ACCOUNT</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputContainer>
          <label>Your STEAM ID</label>
          <input
            className={hasError(errors, "steamid")}
            name="steamid"
            ref={register({ required: true })}
          />
        </InputContainer>
        <button type="submit">Add Steam ID</button>
      </form>
    </>
  );
};

export default NewPlatformSteam;
