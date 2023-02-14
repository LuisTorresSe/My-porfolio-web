import profile from "../../assets/img/profile2.png";
import { StyledAboutme } from "../aboutme/styles";
import { useState } from "react";
import Button from "../../components/button/button";

export default function AboutMe() {
  return (
    <StyledAboutme>
      <h1> SOBRE MI</h1>

      <div className="container-info">
        <p>
          Me da gusto tenerte por aqui, soy Luis una persona muy apasionada por
          la programación y estoy con mucho entusiasmo de poder ser parte de tu
          equipo. Me gusta asumir nuevos retos y me considero muy resiliente,
          además que me esfuerzo por aprender cada dia más.
        </p>
        <img src={profile} alt="imgProfile" />
      </div>

      <div className="footer">
        <Button address="/nav" icon="📜" name="Menú" />
        <Button address="/nav/projects" icon="💼" name="Proyectos" />
      </div>
    </StyledAboutme>
  );
}
