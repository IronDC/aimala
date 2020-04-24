import React, { useContext } from "react";
import InputContainer from "../components/Input/style";
import { useForm } from "react-hook-form";
import { PlatformContext } from "../contexts/PlatformContext";
import { newPlatformApi } from "../../lib/apiService";
import { useHistory } from "react-router-dom";
import withProtected from "../../lib/protectRoute.hoc";
import Btn from "./../components/Btn";
import Container from "./../components/Container";
import InputItem from "./../components/InputItem";
import Label from "./../components/Label";
import ButtonText from "./../components/ButtonText";
import H1 from "../components/H1Item";
import styled from "styled-components";

const FormItem = styled.form`
  padding-top: 30px;
`;

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
    <Container>
      <H1>Create New Platform</H1>
      <FormItem onSubmit={handleSubmit(onSubmit)}>
        <InputContainer>
          <Label>Name</Label>
          <InputItem
            className={hasError(errors, "name")}
            name="name"
            ref={register({ required: true })}
          />
        </InputContainer>
        <InputContainer>
          <Label>Description</Label>
          <InputItem
            className={hasError(errors, "description")}
            name="description"
            ref={register({ required: true })}
          />
        </InputContainer>
        <InputContainer>
          <Label>Year</Label>
          <InputItem
            name="year"
            className={hasError(errors, "year")}
            type="number"
            ref={register({ min: 1950, required: true })}
          />
        </InputContainer>
        <InputContainer>
          <Label>Image</Label>
          <InputItem
            name="image"
            type="file"
            className={hasError(errors, "image")}
            ref={register()}
          />
        </InputContainer>
          <ButtonText type="submit">Submit</ButtonText>
      </FormItem>
    </Container>
  );
};

export default withProtected(NewPlatform);
