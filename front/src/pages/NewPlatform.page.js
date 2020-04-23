import React, { useContext } from "react";
import InputContainer from "../components/Input/style";
import { useForm } from "react-hook-form";
import { PlatformContext } from "../contexts/PlatformContext";
import { newPlatformApi } from "../../lib/apiService";
import { useHistory } from "react-router-dom";
import withProtected from "../../lib/protectRoute.hoc";

const cloudinary = require("cloudinary-core");
const cl = cloudinary.Cloudinary.new({ cloud_name: "aimalacloud" });

const hasError = (errors, name) => {
  if (name in errors) return "error";
  return "";
};

const NewPlatform = () => {
  const { platforms, setPlatforms } = useContext(PlatformContext);

  const { register, handleSubmit, errors } = useForm({ mode: "onBlur" });
  const history = useHistory();

  const onSubmit = (data) => {
    const imageFile = data.image[0];
    data.image = imageFile;
    newPlatformApi(data).then((data) => {
      setPlatforms([...platforms, data.newPlatform]);
      history.push("/platforms");
    });
  };
  console.log(`Errores de validacion ${errors}`);
  return (
    <>
      <h1>Create New Platform</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputContainer>
          <label>Name</label>
          <input
            className={hasError(errors, "name")}
            name="name"
            ref={register({ required: true })}
          />
        </InputContainer>
        <InputContainer>
          <label>Description</label>
          <input
            className={hasError(errors, "description")}
            name="description"
            ref={register({ required: true })}
          />
        </InputContainer>
        <InputContainer>
          <label>Year</label>
          <input
            name="year"
            className={hasError(errors, "year")}
            type="number"
            ref={register({ min: 1950, required: true })}
          />
        </InputContainer>
        <InputContainer>
          <label>Image</label>
          <input
            name="image"
            type="file"
            className={hasError(errors, "image")}
            ref={register()}
          />
        </InputContainer>
        <button type="submit">Create Platform</button>
      </form>
    </>
  );
};

export default withProtected(NewPlatform);
