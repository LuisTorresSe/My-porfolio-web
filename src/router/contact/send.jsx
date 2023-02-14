import { redirect } from "react-router-dom";
import { StyledSend } from "./styles";

import { Form } from "react-router-dom";

export async function action() {
  return redirect("/");
}

export default function Send() {
  return (
    <StyledSend>
      <h1>🤝</h1>
      <h3>You sent your message. I will answer you as soon as possible</h3>
    </StyledSend>
  );
}
