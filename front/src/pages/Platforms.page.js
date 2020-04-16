import React, { useContext } from "react";
import { PlatformContext } from "../contexts/PlatformContext";
import { Link } from "react-router-dom";
import { ButtonBack } from "../components/ButtonBack";
import PlatformList from "../components/PlatformList";

const AllPlatforms = () => {
  const { platforms } = useContext(PlatformContext);
  console.log(`This are the Platforms:`);
  console.log(platforms);
  const renderPlatformList = () =>
    platforms.map((platform) => (
      <PlatformList platform={platform} key={platform.id} />
    ));

  return (
    <>
      <ButtonBack />
      <h1>ALL PLATFORMS</h1>
      <ul>{renderPlatformList()}</ul>
    </>
  );
};

export default AllPlatforms;
