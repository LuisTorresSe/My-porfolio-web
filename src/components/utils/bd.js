import imgMovie from "../../assets/img/appMovie.png";
import webPorfolio from "../../assets/img/webPorfolio.png";
import appTask from "../../assets/img/appTask.png";

export const detailsProjects = [
  {
    id: 1,
    name: "Web portfolio",
    tools: ["ReactJs", "Styled components", "React router"],
    description: "Este es mi porfolio Web",
    img: webPorfolio,
    repository: "url",
    webSite: "url",
  },
  {
    id: 2,
    name: "Movie app",
    tools: ["ReactJs", "Css modules", "React router"],
    description: "Una aplicación que muestra todas las peliculas en tensión",
    img: imgMovie,
    repository: "https://github.com/LuisTorresSe/app-movies",
    webSite: "https://luis-movies.netlify.app/",
  },
  {
    id: 3,
    name: "Task app ",
    tools: ["ReactJs", "Css modules", "Typescript"],
    description: "Esta es una aplicación que nos ayuda a organizarnos",
    img: appTask,
    repository: "https://github.com/LuisTorresSe/task-app",
    webSite: "https://task-app-torres.netlify.app/",
  },
];

export const list = [
  {
    text: "Inicio",
    address: "/",
    icon: "🏡",
  },
  {
    text: "Sobre mi",
    address: "/nav/aboutme",
    icon: "😎",
  },
  {
    text: "Proyectos",
    address: "/nav/projects",
    icon: "💼",
  },
  {
    text: "Contacto",
    address: "/nav/contact",
    icon: "🤝",
  },
];
