import React, { useContext } from "react";
import { PlatformContext } from "../contexts/PlatformContext";
import { ButtonBack } from "../components/ButtonBack";
import PlatformList from "../components/PlatformList";

const UserPlatforms = () => {
  const { platforms } = useContext(PlatformContext);
  console.log(`this is the platforms ${platforms}`);
  const renderPlatformList = () =>
    platforms.map(platform => <PlatformList platform={platform} key={platform.id} />);

  return (
    <>
      <ButtonBack />
      <h1>MY GAMES</h1>
      <ul>{renderPlatformList()}</ul>
    </>
  );
};

export default UserPlatforms;
