import React, { createContext, useState, useEffect } from "react";
import { platformsOwnedFromApi } from "../../lib/apiService";

export const PlatformOwnedContext = createContext();
const PlatformOwnedContextProvider = (props) => {
  const [platforms, setPlatforms] = useState([]);
  const [filter, setFilter] = useState("");

  // PLATFORMS CONTEXT
  useEffect(() => {
    platformsOwnedFromApi().then((platforms) => setPlatforms(platforms));
  }, []);

  const findOneOwnedPlatform = (id) => {
    return platforms.find((platform) => platform.id === id);
  };

  return (
    <PlatformOwnedContext.Provider
      value={{
        platforms,
        setPlatforms,
        findOneOwnedPlatform,
        filter,
        setFilter,
      }}
    >
      {props.children}
    </PlatformOwnedContext.Provider>
  );
};

export default PlatformOwnedContextProvider;
