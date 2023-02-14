import styled from "styled-components";

export const StyledHome = styled.div`
  & {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    height: 100vh;
    width: 100vw;
    .img-logo {
      position: absolute;
      top: 2em;
      left: 0;
      img {
        width: 90px;
        height: 100px;
      }
    }

    div {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1em;
      .profile {
        img {
          width: 200px;
          height: 200px;
          border: 2px solid white;
          border-radius: 50%;
        }
      }

      .welcome {
        width: 50%;
        span {
          color: hsl(246, 80%, 60%);
        }
        span:last-child {
          display: block;
          font-size: 0.5em;
          color: hsl(195, 74%, 62%);
        }
      }
    }
    .container-navigator {
      position: absolute;
      bottom: 1em;
    }
  }
  @media (max-width: 1250px) {
    .img-logo {
      padding-left: 3em;
    }
  }

  @media (max-width: 560px) {
    & {
      gap: 2em;
      div {
        flex-direction: column-reverse;
      }
    }

    .img-logo {
      align-self: flex-start;
      img {
        width: 70px;
        height: 70px;
      }
    }

    .welcome {
      h1 {
        font-size: 2rem;
      }
    }
  }

  @media (max-width: 320px) {
    & {
      div {
        .profile {
          img {
            width: 100px;
            height: 100px;
          }
        }
      }
    }
    .img-logo {
      img {
        width: 50px;
        height: 55px;
      }
    }
  }
`;
