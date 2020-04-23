import React from "react";
import { useForm } from "react-hook-form";
import { doLogin, useUserSetter } from "../../lib/authService";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import InputContainer from "./../components/Input/style";

const Input = styled.input`
  font-size: 1em;
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
      console.log(user);
      if(user.username){
        setUser(user);
        history.push("/");
        console.log(`este es el usuario logeado ${data.username}`);
      } else {
        console.log("Usuario no encontrado...");
        history.push("/login");
      };

    });
  };
  console.log(errors);

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputContainer>
          <label>Username</label>
          <Input
            className={hasError(errors, "username")}
            name="username"
            ref={register({ required: true })}
          />
        </InputContainer>
        <InputContainer>
          <label>Password</label>
          <Input
            name="password"
            className={hasError(errors, "password")}
            type="password"
            ref={register({ required: true })}
          />
        </InputContainer>
        <button type="submit">Login</button>
      </form>
    </>
  );
};

export default Login;
