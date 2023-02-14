import React from "react";
import whiteTower from "../../assets/img/whiteTower.png";
import NavigationArrow from "../link/NavigationArrow";
import profile from "../../assets/img/profile3.png";
import { StyledHome } from "./styles";

export default function Home() {
  return (
    <StyledHome>
      <div className="img-logo">
        <img src={whiteTower} alt="tower" />
      </div>
      <div>
        <div className="welcome">
          <h1>
            Bienvenido, me llamo <span>Luis </span>{" "}
            <span>Desarrollador web</span>
          </h1>
        </div>
        <div className="profile">
          <img src={profile} alt="imgProfile" />
        </div>
      </div>
      <div className="container-navigator">
        <NavigationArrow />
      </div>
    </StyledHome>
  );
}
