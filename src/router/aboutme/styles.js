import styled from "styled-components";

export const StyledAboutme = styled.div`
  & {
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    place-content: center;
    place-items: center;
    padding: 0 3em;
    .container-info {
      display: flex;
      place-content: center;
      place-items: center;
      gap: 2em;
    }
    p {
      width: 60%;
      text-align: left;
    }
    img {
      width: 200px;
      height: 200px;
      border-radius: 50%;
      border: 3px solid white;
    }
  }
  .footer {
    display: flex;
    gap: 1em;
    margin-bottom: 1em;
  }

  .navLinks {
    display: flex;
    width: 100%;
    justify-content: center;
    gap: 3em;
    p {
      margin: 0;
      width: 60px;
      font-weight: 700;
      span {
      }
    }

    .icon {
      font-size: 1.5rem;
    }
  }

  @media (max-width: 600px) {
    & {
      width: 100vw;
      height: auto;
      padding: 0;
      .container-info {
        flex-direction: column-reverse;
      }
    }
  }

  .container-link {
    position: relative;
  }
  .container-nav {
    position: absolute;
    top: 20px;
    height: 0px;
    overflow: hidden;
    transition: all 250ms ease-out;
  }
  .open {
    height: 120px;
  }

  .icon-hamburger {
    cursor: pointer;
  }
`;
