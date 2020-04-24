import React from "react";
import { useForm } from "react-hook-form";
import { doLogin, useUserSetter } from "../../lib/authService";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import InputContainer from "./../components/Input/style";
import Btn from "./../components/Btn";
import Container from "./../components/Container";
import InputItem from "./../components/InputItem";
import Label from "./../components/Label";
import ButtonText from "./../components/ButtonText";

const Input = styled(InputItem)`
  &.error {
    border-color: red;
  }
`;

const hasError = (errors, name) => {
  if (name in errors) return "error";
  return "";
};

const Login = () => {
  const history = useHistory();
  const setUser = useUserSetter();
  const { register, handleSubmit, errors } = useForm({
    mode: "onBlur",
    defaultValues: { username: "", password: "" },
  });

  const onSubmit = (data) => {
    doLogin(data).then((user) => {
      if (user.username) {
        setUser(user);
        history.push("/");
        console.log(`Welcome ${data.username}`);
      } else {
        console.log("Insert Coin to try again");
        history.push("/login");
      }
    });
  };

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputContainer>
          <Label>Username</Label>
          <Input
            className={hasError(errors, "username")}
            name="username"
            ref={register({ required: true })}
          />
        </InputContainer>
        <InputContainer>
          <Label>Password</Label>
          <Input
            name="password"
            className={hasError(errors, "password")}
            type="password"
            ref={register({ required: true })}
          />
        </InputContainer>
          <ButtonText type="submit">Login</ButtonText>
      </form>
    </Container>
  );
};

export default Login;
