import StyledHoje from "./StyledHoje";
import Menu from "../menu/Menu";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/auth";
import axios from "axios";

export default function Hoje({}) {
  const {user} = useContext(AuthContext)
  const [habitos, setHabitos] = useState([])
  const config = {
    headers: {
      authorization: `Bearer ${user.token}`,
    },
  };
  useEffect(() => {
    axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today",
    config)
    .then((e) => {
      setHabitos([...e.data])
    })
  })


  function handleCheck(id){
    axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`)
  }

  function handleUncheck(id){
    axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`)
  }
  return (
    <>
      <Menu />
      <StyledHoje>
        <div className="header">
          <h1>Segunda, 17/06</h1>
          <h2>Nenhum hábito concluido ainda</h2>
        </div>
        <div>
          <div data-identifier="today-infos" className="habito">
            <h1>Ler 1 capítulo de livro</h1>
            <div>
              <h4>Sequência atual: 3 dias</h4>
              <h4> Seu recorde: 5 dias</h4>
            </div>
            <ion-icon 
            data-identifier="done-habit-btn" 
            className="checkbox" 
            name="checkbox"
            onClick={(habito) => handleCheck(habito.id)}></ion-icon>
          </div>
        </div>
      </StyledHoje>
    </>
  );
}

