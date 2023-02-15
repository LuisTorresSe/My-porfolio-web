import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";

export const StyledNav = styled.div`
  & {
    width: 100%;
    height:100vh;
    display: flex;
    flex-direction: column;
    place-content: center;
    gap: 1em;
  }

  .container-links {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1em;
    height: auto;
    place-items: center;
    place-content: center;
    overflow: hidden;
    a {
      display: block;
      width: 80%;
      cursor: pointer;
    }
  }

  .container-Contacto {
    grid-column: 1/3;
  }
  .footer {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-top: 1em;
  }

  @media (max-width: 560px) {
    &{
      height: auto;
    }



    .container-links {
      margin-top: 1em;
      grid-template-columns: repeat(1, 1fr);
    }
    .container-links > * {
      grid-column: 1/2;
    }
  }
`;

export const StyledLinkNav = styled(LinkRouter)`
  .container-bg {
    display: flex;
    justify-content: center;
    align-items: center;
    height: ${(props) => (props.menu === "true" ? "30px" : "200px")};
    border-radius: 1em;
    color: white;
    width: ${(props) => (props.menu === "true" ? "200px" : "")};
  }

  .Contacto {
    background-color: hsl(195, 74%, 62%);
  }
  .Sobre {
    background-color: hsl(15, 100%, 70%);
  }

  .Inicio {
    background-color: hsl(145, 58%, 55%);
  }

  .Proyectos {
    background-color: hsl(348, 100%, 68%);
  }

  .container-info {
    display: flex;
    align-items: center;
    gap: 1em;
    .nav-icon {
      font-size: 3em;
    }
    p {
      font-size: ${(props) => (props.menu === "true" ? "1em" : "2em")};
      width: 100%;
    }
    span {
      font-size: ${(props) => (props.menu === "true" ? "1em" : "2em")};
    }
  }
`;
