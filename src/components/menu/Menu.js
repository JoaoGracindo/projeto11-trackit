import logo from "./../../assets/logo.svg";
import StyledMenu from "./StyledMenu";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "./../../contexts/auth";
import { Navigate, useNavigate } from "react-router-dom";
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import axios from "axios";
import styled from "styled-components";

export default function Menu({}) {
  const navigate = useNavigate();
  const { user, isLogged } = useContext(AuthContext);
  const [porcentagem, setPorcentagem] = useState(0);
  const config = {
    headers: {
      Authorization: `Bearer ${user.token}`,
    },
  };

  useEffect(() => {
    axios
      .get(
        "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today",
        config
      )
      .then((response) => {
        let contador = 0;
        for (let i = 0; i < response.data.length; i++) {
          if (response.data.done) {
            contador++;
          }
        }
        setPorcentagem(contador / response.data.length);
        console.log(contador / response.data.length);
      });
  }, []);

  if (!isLogged) {
    alert("Voce não esta logado");
    return <Navigate to="/" />;
  }

  return (
    <StyledMenu>
      <div className="header">
        <img className="logo" src={`${logo}`} />
        <img data-identifier="avatar" className="userImg" src={user.image} />
      </div>
      <div className="footer">
        <span
          data-identifier="habit-page-action"
          onClick={() => navigate("/habitos")}
        >
          Hábitos
        </span>

          <div onClick={() => navigate("/hoje")}>hoje</div>

        <span
          data-identifier="historic-page-action"
          onClick={() => navigate("/historico")}
        >
          Histórico
        </span>
      </div>
    </StyledMenu>
  );
}
