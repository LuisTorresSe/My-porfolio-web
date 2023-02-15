import { LinkNav } from "./linkNav";
import { StyledNav } from "./styles";
import { list } from "../../utils/bd.js";
import Button from "../button/button";
import { Icon } from "@iconify/react";

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
        <div className="container-networks">
          <span>
            <a href="https://github.com/LuisTorresSe" target="_blank">
              <Icon icon="radix-icons:github-logo" />
            </a>
          </span>
          <span>
            <a href="https://www.linkedin.com/in/luistorresse/" target="_blank">
              <Icon icon="mdi:linkedin" />
            </a>
          </span>
        </div>
      </div>
    </StyledNav>
  );
}
