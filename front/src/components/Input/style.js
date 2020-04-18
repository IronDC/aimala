import styled from "styled-components";

const InputContainer = styled.div`
  width: 100%;
  > input {
    border: 1px solid blue;
    height: 30px;
    width: 50%;
    margin: 20px auto;
    display: flex;
    align-items: center;
  }
  > label {
    width: 50%;
    margin: 20px auto;
    display: flex;
    align-items: center;
  }
`;

export default InputContainer;
