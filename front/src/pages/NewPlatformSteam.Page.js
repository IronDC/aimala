import React, { useContext } from "react";
// import { GameOwnedContext } from "../contexts/GameOwnedContext";
// import { Link } from "react-router-dom";
// import { ButtonBack } from "../components/ButtonBack";
// import GameList from "../components/GameList";
import InputContainer from "../components/Input/style";
import { useForm } from "react-hook-form";
// import styled from "styled-components";
// import { GameContext } from "../contexts/GameContext";
import { addSteamidFromApi } from "../../lib/apiService";
import { useHistory } from "react-router-dom";
import { useUser, useUserSetter } from "./../../lib/authService";

const hasError = (errors, name) => {
  if (name in errors) return "error";
  return "";
};

const NewPlatformSteam = () => {
  const setUser = useUserSetter();
  const user = useUser();

  const { register, handleSubmit, errors } = useForm({ mode: "onBlur" });
  const history = useHistory();

  const onSubmit = (data) => {
    addSteamidFromApi(data.steamid).then((data) => {
      setUser(data.user);
      history.push("/gamessteam");
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
