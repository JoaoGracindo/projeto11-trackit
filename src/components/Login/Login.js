import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import img1 from "../../assets/img1.svg";
import StyledLogin from "./StyledLogin";

export default function Login({}) {

  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: ""
  });
  function fazerLogin(e) {
    e.preventDefault();
    axios
      .post(
        "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login",
        form
      )
      .then((e) => {
        console.log("sucess", e.token);
        navigate("/habitos")
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
    <StyledLogin>
      <img src={`${img1}`} />
      <form onSubmit={fazerLogin}>
        <input
          data-identifier="input-email"
          placeholder="email"
          onChange={handleForm}
          type="email"
          required
          name="email"
        />
        <input
          data-identifier="input-password"
          placeholder="senha"
          onChange={handleForm}
          type="password"
          required
          name="password"
        />
        <button data-identifier="login-btn" type="submit">
          Entrar
        </button>
      </form>
      <Link data-identifier="sign-up-action" to="/cadastro">Não tem uma conta? Cadastre-se!</Link>
    </StyledLogin>
  );
}
