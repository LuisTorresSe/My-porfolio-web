import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledButton = styled(Link)`
  & {
    height: 20px;
    padding: 1em;
    border-radius: 1em;
    background-color: white;
    display: flex;
    place-content: center;
    place-items: center;
  }
`;
