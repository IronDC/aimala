import React, { useContext } from "react";
import { PlatformOwnedContext } from "../contexts/PlatformOwnedContext";
import { ButtonBack } from "../components/ButtonBack";
import PlatformList from "../components/PlatformList";

const UserPlatforms = () => {
  const { platforms } = useContext(PlatformOwnedContext);
  console.log(`this is the platforms ${platforms}`);
  const renderPlatformList = () =>
    platforms.map((platform) => (
      <PlatformList platform={platform} key={platform.id} />
    ));

  return (
    <>
      <ButtonBack />
      <h1>USER PLATFORMS</h1>
      <ul>{renderPlatformList()}</ul>
    </>
  );
};

export default UserPlatforms;
