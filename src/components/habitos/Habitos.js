import Menu from "./../menu/Menu";
import StyledHabitos from "./StyledHabitos";
import { AuthContext } from "../../contexts/auth";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

export default function Habitos({}) {



  const navigate = useNavigate()
  const {user} = useContext(AuthContext);
  if (user.token === undefined) {
    navigate("/");
  }






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
            ></input>
            <div className="dias">
              <div data-identifier="week-day-btn">D</div>
              <div data-identifier="week-day-btn">S</div>
              <div data-identifier="week-day-btn">T</div>
              <div data-identifier="week-day-btn">Q</div>
              <div data-identifier="week-day-btn">Q</div>
              <div data-identifier="week-day-btn">S</div>
              <div data-identifier="week-day-btn">S</div>
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
