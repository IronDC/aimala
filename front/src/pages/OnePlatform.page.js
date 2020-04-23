import React, { useContext } from "react";
import { PlatformOwnedContext } from "../contexts/PlatformOwnedContext";
import { PlatformContext } from "../contexts/PlatformContext";
import { useUserSetter } from "./../../lib/authService";
// import { Link } from "react-router-dom";
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
  console.log(`this is the one platforms ${id}`);
  const platform = findOnePlatform(id);
  const platformOwned = findOneOwnedPlatform(id);

  const handleSubmit = (e) => {
    console.log("pulsado el boton");
    e.preventDefault();
    addPlatformtoUserFromApi(id).then((data) => {
      console.log(data.user);
      setPlatforms(data.user.platformsOwned);
      setUser(data.user);
    });
  };

  return (
    <>
      <ButtonBack />
      <p>ONE PLATFORM</p>
      <h1>{platform?.name}</h1>
      <p>{platform?.year}</p>
      {/* <div>
        <img src={platform?.logo} alt={platform?.name} width="150px" />
      </div> */}
      <div>{platform?.description}</div>
      <div>
        <img src={platform?.image.url} alt={platform?.name} width="150px" />
      </div>
      {/* <div>
        <img src={platform?.gamepad} alt={platform?.name} width="150px" />
      </div> */}
      {!platformOwned && (
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Add to my Library
        </Button>
      )}
    </>
  );
};

export default OnePlatform;
