import React, { createContext, useState, useEffect } from "react";
import { platformsFromApi } from "../../lib/apiService";

export const PlatformContext = createContext();
const PlatformContextProvider = (props) => {
  const [platforms, setPlatforms] = useState([]);
  const [filter, setFilter] = useState("");

  // PLATFORM CONTEXT
  useEffect(() => {
    platformsFromApi().then((platforms) => setPlatforms(platforms));
  }, []);

  const findOnePlatform = (id) => {
    return platforms.find((platform) => platform.id === id);
  };

  return (
    <PlatformContext.Provider
      value={{
        platforms,
        setPlatforms,
        findOnePlatform,
        filter,
        setFilter,
      }}
    >
      {props.children}
    </PlatformContext.Provider>
  );
};

export default PlatformContextProvider;
