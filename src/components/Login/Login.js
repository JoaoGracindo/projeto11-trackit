import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import img1 from "../../assets/img1.svg";
import StyledLogin from "./StyledLogin";

export default function Login({}) {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  function fazerLogin() {
    axios.post(
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login",
      form
    )
    .then(
        (e) => console.log("sucess",e.token)
    );
  }
  function handleForm(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }
  return (
    <StyledLogin>
      <img src={`${img1}`} />
      <form onSubmit={fazerLogin}>
        <input
          placeholder="email"
          onChange={handleForm}
          type="email"
          required
          name="email"
        />
        <input
          placeholder="senha"
          onChange={handleForm}
          type="password"
          required
          name="password"
        />
        <button type="submit">Entrar</button>
      </form>
      <Link to="/cadastro">Não tem uma conta? Cadastre-se!</Link>
    </StyledLogin>
  );
}
