import React from "react";
import InputContainer from "./style";

const Input = ({ setFilter }) => {
  return (
    <InputContainer>
      <input onChange={(e) => setFilter(e.target.value)} />
    </InputContainer>
  );
};

export default Input;
