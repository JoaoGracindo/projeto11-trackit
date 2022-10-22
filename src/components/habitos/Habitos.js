import Menu from "./../menu/Menu";
import StyledHabitos from "./StyledHabitos";

export default function Habitos({}) {
  return (
    <>
      <Menu />
      <StyledHabitos>
        <div className="header">
          <span>Meus Habitos</span>
          <div>+</div>
        </div>

        <div className="meusHabitos">
          <div className="novoHabito">
            <input placeholder="nome do hábito"></input>
            <div className="dias">
              <div>D</div>
              <div>S</div>
              <div>T</div>
              <div>Q</div>
              <div>Q</div>
              <div>S</div>
              <div>S</div>
            </div>
            <div className="buttonContainer">
              <button className="cancelar">Cancelar</button>
              <button className="salvar">Salvar</button>
            </div>
          </div>
        </div>
      </StyledHabitos>
    </>
  );
}


