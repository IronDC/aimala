import React, { useContext } from "react";
import InputContainer from "../components/Input/style";
import { useForm } from "react-hook-form";
import { addSteamidFromApi } from "../../lib/apiService";
import { useHistory } from "react-router-dom";
import { useUser, useUserSetter } from "../../lib/authService";
import withProtected from "../../lib/protectRoute.hoc";

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
    <>
      <h1>ADD STEAM ACCOUNT</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputContainer>
          <label>Your STEAM ID</label>
          <input
            className={hasError(errors, "steamid")}
            name="steamid"
            ref={register({ required: true })}
          />
        </InputContainer>
        <button type="submit">Add Steam ID</button>
      </form>
    </>
  );
};

export default withProtected(NewPlatformSteam);