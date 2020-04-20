import React, { useContext } from "react";
import { PlatformContext } from "../contexts/PlatformContext";
import { Link } from "react-router-dom";
import { ButtonBack } from "../components/ButtonBack";
import PlatformList from "../components/PlatformList";
import Input from "../components/Input";
import { withProtected } from "../../lib/protectRoute.hoc";

const AllPlatforms = () => {
  const { platforms, filter, setFilter } = useContext(PlatformContext);
  const renderPlatformList = () =>
    platforms.map(
      (platform) =>{
        console.log(platform?.name);
        return (platform?.name.toLowerCase().includes(filter.toLowerCase()) ||
          platform?.description
            .toLowerCase()
            .includes(filter.toLowerCase())) && (
          <PlatformList platform={platform} key={platform.id} />
        )}
    );

  return (
    <>
      <ButtonBack />
      <Input setFilter={setFilter} />
      <h1>ALL PLATFORMS</h1>
      <ul>{renderPlatformList()}</ul>
    </>
  );
};

export default AllPlatforms;
