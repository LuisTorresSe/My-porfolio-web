import { LinkNav } from "./linkNav";
import { StyledNav } from "./styles";
import { list } from "../../utils/bd.js";
import Button from "../button/button";

export default function Nav({ hamburgerMenu }) {
  return (
    <StyledNav hamburgerMenu>
      <nav className="container-links">
        {list.map((e) => {
          return e.address === "/" ? null : (
            <LinkNav
              address={e.address}
              text={e.text}
              icon={e.icon}
              key={e.address}
              hamburgerMenu={hamburgerMenu}
            />
          );
        })}
      </nav>
      <div className="footer">
        <Button address="/" icon="🏡" name="Inicio" />
      </div>
    </StyledNav>
  );
}
