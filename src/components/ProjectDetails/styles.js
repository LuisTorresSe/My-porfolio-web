import styled from "styled-components";

export const StyledDetails = styled.div`
  p {
    margin: 0;
  }
  .container {
    width: 100%;
    display: flex;
    gap: 1em;
    justify-content: center;
    align-items: center;
    height: auto;
  }

  .container--right,
  .container--left {
    display: flex;
  }

  .container--right {
    flex-direction: column;
    justify-content: center;
  }
  .container--left {
    justify-content: center;
    img {
      width: 400px;
      height: 80%;
      border-radius: 2em;
      border: solid #234b88 6px;
    }
  }

  h1 {
    font-size: 2.5em;
  }

  .container--tools {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
  .tools {
    display: flex;
    gap: 1em;
  }

  .tool,
  .link {
    display: grid;
    place-items: center;
    height: 40px;
    text-align: center;
    border-radius: 0.3em;
    padding: 6px;
  }

  .ReactJs {
    background-color: #61dafb;
    color: black;
  }

  .Styled {
    background-color: rgb(46, 68, 78);
  }

  .React,
  .router {
    background-color: rgb(244 66 80);
  }
  .Typescript {
    background-color: #3178c6;
  }

  .Csa,
  .modules {
    background-color: #234b88;
  }

  .links {
    display: flex;
    gap: 1em;

    height: 30px;

    position: relative;
  }

  .link {
    position: relative;
    background-color: #1822eb;
    color: white;
  }

  .link:hover {
    transition: all 0.9s;
    background-color: #161a5f;
  }

  @media (max-width: 870px) {
    .container {
      flex-direction: column;
    }

    .container--left {
      justify-content: center;
      img {
        width: 300px;
        height: 300px;
      }
    }

    .container--right {
      height: auto;
      h1 {
        text-align: center;
      }
    }
  }
  @media (max-width: 320px) {
    .container--left {
      justify-content: center;
      img {
        width: 280px;
        height: 280px;
      }
    }
  } ;
`;
