import { redirect } from "react-router-dom";
import { StyledSend } from "./styles";

export async function action() {
  return redirect("/");
}

export default function Send() {
  return (
    <StyledSend>
      <h1>🤝</h1>
      <h3>
        Tu mensaje ha sido enviado. Me contáctare contigo en la brevedad
        posible.
      </h3>
    </StyledSend>
  );
}
