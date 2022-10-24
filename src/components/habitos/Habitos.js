import Menu from "./../menu/Menu";
import StyledHabitos from "./StyledHabitos";
import { AuthContext } from "../../contexts/auth";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Habitos({}) {
  const [body, setBody] = useState({ name: "", days: [] });
  const dias = ["D", "S", "T", "Q", "Q", "S", "S"];

  const { user } = useContext(AuthContext);
  function enviarHabito() {
    axios.post(
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",
      body
    );
  }

  function handleInput(e) {
    setBody({ ...body, name: e.target.value });
  }

  function handleButton(key) {
    console.log(key)
    if ((body.days.includes(key))) {
      setBody({ ...body, days: body.days.filter((day) => day !== key) });
    } else {
      setBody({ ...body, days: [...body.days, key] });
    }
  }
  console.log(body);

  return (
    <>
      <Menu />
      <StyledHabitos>
        <div className="header">
          <span>Meus Habitos</span>
          <div data-identifier="create-habit-btn">+</div>
        </div>

        <div className="meusHabitos">
          <div className="novoHabito">
            <input
              data-identifier="input-habit-name"
              placeholder="nome do hábito"
              onChange={handleInput}
            ></input>
            <div className="dias">
              {dias.map((d, key) => (
                <div
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
              >
                Cancelar
              </button>
              <button
                data-identifier="save-habit-create-btn"
                className="salvar"
              >
                Salvar
              </button>
            </div>
          </div>

          <div data-identifier="no-habit-message" className="aviso">
            Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
            começar a trackear!
          </div>
        </div>
      </StyledHabitos>
    </>
  );
}
