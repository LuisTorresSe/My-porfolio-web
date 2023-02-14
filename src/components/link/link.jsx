import { StyledLink } from "./styles";

export const Link = (props) => {
  const toLink =
    props.to === "/" || props.to === "/nav" ? props.to : `/nav/${props.to}`;

  return (
    <StyledLink to={toLink} className="link" state={props.state}>
      <p>{props.icon} </p>
      <p>{props.state}</p>
      <p className="children">{props.children}</p>
    </StyledLink>
  );
};
