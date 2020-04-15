import React from "react";
import { Link } from "react-router-dom";

const PlatformList = ({ platform }) => {
  return (
    <>
      <li key={platform?.id}>
        <Link to={`/platform/${platform?.id}`}>
          <div>
            <img src={platform?.image} alt={platform?.name} width="150px" />
          </div>
          <div>
            <h2>{platform?.name}</h2>
          </div>
        </Link>
      </li>
    </>
  );
};

export default PlatformList;
