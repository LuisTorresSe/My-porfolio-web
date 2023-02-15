import { Outlet, redirect, Link } from "react-router-dom";
import { StyledContact, StyledForm } from "./styles";
import { useState } from "react";
import Button from "../../components/button/button";
import { Icon } from "@iconify/react";
import { postInbox } from "../../service/serviceInbox";

export async function action({ request, params }) {
  return redirect(`nav/contact/send`);
}

export default function Contact() {
  const [visible, setVisible] = useState(false);
  const [inputValues, setInputValues] = useState({
    name: "",
    telf: "",
    email: "",
    description: "",
  });

  console.log(inputValues);
  const handleSubmit = (e) => {
    handleVisible();

    try {
      const response = postInbox(inputValues);
      console.log(response);
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleVisible = () => {
    setVisible(!visible);
  };

  const handleChangeInput = (e) => {
    setInputValues({ ...inputValues, [e.target.name]: e.target.value });
  };

  return (
    <StyledContact>
      <h2>CONTACTO</h2>

      <StyledForm onSubmit={handleSubmit} method="post">
        <div>
          <label htmlFor="name">Nombre</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            onChange={handleChangeInput}
          />
        </div>

        <div>
          <label htmlFor="telf">Celular</label>
          <input
            type="tel"
            id="telf"
            name="telf"
            onChange={handleChangeInput}
          />
        </div>

        <div>
          <label htmlFor="email">Correo</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            onChange={handleChangeInput}
          />
        </div>

        <div>
          <label htmlFor="description" required>
            Descripcion
          </label>
          <textarea
            name="description"
            id="description"
            cols="30"
            rows="10"
            onChange={handleChangeInput}
          ></textarea>
        </div>

        <div>
          <input type="submit" value="Enviar" />
        </div>
      </StyledForm>

      <div className="footer">
        <Button address="/nav/projects" icon="💼" name="Porfolio" />
        <Button address="/nav" icon="📜" name="Menu" />
      </div>

      {!visible ? (
        <></>
      ) : (
        <div className="page-send">
          <div className="bg">
            <Link to="/" className="icon-close">
              <Icon icon="ic:baseline-close" onClick={handleVisible} />
            </Link>
            <Outlet />
          </div>
        </div>
      )}
    </StyledContact>
  );
}
