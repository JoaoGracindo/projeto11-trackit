import { useState, useContext, useEffect } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import img1 from "../../assets/img1.svg";
import StyledLogin from "./StyledLogin";
import Carregando from "../carregando/Carregando";
import {AuthContext} from "./../../contexts/auth"

export default function Login({}) {


  const [desabilitado, setDesabilitado] = useState(false);
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
const {setUser, user, setIsLogged, isLogged} = useContext(AuthContext);



  useEffect(() => {
    if(user.token !== undefined){
    navigate('/habitos')
    }
  },[isLogged])




  function fazerLogin(e) {
    e.preventDefault();
    setDesabilitado(true);
    axios
      .post(
        "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login",
        form
      )
      .then((e) => {
        setUser({...e.data})
        setIsLogged(true)
       

      })
      .catch((e) => {
        setDesabilitado(false);
        alert(e.message);
      });
  }
  function handleForm(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }
  return (
    <StyledLogin desabilitado={desabilitado}>
      <img src={`${img1}`} />
      <form onSubmit={fazerLogin}>
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
          placeholder="senha"
          onChange={handleForm}
          type="password"
          required
          name="password"
        />
        <button
          data-identifier="login-btn"
          disabled={desabilitado}
          type="submit"
        >
          {desabilitado ? <Carregando /> : "Entrar"}
        </button>
      </form>
      <Link data-identifier="sign-up-action" to="/cadastro">
        Não tem uma conta? Cadastre-se!
      </Link>
    </StyledLogin>
  );
}
