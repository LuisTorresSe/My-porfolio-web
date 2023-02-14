import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./router/root";
import ErrorPage from "./router/errorPage";
import "./index.css";
import AboutMe from "./router/aboutme/aboutme";
import Nav from "./components/nav/nav";
import Projects from "./router/projects/projects";
import Contact from "./router/contact/contact";
import ProjectDetails from "./components/ProjectDetails/ProjectDetails";
import Send from "./router/contact/send";
import { action as actionContact } from "./router/contact/contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/nav",
    element: <Nav />,
  },
  {
    path: "/nav/aboutme",
    element: <AboutMe />,
  },
  {
    path: "/nav/projects",
    element: <Projects />,
    children: [
      {
        path: "/nav/projects/:idProject",
        element: <ProjectDetails />,
      },
    ],
  },
  {
    path: "nav/Contact",
    element: <Contact />,
    action: actionContact,
    children: [
      {
        path: "nav/contact/send",
        element: <Send />,
      },
    ],
  },
  {},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
