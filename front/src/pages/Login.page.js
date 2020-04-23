import React from "react";
import { useForm } from "react-hook-form";
import { doLogin, useUserSetter } from "../../lib/authService";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import InputContainer from "./../components/Input/style";
import Btn from "./../components/Btn";
import Container from "./../components/Container";

const Input = styled.input`
  border: none;
  border-bottom: 1px solid black;
  height: 50px;
  width: 100%;
  padding: 15px 5px 5px 15px;
  color: black;
  font-size: 20px;
`;

const Label = styled.label`
  font-weight: 700;
  margin-top: 1rem;
  color: #dadada;
`;

const ButtonText = styled.button`
  font: "Roboto";
  color: whitesmoke;
  font-size: 20px;
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
        console.log("Insert Coint to try again");
        history.push("/login");
      }
    });
  };

  return (
    <Container>
      <form
        onSubmit={handleSubmit(onSubmit)}
        // className={classes.root}
        // noValidate
        // autoComplete="off"
      >
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
        <Btn>
          <ButtonText type="submit">Login</ButtonText>
        </Btn>
      </form>
    </Container>
  );
};

export default Login;
