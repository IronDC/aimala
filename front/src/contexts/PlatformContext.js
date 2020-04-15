import React, { createContext, useState, useEffect } from "react";
import { platformsFromApi } from "../../lib/apiService";

export const PlatformContext = createContext();
const PlatformContextProvider = props => {
  const [platforms, setPlatforms] = useState([]);


  // PLATFORMS CONTEXT
  useEffect(() => {
    platformsFromApi().then(platforms => setPlatforms(platforms));
  }, []);

  const findOnePlatform = id => {
    return platforms.find(platforms => platforms.id === id);
  };

  return (
    <PlatformContext.Provider
      value={{
        platforms,
        setPlatforms,
        findOnePlatform,
      }}
    >
      {props.children}
    </PlatformContext.Provider>
  );
};

export default PlatformContextProvider;
