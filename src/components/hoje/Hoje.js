import StyledHoje from "./StyledHoje";
import Menu from "../menu/Menu";

export default function Hoje({}) {
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
            <ion-icon data-identifier="done-habit-btn" className="checkbox" name="checkbox"></ion-icon>
          </div>
        </div>
      </StyledHoje>
    </>
  );
}

