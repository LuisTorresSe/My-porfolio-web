import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";

export const StyledLink = styled(LinkRouter)`
  & {
    display: flex;
    background-color: white;
  }
  .link {
    width: 30px;
  }
`;

export const StyledArrow = styled(LinkRouter)`
  & {
    rotate: 270deg;
  }

  .navigator {
    height: 200px;
    width: 100px;
    border-radius: 3em;
    position: relative;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  .navigator::before {
    content: "";
    background-image: conic-gradient(
      hsl(246, 80%, 60%) 30deg,
      transparent 120deg
    );
    width: 200%;
    height: 100%;
    position: absolute;

    animation: rotate 2.5s linear infinite;
  }

  .navigator::after {
    content: "";
    width: 90px;
    height: 190px;
    background: hsl(226, 43%, 10%);
    position: absolute;
    border-radius: 2.5em;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ff0052;
    font-size: larger;
    letter-spacing: 5px;
    box-shadow: inset 20px 20px 20px hsl(226, 43%, 10%);
  }

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    16% {
      background-image: conic-gradient(
        hsl(15, 100%, 70%) 20deg,
        transparent 120deg
      );
    }

    32% {
      background-image: conic-gradient(
        hsl(195, 74%, 62%) 20deg,
        transparent 120deg
      );
    }

    48% {
      background-image: conic-gradient(
        hsl(264, 64%, 52%) 20deg,
        transparent 120deg
      );
    }

    62% {
      background-image: conic-gradient(
        hsl(348, 100%, 68%) 20deg,
        transparent 120deg
      );
    }
    78% {
      background-image: conic-gradient(
        hsl(145, 58%, 55%) 20deg,
        transparent 120deg
      );
    }
    94% {
      background-image: conic-gradient(
        hsl(43, 84%, 65%) 20deg,
        transparent 120deg
      );
    }
    100% {
      transform: rotate(-360deg);
    }
  }

  .arrowNavigator {
    color: white;
    font-size: 5rem;
    z-index: 3;
  }

  .container-navigator {
    position: absolute;
    bottom: 1em;
  }

  @media (max-width: 560px) {
    .navigator {
      height: 100px;
      width: 60px;
      border-radius: 3em;
      position: relative;
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .arrowNavigator {
      color: white;
      font-size: 2rem;
      z-index: 3;
    }
    .navigator::before {
      content: "";
      background-image: conic-gradient(
        hsl(246, 80%, 60%) 30deg,
        transparent 120deg
      );
      width: 300%;
      height: 200%;
      position: absolute;

      animation: rotate 2.5s linear infinite;
    }

    .navigator::after {
      content: "";
      width: 50px;
      height: 90px;
      background: hsl(226, 43%, 10%);
      position: absolute;
      border-radius: 2.5em;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #ff0052;
      font-size: larger;
      letter-spacing: 5px;
      box-shadow: inset 20px 20px 20px hsl(226, 43%, 10%);
    }
  } ;
`;
