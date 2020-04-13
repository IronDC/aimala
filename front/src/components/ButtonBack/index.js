import React, { useContext } from "react";
import { useHistory } from "react-router-dom";

export const ButtonBack = () => {
  let history = useHistory();
  return (
    <>
      <button onClick={() => history.goBack()}>Back</button>
    </>
  );
};
