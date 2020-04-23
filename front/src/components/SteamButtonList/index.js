import React from "react";
import { Link } from "react-router-dom";

const SteamButtonList = () => {

  return (
    {{user?.steamid === "" ? (
      <Link to="/newplatform/steam">
        <div>
          <img
            src="https://cdn3.iconfinder.com/data/icons/social-media-2169/24/social_media_social_media_logo_steam-512.png"
            alt="Steam"
            width="100px"
          />
        </div>
        <div>
          <h2>Steam</h2>
        </div>
      </Link>
    ) : (
      <Link to="/gamessteam">
        <div>
          <img
            src="https://cdn3.iconfinder.com/data/icons/social-media-2169/24/social_media_social_media_logo_steam-512.png"
            alt="Steam"
            width="100px"
          />
        </div>
        <div>
          <h2>Steam</h2>
        </div>
      </Link>
    )}}
  );
  };
export default SteamButtonList;