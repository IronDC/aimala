import React, { useContext } from "react";
// import { GameOwnedContext } from "../contexts/GameOwnedContext";
import { Link } from "react-router-dom";
import { ButtonBack } from "../components/ButtonBack";
// import GameList from "../components/GameList";
import InputContainer from "../components/Input/style";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { GameContext } from "../contexts/GameContext";
import { newGameApi } from "../../lib/apiService";
import { useHistory } from "react-router-dom";

const cloudinary = require("cloudinary-core");
const cl = cloudinary.Cloudinary.new({ cloud_name: "aimalacloud" });

const hasError = (errors, name) => {
  if (name in errors) return "error";
  return "";
};

export const NewGame = () => {
  const { games, setGames } = useContext(GameContext);

  const { register, handleSubmit, errors } = useForm({ mode: "onBlur" });
  const history = useHistory();

  const onSubmit = (data) => {
    const coverFile = data.cover[0];
    data.cover = coverFile;
    console.log("this is data");
    console.log(data);
    newGameApi(data).then((data) => {
      setGames([...games, data.newGame]);
      history.push("/games");
    });
  };
  console.log(`Errores de validacion ${errors}`);
  return (
    <>
      <h1>Create New Game</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputContainer>
          <label>Title</label>
          <input
            className={hasError(errors, "title")}
            name="title"
            ref={register({ required: true })}
          />
        </InputContainer>
        <InputContainer>
          <label>Description</label>
          <input
            className={hasError(errors, "description")}
            name="description"
            ref={register({ required: true })}
          />
        </InputContainer>
        <InputContainer>
          <label>Publisher</label>
          <input
            name="publisher"
            className={hasError(errors, "publisher")}
            ref={register({ required: true })}
          />
        </InputContainer>
        <InputContainer>
          <label>Year</label>
          <input
            name="year"
            className={hasError(errors, "year")}
            type="number"
            ref={register({ min: 1950, required: true })}
          />
        </InputContainer>
        <InputContainer>
          <label>Trailer</label>
          <input
            name="trailer"
            className={hasError(errors, "trailer")}
            ref={register}
          />
        </InputContainer>
        <InputContainer>
          <label>Cover</label>
          <input
            name="cover"
            type="file"
            className={hasError(errors, "cover")}
            ref={register()}
          />
        </InputContainer>
        <button type="submit">Create Game</button>
      </form>
    </>
  );
};

export default NewGame;