import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ButtonBack } from "../components/ButtonBack";
import InputContainer from "../components/Input/style";
import { useForm } from "react-hook-form";
import { GameContext } from "../contexts/GameContext";
import { newGameApi } from "../../lib/apiService";
import { useHistory } from "react-router-dom";
import Btn from "./../components/Btn";
import Container from "./../components/Container";
import InputItem from "./../components/InputItem";
import Label from "./../components/Label";
import ButtonText from "./../components/ButtonText";
import H1 from "../components/H1Item";
import styled from "styled-components";
import withProtected from "../../lib/protectRoute.hoc";

const FormItem = styled.form`
  padding-top:30px;
`;


const cloudinary = require("cloudinary-core");
const cl = cloudinary.Cloudinary.new({ cloud_name: "aimalacloud" });

const hasError = (errors, name) => {
  if (name in errors) return "error";
  return "";
};

const NewGame = () => {
  const { games, setGames } = useContext(GameContext);

  const { register, handleSubmit, errors } = useForm({ mode: "onBlur" });
  const history = useHistory();

  const onSubmit = (data) => {
    const coverFile = data.cover[0];
    data.cover = coverFile;
    newGameApi(data).then((data) => {
      setGames([...games, data.newGame]);
      history.push("/games");
    });
  };

  return (
    <Container>
      <H1>Create New Game</H1>
      <FormItem onSubmit={handleSubmit(onSubmit)}>
        <InputContainer>
          <Label>Title</Label>
          <InputItem
            className={hasError(errors, "title")}
            name="title"
            ref={register({ required: true })}
          />
        </InputContainer>
        <InputContainer>
          <Label>Description</Label>
          <InputItem
            className={hasError(errors, "description")}
            name="description"
            ref={register({ required: true })}
          />
        </InputContainer>
        <InputContainer>
          <Label>Publisher</Label>
          <InputItem
            name="publisher"
            className={hasError(errors, "publisher")}
            ref={register({ required: true })}
          />
        </InputContainer>
        <InputContainer>
          <Label>Year</Label>
          <InputItem
            name="year"
            className={hasError(errors, "year")}
            type="number"
            ref={register({ min: 1950, required: true })}
          />
        </InputContainer>
        <InputContainer>
          <Label>Trailer</Label>
          <InputItem
            name="trailer"
            className={hasError(errors, "trailer")}
            ref={register}
          />
        </InputContainer>
        <InputContainer>
          <Label>Cover</Label>
          <InputItem
            name="cover"
            type="file"
            className={hasError(errors, "cover")}
            ref={register()}
          />
        </InputContainer>
          <ButtonText type="submit">Submit</ButtonText>
      </FormItem>
    </Container>
  );
};

export default withProtected(NewGame);