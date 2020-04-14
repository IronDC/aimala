import React, { useContext } from "react";
import { GameContext } from "../contexts/GameContext";
import { Link } from "react-router-dom";
import { ButtonBack } from "../components/ButtonBack";

const UserPlatforms = () => {
  const { platforms } = useContext(GameContext);
  console.log(`this are the Platforms:  ${platforms}`);

  return (
    <>
      <ButtonBack />
      <h1>MY PLATFORMS</h1>
      <ul>
        {platforms.map((platform) => (
          <li key={platform.id}>
            <Link to={`/platform/${platform.id}`}>
              <div>
                <img src={platform.image} alt={platform.name} width="150px" />
              </div>
              <div>
                <h2>{platform.name}</h2>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default UserPlatforms;
