import React, { useContext } from "react";
import { PlatformContext } from "../contexts/PlatformContext";
import { Link } from "react-router-dom";
import { ButtonBack } from "../components/ButtonBack";

const OnePlatform = (props) => {
  const { findOnePlatform } = useContext(PlatformContext);
  const id = props.match.params.id;
  console.log(`this is the one game ${id}`);
  const platform = findOnePlatform(id);
  console.log(platform, id);

  return (
    <>
      <ButtonBack />
      <p>ONE PLATFORM</p>
      <h1>{platform?.name}</h1>
      <p>{platform?.year}</p>
      <div>
        <img src={platform?.logo} alt={platform?.name} width="150px" />
      </div>
      <div>{platform?.description}</div>
      <div>
        <img src={platform?.image} alt={platform?.name} width="150px" />
      </div>
      <div>
        <img src={platform?.gamepad} alt={platform?.name} width="150px" />
      </div>
    </>
  );
};

export default OnePlatform;
