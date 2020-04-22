import React from "react";
import { Link } from "react-router-dom";

const PlatformList = ({ platform }) => {
  return (
    <>
      <Link to={`/platform/${platform?.id}`}>
        <div>
          <img src={platform?.image.url} alt={platform?.name} width="150px" />
        </div>
        <div>
          <h2>{platform?.name}</h2>
        </div>
      </Link>
    </>
  );
};

export default PlatformList;
