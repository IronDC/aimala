import React, { useContext } from "react";
import { PlatformOwnedContext } from "../contexts/PlatformOwnedContext";
import { ButtonBack } from "../components/ButtonBack";
import PlatformList from "../components/PlatformList";
import Input from "../components/Input";

const UserPlatforms = () => {
  const { platforms, filter, setFilter } = useContext(PlatformOwnedContext);
  console.log(`this is the platforms ${platforms}`);
  const renderPlatformList = () =>
    platforms.map(
      (platform) =>
        (platform.name.toLowerCase().includes(filter.toLowerCase()) ||
          platform.description
            .toLowerCase()
            .includes(filter.toLowerCase())) && (
          <PlatformList platform={platform} key={platform.id} />
        )
    );

  return (
    <>
      <ButtonBack />
      <Input setFilter={setFilter} />
      <h1>USER PLATFORMS</h1>
      <ul>{renderPlatformList()}</ul>
    </>
  );
};

export default UserPlatforms;
