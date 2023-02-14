import { StyledLinkNav } from "./styles";

export const LinkNav = ({ address, text, icon, hamburgerMenu }) => {
  return (
    <StyledLinkNav
      menu={hamburgerMenu}
      to={address}
      className={`container-${text}`}
    >
      <div className={`container-bg ${text} `}>
        <div className="container-info">
          <p>{text}</p>
          <span>{icon}</span>
        </div>
      </div>
    </StyledLinkNav>
  );
};
