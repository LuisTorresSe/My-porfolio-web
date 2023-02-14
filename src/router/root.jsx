import styled from "styled-components";

import Home from "../components/home/home";
export default function Root() {
  return (
    <StyledRoot>
      <Home />
    </StyledRoot>
  );
}

const StyledRoot = styled.div`
  margin: 0 auto;
`;
