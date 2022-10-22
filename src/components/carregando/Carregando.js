import styled from "styled-components";
export default function Carregando() {
  return (
    <Estilo>
      <div></div>
      <div></div>
      <div></div>
    </Estilo>
  );
}

const Estilo = styled.div`
  display: flex;
  justify-content: center;
  align-items:center;

  div:nth-child(2) {
    height: 9px;
    width: 9px;
  }

  div {
    height: 13px;
    width: 13px;
    border-radius: 50%;
    background-color: #ffffff;
    margin: 0 8px;
  }
`;
