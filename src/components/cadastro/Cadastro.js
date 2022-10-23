import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import img1 from "./../../assets/img1.svg";
import StyledCadastro from "./StyledCadastro";
import { useNavigate } from "react-router-dom";
import Carregando from "../carregando/Carregando";

export default function Cadastro({}) {
  const [desabilitado, setDesabilitado] = useState(false);
  const [form, setForm] = useState({
    email: "",
    name: "",
    image: "",
    password: "",
  });

  const navigate = useNavigate();
  function fazerCadastro(e) {
    e.preventDefault();
    setDesabilitado(true);
    axios
      .post(
        "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up",
        form
      )
      .then(() => {

        navigate("/")
      })
      .catch((e) => {
        setDesabilitado(false);
        alert(e.message)
        console.log(e)
      });
  }
  function handleForm(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

    console.log(form)
  }
  return (
    <StyledCadastro desabilitado={desabilitado}>
      <img src={`${img1}`} />
      <form onSubmit={fazerCadastro}>
        <input
          data-identifier="input-email"
          disabled={desabilitado}
          className={desabilitado ? "desabilitado" : ""}
          placeholder="email"
          onChange={handleForm}
          type="email"
          required
          name="email"
        />
        <input
          data-identifier="input-password"
          disabled={desabilitado}
          className={desabilitado ? "desabilitado" : ""}
          placeholder="Senha"
          onChange={handleForm}
          type="password"
          required
          name="password"
        />
        <input
          data-identifier="input-name"
          disabled={desabilitado}
          className={desabilitado ? "desabilitado" : ""}
          placeholder="Nome"
          onChange={handleForm}
          type="name"
          required
          name="name"
        />
        <input
          data-identifier="input-photo"
          disabled={desabilitado}
          className={desabilitado ? "desabilitado" : ""}
          placeholder="Foto"
          onChange={handleForm}
          required
          name="image"
        />
        <button disabled={desabilitado} type="submit">
          {desabilitado ? <Carregando /> : "Cadastrar"}
        </button>
      </form>
      <Link data-identifier="back-to-login-action" to="/">
        Já tem uma conta? Faça login!
      </Link>
    </StyledCadastro>
  );
}
