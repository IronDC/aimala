import styled from "styled-components";

const ButtonText = styled.button`
  font: "Roboto";
  color: whitesmoke;
  font-size: 20px;
  background: #007ab3;
  border:none;
  transition: all ease 2000;
  margin: 0 auto;
  border-radius: 5px;
  display: block;
  line-height: 1;
  max-width: 100px;
  text-align: center;
  padding: 20px 20px;
  &:hover {
    transition: all ease 2000;
    background: #628165;
    color: #fff;
  }
`;

export default ButtonText;