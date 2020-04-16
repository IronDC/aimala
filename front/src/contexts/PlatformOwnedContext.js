import React, { createContext, useState, useEffect } from "react";
import { platformsOwnedFromApi } from "../../lib/apiService";

export const PlatformOwnedContext = createContext();
const PlatformOwnedContextProvider = (props) => {
  const [platforms, setPlatforms] = useState([]);

  // PLATFORMS CONTEXT
  useEffect(() => {
    platformsOwnedFromApi().then((platforms) => setPlatforms(platforms));
  }, []);

  const findOneOwnedPlatform = (id) => {
    return platforms.find((platforms) => platforms.id === id);
  };

  return (
    <PlatformOwnedContext.Provider
      value={{
        platforms,
        setPlatforms,
        findOneOwnedPlatform,
      }}
    >
      {props.children}
    </PlatformOwnedContext.Provider>
  );
};

export default PlatformOwnedContextProvider;
