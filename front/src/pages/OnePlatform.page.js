import React, { useContext } from "react";
import { PlatformOwnedContext } from "../contexts/PlatformOwnedContext";
import { PlatformContext } from "../contexts/PlatformContext";
import { useUserSetter } from "./../../lib/authService";
import { ButtonBack } from "../components/ButtonBack";
import Button from "@material-ui/core/Button";
import { addPlatformtoUserFromApi } from "../../lib/apiService";

const OnePlatform = (props) => {
  const { findOnePlatform } = useContext(PlatformContext);
  const { findOneOwnedPlatform, setPlatforms } = useContext(
    PlatformOwnedContext
  );
  const setUser = useUserSetter();
  const id = props.match.params.id;
  const platform = findOnePlatform(id);
  const platformOwned = findOneOwnedPlatform(id);

  const handleSubmit = (e) => {
    e.preventDefault();
    addPlatformtoUserFromApi(id).then((data) => {
      setPlatforms(data.user.platformsOwned);
      setUser(data.user);
    });
  };

  return (
    <>
      <ButtonBack />
      <h1>{platform?.name}</h1>
      <p>{platform?.year}</p>
      <div>
        <img src={platform?.image.url} alt={platform?.name} width="150px" />
      </div>
      <div>{platform?.description}</div>
      {!platformOwned && (
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Add to my Library
        </Button>
      )}
    </>
  );
};

export default OnePlatform;
