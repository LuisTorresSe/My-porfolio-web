import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { StyledProject } from "./styles";
import { detailsProjects } from "../../components/utils/bd";
import Button from "../../components/button/button";

export default function Projects() {
  const [selected, setSelected] = useState(0);

  const handleSelected = (id) => {
    setSelected(parseInt(id));
  };

  return (
    <StyledProject>
      <h2>PROYECTOS</h2>

      <div className="container-projects">
        <div className="menu">
          {detailsProjects.map((e, key) => {
            return (
              <Link
                to={`${key + 1}`}
                key={key + 1}
                className={`menu__item ${
                  key + 1 === selected ? "selected" : ""
                }`}
                id={key + 1}
                onClick={(e) => {
                  handleSelected(e.target.id);
                }}
              >
                {e.name}
              </Link>
            );
          })}
        </div>

        {selected === 0 ? <div className={`wait`}>💼</div> : <></>}

        <div className="project-details">
          <Outlet />
        </div>
        <div className="footer">
          <Button address="/nav/aboutme" icon="😎" name="Sobre mi" />
          <Button address="/nav" icon="📜" name="Menú" />
          <Button address="/nav/contact" icon="🤝" name="Contacto" />
        </div>
      </div>
    </StyledProject>
  );
}
