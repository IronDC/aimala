import React, { useContext } from "react";
import InputContainer from "../components/Input/style";
import { useForm } from "react-hook-form";
import { addSteamidFromApi } from "../../lib/apiService";
import { useHistory } from "react-router-dom";
import { useUser, useUserSetter } from "../../lib/authService";
import withProtected from "../../lib/protectRoute.hoc";
import Label from "../components/Label";
import InputItem from "../components/InputItem";
import ButtonText from "../components/ButtonText";
import styled from "styled-components";
import Container from "../components/Container";
import TextContainer from "../components/TextContainer";
import {Link} from "react-router-dom";

const FormItem = styled.form`
  padding-top: 30px;
`;

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

  return (
    <Container>
      <FormItem onSubmit={handleSubmit(onSubmit)}>
        <InputContainer>
          <Label>Add your STEAM ID</Label>
          <InputItem
            className={hasError(errors, "steamid")}
            name="steamid"
            ref={register({ required: true })}
          />
        </InputContainer>
        <ButtonText type="submit">Submit</ButtonText>
      </FormItem>
      <TextContainer>Do you want to know how to get your SteamId?</TextContainer>
      <TextContainer><Link to="#">Click here</Link></TextContainer>
    </Container>
  );
};

export default withProtected(NewPlatformSteam);