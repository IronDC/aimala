import React, { useContext } from "react";
import { PlatformContext } from "../contexts/PlatformContext";
import { Link } from "react-router-dom";
import { ButtonBack } from "../components/ButtonBack";
import PlatformList from "../components/PlatformList";
import Input from "../components/Input";
import { withProtected } from "../../lib/protectRoute.hoc";
import { useUser} from "../../lib/authService";

const AllPlatforms = () => {
  const { platforms, filter, setFilter } = useContext(PlatformContext);
  const user = useUser();
  console.log("User SteamId");
  const renderPlatformList = () =>
    platforms.map((platform) => {
      console.log(platform.name);
      return (
        (platform.name.toLowerCase().includes(filter.toLowerCase()) ||
          platform.description
            .toLowerCase()
            .includes(filter.toLowerCase())) && (
          <PlatformList platform={platform} key={platform.id} />
        )
      );
    });

  return (
    <>
      <ButtonBack />
      <Input setFilter={setFilter} />
      <h1>ALL PLATFORMS</h1>
      {user?.steamid === "" ? <Link to="/newplatform/steam">
        <div>
          <img
            src="https://cdn3.iconfinder.com/data/icons/social-media-2169/24/social_media_social_media_logo_steam-512.png"
            alt="Steam"
            width="150px"
          />
        </div>
        <div>
          <h2>Steam</h2>
        </div>
      </Link> : <Link to="/gamessteam">
      <div>
          <img
            src="https://cdn3.iconfinder.com/data/icons/social-media-2169/24/social_media_social_media_logo_steam-512.png"
            alt="Steam"
            width="150px"
          />
        </div>
        <div>
          <h2>Steam</h2>
        </div>
        </Link>}
      

      {renderPlatformList()}
    </>
  );
};

export default AllPlatforms;
