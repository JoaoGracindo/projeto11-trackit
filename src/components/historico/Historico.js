import Menu from "./../menu/Menu";
import styled from "styled-components";

export default function Historico({}) {
  return (
    <>
      <Menu />
      <StyledHistorico>
        <header>Histórico</header>
        <h2>Em breve você poderá ver o histórico dos seus hábitos aqui!</h2>
      </StyledHistorico>
    </>
  );
}

const StyledHistorico = styled.div`
  background-color: #e5e5e5;
  position: fixed;
  top: 70px;
  bottom: 70px;
  width: 100%;
  z-index: -1;

  h2 {
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    margin-left:5%;
    margin-right:5%;

    color: #666666;
  }

  header {
    font-weight: 400;
    font-size: 22.976px;
    line-height: 29px;
    color: #126ba5;
    margin-top:28px;
    margin-bottom:17px;
    margin-left:5%;
    margin-right:5%;
  }
`;
