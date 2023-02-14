import styled from "styled-components";
import { Form } from "react-router-dom";

export const StyledContact = styled.div`
  & {
    position: relative;
    height: auto;
    width: 80%;
    display: flex;
    flex-direction: column;
    place-content: center;
    place-items: center;
  }

  h2 {
    font-size: 3rem;
  }

  .footer {
    display: flex;
    gap: 1em;
  }

  & {
    .page-send {
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      background-color: hsl(226, 43%, 10%, 0.6);
      top: 0;
      bottom: 0;
      width: 100vw;
      text-align: center;
      z-index: 0;
    }
    .bg {
      display: flex;
      flex-direction: column;
      background-color: #646cff;
      border-radius: 1em;
      border: 1px solid white;
      .icon-close {
        font-size: 3em;
        cursor: pointer;
        align-self: flex-end;
        color: white;
      }
      .icon-close {
        color: white;
      }
    }
  }
`;

export const StyledForm = styled(Form)`
  div {
    display: flex;
    flex-direction: column;
    margin-bottom: 1em;
  }

  input,
  textarea {
    border-radius: 0.5em;
    border: none;
    padding: 3px 10px;
  }

  textarea {
    padding: 10px;
  }

  input {
    height: 30px;
  }

  input:focus,
  textarea:focus {
    outline: none;
    box-shadow: 0px 0px 10px 3px #234b88;
  }

  div:last-child input {
    background-color: #234b70;
    color: white;
    height: 50px;
  }

  div:last-child input:hover {
    cursor: pointer;
    background-color: #234b88;
    color: white;
  }
`;

export const StyledSend = styled.div`
  width: 50%;
  margin: 0px auto;
  h1 {
    font-size: 3em;
  }
  h3 {
    font-size: 1em;
    height: auto;
    white-space: pre-wrap;
    line-height: 1em;
  }
`;
