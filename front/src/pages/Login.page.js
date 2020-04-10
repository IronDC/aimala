import React from "react";
import { useForm } from "react-hook-form";
import { doLogin, useUserSetter } from "../../lib/authService";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const Input = styled.input`
  font-size: 1.3em;
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
    defaultValues: { username: "", password: ""}
  });

  const onSubmit = data => {
    doLogin(data).then(user => {
      setUser(user);
      history.push("/");
      console.log(`este es el usuario logeado ${data.user}`);
    });
  };
  console.log(errors);

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Username</label>
          <Input
            className={hasError(errors, "username")}
            name="username"
            ref={register({ required: true })}
          />
        </div>
        <div>
          <label>Password</label>
          <Input
            name="password"
            className={hasError(errors, "password")}
            type="password"
            ref={register({ required: true })}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </>
  );
};

export default Login;
