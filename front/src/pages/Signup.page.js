import React from "react";
import { useForm } from "react-hook-form";
import { doSignup, useUserSetter } from "./../../lib/authService";
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

const SignUp = () => {
  const history = useHistory();
  const setUser = useUserSetter();
  const { register, handleSubmit, errors } = useForm({
    mode: "onBlur",
    defaultValues: { username: "", password: "", email: "" }
  });

  const onSubmit = data => {
    doSignup(data).then(user => {
      setUser(user);
      history.push("/homeuser");
      console.log(`este es el usuario que mandamos ${user}`);
    });
  };
  console.log(errors);

  return (
    <>
      <h1>SignUp</h1>
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
        <div>
          <label>Email</label>
          <Input
            name="email"
            className={hasError(errors, "email")}
            ref={register({
              required: true,
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "invalid email address"
              }
            })}
          />
        </div>
        <button type="submit">SignUp</button>
      </form>
    </>
  );
};

export default SignUp;
