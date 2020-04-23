import styled from "styled-components";
import {Link} from "react-router-dom";

const LinkText = styled(Link)`
  color: whitesmoke;
  text-decoration: none;
  font-family: 'Roboto';
  &:hover {
    color: blue;
  }
`;

export default LinkText;