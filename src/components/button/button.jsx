import { StyledButton } from "./styles";

export default function Button({ icon, name, address }) {
  return (
    <StyledButton to={address}>
      <span>{icon}</span>
      <span>{name}</span>
    </StyledButton>
  );
}
