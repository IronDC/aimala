import styled from "styled-components";

const ButtonText = styled.button`
  font: "Roboto";
  color: whitesmoke;
  font-size: 20px;
  background: #007ab3;
  border:none;
  transition: all ease 2000;
  /* padding-right: 50px;
  padding-left: 50px; */
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

// const Btn = styled.div`
//   padding-right: 50px;
//   padding-left: 50px;
//   margin: 0 auto;
//   border-radius: 5px;
//   display: block;
//   line-height: 1;
//   max-width: 100px;
//   text-align: center;
//   padding: 10px 20px;
//   transition: all ease 2000;
//   &:hover {
//     transition: all ease 2000;
//     background: #628165;
//     color: #fff;
//   }