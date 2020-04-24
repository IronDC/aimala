import React from "react";
import { useForm } from "react-hook-form";
import { doSignup, useUserSetter } from "./../../lib/authService";
import { useHistory } from "react-router-dom";
import InputContainer from "./../components/Input/style";
import Btn from "./../components/Btn";
import Container from "./../components/Container";
import InputItem from "./../components/InputItem";
import Label from "./../components/Label";
import ButtonText from "./../components/ButtonText";
import styled from "styled-components";

const Input = styled(InputItem)`
  &.error {
    border-color: red;
  }
`;

const hasError = (errors, name) => {
  if (name in errors) return "error";
  return "";
};

const SignUp = () => {
  const history = useHistory();
  const setUser = useUserSetter();
  const { register, handleSubmit, errors } = useForm({
    mode: "onBlur",
    defaultValues: { username: "", password: "", email: "" },
  });

  const onSubmit = (data) => {
    doSignup(data).then((user) => {
      setUser(user);
      history.push("/");
      console.log(`User sent: ${user}`);
    });
  };
  console.log(errors);

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
        <InputContainer>
          <Label>Email</Label>
          <Input
            name="email"
            className={hasError(errors, "email")}
            ref={register({
              required: true,
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "invalid email address",
              },
            })}
          />
        </InputContainer>
          <ButtonText type="submit">SignUp</ButtonText>
      </form>
    </Container>
  );
};

export default SignUp;
