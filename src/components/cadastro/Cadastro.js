import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import img1 from "./../../assets/img1.svg";
import StyledCadastro from "./StyledCadastro";

export default function Cadastro({}) {
  function handleForm() {}
  return (
    <StyledCadastro>
      <img src={`${img1}`} />
      <form>
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
          placeholder="Senha"
          onChange={handleForm}
          type="password"
          required
          name="password"
        />
        <input
          data-identifier="input-name"
          placeholder="Nome"
          onChange={handleForm}
          type="name"
          required
          name="name"
        />
        <input
          data-identifier="input-photo"
          placeholder="Foto"
          onChange={handleForm}
          required
        />
        <button type="submit">Cadastrar</button>
      </form>
      <Link data-identifier="back-to-login-action" to="/cadastro">
        Já tem uma conta? Faça login!
      </Link>
    </StyledCadastro>
  );
}
