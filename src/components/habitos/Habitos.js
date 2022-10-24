import Menu from "./../menu/Menu";
import StyledHabitos from "./StyledHabitos";
import Carregando from "../carregando/Carregando";
import { AuthContext } from "../../contexts/auth";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";


const dias = ["D", "S", "T", "Q", "Q", "S", "S"];

export default function Habitos({}) {
  const [body, setBody] = useState({ name: "", days: [] });
  const [habitos, setHabitos] = useState([]);
  const [atualiza, setAtualiza] = useState(true)
  const [desabilitado, setDesabilitado] = useState(false);
  const [creating, setCreating] = useState(false);
  const { user } = useContext(AuthContext);
  const config = {
    headers: {
      authorization: `Bearer ${user.token}`,
    },
  };
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(
        "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",
        config
      )
      .then((response) => {
        console.log(response);
        setHabitos([...response.data]);
      });
  }, [atualiza]);

  function deletarHabito(id) {
   
      axios.delete(
        `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`,
        config
      )
      .then(() => setAtualiza(!atualiza));
    }
   


  function enviarHabito() {
    setDesabilitado(true);
    axios
      .post(
        "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",
        body,
        config
      )
      .catch((e) => {
        console.log(e);
      })
      .then(() => {
        setCreating(false);
      setDesabilitado(false)});
  }

  function handleInput(e) {
    setBody({ ...body, name: e.target.value });
  }

  function handleButton(key) {
    console.log(key);
    if (body.days.includes(key)) {
      setBody({ ...body, days: body.days.filter((day) => day !== key) });
    } else {
      setBody({ ...body, days: [...body.days, key] });
    }
  }

  return (
    <>
      <Menu />
      <StyledHabitos>
        <div className="header">
          <span>Meus Habitos</span>
          <div
            data-identifier="create-habit-btn"
            onClick={() => setCreating(true)}
          >
            +
          </div>
        </div>

        <div className="meusHabitos">
          <div className={creating ? "novoHabito" : "hidden"}>
            <input
              data-identifier="input-habit-name"
              placeholder="nome do hábito"
              onChange={handleInput}
              disabled={desabilitado}
              className={desabilitado ? "desabilitado" : ""}
            ></input>
            <div className="dias">
              {dias.map((d, key) => (
                <div
                  className={body.days.includes(key) ? "selecionado" : ""}
                  onClick={() => handleButton(key)}
                  data-identifier="week-day-btn"
                >
                  {d}
                </div>
              ))}
            </div>
            <div className="buttonContainer">
              <button
                data-identifier="cancel-habit-create-btn"
                className="cancelar"
                onClick={() => setCreating(false)}
              >
                Cancelar
              </button>
              <button
                data-identifier="save-habit-create-btn"
                className="salvar"
                onClick={enviarHabito}
                disabled={desabilitado}
              >
                {desabilitado ? <Carregando /> : "Salvar"}
              </button>
            </div>
          </div>
          {habitos.length === 0 ? (
            <div data-identifier="no-habit-message" className="aviso">
              Você não tem nenhum hábito cadastrado ainda. Adicione um hábito
              para começar a trackear!
            </div>
          ) : <div className="habitosContainer"> {habitos.map((habito) => <Habito deletarHabito={deletarHabito} {...habito}/>)}</div>}
            
        </div>
      </StyledHabitos>
    </>
  );
}


function Habito({ days, name, id, deletarHabito }) {
  console.log(days);
  return (
      <div className="habito">
        <span>{name}</span>
        <div>
          {dias.map((dia, key) =>  <div className={days.includes(key) ? "selected" : ""} key={key}>{dia}</div>)}
        </div>

        <ion-icon
          name="trash-outline"
          onClick={() => deletarHabito(id)}
        ></ion-icon>
      </div>
  );
}


