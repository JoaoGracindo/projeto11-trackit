import StyledHoje from "./StyledHoje";
import Menu from "../menu/Menu";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/auth";
import axios from "axios";
import * as dayjs from 'dayjs'
import 'dayjs/locale/pt-br'
import 'dayjs/locale/pt'
import 'dayjs/locale/br'


export default function Hoje({}) {
  const { user } = useContext(AuthContext);
  const [atualiza, setAtualiza] = useState(false)
  const [habitos, setHabitos] = useState([]);
  const weekday = dayjs().locale("pt-br").format("dddd, MM/DD");
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
      .then((e) => {
        setHabitos([...e.data]);
      });
  }, [atualiza]);

  function handleCheck(id, done) {
    console.log(done, id)
    if (done) {
      axios
        .post(
          `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`,
          {},
          config
        ).then(() => setAtualiza(!atualiza))
        
    } else {
      axios
        .post(
          `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`,
          {},
          config
        ).then(() => setAtualiza(!atualiza))
        
    }
  }

  return (
    <>
      <Menu />
      <StyledHoje>
        <div className="header">
          <h1>{dayjs().locale('pt').format("dddd, DD/MM")}</h1>
          
          <h2>Nenhum hábito concluido ainda</h2>
        </div>
        <div>
          {habitos.map((habito, index) => (
            <Habito key={index} {...habito} handleCheck={handleCheck} />
          ))}
        </div>
      </StyledHoje>
    </>
  );
}

function Habito({
  id,
  name,
  done,
  currentSequence,
  highestSequence,
  handleCheck,
}) {
  return (
    <div data-identifier="today-infos" className="habito">
      <h1>{name}</h1>
      <div>
        <h4>Sequência atual: {currentSequence} dias</h4>
        <h4> Seu recorde: {highestSequence} dias</h4>
      </div>
      <ion-icon
        data-identifier="done-habit-btn"
        name="checkbox"
        onClick={() => handleCheck(id, done)}
      ></ion-icon>
    </div>
  );
}
