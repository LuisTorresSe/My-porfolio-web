import styled from "styled-components";

export const StyledProject = styled.div`
  & {
    height: auto;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h2 {
    font-size: 3rem;
  }

  .container-projects {
    width: 80%;
    display: flex;
    gap: 3em;
    align-items: center;
    flex-direction: column;
  }

  .menu {
    display: flex;
    gap: 1em;
  }

  .menu__item {
    background-color: hsl(235, 46%, 20%);
    border-radius: 0.3em;
    padding: 0.5em;
    color: white;
  }

  .menu__item:hover {
    background-color: hsl(246, 80%, 60%);
    transition: all 0.5s;
  }

  .wait {
    margin-top: 2em;
    font-size: 5em;
    height: 300px;
  }

  .selected {
    background-color: hsl(246, 80%, 60%);
  }

  .project-details {
    width: auto;
    height: auto;
  }

  .footer {
    display: flex;
    justify-content: center;
    gap: 1em;
    width: 100%;
    span {
      font-size: 0.9em;
    }
  }
`;
