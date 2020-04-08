import React from "react";
import { useForm } from "react-hook-form";
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
  const { register, handleSubmit, errors } = useForm({ mode: "onBlur" });

  const onSubmit = data => {
    console.log("Data is");
    console.log(data);
  };
  console.log(errors);
  return (
    <>
      <h1>SignUp</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Username</label>
          <Input
            className={hasError(errors, "usuario")}
            name="usuario"
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
          {/* <Input
            name="email"
            className={hasError(errors, "email")}
            type="email"
            ref={register({required: true })}
          /> */}
          <Input
        name="email"
        className={hasError(errors, "email")}
        ref={register({
          required: 'Required',
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
