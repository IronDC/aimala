import styled from "styled-components";

const InputContainer = styled.div`
  width: 100%;
  > input {
    border: 1px solid lightgray;
    height: 30px;
    width: 50%;
    margin: 20px auto;
    display: flex;
    align-items: center;
    border-radius: 5px;
  }
  > label {
    width: 50%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    font-family: "Roboto";
  }
`;

export default InputContainer;
